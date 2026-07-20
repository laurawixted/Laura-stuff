# Laura Wixted — Portfolio

Static HTML/CSS site, built from `Design.md`. No build step required — plain HTML, CSS, and Google Fonts.

## Structure

```
/
├── index.html              Home (hero + case study grid)
├── about.html               Bio + testimonials + contact links
├── case-studies/
│   └── project-one.html     Case study detail template — duplicate for each project
├── css/
│   ├── tokens.css           Colors, type scale, spacing — edit this to reskin the whole site
│   ├── base.css              Reset + base typography
│   └── components.css       Nav, cards, testimonials, footer, etc.
├── images/                   Add your photos here (profile.jpg, testimonial photos, etc.)
└── Design.md                 The design system this site implements
```

## To do before launch

This scaffold ships with **placeholder copy** in brackets, e.g. `[Replace with your intro...]`. Search each HTML file for `[` to find every spot that needs real content:

- [ ] `index.html` — hero intro, case study titles/summaries, links to case study pages
- [ ] `about.html` — bio paragraphs, testimonial quotes/names, email/LinkedIn/resume links
- [ ] `case-studies/project-one.html` — duplicate this file per project (e.g. `project-two.html`) and fill in each
- [ ] `images/` — add `profile.jpg` and any testimonial headshots referenced in `about.html`
- [ ] Update `mailto:you@example.com` and the LinkedIn URL sitewide (appears in nav/footer of each page)

## Adding a new case study

1. Copy `case-studies/project-one.html` to `case-studies/your-project-name.html`.
2. Update the `<title>`, meta description, and body content.
3. Add a matching card to the grid in `index.html` pointing to it.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to "Deploy from a branch," branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.
5. Optional: add a custom domain under the same Pages settings if you want to keep `laurawixted.com`.

## Using your custom domain (laurawixted.com)

A `CNAME` file is already included in this repo (root folder) containing `laurawixted.com` — this tells GitHub Pages which domain to serve the site on. You don't need to edit it unless the domain changes.

When you're ready to cut over from Squarespace:

1. **Update DNS** wherever your domain's DNS is managed (Squarespace Domains, GoDaddy, Namecheap, etc.):
   - Add **A records** for the root domain (`laurawixted.com`) pointing to GitHub Pages' IP addresses (current list: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site — check for the latest, as they can change).
   - Add a **CNAME record** for `www` pointing to `yourusername.github.io`.
2. In the repo on GitHub, go to **Settings → Pages**, enter `laurawixted.com` under "Custom domain," and save (GitHub will detect the `CNAME` file automatically).
3. Wait for DNS to propagate (usually minutes, occasionally up to ~48 hours), then check the box for **Enforce HTTPS** once it becomes available.
4. Test the live domain, then you can cancel/downgrade the Squarespace website plan (the domain registration itself is usually separate and can stay wherever it is).

## Editing the design

All colors, fonts, and spacing live in `css/tokens.css` as CSS custom properties. Changing a value there updates it sitewide — you shouldn't need to touch `base.css` or `components.css` for a simple reskin.
