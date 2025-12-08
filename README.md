# botchki pielago — Senior Fullstack Developer Portfolio

A modern, professional portfolio built with Next.js (App Router), TypeScript, TailwindCSS, React Three Fiber, and Framer Motion. Includes a Hugging Face-backed assistant trained on the owner's resume.

## Features
- Next.js App Router + TypeScript
- TailwindCSS design system + dark theme
- Subtle 3D hero via React Three Fiber (@react-three/fiber + drei)
- Framer Motion animations & micro-interactions
- Content-first sections (About, Projects, Experience, Skills, Contact)
- AI Assistant powered by a Hugging Face Space (`butchai/portfolio-chatbot`) with the resume baked in


Then open http://localhost:3000.

## Build & Run (Production)
```powershell
npm run build
npm run start
```

## Project Structure
- `app/` — routes and layout (App Router)
- `components/` — UI components (Hero, Navbar, ProjectGrid, Assistant, etc.)
- `lib/content.ts` — profile, projects, experience, skills data
- `lib/rag.ts` — legacy embedding helpers (unused with the Hugging Face Space)
- `app/api/ask/route.ts` — fetch proxy to the Hugging Face `/run/predict` endpoint
- `styles/` — reserved (global styles in `app/globals.css`)

## Environment Variables

The assistant works without configuration because the public Space endpoint is hard-coded. You can override it if you fork/clone the Space:

```ini

## Deployment
- Vercel (recommended): zero-config for Next.js
- Netlify: use Next.js build adapter
- Azure Static Web Apps: configure Next.js + serverless. (Optional)

## Customize
- Update profile data in `lib/content.ts`
- Replace `resume.doc` (and update your Hugging Face Space) to change the assistant's knowledge
- Tweak colors in `tailwind.config.ts` and global styles in `app/globals.css`

## License
Personal use only by botchki pielago. All rights reserved.
