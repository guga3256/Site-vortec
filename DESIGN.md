---
name: Vortec
description: SEO local e sites de alta conversão para negócios locais
colors:
  signal-blue: "hsl(231, 100%, 50%)"
  signal-blue-soft: "hsl(231, 100%, 15%)"
  midnight-navy: "hsl(218, 33%, 5%)"
  slate-card: "hsl(220, 31%, 10%)"
  slate-secondary: "hsl(220, 31%, 15%)"
  alert-coral: "hsl(350, 100%, 62%)"
  muted-steel: "hsl(216, 19%, 66%)"
  border-navy: "hsl(220, 31%, 20%)"
  paper-white: "hsl(0, 0%, 100%)"
typography:
  display:
    fontFamily: "'Clash Display', var(--font-inter), sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "2.4px"
  md: "3.2px"
  lg: "4px"
  xl: "5.6px"
  2xl: "7.2px"
  3xl: "8.8px"
  4xl: "10.4px"
  full: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.full}"
    padding: "16px 28px"
  button-outline:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.full}"
    padding: "16px 28px"
  card:
    backgroundColor: "{colors.slate-card}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  badge:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.muted-steel}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: Vortec

## Overview

**Creative North Star: "The Digital Storefront"**

Vortec's interface is a shopfront lit up after dark: everything else on the block (the competitor's Google listing, the generic marketing-agency site) sits in shadow, and this one glows. The base surface is a near-black navy so deep it reads as night, and every meaningful element — the CTA button, the map pin, the "Local Pack" glow — earns its light back from that darkness rather than starting bright. Voice is confident and urgent, never soft-sell: headlines name the loss happening right now ("your competitor got the customer today"), and the visual language backs that up with live signals — a marquee ticker, a pulsing radar ring, a pin dropping onto a map — instead of static, decorative shapes.

This is deliberately not a generic "AI SaaS" landing page. There is no purple-to-pink gradient, no abstract blob illustration, no glassy corporate hero doing nothing. The blue is a single, decisive signal color, used sparingly against near-black so it always reads as "this is the thing that matters," and every animated element (marquee, glow float, radar ping, pin drop) has a literal referent in the product story (Google Maps ranking, visibility, trust signals) rather than existing for ambient decoration.

**Key Characteristics:**
- Near-black navy base with one decisive signal-blue accent, never diluted into a multi-color palette.
- Depth from tonal layering and soft ambient glow, not hard drop shadows.
- Buttons are always full pills; cards are always soft-cornered rectangles — a firm shape grammar, not an accident of defaults.
- Motion is literal (radar pulse, pin drop, marquee, shimmer) and tied to the local-search metaphor, not generic entrance easing for its own sake.
- Display type (Clash Display) is reserved for headlines only; body copy stays in Inter for legibility.

## Colors

A near-black navy stage with a single vivid signal-blue accent; everything else is neutral support or a sparing alert color.

### Primary
- **Signal Blue** (`hsl(231, 100%, 50%)` / ≈ #0026FF): The one accent that means "act here." Used on primary buttons, links-as-actions, focus rings, the header ticker bar, and glow orbs. Kept rare outside those roles so it stays urgent instead of decorative.
- **Signal Blue Soft** (`hsl(231, 100%, 15%)`): Low-opacity tint for icon chips and badge backgrounds that need to feel "on-brand" without competing with a real CTA.

### Neutral
- **Midnight Navy** (`hsl(218, 33%, 5%)`): Page background. The darkest surface — everything else sits on top of it, tonally.
- **Slate Card** (`hsl(220, 31%, 10%)`): Card and popover background, one step lighter than the page so cards read as "raised" without a shadow.
- **Slate Secondary** (`hsl(220, 31%, 15%)`): Secondary/muted surface fills (pills, secondary buttons).
- **Border Navy** (`hsl(220, 31%, 20%)`): Hairline borders; in practice most borders in the shipped UI use `white/10` (≈10% white over navy) rather than this token directly — both read as the same "barely-there" hairline.
- **Muted Steel** (`hsl(216, 19%, 66%)`): Secondary text — descriptions, nav links at rest, timestamps.
- **Paper White** (`hsl(0, 0%, 100%)`): Primary text and button labels on filled blue.

### Alert
- **Alert Coral** (`hsl(350, 100%, 62%)`): Reserved for negative/problem states only — the "X" icon on Pain-section cards. Never used decoratively.

### Named Rules
**The One Signal Rule.** Signal Blue is the only saturated hue in the system. Alert Coral exists solely to mark a problem; it never appears as a second "brand" accent alongside blue.

## Typography

**Display Font:** Clash Display (with Inter, sans-serif fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)

**Character:** Clash Display is a geometric, confident display face reserved for headlines — it carries the "urgent, decisive" voice. Inter underneath keeps body copy calm and easy to scan so the page never feels shouty end-to-end.

### Hierarchy
- **Display** (600, `clamp(1.875rem, 4vw, 3.75rem)` / up to `text-6xl` on hero, line-height 1.05): Section and hero headlines only (`font-display`).
- **Title** (600, `text-lg`–`text-xl`): Card and component titles (pain card titles, service titles).
- **Body** (400, `text-base`–`text-lg`, relaxed line-height): Paragraph copy, descriptions.
- **Label** (500, `text-xs`–`text-sm`, some uppercase with `tracking-[0.2em]`): Eyebrow labels ("O Método Vortec"), nav links, badges, ticker text.

### Named Rules
**The Display-Is-Rare Rule.** `font-display` is applied only to `<h1>`/`<h2>` headline text. Every other element, including large numerals and button labels, stays in Inter.

## Layout

Centered container at `max-w-6xl` (occasionally `max-w-7xl` on the hero), with `px-5` on mobile widening to `lg:px-8`. Vertical rhythm between sections is generous and consistent: `py-20` on mobile, `py-28` on `lg`. Section content itself commonly narrows further to `max-w-2xl` for headline+intro pairs before widening back out for grids. Grids collapse to a single column below `sm`/`lg` breakpoints (`sm:grid-cols-2`, `lg:grid-cols-3`, or an asymmetric `lg:grid-cols-[0.9fr_1.1fr]` for the Authority section). The header is fixed (`fixed inset-x-0 top-0`) and stacks two bars: an animated marquee ticker above a nav bar that gains a `backdrop-blur-xl` + translucent background only after scrolling past 24px.

## Elevation & Depth

No classic drop-shadow elevation system. Depth reads through two mechanisms layered together: **tonal steps** (Midnight Navy → Slate Card → Slate Secondary, each a touch lighter) tell you what's "on top" of what, and **ambient glow** — large, heavily blurred (`blur-[110px]` to `blur-[130px]`) circles of Signal Blue at 15–25% opacity, positioned absolutely behind hero and CTA content — stands in for directional light. The one shadow that does appear is functional, not decorative: the primary WhatsApp button carries `shadow-lg shadow-primary/25`, a colored glow signaling "this is clickable and important," not a neutral drop shadow.

### Named Rules
**The Glow-Not-Shadow Rule.** When a section needs to feel lit, reach for a blurred, low-opacity Signal Blue orb behind the content, never a neutral `box-shadow`. The only exception is the primary CTA button, whose shadow is tinted with the brand blue, never neutral gray.

## Shapes

Two shapes, used consistently by role rather than mixed per component:

- **Pills for anything clickable-as-an-action**: primary/outline buttons, badges, and the eyebrow label all use `rounded-full`.
- **Soft rectangles for anything that contains content**: cards, panels, and the mobile menu use the theme's `2xl` radius (≈7px — noticeably tighter than Tailwind's un-themed `rounded-2xl`, since `--radius: 0.25rem` scales the whole radius ramp down).
- **One deliberate escape hatch**: the Final CTA hero panel breaks the scale on purpose with an explicit `rounded-[2rem]` (32px) to read as a distinct, larger "signature" container, not another card.

