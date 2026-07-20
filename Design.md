# Design System — Laura Wixted Portfolio

A minimal, neutral design system for a content designer's personal portfolio site. Optimized for readability, calm pacing, and letting the writing (case studies, bio, testimonials) carry the page.

---

## 1. Design Principles

- **Content first.** Layout and color should recede so the writing is the focus — appropriate for a content design portfolio.
- **Generous whitespace.** Let sections breathe; avoid dense blocks.
- **Quiet, not sterile.** "Minimal" doesn't mean cold — use warm off-white/off-black rather than pure white/black, and one small accent color for personality.
- **Consistent rhythm.** A predictable spacing and type scale so every page (home, case studies, about) feels like the same site.

---

## 2. Color Palette

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#FAF9F6` | Page background (warm off-white, not stark) |
| `--color-surface` | `#FFFFFF` | Cards, testimonial blocks |
| `--color-text-primary` | `#1F1E1C` | Body copy, headings (warm near-black) |
| `--color-text-secondary` | `#6B6862` | Captions, metadata, secondary copy |
| `--color-border` | `#E4E1DA` | Dividers, card borders |
| `--color-accent` | `#5B6B57` | Muted sage green — links, hover states, small accents |
| `--color-accent-hover` | `#46523F` | Accent hover/active state |

Guidance: no more than one accent color on the page at a time. Avoid pure `#000`/`#FFF` — they read as harsher than the warm neutral palette.

---

## 3. Typography

**Font pairing:**
- **Headings:** A serif with character but not decorative — e.g. `"Fraunces"`, `"Lora"`, or `"Source Serif 4"` (all free on Google Fonts). Gives warmth without looking corporate.
- **Body & UI:** A clean, highly-legible sans — e.g. `"Inter"` or `"IBM Plex Sans"`.

**Type scale (base 16px, ratio ~1.25):**

| Level | Size | Weight | Line height | Use |
|---|---|---|---|---|
| Display | 48px / 3rem | 500 | 1.1 | Hero headline ("Hi, I'm Laura") |
| H1 | 36px / 2.25rem | 500 | 1.15 | Page titles |
| H2 | 28px / 1.75rem | 500 | 1.25 | Section headers ("Testimonials") |
| H3 | 20px / 1.25rem | 600 | 1.3 | Card titles, names |
| Body | 18px / 1.125rem | 400 | 1.6 | Paragraph text |
| Small | 14px / 0.875rem | 400 | 1.5 | Captions, roles, metadata |

Body copy stays at 18px, not 16px — content designers' portfolios live and die on readability.

---

## 4. Spacing & Grid

**Spacing scale** (4px base unit): `4, 8, 16, 24, 32, 48, 64, 96, 128`

- **Max content width:** 720px for text-heavy sections (about, bio), 1100px for grids (case study listing).
- **Section vertical padding:** 96px desktop / 48px mobile between major sections.
- **Grid:** 12-column CSS grid on desktop, single column on mobile, gutter 24px.

---

## 5. Layout Templates

### Home
1. Nav (logo/name left, "Case studies" + "About" right)
2. Hero: short intro headline + 2–3 sentence bio, generous top/bottom whitespace, no image required
3. Case study grid/list (title, one-line summary, tag)
4. Footer

### About
1. Nav
2. Profile photo + intro heading
3. Bio paragraphs (max-width 640px for readability)
4. Testimonials section — card per testimonial: quote, name, title/company, optional photo
5. Contact links (LinkedIn, Email, Resume) as a simple row of text links, not buttons
6. Footer

### Case Study (detail page)
1. Nav
2. Title + one-line role/context summary
3. Body content in a single readable column (max 720px), section headers as needed
4. Optional pull-quotes styled as blockquotes with accent-colored left border
5. Footer with link back to case study list

---

## 6. Components

**Navigation**
- Sticky or static top bar, transparent background matching page bg.
- Text links only, no boxed buttons. Active page underlined or in accent color.

**Buttons / links**
- Primary action = plain text link with accent-color underline, not a filled button. Keeps the minimal tone.
- If a filled button is ever needed (e.g. "Download resume"): accent background, white text, 6px border radius, no shadow.

**Cards (case studies, testimonials)**
- White surface on off-white bg, 1px `--color-border`, 8px border radius, no drop shadow (or a very faint one: `0 1px 3px rgba(0,0,0,0.04)`).
- Padding: 32px.

**Testimonial block**
- Quote in H3-ish serif italic, name/title in Small size, secondary text color.
- Optional circular headshot, 48px diameter.

**Footer**
- Simple, single row: name/copyright left, contact links right. Small text size, secondary color.

---

## 7. Imagery

- Profile photo: circular or soft-rounded-square crop, natural lighting, no heavy filters — consistent with a "warm, human, professional" tone.
- No stock photography. If case studies need screenshots/mockups, frame them in a plain neutral border, no browser chrome unless it adds context.

---

## 8. Accessibility

- Text contrast: `--color-text-primary` on `--color-bg` and `--color-surface` both pass WCAG AA for body text.
- `--color-text-secondary` (#6B6862) on white passes AA for large text/captions only — don't use it for body copy.
- Minimum tap target 44x44px for nav/links on mobile.
- All images need descriptive alt text (the current site's images appear to lack this — worth fixing in the rebuild).

---

## 9. Voice & Content Notes

(Since this is a content designer's own site, the writing should model good practice.)
- Short, direct sentences. Warm but not overly casual.
- Headings do real work (describe what's below, not just decorative).
- One idea per paragraph in the bio section.

---

## 10. Implementation Notes

- Good static-site fits for GitHub Pages: plain HTML/CSS, or a lightweight generator like **Astro** or **Eleventy (11ty)** if you want templating/reusable components (e.g. one testimonial-card partial reused per quote).
- Suggested repo structure:
  ```
  /src
    /styles (tokens.css, base.css, components.css)
    /pages (index, about, case-studies/*)
    /components (Nav, Footer, TestimonialCard, CaseStudyCard)
  ```
- Define the tokens in section 2–4 as CSS custom properties in one `tokens.css` file first — everything else references them, so the whole palette/scale can be tweaked from one place later.
