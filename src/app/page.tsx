/* eslint-disable @next/next/no-img-element */

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { DATA } from "@/data/resume";

import Link from "next/link";
import Markdown from "react-markdown";

import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";

import { ArrowUpRight } from "lucide-react";

import { LogoCloud } from "@/components/logo-cloud";
import { GitHubHeatmap } from "@/components/heat-map";

import {
  getEducation,
  getWorkExperience,
  getProjects,
  getHackathons,
} from "@/db/queries";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  // Fetch all dynamic portfolio data simultaneously
  const [education, work, projects, hackathons] = await Promise.all([
    getEducation(),
    getWorkExperience(),
    getProjects(),
    getHackathons(),
  ]);

  // Determine which sections should be displayed
  const hasEducation = education.length > 0;
  const hasWork = work.length > 0;
  const hasProjects = projects.length > 0;
  const hasHackathons = hackathons.length > 0;
  const hasSkills = DATA.skills.length > 0;

  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      {/* HERO */}
      <section id="hero" aria-labelledby="hero-heading">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
            <div className="order-2 flex flex-col gap-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />

              <h1 id="hero-heading" className="sr-only">
                {DATA.name} - Portfolio
              </h1>

              <BlurFadeText
                className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>

            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-32">
                <AvatarImage
                  alt={`${DATA.name} profile picture`}
                  src={DATA.avatarUrl}
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      {DATA.summary?.trim() && (
        <section id="about" aria-labelledby="about-heading">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 id="about-heading" className="text-xl font-bold">
                About
              </h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                <Markdown>{DATA.summary}</Markdown>
              </div>
            </BlurFade>
          </div>
        </section>
      )}

      {/* WORK EXPERIENCE */}
      {hasWork && (
        <section id="work" aria-labelledby="work-heading">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 id="work-heading" className="text-xl font-bold">
                Work Experience
              </h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <WorkSection data={work} />
            </BlurFade>
          </div>
        </section>
      )}

      {/* SKILLS */}
      {hasSkills && (
        <section id="skills" aria-labelledby="skills-heading">
          <div className="flex min-h-0 flex-col gap-y-4">
            {/* <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 id="skills-heading" className="text-xl font-bold">
                Skills
              </h2>
            </BlurFade> */}

            <div className="flex w-full min-w-0 flex-col gap-8 overflow-hidden">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <LogoCloud />
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <GitHubHeatmap username="adarshshukla09-dev" />
              </BlurFade>
            </div>
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {hasProjects && (
        <section id="projects" aria-labelledby="projects-heading">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 id="projects-heading" className="sr-only">
              Projects
            </h2>
            <ProjectsSection data={projects} />
          </BlurFade>
        </section>
      )}

      {/* HACKATHONS */}
      {/* HACKATHONS */}
      {hasHackathons && (
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection data={hackathons} />
        </BlurFade>
      )}
      {/* EDUCATION */}
      {hasEducation && (
        <section id="education" aria-labelledby="education-heading">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 id="education-heading" className="text-xl font-bold">
                Education
              </h2>
            </BlurFade>

            <div className="flex flex-col gap-8">
              {education.map((item, index) => (
                <BlurFade
                  key={item.id}
                  delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                >
                  <Link
                    href={item.href || "#education"}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-x-3"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-x-3">
                      {item.logoUrl ? (
                        <img
                          src={item.logoUrl}
                          alt={`${item.school} logo`}
                          className="size-8 flex-none overflow-hidden rounded-full border object-contain p-1 shadow ring-2 ring-border md:size-10"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className="size-8 flex-none rounded-full border bg-muted p-1 shadow ring-2 ring-border md:size-10"
                        />
                      )}

                      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                        <div className="flex items-center gap-2 font-semibold leading-none">
                          {item.school}

                          {item.href && (
                            <ArrowUpRight
                              className="size-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                              aria-hidden="true"
                            />
                          )}
                        </div>

                        <div className="font-sans text-sm text-muted-foreground">
                          {item.degree}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground">
                      <span>
                        {item.startDate} - {item.endDate || "Present"}
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* CONTACT */}
      {DATA.contact && (
        <section id="contact" aria-labelledby="contact-heading">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 id="contact-heading" className="sr-only">
              Contact {DATA.name}
            </h2>
            <ContactSection />
          </BlurFade>
        </section>
      )}
    </main>
  );
}
