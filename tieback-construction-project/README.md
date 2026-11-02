# Tieback Construction Website

A responsive React + Vite website for Tieback Construction, a New York-based provider of residential property maintenance and property preservation services.

## Website pages

- **Home** (`/`) — company introduction, the two core service categories, approach, audiences, and contact calls to action.
- **Services** (`/services`) — one page containing both Property Maintenance and Property Preservation sections.
- **About Us** (`/about`) — company overview, approach, and service capabilities.
- **Contact Us** (`/contact`) — contact details, inquiry form, and general New York City service-area map.

There are no separate subpages for individual trades or service categories.

## Run locally

Requirements: Node.js 20 or later and npm.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Contact form configuration

The contact form submits to the Vercel serverless function at `/api/contact`. The function sends inquiries through [Resend](https://resend.com/).

Before the contact form can deliver email:

1. Create a Resend account.
2. Verify a domain that you control in Resend.
3. Create a Resend API key.
4. In the Vercel project, open **Settings → Environment Variables** and add:
   - `RESEND_API_KEY` — your Resend API key.
   - `CONTACT_FROM_EMAIL` — a sender address on the domain you verified in Resend, for example `Tieback Website <website@yourdomain.com>`.
   - `CONTACT_TO_EMAIL` — the inbox that should receive inquiries. It defaults to `support@tiebackconstruction.com` when omitted.
5. Redeploy the project after adding or changing environment variables.

For local testing of the contact form, copy `.env.example` to `.env.local`, enter the real values, and run the project using Vercel's local development command (`npx vercel dev`). A plain `npm run dev` starts the Vite frontend but does not run Vercel's `/api` function; the form will therefore report that it could not submit.

**Important:** Do not commit `.env.local`, API keys, or other secrets to GitHub. The repository's `.gitignore` excludes environment files.

## Deploy to GitHub and Vercel

1. Extract this project ZIP.
2. Create a new GitHub repository.
3. Upload the project files or push them using Git.
4. In Vercel, choose **Add New → Project** and import the GitHub repository.
5. Vercel should detect Vite automatically. Use:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. Add the contact-form environment variables described above.
7. Deploy and test all four pages, including submitting a contact inquiry.

`vercel.json` provides a client-side route fallback for React Router. The `/api/contact.js` file is the serverless contact endpoint.

## Before launch

- Confirm the public service-area wording and actual areas served.
- Confirm that `support@tiebackconstruction.com` and `+1 (516) 518-7361` are the correct public contact details.
- Replace the sample stock photography with Tieback project photographs where available and authorized.
- Test the contact form after setting the Resend environment variables.
- Add official social profile links only if Tieback has active profiles; social icons are intentionally omitted until verified URLs are available.

## Tech stack

- React 18
- Vite 6
- React Router 6
- lucide-react
- Vercel serverless function for contact email delivery
