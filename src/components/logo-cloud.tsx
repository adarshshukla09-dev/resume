import { ReactLogo } from "@/components/logos/react";
import { NextjsLogo } from "@/components/logos/nextjs";
import { GithubLogo } from "@/components/logos/github";
import { TypescriptLogo } from "@/components/logos/typescript";
import { OpenaiLogo } from "@/components/logos/openai";
import { VercelLogo } from "@/components/logos/vercel";
import { SupabaseLogo } from "@/components/logos/supabase";
import { DockerLogo } from "@/components/logos/docker";
import { TailwindcssLogo } from "@/components/logos/tailwindcss";
import { PostgresqlLogo } from "@/components/logos/postgresql";
import { NodejsLogo } from "@/components/logos/nodejs";
import { PythonLogo } from "@/components/logos/python";
import { CloudflareLogo } from "@/components/logos/cloudflare";
import { JavaLogo } from "@/components/logos/java";
import { NeonLogo } from "@/components/logos/neon";
import { RedisLogo } from "@/components/logos/redis";
import { JavascriptLogo } from "@/components/logos/javascript";
import { MongodbLogo } from "@/components/logos/mongodb";
import { QdrantLogo } from "@/components/logos/qdrant";
import { KubernetesLogo } from "@/components/logos/kubernetes";
import { Neo4jLogo } from "@/components/logos/neo4j";
import { PrismaLogo } from "@/components/logos/prisma";
import { ViteLogo } from "@/components/logos/vite";

import {
  BrainCircuit,
  Workflow,
  Layers3,
  Code2,
  Database,
  Server,
  Cloud,
  Wrench,
  Sparkles,
  Cable,
  Bot,
  Network,
  Layers,
  ShieldCheck,
  TestTube,
  Activity,
  ScanSearch,
  Component,
} from "lucide-react";

import DrizzleLogo from "./logos/drizzle";
import BetterAuthLogo from "./logos/better-auth";
import TrpcLogo from "./logos/trpc";

const iconProps = { className: "h-7 w-7", strokeWidth: 1.8 };

const logos = [
  { name: "React", logo: <ReactLogo title="" className="h-7 w-auto" /> },
  { name: "Next.js", logo: <NextjsLogo title="" className="h-7 w-auto" /> },
  { name: "Angular", logo: <Component {...iconProps} /> },
  {
    name: "TypeScript",
    logo: <TypescriptLogo title="" className="h-7 w-auto" />,
  },
  {
    name: "JavaScript",
    logo: <JavascriptLogo title="" className="h-7 w-auto" />,
  },
  {
    name: "Tailwind CSS",
    logo: <TailwindcssLogo title="" className="h-7 w-auto" />,
  },
  { name: "Vite", logo: <ViteLogo title="" className="h-7 w-auto" /> },
  { name: "Node.js", logo: <NodejsLogo title="" className="h-7 w-auto" /> },
  { name: "Python", logo: <PythonLogo title="" className="h-7 w-auto" /> },
  { name: "Java", logo: <JavaLogo title="" className="h-7 w-auto" /> },
  {
    name: "PostgreSQL",
    logo: <PostgresqlLogo title="" className="h-7 w-auto" />,
  },
  { name: "MongoDB", logo: <MongodbLogo title="" className="h-7 w-auto" /> },
  { name: "Redis", logo: <RedisLogo title="" className="h-7 w-auto" /> },
  { name: "Supabase", logo: <SupabaseLogo title="" className="h-7 w-auto" /> },
  { name: "Neon", logo: <NeonLogo title="" className="h-7 w-auto" /> },
  { name: "Qdrant", logo: <QdrantLogo title="" className="h-7 w-auto" /> },
  { name: "Neo4j", logo: <Neo4jLogo title="" className="h-7 w-auto" /> },
  { name: "Vector Databases", logo: <Database {...iconProps} /> },
  { name: "Drizzle", logo: <DrizzleLogo title="" className="h-7 w-auto" /> },
  { name: "Prisma", logo: <PrismaLogo title="" className="h-7 w-auto" /> },
  { name: "OpenAI", logo: <OpenaiLogo title="" className="h-7 w-auto" /> },
  { name: "Spring AI", logo: <Sparkles {...iconProps} /> },
  { name: "LLM APIs", logo: <Bot {...iconProps} /> },
  { name: "Tool Calling", logo: <Wrench {...iconProps} /> },
  { name: "MCP", logo: <Cable {...iconProps} /> },
  { name: "Embeddings", logo: <Layers3 {...iconProps} /> },
  { name: "Agentic AI", logo: <Workflow {...iconProps} /> },
  { name: "RAG", logo: <BrainCircuit {...iconProps} /> },
  {
    name: "Better Auth",
    logo: <BetterAuthLogo title="" className="h-7 w-auto" />,
  },
  { name: "tRPC", logo: <TrpcLogo title="" className="h-7 w-auto" /> },
  { name: "REST APIs", logo: <Code2 {...iconProps} /> },
  { name: "Docker", logo: <DockerLogo title="" className="h-7 w-auto" /> },
  {
    name: "Kubernetes",
    logo: <KubernetesLogo title="" className="h-7 w-auto" />,
  },
  { name: "AWS", logo: <Cloud {...iconProps} /> },
  {
    name: "Cloudflare",
    logo: <CloudflareLogo title="" className="h-7 w-auto" />,
  },
  { name: "Vercel", logo: <VercelLogo title="" className="h-7 w-auto" /> },
  { name: "GitHub", logo: <GithubLogo title="" className="h-7 w-auto" /> },
];

const midpoint = Math.ceil(logos.length / 2);
const topRowLogos = logos.slice(0, midpoint);
const bottomRowLogos = logos.slice(midpoint);

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: typeof logos;
  direction?: "left" | "right";
}) {
  const animationClass =
    direction === "left"
      ? "animate-[logo-cloud-marquee-left_45s_linear_infinite]"
      : "animate-[logo-cloud-marquee-right_45s_linear_infinite]";

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max items-center gap-12 hover:[animation-play-state:paused] motion-reduce:animate-none ${animationClass}`}
      >
        {[...items, ...items].map(({ name, logo }, i) => (
          <div
            key={`${direction}-${name}-${i}`}
            aria-hidden={i >= items.length}
            className="group flex shrink-0 items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {logo}
            </div>

            <span className="whitespace-nowrap text-sm font-semibold tracking-tight">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoCloud() {
  return (
    <div className="space-y-16 py-16">
      {/* SECTION 1: TECHNOLOGY MARQUEE */}
      <section id="technologies" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Technologies I Work With
          </h2>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            A collection of technologies, frameworks, and tools I use to explore
            ideas and build applications.
          </p>
        </div>

        <div className="space-y-6">
          <MarqueeRow items={topRowLogos} direction="left" />
          <MarqueeRow items={bottomRowLogos} direction="right" />
        </div>

        <style>{`
          @keyframes logo-cloud-marquee-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes logo-cloud-marquee-right {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}</style>
      </section>
    </div>
  );
}
