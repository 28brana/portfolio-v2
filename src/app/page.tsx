import { FramedPortrait } from "@/components/framed-portrait";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, MailIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import PageTracker from "./PageTracker";

const BLUR_FADE_DELAY = 0.04;

// Bento layout: wide, narrow / narrow, wide on larger screens.
const STAT_SPANS = ["sm:col-span-2", "", "", "sm:col-span-2"];

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-20 pb-16">
      <PageTracker eventName="HOME_PAGE_VIEW" />
      <section id="hero" className="space-y-8">
        <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 flex-col space-y-5">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <span className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {DATA.status}
              </span>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2} yOffset={8}>
              <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl xl:text-7xl">
                Hi, I&apos;m
                <br />
                <span className="text-gradient italic pr-2">
                  {DATA.name.split(" ")[0]}.
                </span>
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="max-w-[600px] text-pretty text-muted-foreground md:text-xl">
                {DATA.description}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={DATA.contact.social.email.url}
                  className={cn(buttonVariants(), "rounded-full gap-2")}
                >
                  <MailIcon className="size-4" />
                  Get in touch
                </Link>
                <Link
                  href="#projects"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-full gap-2 bg-background/60 backdrop-blur"
                  )}
                >
                  View projects
                  <ArrowDownIcon className="size-4" />
                </Link>
                <Link
                  href={DATA.locationLink}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MapPinIcon className="size-4" />
                  {DATA.location}
                </Link>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} className="self-center">
            <FramedPortrait
              src={DATA.portraitUrl}
              alt={DATA.name}
              caption={`No. 01 — ${DATA.name}`}
            />
          </BlurFade>
        </div>
      </section>

      <section id="stats">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {DATA.stats.map((stat, id) => (
            <BlurFade
              key={stat.label}
              delay={BLUR_FADE_DELAY * 5 + id * 0.05}
              className={STAT_SPANS[id]}
            >
              <SpotlightCard className="flex h-full flex-col justify-between gap-6 p-4">
                <span className="font-serif text-4xl tracking-tight text-brand sm:text-5xl">
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="about" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <SectionHeading index="01" label="About" />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert sm:text-base">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading index="02" label="Work Experience" className="mb-2" />
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
              inView
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                open={work.open}
                skills={work.skills}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading index="03" label="Education" className="mb-2" />
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
              inView
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading index="04" label="Skills" />
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill}
                delay={BLUR_FADE_DELAY * 2 + id * 0.02}
                inView
              >
                <span className="inline-flex cursor-default items-center rounded-full border bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur transition-colors hover:border-brand/50 hover:text-brand">
                  {skill}
                </span>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-12">
        <div className="space-y-8 w-full">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading
              index="05"
              label="Projects"
              title="Check out my latest work"
              description="I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
            />
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 2 + (id % 2) * 0.05}
                inView
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-8 w-full">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading
              index="06"
              label="Achievements"
              title="Milestones that showcase my expertise"
              description="Over the years, I have actively participated in coding competitions, solved numerous programming challenges, and contributed to technical communities."
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                  inView
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <div className="relative isolate overflow-hidden rounded-2xl border p-8 text-center sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.15),transparent_60%)]"
            />
            <div className="mx-auto max-w-md space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-brand">
                07 · Contact
              </p>
              <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-gradient italic pr-1">great</span>
              </h2>
              <p className="text-pretty text-muted-foreground">
                Want to chat? Drop me an email or a DM on LinkedIn and I&apos;ll
                respond whenever I can. I will ignore all soliciting.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href={DATA.contact.social.email.url}
                  className={cn(buttonVariants(), "rounded-full gap-2")}
                >
                  <MailIcon className="size-4" />
                  {DATA.contact.email}
                </Link>
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-full gap-2"
                  )}
                >
                  <DATA.contact.social.LinkedIn.icon className="size-4" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <footer className="text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {DATA.name} · Built with Next.js
      </footer>
    </main>
  );
}
