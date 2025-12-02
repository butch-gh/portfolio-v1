"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { SlideShow } from '@/components/SlideShow'

type FreelanceItem = {
  role: string
  client?: string
  period: string
  title: string
  summary: string
  links?: { label: string; href: string }[]
  bullets: string[]
  tech?: string[]
}

const freelance: FreelanceItem[] = [
  {
    role: 'Fullstack Developer',
    client: 'Adriano Dental Clinic',
    period: 'Sep 11, 2025 – Nov 13, 2025',
    title: 'Dental Management System – Phase II',
    summary:
      'Full-featured clinic platform with unified portal and separate apps (Billing, Inventory, Maintenance, Appointments, Public Site, CMS). JWT-secured communication across apps via API gateway; notifications via email/SMS; online payments and cash supported; deployed on self-managed VPS.',
    links: [
      { label: 'Visit CMS (for demo)', href: 'https://cms.adrianodentalclinic.online/' },
      { label: 'Visit Portal (for demo)', href: 'https://adc-portal.adrianodentalclinic.online/' },      
      { label: 'GitHub', href: 'https://github.com/butch-gh/adc-phase2' }
    ],
    bullets: [
      'Architected hybrid backend (modular and microservices) behind a secure API gateway with centralized SSO and role-based access.',
      'Implemented modules for Billing, Inventory, Appointments, Maintenance, Notifications, and User Management.',
      'Integrated email/SMS notifications and online payments; deployed and operated on VPS with containerization and process supervision.'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'CI/CD', 'JWT', 'SSO', 'SMTP', 'SMS', 'Docker', 'Nginx', 'PM2']
  },
  {
    role: 'Fullstack Developer',
    client: 'Adriano Dental Clinic',
    period: 'Nov 2, 2024 – Dec 10, 2024',
    title: 'Public Website & Appointment – Phase I',
    summary:
      'Initial release focusing on public site and appointment scheduling, built manually end-to-end without AI assistance. Backend hosted in cloud free tier; admin and website exposed via port forwarding for remote access.',
    links: [
      { label: 'Visit ADC Website', href: 'https://adc.adrianodentalclinic.online/' },
      { label: 'GitHub', href: 'https://github.com/oe-Kkay/ADC-ADMIN' }
    ],
    bullets: [
      'Built public site and admin appointment application with component-driven UI and form validation.',
      'Developed REST APIs and integrated SMS notifications; deployed backend to cloud free tier with managed database.'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST', 'SMS']
  }
]

function ThumbLink({ href, label }: { href: string; label: string }) {
  let origin = href
  let host = href
  try {
    const url = new URL(href)
    origin = url.origin
    host = url.hostname
  } catch {}

  const primary = `${origin}/favicon.ico`
  const fallback = `https://www.google.com/s2/favicons?domain=${host}&sz=128`
  const [src, setSrc] = React.useState(primary)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-orange-500 hover:text-sky-400"
      aria-label={`Open ${label}`}
    >
      {/* <img
        src={src}
        width={40}
        height={40}
        decoding="async"
        loading="lazy"
        alt={`${label} thumbnail`}
        onError={() => setSrc(fallback)}
        className="rounded-md ring-1 ring-white/10 shadow-sm transition-transform duration-150 group-hover:scale-105 group-hover:ring-sky-400/40"
      /> */}
      <span className="text-sm text-current underline decoration-dotted">
        {label}
      </span>
    </a>
  )
}

function BlueBullet() {
  return (
    <span
      aria-hidden="true"
      className="absolute -start-[2.35rem] top-10 h-7 w-7 -translate-y-1/2 rounded-full border border-white/10 bg-sky-500 shadow-[0_0_18px_rgba(56,189,248,0.45)]"
    />
  )
}

