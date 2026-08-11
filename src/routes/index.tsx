import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Menu, Terminal, X } from "lucide-react";
import { useState } from "react";

import labImage from "../assets/engineering-lab.jpg";
import robotImage from "../assets/engineering-robot.jpg";
import notesImage from "../assets/engineering-notes.jpg";
import resumeAsset from "../assets/CV.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyam Sundar — Software Engineer" },
      {
        name: "description",
        content:
          "Final-year Computer Science student at VIT Chennai seeking software engineering roles. Full-stack, backend and robotics projects in Java, Python, React and Spring Boot.",
      },
      { property: "og:title", content: "Shyam Sundar — Software Engineer" },
      {
        property: "og:description",
        content: "Final-year CS student building full-stack and backend systems. Open to new-grad software engineering roles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioHome,
});

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "8.21", label: "CGPA / 10" },
  { value: "2027", label: "Graduating" },
  { value: "10+", label: "Projects shipped" },
  { value: "1", label: "SWE internship" },
];

const projects = [
  {
    title: "Campus Connect",
    role: "Full-stack web application",
    description:
      "A student platform for campus events, notes and opportunities. Built REST APIs, JWT auth and role-based access, with an optimistic React UI over a MongoDB data layer.",
    highlights: ["REST API design", "JWT auth", "Optimistic UI"],
    image: labImage,
    imageAlt: "Laptop with code beside a microcontroller and jumper wires",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    repo: "https://github.com/shyam050",
  },
  {
    title: "IPIS Train Data Simulator",
    role: "Internship project · ANNAIE Information",
    description:
      "Desktop simulator that generates and streams live train information data to display systems. Handled protocol parsing, scheduling logic and a packaged Electron client used by the QA team.",
    highlights: ["Protocol parsing", "Scheduling engine", "Desktop packaging"],
    image: notesImage,
    imageAlt: "Algorithm and system diagrams sketched on paper",
    stack: ["Java", "Spring Boot", "Electron", "MySQL"],
    repo: "https://github.com/shyam050",
  },
  {
    title: "Pathfinder Bot",
    role: "Robotics · Autonomous navigation",
    description:
      "An autonomous rover using ROS for sensor fusion and path planning. Implemented obstacle avoidance and a tuned motor-control loop validated across repeated test runs.",
    highlights: ["ROS nodes", "Sensor fusion", "Path planning"],
    image: robotImage,
    imageAlt: "Small autonomous robot prototype with cameras and blue wiring",
    stack: ["Python", "ROS", "C++", "OpenCV"],
    repo: "https://github.com/shyam050",
  },
];

const experience = [
  {
    period: "May — Jun 2026",
    role: "Software Development Intern",
    org: "ANNAIE Information Private Limited",
    points: [
      "Built the IPIS Train Data Simulator used to test passenger information displays.",
      "Designed backend services in Java and Spring Boot with a MySQL persistence layer.",
      "Packaged an Electron desktop client and automated repetitive QA data setup.",
    ],
  },
  {
    period: "2023 — 2027",
    role: "B.Tech, Computer Science & Engineering (AI & Robotics)",
    org: "VIT Chennai · CGPA 8.21 / 10",
    points: [
      "Coursework: data structures, algorithms, operating systems, databases, distributed systems.",
      "Active in competitive programming and campus technical project teams.",
    ],
  },
];

const skills = [
  { group: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "C++", "SQL"] },
  { group: "Backend", items: ["Spring Boot", "Node.js", "Flask", "REST APIs", "PostgreSQL", "MySQL"] },
  { group: "Frontend", items: ["React", "Angular", "TailwindCSS", "HTML/CSS"] },
  { group: "Tools & Platforms", items: ["Git", "Linux", "AWS", "Docker basics", "ROS", "Electron"] },
];

function PortfolioHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight">
            <Terminal className="size-4 text-primary" /> shyam<span className="text-primary">.dev</span>
          </a>

          <div className="hidden items-center gap-7 font-mono text-xs text-muted-foreground sm:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-9 place-items-center rounded-md border border-border transition-colors hover:border-primary hover:text-primary sm:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-3 border-t border-border px-5 py-4 font-mono text-sm sm:hidden">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="grid-bg relative border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
          <p className="animate-rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" /> Open to New Grad SWE roles · 2027
          </p>
          <h1 className="animate-rise-in font-display text-4xl font-bold leading-tight tracking-tight [animation-delay:100ms] sm:text-5xl">
            Shyam Sundar
          </h1>
          <p className="animate-rise-in mt-3 font-mono text-base text-primary [animation-delay:160ms] sm:text-lg">
            Software Engineer · Final-year CSE @ VIT Chennai
          </p>
          <p className="animate-rise-in mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground [animation-delay:220ms] sm:text-lg">
            I build backend services and full-stack products — REST APIs in Java and Spring Boot, React front-ends, and
            robotics systems in Python. I care about clean data models, readable code and shipping things that people
            actually use.
          </p>

          <div className="animate-rise-in mt-8 flex flex-wrap items-center gap-3 [animation-delay:280ms]">
            <a
              href={resumeAsset.url}
              download="Shyam-Sundar-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-4" /> Download résumé
            </a>
            <a
              href="https://github.com/shyam050"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shyam45/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface px-4 py-5">
                <dt className="font-display text-2xl font-bold text-primary">{stat.value}</dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="projects" className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">// Projects</h2>
          <p className="mt-3 text-lg text-muted-foreground">Selected engineering work, with the decisions behind it.</p>

          <div className="mt-10 flex flex-col gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-primary/60"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={630}
                  className="h-44 w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100 sm:h-56"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-bold">{project.title}</h3>
                      <p className="mt-1 font-mono text-xs text-primary">{project.role}</p>
                    </div>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      Code <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">// Experience &amp; education</h2>

          <div className="mt-10 border-l border-border pl-6">
            {experience.map((item) => (
              <div key={item.role} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full border-2 border-background bg-primary" />
                <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
                <h3 className="mt-2 font-display text-lg font-bold">{item.role}</h3>
                <p className="mt-1 text-sm text-primary">{item.org}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">// Technical skills</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.group} className="bg-surface p-6">
                <h3 className="font-mono text-xs uppercase tracking-wide text-primary">{skill.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-md bg-secondary px-2.5 py-1 text-sm text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">// Contact</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m actively interviewing for new-grad software engineering roles starting 2027. Happy to talk about
            backend systems, internships or open-source collaboration.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:SHYAMSUNDAR4005@GMAIL.COM"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" /> Email me
            </a>
            <a
              href={resumeAsset.url}
              download="Shyam-Sundar-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="size-4" /> Résumé
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Shyam Sundar</span>
          <div className="flex items-center gap-5">
            <a href="mailto:SHYAMSUNDAR4005@GMAIL.COM" className="transition-colors hover:text-primary">Email</a>
            <a href="https://github.com/shyam050" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/shyam45/" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
