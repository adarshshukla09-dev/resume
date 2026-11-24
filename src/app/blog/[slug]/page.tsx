import { getAllPosts, getPostBySlug } from "@/db/queries";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx-components";

import remarkGfm from "remark-gfm";
import { remarkCodeMeta } from "@/lib/remark-code-meta";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SITE_URL = DATA.url.replace(/\/$/, "");

function getImageUrl(image?: string | null) {
  if (!image) return undefined;

  return new URL(image, `${SITE_URL}/`).toString();
}

// Generate static parameters from the database
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const imageUrl = getImageUrl(post.image);

  return {
    title: post.title,
    description: post.summary,

    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt.toISOString(),
      modifiedTime: (post.updatedAt ?? post.publishedAt).toISOString(),
      url: `${SITE_URL}/blog/${slug}`,
      ...(imageUrl && {
        images: [{ url: imageUrl }],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      ...(imageUrl && {
        images: [imageUrl],
      }),
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getAllPosts(),
  ]);

  if (!post) {
    notFound();
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);

  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const nextPost =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;

  const imageUrl = getImageUrl(post.image);

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt.toISOString(),
    dateModified: (post.updatedAt ?? post.publishedAt).toISOString(),
    description: post.summary,
    image: imageUrl ?? `${SITE_URL}/blog/${slug}/opengraph-image`,
    url: `${SITE_URL}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: post.author || DATA.name,
    },
    publisher: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />

      {/* Back to blog */}
      <div className="flex items-center justify-start gap-4">
        <Link
          href="/blog"
          className="group mb-6 inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Back to Blog"
        >
          <ChevronLeft className="size-3 transition-transform group-hover:-translate-x-px" />
          Back to Blog
        </Link>
      </div>

      {/* Article header */}
      <div className="flex flex-col gap-4">
        <h1 className="title text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">
          {post.title}
        </h1>

        <p className="text-sm text-muted-foreground">
          {formatDate(post.publishedAt.toISOString())}
        </p>
      </div>

      {/* Divider */}
      <div className="my-6 flex w-full items-center">
        <div
          className="h-px flex-1 bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>

      {/* MDX article content */}
      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkCodeMeta],
            },
          }}
        />
      </article>

      {/* Previous and next posts */}
      <nav className="mt-12 max-w-2xl pt-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="group flex flex-1 flex-col gap-1 rounded-lg border border-border p-4 transition-colors hover:bg-accent/50"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3" />
                Previous
              </span>

              <span className="whitespace-normal break-words text-sm font-medium transition-colors group-hover:text-foreground">
                {previousPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden flex-1 sm:block" />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex flex-1 flex-col gap-1 rounded-lg border border-border p-4 text-right transition-colors hover:bg-accent/50"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next
                <ChevronRight className="size-3" />
              </span>

              <span className="whitespace-normal break-words text-sm font-medium transition-colors group-hover:text-foreground">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden flex-1 sm:block" />
          )}
        </div>
      </nav>
    </section>
  );
}
