"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import type { projects } from "@/db/schema";

const BLUR_FADE_DELAY = 0.04;
const INITIAL_PROJECTS = 4;

type Project = typeof projects.$inferSelect;

interface ProjectsSectionProps {
  data: Project[];
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  if (!data.length) return null;

  const hasMoreProjects = data.length > INITIAL_PROJECTS;
  const visibleProjects = showAll ? data : data.slice(0, INITIAL_PROJECTS);

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                My Projects
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I've worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {visibleProjects.map((project, id) => (
            <BlurFade
              key={project.id}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href || ""}
                title={project.title}
                description={project.description}
                dates={
                  project.date
                    ? new Date(`${project.date}T00:00:00`).toLocaleDateString(
                        "en-IN",
                        {
                          month: "short",
                          year: "numeric",
                        },
                      )
                    : ""
                }
                tags={project.technologies}
                image={project.image || undefined}
                video={project.video || undefined}
                links={project.links.map((link) => ({
                  icon: <></>,
                  type: link.name,
                  href: link.url,
                }))}
              />
            </BlurFade>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="relative max-w-[800px] w-full mx-auto flex flex-col items-center">
            {!showAll && (
              <div className="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-background backdrop-blur-[3px] pointer-events-none" />
            )}

            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-md px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              {showAll ? "Show Less" : "Show More"}

              {showAll ? (
                <ChevronUp className="size-4 transition-transform duration-300" />
              ) : (
                <ChevronDown className="size-4 animate-bounce" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
