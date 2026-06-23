# Doctor Portfolio — Single-Page Website

A clean, mobile-first, single-page portfolio for a medical practitioner.
Built with **Astro** + **Tailwind CSS v4**. Pure static, no backend, deploy-ready on Vercel.

## Sections

1. **Hero** — name, photo (or initials placeholder), specialization tag, WhatsApp "Book Appointment" button
2. **About** — bio, years of experience, qualifications, hospital affiliations
3. **Services** — six service cards with icons
4. **Clinic Info** — consultation-hours table, address, embedded Google Map
5. **Patient Reviews** — three testimonial cards with star ratings
6. **Contact** — WhatsApp button, phone, email, address

## Editing content

**Everything is in one file:** [`src/config.js`](src/config.js).
Change the doctor's name, photo, phone, address, specialization, services, timings,
and reviews there — no need to touch the components.

| What to change | Where |
| --- | --- |
| Name, qualifications, specialization, experience | `config.doctor` |
| WhatsApp number, phone, email, pre-filled message | `config.contact` |
| Clinic name, address, Google Map | `config.clinic` |
| Consultation timings | `config.timings` |
| Bio, credentials, affiliations | `config.about` |
| Service cards | `config.services` |
| Patient reviews | `config.reviews` |

### Doctor photo
Drop an image into `public/` (e.g. `public/doctor.jpg`) and set
`config.doctor.photo = '/doctor.jpg'`. Leave it `null` to show the styled
initials placeholder.

### Google Map
In Google Maps → **Share** → **Embed a map**, copy the `src="…"` URL and paste it
into `config.clinic.mapEmbedUrl`.

### WhatsApp number
Use international format, digits only (e.g. `919876543210` for +91 98765 43210)
in `config.contact.whatsapp`.

## Brand colors

Defined as Tailwind theme tokens in [`src/styles/global.css`](src/styles/global.css):

- Navy `#1E3A5F` → `navy`
- Gold `#C9A84C` → `gold`
- White / cream background

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Deploy to Vercel

1. Push this folder to a Git repo.
2. Import it on [vercel.com](https://vercel.com) — the framework auto-detects as Astro.
3. Deploy. No environment variables or extra config needed.

(Or run `vercel` from the CLI in this directory.)
