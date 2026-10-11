# Robby Cruz Portfolio (Next.js)

Next.js (App Router) + React + TypeScript. Self-hosted fonts, no UI libraries.

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```
Open the folder in VS Code (`File > Open Folder`).

## Where to edit what
| I want to change... | Edit |
|---|---|
| Name, pitch, bio, email, phone, social links | `data/profile.ts` |
| Jobs, bullets, tech tags | `data/experience.ts` |
| Skills / categories | `data/skills.ts` |
| Certificates (+ optional badge `image`) | `data/certificates.ts` |
| Education, stats, nav links | `data/education.ts`, `data/stats.ts`, `data/navigation.ts` |
| Colors | `app/globals.css` (`:root` tokens) |
| Pixel character & hero scene | `components/sections/Hero/` (`PixelDeveloper.tsx`, `HeroScene.tsx`) |
| Head-tracking / idle / blink behaviour | `hooks/useHeadTracking.ts`, `useIdleLook.ts`, `useBlink.ts`, `lib/pixelFrames.ts` |
| Contact form validation / sending | `lib/validators.ts`, `components/sections/Contact/ContactForm.tsx`, `app/api/contact/route.ts` |

## Structure
```
app/            layout (fonts, metadata), page (composes sections only), globals.css, api/contact
components/
  layout/       Navbar, Footer, ScrollProgress, PixelCursor, JsFlag
  sections/     Hero, Experiences, About, Skills, Contact (each with its own .css)
  ui/           Button, Reveal, Eyebrow, SectionHeading, Tag, PixelStairDivider, icons/
data/           all content, typed
hooks/          all behaviour (typewriter, reveal, scroll-spy, head tracking...)
lib/            pixelFrames, validators
types/          shared TypeScript types
public/         images/ and resume.pdf (add yours)
```
Each component's styles sit next to it (`Hero.css`, `Navbar.css`, ...). They are plain CSS imported by the component; class names are shared with the original design.

## Placeholders to replace
- `public/resume.pdf` (Download Resume button)
- `public/images/profile.jpg` (swap the About placeholder, snippet in `About.tsx`)
- `public/images/og.png` (1200x630 share image)
- LinkedIn / GitHub / certificate URLs (`#`) in `data/`
- Contact form delivery: TODO in `app/api/contact/route.ts` (Formspree, Resend or EmailJS). Keep secrets in `.env.local`.
- Set `NEXT_PUBLIC_SITE_URL` to your real domain when you deploy.

## Deploy
Push to GitHub and import the repo in Vercel (zero config).
# portfolio-v2
