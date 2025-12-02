"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { ProjectGrid } from '@/components/ProjectGrid'
import { Experience } from '@/components/Experience'
import { FreelanceExperience } from '@/components/FreelanceExperience'
import { Skills } from '@/components/Skills'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Assistant } from '@/components/Assistant'

export default function HomePage() {
  const focusAreas = [
    {
      title: 'Back-End Focus',
      items: [
        'Modular monoliths and microservices',
        'Token-based APIs and distributed system integrations',
        'Asynchronous and event-driven processing',
        'High-throughput, parallel service execution',
        'Relational databases and procedural SQL',
        'Performance tuning, query optimization, and operational reporting',
      ],
    },
    {
      title: 'Front-End Focus',
      items: [
        'Modern, responsive interfaces with balanced clarity and aesthetics',
        'Component-driven development and consistent design systems',
        'Utility-first workflows and thoughtful motion for polish and usability',
        'Accessible, performant experiences across devices and screen sizes',
      ],
    },
    {
      title: 'Engineering Approach',
      items: [
        'Rapidly absorbing and stabilizing existing codebases—legacy or modern',
        'Prioritizing safe refactoring, clarity, and incremental improvement',
        'Adapting tooling and practices as needed while maintaining delivery pace',
      ],
    },
    {
      title: 'Mentorship & Collaboration',
      items: [
        'Mentoring junior and early-career engineers',
        'Pairing, review, and structured guidance',
        'Helping others build confidence in quality, security, and architectural thinking',
      ],
    },
  ]

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const listItemVariants = {
    hidden: { x: 32, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <Section id="about" title="">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
          <motion.article
            className="rounded-2xl bg-white/2 p-8 text-slate-300 shadow-2xl shadow-black/20 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h3 className="text-2xl font-semibold tracking-tight">About Me</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              I’m a senior software engineer delivering enterprise systems across large-scale back-end services and modern web front-ends. I design pragmatic, scalable architectures with a focus on clean code, observability, security, and long-term maintainability in production environments. I apply appropriate creational, structural, and behavioral design patterns to reduce coupling, improve testability, and enable safe extension over time.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/resume-summary.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-1 py-1 font-semibold text-white transition hover:text-primary-200"
              >
                <span className="text-primary-200 transition group-hover:translate-x-1">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.4em] text-white/60">Resume</span>
                  <span className="text-lg">Check Out My Resume</span>
                </span>
              </a>
            </div>
          </motion.article>

          <motion.article
            className="rounded-2xl bg-white/2 p-8 text-slate-900 shadow-2xl shadow-black/10 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {focusAreas.map((area, index) => (
              <div key={area.title} className={index ? 'pt-6' : undefined}>
                {index > 0 && <div className="mb-6 h-px w-full bg-slate-800" aria-hidden />}
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">{area.title}</h4>
                <motion.ul
                  className="mt-4 list-disc space-y-[0.1rem] pl-5 text-base leading-relaxed text-slate-500"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.6 }}
                >
                  {area.items.map(item => (
                    <motion.li key={item} variants={listItemVariants}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </motion.article>
        </div>
      </Section>
      <Section id="projects" title="Projects">
        <ProjectGrid showAll={false} />
        <div className="mt-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-1 py-1 font-semibold text-white transition hover:text-primary-200"
          >
            <span className="text-primary-200 transition group-hover:translate-x-1">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-left">
              <span className="block text-xs uppercase tracking-[0.4em] text-white/60">In-House Projects</span>
              <span className="text-lg">See Everything</span>
            </span>
          </Link>
        </div>
      </Section>
      <Section id="experience" title="Experience">
        <Experience />
      </Section>
      <Section id="freelance" title="Freelance Experience">
        <FreelanceExperience />
      </Section>
      <Section id="skills" title="Technical Toolkit">
        <Skills />
      </Section>
      <Section id="contact" title="Contact">
        <motion.div
          className="grid gap-6 lg:grid-cols-[minmax(0,380px)_1fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="rounded-3xl p-8 text-white ">
            <p className="text-lg font-semibold tracking-wide uppercase text-white/80">Open to senior engineering roles & consulting</p>
            <h3 className="mt-4 text-3xl font-bold">Let’s build something resilient together.</h3>
            <p className="mt-3 text-white/80">Drop a note for enterprise engagements, platform reviews, or architecture guidance.</p>
          </div>
          <div className="rounded-3xl ">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: 'Email',
                  value: 'hctubguitarist@gmail.com',
                  href: 'mailto:hctubguitarist@gmail.com',
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 8l8 5 8-5" />
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                    </svg>
                  ),
                },
                // {
                //   label: 'Phone',
                //   value: '+63 921-000-1234',
                //   href: 'tel:+639210001234',
                //   icon: (
                //     <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                //       <path d="M5 4h3l2 5-2 1c1 2.5 3.5 5 6 6l1-2 5 2v3c0 1-1 2-2 2-8.5 0-15-6.5-15-15 0-1 1-2 2-2z" />
                //     </svg>
                //   ),
                // },
                {
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/botchki-pielago-0811b314b',
                  href: 'https://www.linkedin.com/in/botchki-pielago-0811b314b/',
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.75h3.96V21H3zM9.75 8.75H13v1.67h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.09 4.04 4.81V21h-3.96v-6.01c0-1.44-.03-3.28-2-3.28-2 0-2.31 1.56-2.31 3.17V21H9.75z" />
                    </svg>
                  ),
                },
                {
                  label: 'Location',
                  value: 'Bicutan, Taguig City, PH (remote-friendly)',
                  href: null,
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
                      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
                    </svg>
                  ),
                },
              ].map(contact => (
                <a
                  key={contact.label}
                  href={contact.href ?? undefined}
                  target={contact.href?.startsWith('http') ? '_blank' : undefined}
                  className={`flex items-start gap-3 rounded-2xl border border-white/10  p-4 transition hover:border-primary-400/70 ${contact.href ? 'cursor-pointer' : 'cursor-default'}`}
                  rel={contact.href?.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className="text-primary-200">{contact.icon}</span>
                  <span>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/60">{contact.label}</span>
                    <p className="mt-1 text-base font-medium text-white/90">{contact.value}</p>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
      <Footer />
      <Assistant />
    </main>
  )
}
