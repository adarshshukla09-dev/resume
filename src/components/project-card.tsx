/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}
function ProjectVideo({
  src,
  poster,
  alt,
}: {
  src: string;
  poster?: string;
  alt: string;
}) {
  const [videoError, setVideoError] = useState(false);

  if (videoError) {
    return poster ? (
      <ProjectImage src={poster} alt={alt} />
    ) : (
      <div className="w-full aspect-video bg-muted" />
    );
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      onError={() => setVideoError(true)}
      className="block w-full h-auto object-contain"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const validLinks = links?.filter((l) => Boolean(l.href)) ?? [];

  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className,
      )}
    >
      <div className="relative shrink-0 overflow-hidden">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <ProjectVideo src={video} poster={image} alt={title} />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
        </Link>
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>

          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {validLinks.length > 0 && (
          <div className="flex items-center gap-2 mt-4">
            {validLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {link.type === "GitHub" ? (
                  <Github className="size-4" />
                ) : (
                  <ExternalLink className="size-4" />
                )}

                {link.type === "GitHub" ? "GitHub" : "Live Demo"}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
