"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/lib/content'

function normalizeSkill(raw: string) {
  const s = raw.toLowerCase().replace(/\+/g, 'plus').replace(/\s|\./g, '')
  if (s === 'c#' || s === 'csharp') return 'csharp'
  if (s.includes('nextjs')) return 'nextjs'
  if (s.includes('nodejs') || s === 'node') return 'nodejs'
  if (s.includes('dotnet') || s.includes('netcore') || s === 'net') return 'dotnetcore'
  if (s.includes('sqlserver') || s.includes('mssql') || s.includes('microsoftsql')) return 'microsoftsqlserver'
  if (s === 'postgres' || s === 'postgresql') return 'postgresql'
  if (s === 'js' || s === 'javascript') return 'javascript'
  if (s === 'ts' || s === 'typescript') return 'typescript'
  if (s.includes('react')) return 'react'
  if (s.includes('express')) return 'express'  
  if (s.includes('tailwind')) return 'tailwindcss'  
  if (s.includes('graphql')) return 'graphql'    
  if (s.includes('rabbit')) return 'rabbitmq'
  if (s.includes('docker')) return 'docker'  
  if (s.includes('azure')) return 'azure'    
  if (s.includes('ansible')) return 'ansible'
  if (s.includes('git ' ) || s === 'git') return 'git'
  if (s.includes('githubactions')) return 'githubactions'
  if (s.includes('nginx')) return 'nginx'
  if (s.includes('linux')) return 'linux'
  if (s.includes('html')) return 'html5'
  if (s.includes('css')) return 'css3'
  if (s.includes('sass') || s.includes('scss')) return 'sass'
  if (s.includes('jest')) return 'jest'
  if (s.includes('vitest')) return 'vitest'
  if (s.includes('webpack')) return 'webpack'
  if (s.includes('vite')) return 'vite'
  if (s.includes('msmq')) return 'msmq'
  if (s.includes('unity')) return 'unity'
  if (s.includes('rabbitmq')) return 'rabbitmq'
  if (s.includes('entityframework')) return 'entityframeworkcore'
  if (s.includes('express')) return 'express'  
  if (s.includes('mui')) return 'materialui'
  if (s.includes('jenkins')) return 'jenkins'
  if (s.includes('vps')) return 'vps'
  if (s.includes('aftereffects')) return 'aftereffects'
  if (s.includes('photoshop')) return 'photoshop'
  if (s.includes('illustrator')) return 'illustrator'
  if (s.includes('blazor')) return 'blazor'
  if (s.includes('powershell')) return 'powershell'  
  if (s.includes('chatgpt')) return 'chatgpt'
  if (s.includes('dall')) return 'dalle'
  if (s.includes('midjourney')) return 'midjourney'
  if (s.includes('copilot')) return 'githubcopilot'
  if (s.includes('gemini')) return 'googlegemini'
  if (s.includes('npm') || s === 'nodepackagemanager') return 'npm'
  if (s.includes('pgadmin4')) return 'postgresql'
  
  return s
}

function deviconCandidates(skill: string): string[] {
  const slug = normalizeSkill(skill)
  const base = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}`
  return [
    `${base}-original.svg`,
    `${base}-plain.svg`,
    `${base}-original-wordmark.svg`,
    `${base}-plain-wordmark.svg`
  ]
}

function SkillBadge({ label }: { label: string }) {
  const [idx, setIdx] = useState(0)
  const sources = deviconCandidates(label)
  const hasIcon = idx < sources.length
  return (
    <motion.span
      className="inline-flex items-center gap-2 rounded bg-white/5 px-2 py-1 text-sm text-gray-300"
      initial={{ x: 140, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.6 }}
      whileHover={{ scale: 1.3 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        scale: { type: 'spring', stiffness: 260, damping: 18 },
      }}
    >
      {hasIcon && (
        // eslint-disable-next-line @next/next/no-img-element
        <motion.img
          src={sources[idx]}
          alt=""
          width={24}
          height={24}
          loading="lazy"
          className="h-[24px] w-[24px] object-contain"
          onError={() => setIdx(i => i + 1)}
          initial={{ rotate: -240 }}
          whileInView={{ rotate: 0 }}
          whileHover={{ rotate: 360 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
      <span>{label}</span>
    </motion.span>
  )
}

export function Skills() {
  const groups: [string, string[]][] = [
    ['Languages', skills.languages],
    ['Backend', skills.backend],
    ['Frontend', skills.frontend],
    ['Data', skills.data],    
    ['DevOps', skills.devops],    
    ['Repository', skills.repository],
    ['Games & Designs', skills.gaming],
    ['Interest & Exploring', skills.newbie],
    ['Tools', skills.tools],
    ['AI Tools', skills.ai],
    ['Messaging', skills.messaging],
  ]
  return (
    <div className="space-y-6">
      {groups.map(([name, list]) => (
        <section key={name} className="border-b border-white/5 pb-4 last:border-none last:pb-0">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{name}</h2>
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {list.map(s => (
              <SkillBadge key={s} label={s} />
            ))}
          </motion.div>
        </section>
      ))}
    </div>
  )
}
