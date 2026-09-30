---
name: Lumio Core
colors:
  surface: '#101418'
  surface-dim: '#101418'
  surface-bright: '#353a3e'
  surface-container-lowest: '#0a0f13'
  surface-container-low: '#181c20'
  surface-container: '#1c2024'
  surface-container-high: '#262a2f'
  surface-container-highest: '#31353a'
  on-surface: '#e0e3e8'
  on-surface-variant: '#c5c4db'
  inverse-surface: '#e0e3e8'
  inverse-on-surface: '#2d3135'
  outline: '#8f8fa4'
  outline-variant: '#454558'
  surface-tint: '#bec2ff'
  primary: '#bec2ff'
  on-primary: '#0001ac'
  primary-container: '#0000ff'
  on-primary-container: '#b3b7ff'
  inverse-primary: '#343dff'
  secondary: '#c0c7d4'
  on-secondary: '#2a313b'
  secondary-container: '#404752'
  on-secondary-container: '#afb5c2'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#4a4c4c'
  on-tertiary-container: '#bcbcbc'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bec2ff'
  on-primary-fixed: '#00006e'
  on-primary-fixed-variant: '#0000ef'
  secondary-fixed: '#dce3f0'
  secondary-fixed-dim: '#c0c7d4'
  on-secondary-fixed: '#151c25'
  on-secondary-fixed-variant: '#404752'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#101418'
  on-background: '#e0e3e8'
  surface-variant: '#31353a'
typography:
  display-lg:
    fontFamily: Clash Display
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Clash Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Clash Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Clash Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The brand personality is **premium, vibrant, and high-energy**, positioning itself at the intersection of technical excellence and lifestyle aesthetics. Inspired by the clean execution of modern technology giants, the UI focuses on clarity and "light" as a functional element.

This design system utilizes a **Glassmorphic** style. It relies on translucent layers, high-density whitespace, and vibrant background blurs to create a sense of depth and focus. The aesthetic is characterized by:
- **Vibrant Energy:** Using high-contrast electric blues against deep backgrounds.
- **Glassy Precision:** Frosted surfaces that suggest a high-end, polished product.
- **Minimalist Structure:** A rigorous commitment to whitespace and reduction of unnecessary decorative elements.

## Colors

The palette is anchored by a **Vibrant Electric Blue** (#0000FF) derived from the primary logo mark. This color is used sparingly for high-impact actions and brand signifiers.

- **Primary:** Electric Blue is the core brand signal.
- **Secondary (Deep Navy):** Used for primary backgrounds and container surfaces to provide more depth than a standard black.
- **Neutral (True Black & Off-White):** Used for text hierarchy and deep-field backgrounds.
- **Gradients:** Use linear gradients from Electric Blue to a slightly deeper indigo to simulate light emission and "glow" effects.

## Typography

The typographic system pairs the geometric, high-character **Clash Display** for headlines with the utilitarian precision of **Inter** for UI elements and long-form text.

- **Clash Display:** Used for all Display and Headline roles. It should be set with tight letter-spacing to emphasize its modern, architectural structure.
- **Inter:** Used for all functional text. Ensure a medium weight is used for labels to maintain legibility against dark, glassy backgrounds.
- **Scale:** High contrast between headline sizes and body text is encouraged to drive the "Apple-inspired" editorial feel.

## Layout & Spacing

The design system employs a **Fluid Grid** with generous safe areas. 

- **Desktop:** 12-column grid with 24px gutters and 64px external margins to create a "contained" but airy feel.
- **Mobile:** 4-column grid with 16px gutters and 20px margins.
- **Spacing Rhythm:** Based on an 8px base unit. Component internal padding should favor larger values (e.g., 24px or 32px) to support the premium, spacious aesthetic.
- **Alignment:** Content should predominantly be center-aligned for landing pages and left-aligned for functional dashboards.

## Elevation & Depth

Hierarchy is established through **Backdrop Blurs** and **Tonal Layering** rather than traditional heavy shadows.

- **Level 1 (Base):** The Deep Navy background.
- **Level 2 (Containers):** Semi-transparent surfaces (e.g., `rgba(255, 255, 255, 0.05)`) with a `backdrop-filter: blur(20px)`.
- **Level 3 (Interactive):** Elements that sit above the glass, using a subtle 1px inner border (`rgba(255, 255, 255, 0.1)`) to catch the "light" at the edges.
- **Glows:** High-priority elements may use a soft, colored outer glow using the Primary Electric Blue at low opacity (15-20%) to simulate light emission.

## Shapes

The shape language is **Rounded**, balancing the sharp geometry of the diamond logo with the approachability of modern hardware design.

- **Standard Radius:** 8px (0.5rem) for inputs and smaller components.
- **Large Radius:** 16px (1rem) for cards and main containers.
- **Pill:** Reserved exclusively for tags, chips, and secondary buttons.
- **Logo Integration:** The diamond shape from the logo should be used as a recurring graphic motif in icons or as a decorative "container" for small data points.

## Components

### Buttons
- **Primary:** Solid Electric Blue background with White Inter Medium text. No border.
- **Secondary:** Glassy background (10% white opacity) with a 1px white border at 20% opacity.
- **Tertiary:** Ghost style, text-only with a hover state that introduces a subtle background glow.

### Input Fields
- Dark, recessed backgrounds with a 1px border. On focus, the border transitions to Electric Blue with a subtle outer glow.

### Cards
- Always utilize the Glassmorphic effect: semi-transparent background and backdrop blur.
- Borders should be "hairline" thin (1px) and slightly lighter than the card surface.

### List Items
- Separated by subtle 1px dividers. Hover states should use a slight horizontal shift or a soft background highlight.

### The Logo & Wordmark
- The diamond icon and "vortec" wordmark should maintain a minimum clear space equal to the height of the 'v' in the wordmark. Use the white/silver variant on dark backgrounds and the electric blue variant as a standout feature.