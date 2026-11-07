# Varun Sharma — Portfolio

Personal portfolio of **Varun Sharma**, Software Engineer at Amity University Gwalior.
A single-page, glassmorphism-styled site with a futuristic gradient theme.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4** and **lucide-react**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All text (bio, skills, projects, journey, FAQ, contact details, social links) lives in
[`src/data/profile.ts`](src/data/profile.ts). Items marked `TODO` are placeholders.

## Project structure

```
src/
  app/          layout, page and global styles (glass utilities, animations)
  components/   Navbar, Hero, About, Skills, Services, Projects, Journey, Faq, Contact, Footer
  data/         profile.ts — all site content
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — keep the defaults (build command `next build`) and click **Deploy**.

No environment variables are required. Every push to `main` redeploys automatically.
