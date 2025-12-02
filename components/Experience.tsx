"use client"

import type { CSSProperties } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { experience } from '@/lib/content'

function CubeBullet({ logo }: { logo: string }) {
  const size = 50
  const depth = size / 2
  const faceStyle: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 6,
    backgroundImage: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: '1px solid rgba(255,255,255,0.18)',
    backfaceVisibility: 'hidden'
  }

  const faces = [
    { transform: `translateZ(${depth}px)` },
    { transform: `rotateY(180deg) translateZ(${depth}px)` },
    { transform: `rotateY(90deg) translateZ(${depth}px)` },
    { transform: `rotateY(-90deg) translateZ(${depth}px)` },
    { transform: `rotateX(90deg) translateZ(${depth}px)` },
    { transform: `rotateX(-90deg) translateZ(${depth}px)` }
  ]

  return (
    <div className="absolute inset-0" style={{ width: size, height: size }}>
      <div className="h-full w-full" style={{ perspective: 600 }}>
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: 'preserve-3d', filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.55))' }}
          animate={{ rotateY: 360, rotateX: 18 }}
          transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
        >
          {faces.map((face, idx) => (
            <span key={idx} style={{ ...faceStyle, ...face }} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function ExperienceEntry({ item, index }: { item: typeof experience[number]; index: number }) {
  const swingControls = useAnimationControls()

  const handleHoverStart = () => {
    swingControls.start({
      rotateX: [-40, 18, -8, 0],
      transition: { duration: 0.8, ease: 'easeOut' }
    })
  }

  const handleHoverEnd = () => {
    swingControls.start({ rotateX: 0, transition: { duration: 0.25, ease: 'easeOut' } })
  }

  
  return (
    <motion.li
      className="relative ms-10 py-6"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
    >      
      <span
        aria-hidden="true"
        className="absolute -start-[3.35rem] top-10 h-7 w-7 -translate-y-1/2 rounded-full border border-white/10 bg-sky-500 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
      />
    
      <motion.div
        className="card p-5"
        style={{ transformOrigin: 'top center', transformPerspective: '900px' }}
        initial={{ rotateX: 0 }}
        animate={swingControls}
        whileHover={{ rotateX: 0 }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        
        <div className="flex items-start gap-4">
          <div className="relative h-14 w-14 shrink-0 ">
            <CubeBullet logo={item.logo} />
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-white">{item.role}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
              <span>{item.company}</span>
              {item.location && (
                <>
                  <span>•</span>
                  <span>{item.location}</span>
                </>
              )}
            </div>
            <p className="text-sm text-gray-400">{item.period}</p>
          </div>
        </div>
        <ul className="mt-4 list-disc ms-5 text-gray-300">
          {item.bullets.map((b, j) => <li key={j} className="mb-1">{b}</li>)}
        </ul>
        {item.tech && (
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-300">
            {item.tech.map(t => <span key={t} className="rounded bg-white/10 px-2 py-1">{t}</span>)}
          </div>
        )}
      </motion.div>
    </motion.li>
  )
}

export function Experience({ limit }: { limit?: number }) {
  const list = typeof limit === 'number' ? experience.slice(0, limit) : experience
  return (
    <ol className="relative border-s border-white/5">
      {list.map((item, index) => (
        <ExperienceEntry key={index} item={item} index={index} />
      ))}
    </ol>
  )
}
