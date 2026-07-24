# Shakti Gambhir — Premium Fitness Portfolio

World-class portfolio site for **Shakti Gambhir** (also known as Shakti Ghambir) — Zumba instructor, Pilates coach, dance fitness trainer, choreographer, and event host based in Kolkata.

**Live:** configured on Vercel after deploy  
**Instagram:** [instagram.com/ghambir](https://www.instagram.com/ghambir/)

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn-style UI primitives (Radix + CVA)
- React Hook Form + Zod
- Lucide icons
- yet-another-react-lightbox
- next/image + Google fonts (Syne + DM Sans)

## Research sources used

Public content informed the biography, schedule, and event highlights:

- Instagram [@ghambir](https://www.instagram.com/ghambir/) — BDC New York graduate, 10+ years Zumba, kids classes at YMC, Bloom with Beats, ZinLife community
- [Medium — Move like it’s your dream](https://medium.com/@muskanagarwal/move-like-its-your-dream-58d61c6e9ce5)
- [IndulgExpress — SteppinOut Zumba](https://www.indulgexpress.com/entertainment/parties/2020/Feb/24/steppinout-celebrates-self-love-with-a-powerful-zumba-session-22564.html)
- [Times of India — Love is in the Air](https://timesofindia.indiatimes.com/city/kolkata/a-celebration-of-self-love-took-place-in-the-city/articleshow/74246500.cms)
- [LBB — Aqua Zumba at The Stadel](https://lbb.in/kolkata/zumba-classes-in-kolkata/)

No dedicated public YouTube channel for Shakti Gambhir was found; the YouTube section is omitted by design.

Official Zumba / ZIN trademark logos were **not** copied (trademark). His Instagram “ZinLife” highlight is referenced as community engagement without claiming an unverified certification badge.

## Architecture

```
src/
  app/                 # App Router pages, API, SEO (robots/sitemap)
  components/
    layout/            # Header, Footer, WhatsApp FAB
    sections/          # Hero → Contact page sections
    seo/               # JSON-LD Person + LocalBusiness
    ui/                # Button + form primitives
  lib/                 # site config, content, utils
public/images/         # Local optimized assets (no hotlinking)
```

## Local setup

```bash
npm install
cp .env.example .env.local   # optional contact overrides
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
npm run lint
```

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO / sitemap |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email shown on site |
| `NEXT_PUBLIC_PHONE` | Optional public phone |
| `NEXT_PUBLIC_WHATSAPP` | Digits for WhatsApp FAB (`wa.me`) |

If WhatsApp is unset, the FAB opens Instagram DM.

## Assets & attribution

See `public/images/ATTRIBUTION.md`. Gallery/event imagery is Unsplash-licensed atmospheric photography (not photos of Shakti). Authentic posts are linked via Instagram. Instagram CDN profile portraits could not be persistently archived due to platform restrictions.

## Deploy

### GitHub

Push to the business GitHub account remote, then connect Vercel.

### Vercel

1. Import the repository in the Vercel team dashboard  
2. Framework: Next.js (auto-detected)  
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain  
4. Deploy

Or use the Vercel CLI / MCP `deploy_to_vercel` from a clean build.

## Contact form

`POST /api/contact` validates with Zod and logs inquiries. Wire the handler to email/CRM (Resend, Formspree, etc.) before production intake.

## License

Site code © project owner. Content about Shakti Gambhir is used for a promotional portfolio; respect Instagram and press copyrights when replacing stock imagery with personal photos.
