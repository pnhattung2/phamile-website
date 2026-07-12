# PhamiLe Financial — Website

Static site (HTML/CSS/JS only — no build step, no server needed).

## Pages
- `index.html` — Home
- `offering.html` — Insurance Solutions
- `financial-planning.html` — Financial Planning
- `about.html` — About us
- `contact.html` — Contact us

## 1. Preview locally
Just double-click `index.html` to open it in your browser. All pages link to each other.

## 2. Put it on GitHub Pages (free hosting)
1. Create a new repo, e.g. `github.com/pnhattung2/phamile-website`
2. Upload all files in this folder (keep the folder structure: `css/`, `js/`, `assets/` alongside the `.html` files)
3. Repo → **Settings → Pages** → Source: **Deploy from branch** → Branch: `main` / `root` → Save
4. Wait ~1 minute, GitHub gives you a URL like `https://pnhattung2.github.io/phamile-website/`

## 3. Point the domain (phamilefinancial.com) to GitHub Pages
1. In the repo, add a file named `CNAME` (no extension) containing exactly:
   ```
   phamilefinancial.com
   ```
2. At your domain registrar (wherever the domain is currently registered — check the Looka/GoDaddy/Namecheap account), update DNS:
   - Add an **A record** for `@` pointing to each of:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Add a **CNAME record** for `www` pointing to `pnhattung2.github.io`
3. Back in repo Settings → Pages, enter `phamilefinancial.com` as the custom domain and enable **Enforce HTTPS** once it's available.
4. DNS can take a few hours to propagate.

**Only cancel the Looka subscription after the new domain is confirmed working** — otherwise you risk losing the domain/DNS access if Looka manages the registrar too. Worth double-checking where the domain itself is registered vs. just the website builder.

## 4. Make the contact forms actually send email
Right now, submitting a form opens the visitor's email app pre-filled with their message (works with zero setup, but relies on them having an email client configured).

For real form submissions delivered straight to your inbox:
1. Go to [formspree.io](https://formspree.io), sign up free, create a form pointed at `phamleins@gmail.com`
2. Copy the form ID it gives you (looks like `xxxxandsomething`)
3. In `contact.html` and `financial-planning.html`, find:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   and replace `YOUR_FORM_ID` with your real ID (2 places total — one per file)

## 5. Photos
The insurance-category and hero photos are pulled live from a free stock-photo service (loremflickr) by keyword, so they'll look slightly different each time the page loads and depend on an internet connection. They're a placeholder — for a permanent, on-brand look, swap them for real photos (of the office, the team, local scenery) or licensed stock photos, and save them into the `assets/` folder, then update the `src="..."` paths in the HTML.

## Brand assets used
- `assets/logo-navy.png` — logo, transparent background, for light backgrounds
- `assets/logo-square-blue.png` — square blue logo, used as the browser favicon
