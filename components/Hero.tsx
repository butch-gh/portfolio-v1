"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container pt-16 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-lg font-bold uppercase tracking-[0.35em] text-cyan-400 mb-4"
          >
            Hi, I'm Butch
          </motion.p>
          <motion.h1 initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} viewport={{ once: false }} transition={{duration:0.6}} className="h1 mb-5">
            I Build Enterprise Software with Care
          </motion.h1>
          <motion.p initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{ once: false }} transition={{delay:0.1, duration:0.6}} className="p mb-8 max-w-2xl">
            Senior Full-Stack Developer experienced in (C#, .NET, React/TypeScript) focused on delivering secure, scalable systems — from microservices and event-driven architectures to modern, responsive frontends.
          </motion.p>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: false }} transition={{delay:0.2}} className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 px-1 py-1 font-semibold text-white transition hover:text-primary-200"
            >
              <span className="text-primary-200 transition group-hover:translate-x-1">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.4em] text-white/60">Projects</span>
                <span className="text-lg">Check Out My Stuff</span>
              </span>
            </Link>
            <a
              href="mailto:botchkipielago@gmail.com"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/2 px-6 py-3 font-semibold text-white/80 backdrop-blur transition hover:border-white/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 7l8 5 8-5" />
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.4em] text-white/50">Email</span>
                <span>Let’s Work Together</span>
              </span>
            </a>
          </motion.div>
        </div>
        <div className="relative flex items-center justify-center">
          <motion.div
            className="relative z-10 w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.75, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1.02, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="relative">
              <Image
                src="/butch-hoodie.jpg"
                alt="Butch wearing hoodie"
                width={1080}
                height={1440}
                priority
                className="h-auto w-full select-none pointer-events-none [mask-image:radial-gradient(circle_at_center,white_50%,rgba(255,255,255,0.6)_70%,transparent_90%)]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[3rem] opacity-25 mix-blend-overlay bg-gradient-to-br from-transparent via-transparent to-primary-500/10" />
            </div>
            <div className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-white/70">Software Craftsman</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
