# Design System Document: The Editorial Artisan

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**
This design system moves away from the rigid, "templated" look of typical portfolio sites. Instead, it adopts an editorial approach that mirrors a high-end fashion lookbook or a contemporary art gallery. The goal is to elevate UGC (User Generated Content) from "casual social media" to "professional creative asset." 

We achieve this through **Intentional Asymmetry** and **Harmonious Negative Space**. By breaking the expected 12-column grid with overlapping elements and staggered image placements, we create a sense of movement and "unpolished" authenticity that feels expensive, not messy.

---

## 2. Colors & Surface Philosophy (Updated)
Die neue Palette nutzt Beige als Leinwand, wodurch die Beerentöne wie kostbare Farbtupfer wirken.

### Die neue "Clean Beige" Palette
*   **Base Layer:** `surface` (#F5F2ED) – Ein helles, warmes Leinen-Beige. Ersetzt das dunklere Graubraun.
*   **Sectional Depth:** `surface-container-low` (#EFEBE5) – Ein minimal dunkleres Beige für subtile Zonen.
*   **Hero/Focus:** `surface-container-lowest` (#FFFFFF) – Reinweiß für Karten oder Sektionen, die „strahlen" sollen.
*   **The "Berry" Pop (Primary):** `primary` – #8E44AD (Deep Plum) oder #A6646F (Dusty Rose).

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.**
Strukturelle Trennung erfolgt ausschließlich durch Hintergrundwechsel. `surface` als Basis, `surface-container-low` für große Inhaltsbereiche.

### Überarbeitete Surface Hierarchy
Anstatt dunkler Flächen nutzen wir Ton-in-Ton Layering in hellen Nuancen:
*   **Background:** `surface` (#F5F2ED)
*   **Karten/Module:** `surface-container-lowest` (#FFFFFF)
*   **Akzente:** `primary` (Beerenfarbe) nur für strategische Highlights (Links, Icons, aktive States).

### The "Glass & Gradient" Rule
Schwebende Elemente (Navigation, Sticky Header) nutzen weiterhin **Glassmorphism**.
*   **Formula:** `surface` (#F5F2ED) bei 70% Opacity + `backdrop-filter: blur(20px)`.
*   **Signature Textures:** Für primäre CTAs ein subtiler Gradient von `primary` zur gedämpften Variante.

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

## 4. Elevation & Depth (Updated)
Da wir nun auf hellem Grund arbeiten, wird das Prinzip der **Soft Shadows** noch wichtiger, um Tiefe ohne visuelle Härte zu erzeugen.

*   **Tonal Layering:** Eine weiße Karte (#FFFFFF) auf beigem Grund (#F5F2ED) braucht fast keinen Schatten. Der Kontrast zwischen beiden Tönen ist der Inbegriff von „Clean Design".
*   **Shadow-Substitute:** Statt Schatten ein hauchdünner Border in `outline-variant` mit nur **10% Opacity**, wenn ein Element wirklich abgegrenzt werden muss.
*   **Ambient Shadows:** Nur für hochpriorisierte schwebende Elemente. Schatten nutzt `on-surface` bei sehr geringer Opacity für einen natürlichen Ambient-Licht-Effekt.
*   **The "Ghost Border" Fallback:** Für Inputs `outline-variant` bei **20% Opacity**. Niemals reines Schwarz oder hochkontrastige Linien.

---

## 5. Components (Visual Update)

### Cards (The "Content Block")
*   **Hintergrund:** Weiß (#FFFFFF) – schwebt auf dem beigen Untergrund. Wirkt luftig und modern.
*   **Corner Radius:** Bleibt subtil (Index 1).
*   **Structure:** Keine Borders. Asymmetrisches Padding für den Editorial-Look.

### Buttons (The "Jewelry" Effect)
Hier lassen wir die Beere glänzen:
*   **Primary:** Hintergrund in der Beerenfarbe (`primary`). Text in hellem Beige oder Weiß (`on-primary`). Shape: `full`.
*   **Secondary:** Outline-Button in der Beerenfarbe (0.5px Stärke) auf beigem Grund.
*   **Tertiary (Ghost):** Nur Text in Beere, ohne Hintergrund. Für Aktionen wie „Mehr ansehen".

### Input Fields
*   **Style:** Minimalistisch. `surface-container-lowest` (#FFFFFF) Hintergrund mit Ghost Border (`outline-variant` @ 20%).
*   **States:** Bei Fokus Border-Übergang zu `primary` bei 100% Opacity.

### Chips (Nischen-Tags)
*   Hintergrund: `surface-container-high` (dunkleres Beige).
*   Schrift: in der Beerenfarbe (`primary`). Kein Border. Subtile Rundung.
*   Wirkt extrem „editorial".

### The "UGC Reel" Component
*   **Visuals:** Gestaffelte vertikale Höhen (Masonry-Stil). Keine Divider. `NORMAL` Spacing (Index 2) zwischen Videos.

---

## 6. Do's and Don'ts (Refined)

### Do:
*   **Do** nutze Weißraum großzügig. Beige braucht Platz zum Atmen.
*   **Do** setze die Beerenfarbe als „Leitsystem" ein – das Auge des Nutzers soll der Farbe folgen.
*   **Do** lass Bilder in die nächste Hintergrundsektion „bluten", um das Grid aufzubrechen.
*   **Do** verwende (optional) Serif-Schriften für Zitate oder Headlines, um den „Vogue"-Charakter zu verstärken.
*   **Do** nutze `primary-fixed-dim` für subtile Hover-States auf interaktiven Elementen.

### Don't:
*   **Don't** nutze zu viele verschiedene Beerentöne. Bleib bei einer Hauptnuance (z.B. gedecktes Brombeere), um den „Clean"-Faktor nicht zu gefährden.
*   **Don't** kombiniere das Beige mit hartem Schwarz. Nutze stattdessen ein sehr dunkles Anthrazit oder tiefes Umbra für Text.
*   **Don't** nutze 1px solid Borders zur Strukturierung. Das zerstört sofort das Premium-Editorial-Gefühl.
*   **Don't** nutze Standard-Drop-Shadows (z.B. `0 2px 4px`). Zu schwer für diese Ästhetik.
*   **Don't** nutze Divider oder horizontale Linien. Nutze vertikalen Raum zur Trennung.

---

## 7. Designer Note: Der neue Look
*„Stell dir das Design wie ein hochwertiges Interior-Magazin vor: Die Wände sind beige, die Möbel schlicht und hell, aber auf dem Tisch steht eine Vase mit tiefroten Beeren oder ein einzelnes Samtkissen in Pflaume. Dieser punktuelle Einsatz von Farbe auf einer neutralen Basis ist das Geheimnis für den 'Editorial Artisan' Look."*

Die Beerenfarbe (`primary`), das Muted Brown (`secondary`) und Plum (`tertiary`) werden sparsam eingesetzt – wie Schmuck auf einem neutralen Outfit. Kleine Akzente: ein Kategorie-Tag, ein Button, ein hervorgehobenes Wort in der Headline. Das schafft das Gefühl intentionaler Kuration und baut Vertrauen bei potenziellen Marken auf.