# Garvita Dalmia — Portfolio

Personal portfolio built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

## Tech Stack
- Next.js 14 (App Router, static export)
- TypeScript
- CSS Modules
- DM Serif Display + DM Sans (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Open http://localhost:3000
```

## Deploying to Vercel (Free)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy** ✓

Your live URL will be: `https://your-repo-name.vercel.app`

### After deploying:
- Update `public/robots.txt` — replace `your-domain.vercel.app` with your actual URL
- Update `public/sitemap.xml` — same
- Optionally set a custom domain in Vercel settings

## Customizing Content

All your info lives in one file: **`src/data.ts`**

Edit that file to update:
- Personal info (email, GitHub, LinkedIn)
- Experience entries
- Projects
- Skills
- Education

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       ← metadata, fonts, global imports
│   └── page.tsx         ← assembles all sections
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Experience.tsx / .module.css
│   ├── Projects.tsx / .module.css
│   ├── Skills.tsx / .module.css
│   └── Footer.tsx / .module.css
├── styles/
│   └── globals.css      ← CSS variables, resets
└── data.ts              ← ALL your content lives here
public/
├── robots.txt
├── sitemap.xml
└── llms.txt
```