Borders are hairline and low-contrast throughout (`border-white/10` at rest, brightening to `border-primary/40` or `border-white/30` on hover) — never a heavy or high-contrast stroke.

## Components

### Buttons
- **Shape:** `rounded-full` (pill) — always, no square or soft-corner button variant exists.
- **Primary (`WhatsappButton variant="primary"`):** Signal Blue fill, white text, `shadow-lg shadow-primary/25`; hover deepens to `bg-primary/90` and intensifies the shadow to `/40`. Sizes: `sm` (`px-4 py-2`), `md` (`px-6 py-3`), `lg` (`px-7 py-4`).
- **Outline (`variant="outline"`):** `bg-white/5`, `border border-white/15`, no fill; hover brightens border to `/30` and background to `/10`. Used when a primary CTA is already present nearby and a second action needs lower visual weight.
- **Icon behavior:** Leading `MessageCircle` icon scales up slightly on hover (`group-hover:scale-110`) — every button in the system is a WhatsApp deep-link, so the icon is a fixed part of the component, not a per-instance choice.

### Cards / Containers
- **Corner Style:** theme `2xl` radius (≈7px).
- **Background:** Slate Card (`bg-card`), flat, no gradient.
- **Border:** `border-white/10` at rest; interactive cards (Solution, Authority) brighten to `border-primary/40` on hover and lift `hover:-translate-y-1`. Static informational cards (Pain) only shift border color on hover, no movement.
- **Shadow Strategy:** none — see Elevation & Depth; depth comes from the tonal step against the page background.
- **Internal Padding:** `p-6` (pain/authority cards) to `p-7` (solution cards).

### Badges / Eyebrow Labels
- **Style:** `rounded-full`, `border border-white/10`, `bg-white/5`, small icon + uppercase-tracked or sentence-case label text in Muted Steel.

### Navigation
- **Top ticker:** solid Signal Blue background, white text, continuously animated marquee (`animate-marquee`, 32s linear loop, duplicated content for seamless wrap). Purely informational trust signals, not navigation.
- **Main nav:** transparent over the hero; on scroll past 24px, gains `bg-background/70` + `backdrop-blur-xl` + hairline bottom border. Links are Muted Steel at rest, Paper White on hover, no underline. Primary CTA button always visible at the nav's trailing edge on desktop.
- **Mobile:** hamburger toggles a full-width dropdown panel (`bg-background/95 backdrop-blur-xl`) with stacked links and a full-width CTA button at the bottom.

## Do's and Don'ts

### Do:
- **Do** keep Signal Blue as the only saturated accent color; every other hue (Alert Coral included) is a narrow, role-specific exception.
- **Do** build depth with tonal steps and blurred glow, never a neutral `box-shadow`.
- **Do** tie motion to the product's literal metaphors (radar, pin-drop, marquee, shimmer) — a new animation should map to a real concept (search, ranking, notification), not just "add some motion here."
- **Do** use `rounded-full` for every clickable action and the theme's `2xl` radius for every content container.

### Don't:
- **Don't** introduce a purple/pink gradient or generic "AI SaaS" visual language — it directly contradicts the confirmed anti-reference.
- **Don't** invent testimonials, client logos, review counts, or case-study numbers on this site; `PRODUCT.md` records that no real evidence exists yet.
- **Don't** treat the `.dark` class block in `app/globals.css` as live theme source — the project never toggles a `dark` class onto `<html>`, so those shadcn-default values are inert legacy scaffolding. The active theme is entirely the `:root` block.
- **Don't** add a second saturated accent color "for variety" — the One Signal Rule depends on Signal Blue staying singular.
