# Design System Document: The Editorial Artisan

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**
This design system moves away from the rigid, "templated" look of typical portfolio sites. Instead, it adopts an editorial approach that mirrors a high-end fashion lookbook or a contemporary art gallery. The goal is to elevate UGC (User Generated Content) from "casual social media" to "professional creative asset." 

We achieve this through **Intentional Asymmetry** and **Harmonious Negative Space**. By breaking the expected 12-column grid with overlapping elements and staggered image placements, we create a sense of movement and "unpolished" authenticity that feels expensive, not messy.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a "Muted Earthy" foundation to ensure the creator's content remains the hero, punctuated by dusty rose and sophisticated plum accents.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** 
Structural separation is achieved exclusively through background shifts. Use `surface` as your base and `surface-container-low` for large content blocks. This creates a "soft-edge" layout that feels organic and fluid.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine papers. 
*   **Base Layer:** `surface` (#807475)
*   **Sectional Depth:** `surface-container-low` for subtle differentiation.
*   **Hero/Focus Areas:** `surface-container-lowest` to provide "pop" and clarity.
*   **Interactive Elements:** `primary-container` for sophisticated Dusty Rose highlights.

### The "Glass & Gradient" Rule
To avoid a flat, "Bootstrap" feel, floating elements (like mobile navigation bars or sticky headers) must utilize **Glassmorphism**. 
*   **Formula:** `surface` color at 70% opacity + `backdrop-filter: blur(20px)`.
*   **Signature Textures:** For primary CTAs, use a subtle linear gradient from `primary` (#a6646f) to `primary-dim` to add "soul" and weight.

---

## 3. Typography: The Editorial Voice
We use a dual-sans-serif approach to balance modern professionalism with approachable warmth.

*   **Display & Headlines (Manrope):** High-impact, geometric, and modern. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to create an authoritative, editorial feel. 
*   **Body & Labels (Inter):** Highly legible and neutral. `body-lg` is the workhorse for creator bios.
*   **Intentional Hierarchy:** Contrast is key. Pair a `display-sm` headline with `label-sm` (all caps, 0.1em letter spacing) to create the "magazine" aesthetic.

| Role | Font | Size | Weight |
| :--- | :--- | :--- | :--- |
| **Display LG** | Manrope | 3.5rem | 700 |
| **Headline MD** | Manrope | 1.75rem | 600 |
| **Title SM** | Inter | 1rem | 500 |
| **Body MD** | Inter | 0.875rem | 400 |
| **Label SM** | Inter | 0.6875rem | 600 (Caps) |

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often too "digital." This system uses **Tonal Layering** to convey hierarchy.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` card on a `surface-container` background. The slight shift in hex value provides a sophisticated, "quiet" lift.
*   **Ambient Shadows:** Use only for high-priority floating elements (e.g., a "Book Now" FAB). 
    *   *Shadow:* Uses the `on-surface` color at a very low opacity for a natural, ambient light effect.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility on inputs, use `outline-variant` at **20% opacity**. Never use 100% black or high-contrast lines.

---

## 5. Components

### Cards (The "Content Block")
*   **Structure:** No borders. `surface-container-low` background. 
*   **Rounding:** Subtle roundedness (Index 1) for a modern, slightly softened edge.
*   **Layout:** Use asymmetrical padding to mirror editorial layouts.

### Buttons
*   **Primary:** Background `primary` (#a6646f), Text `on-primary`. Shape: `full`.
*   **Secondary:** Background `secondary-container`, Text `on-secondary-container`. 
*   **Tertiary (Ghost):** No background. Text `primary`. Use for low-priority actions like "View More."

### Input Fields
*   **Style:** Minimalist. `surface-container-lowest` background with a `Ghost Border` (outline-variant @ 20%).
*   **States:** On focus, transition border to `primary` (#a6646f) at 100% opacity.

### Chips (Category Tags)
*   Used for "Niches" (e.g., Beauty, Tech). 
*   **Style:** `surface-container-high` background with `label-md` text. No border. Shape: subtle roundedness.

### The "UGC Reel" Component
*   A custom component for displaying short-form video.
*   **Visuals:** Staggered vertical heights (Masonry style). No dividers. Use `NORMAL` spacing (Index 2) between videos to keep the layout structured yet fluid.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use balanced white space. Maintain clear separation between blocks to ensure readability.
*   **Do** overlap elements. Let an image "bleed" into the next background color section to break the grid.
*   **Do** use `primary-fixed-dim` for subtle hover states on interactive elements.
*   **Do** prioritize mobile-first verticality; stack content with consistent spacing.

### Don’t:
*   **Don’t** use 1px solid black borders. This instantly kills the premium editorial feel.
*   **Don’t** use standard "drop shadows" (e.g., `0 2px 4px`). They are too heavy for this aesthetic.
*   **Don’t** use pure black (#000000) for text. Use `on-surface` for a softer, more sophisticated look.
*   **Don’t** use dividers or horizontal rules. Use vertical space to separate thoughts.

---

## 7. Designer Note: The "Unpolished" Polish
While the system is minimalist, it should never feel "empty." Use the Dusty Rose (`primary`), Muted Brown (`secondary`), and Plum (`tertiary`) tokens sparingly—like jewelry on a neutral outfit. Use them for small accents: a category tag, a button, or a highlighted word in a headline. This creates a sense of "intentional curation" that builds trust with potential brands.