function FreelanceEntry({ item, index }: { item: FreelanceItem; index: number }) {
  return (
    <motion.li
      className="relative ms-10 py-6"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
    >
      <BlueBullet />
      <div className="card p-5">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <p className="text-base font-semibold text-white">{item.role}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
              {item.client && <span>{item.client}</span>}
              <span>•</span>
              <span>{item.period}</span>
            </div>
            <p className="text-sm text-gray-400">{item.title}</p>
          </div>
        </div>
        <p className="mt-3 text-gray-300">{item.summary}</p>
        {item.links && item.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4">
            {item.links.map(l => (
              <ThumbLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>
        )}
        {item.links && (
          <div className="mt-3 flex flex-wrap gap-3 text-xs">
            {item.links.map(l => (
              <a key={l.href} className="rounded bg-white/10 px-2 py-1 text-gray-200 hover:bg-white/20" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        )}
        <ul className="mt-4 list-disc ms-5 text-gray-300">
          {item.bullets.map((b, j) => (
            <li key={j} className="mb-1">{b}</li>
          ))}
        </ul>
        {item.tech && (
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-300">
            {item.tech.map(t => (
              <span key={t} className="rounded bg-white/10 px-2 py-1">{t}</span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  )
}

export function FreelanceExperience() {
  const [openPhaseI, setOpenPhaseI] = React.useState(false)
  const [openPhaseII, setOpenPhaseII] = React.useState(false)
  const [openBilling, setOpenBilling] = React.useState(false)
  const [openInventory, setOpenInventory] = React.useState(false)
  const [openClinicMgmt, setOpenClinicMgmt] = React.useState(false)

  // NOTE: Ensure these image files exist under /public/slides/...
  const phaseIImages = [
    '/slides/adc-static/hero-screen.png',
    '/slides/adc-static/gallery-screen.png',
    '/slides/adc-static/services-screen.png',
    '/slides/adc-static/doctors-screen.png',
    '/slides/adc-static/location-footer-screen.png',
    '/slides/adc-static/appointment-screen.png',
  ]

  const clinicManagementImages = [
    // Update these filenames to match files in public/slides/clinic-management
    '/slides/clinic-management/dashboard.png',
    '/slides/clinic-management/users.png',
    '/slides/clinic-management/dentist.png',
    '/slides/clinic-management/appointment.png',
    '/slides/clinic-management/guest-appointment.png',
    '/slides/clinic-management/patients.png',
    '/slides/clinic-management/patient-medical.png',
    '/slides/clinic-management/patient-dental-records.png',
    '/slides/clinic-management/patient-appointment-history.png',
    '/slides/clinic-management/patient-treatment-plans.png',
    '/slides/clinic-management/performance-appointment-reports.png',
    '/slides/clinic-management/performance-patients-reports.png',
  ]

  const phaseIIImages = [
    '/slides/cms-static/hero-section.png',
    '/slides/cms-static/gallery-section.png',
    '/slides/cms-static/services-section.png',
    '/slides/cms-static/doctors-section.png',
    '/slides/cms-static/location-section.png',
    '/slides/cms-static/footer-section.png',
    '/slides/cms-static/theme-section.png',
    '/slides/cms-static/image-manager.png',
    '/slides/cms-static/image-selector.png',
    
  ]

  const billingImages = [
    // Update these filenames to match files in public/slides/billing
    '/slides/billing/create-invoice.png',
    '/slides/billing/invoice-list.png',
    '/slides/billing/invoice-details.png',        
    '/slides/billing/payments.png',
    '/slides/billing/record-payment.png',
    '/slides/billing/installment-management.png',
    '/slides/billing/manual-adjustments.png',
  ]

  const inventoryImages = [
    // Update these filenames to match files in public/slides/inventory
    '/slides/inventory/purchase-orders.png',
    '/slides/inventory/receive-delivery.png',
    '/slides/inventory/stocks.png',
    '/slides/inventory/stock-out.png',
    '/slides/inventory/items.png',
    '/slides/inventory/suppliers.png',
    '/slides/inventory/reports.png'
  ]

  return (
    <>
      <ol className="relative border-s border-white/5">
        {freelance.map((item, index) => (
          <motion.li
            key={index}
            className="relative ms-10 py-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
          >
            <BlueBullet />
            <div className="card p-5">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-base font-semibold text-white">{item.role}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
                    {item.client && <span>{item.client}</span>}
                    <span>•</span>
                    <span>{item.period}</span>
                  </div>
                  <p className="text-sm text-gray-400">{item.title}</p>
                </div>
              </div>
              <p className="mt-3 text-gray-300">{item.summary}</p>
              {item.links && item.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {item.links.map(l => (
                    <ThumbLink key={l.href} href={l.href} label={l.label} />
                  ))}
                </div>
              )}
              {/* {item.links && (
                <div className="mt-3 flex flex-wrap gap-3 text-xs">
                  {item.links.map(l => (
                    <a key={l.href} className="rounded bg-white/10 px-2 py-1 text-gray-200 hover:bg-white/20" href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )} */}

              <div className="mt-4 flex flex-wrap gap-3">
                {index === 1 && (
                  <>
                    <button onClick={() => setOpenPhaseI(true)} className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-primary-500">
                      View ADC Website Slides
                    </button>
                    <button onClick={() => setOpenClinicMgmt(true)} className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-primary-500">
                      View Clinic Management Slides
                    </button>
                  </>
                )}
                {index === 0 && (
                  <>
                    <button onClick={() => setOpenPhaseII(true)} className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-primary-500">
                      View CMS Slides
                    </button>
                    <button onClick={() => setOpenBilling(true)} className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-primary-500">
                      View Billing Slides
                    </button>
                    <button onClick={() => setOpenInventory(true)} className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-primary-500">
                      View Inventory Slides
                    </button>
                  </>
                )}
              </div>

              <ul className="mt-4 list-disc ms-5 text-gray-300">
                {item.bullets.map((b, j) => (
                  <li key={j} className="mb-1">{b}</li>
                ))}
              </ul>
              {item.tech && (
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-300">
                  {item.tech.map(t => (
                    <span key={t} className="rounded bg-white/10 px-2 py-1">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>

      <SlideShow title="Adriano Dental Clinic – Phase I" images={phaseIImages} open={openPhaseI} onClose={() => setOpenPhaseI(false)} />
      <SlideShow title="Adriano Dental Clinic – Phase I: Clinic Management" images={clinicManagementImages} open={openClinicMgmt} onClose={() => setOpenClinicMgmt(false)} />
      <SlideShow title="Adriano Dental Clinic – Phase II" images={phaseIIImages} open={openPhaseII} onClose={() => setOpenPhaseII(false)} />
      <SlideShow title="Adriano Dental Clinic – Phase II: Billing" images={billingImages} open={openBilling} onClose={() => setOpenBilling(false)} />
      <SlideShow title="Adriano Dental Clinic – Phase II: Inventory" images={inventoryImages} open={openInventory} onClose={() => setOpenInventory(false)} />
    </>
  )
}
