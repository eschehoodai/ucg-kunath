# Workpaper – Landing Page „Annie Kunth | UGC Creator"

**Erstellt:** 15. April 2026  
**Zuletzt aktualisiert:** 24. April 2026  
**Status:** v1.6 – SEO-Optimierung & rechtliche Seiten ergänzt  

---

## 1. Projektübersicht

Eine One-Page-Landingpage für Annie Kunth (@anniie_kunth), UGC Creatorin im Bereich Lifestyle, Fashion und Beauty. Die Seite richtet sich an Marken, Agenturen und eCommerce-Shops, die authentischen Content buchen möchten.

**Technologie-Stack:** HTML5 · CSS3 · Vanilla JavaScript (kein Framework)

---

## 2. Erstellte Dateien

| Datei | Beschreibung |
| :--- | :--- |
| `index.html` | Gesamte Seitenstruktur mit allen Sektionen |
| `styles.css` | Komplettes Styling nach Design System „The Editorial Artisan" |
| `script.js` | Interaktivität: Navigation, Animationen, Filter, Formular |
| `impressum.html` | Impressum mit Platzhaltern (§ 5 TMG) |
| `datenschutz.html` | Datenschutzerklärung mit Platzhaltern (DSGVO) |
| `robots.txt` | Crawler-Steuerung; Impressum/Datenschutz ausgeschlossen |
| `sitemap.xml` | XML-Sitemap für Google-Indexierung |

---

## 2.1 Medien-Struktur (Umbenennung)

Alle Mediendateien wurden von kryptischen Instagram-IDs in kurze, projektbezogene Namen umbenannt:

| Originalname | Neuer Name | Ordner |
| :--- | :--- | :--- |
| `Projekt1TrinkProdukt/` | `drinks/` | 7 Bilder: `drinks-1.jpg` – `drinks-7.jpg` |
| `Projekt2KleidungNahaufnahme/` | `fashion/` | 5 Bilder: `fashion-1.jpg` – `fashion-5.jpg` |
| `Projekt3Tennis/` | `padel/` | 4 Bilder: `padel-1.jpg` – `padel-4.jpg` |
| `Projekt4Tasche/` | `bag/` | 6 Bilder: `bag-1.jpg` – `bag-6.jpg` |
| `bag/bag-video.mp4` | `padel/padel-video.mp4` | Verschoben & umbenannt (gehört zu Padel) |
| `UCG Kunath.JPG` | `annie-hero.jpg` | Root |
| `VideoKleidung1.mp4` | `fashion-video-1.mp4` | Root |
| `VideoKleidung2.mp4` | `fashion-video-2.mp4` | Root |
| `VideoTrinkflasche1.mp4` | `drinks-video-1.mp4` | Root |

### Medienverwendung auf der Website

| Bereich | Verwendete Medien |
| :--- | :--- |
| **Hero** | `annie-hero.jpg` (Profilbild) |
| **Über mich** | Image-Strip: `drinks-1.jpg`, `fashion-1.jpg`, `padel-2.jpg` |
| **Portfolio – Drinks** | `drinks-1.jpg` – `drinks-5.jpg` + `drinks-video-1.mp4` |
| **Portfolio – Fashion** | `fashion-1.jpg` – `fashion-5.jpg` + `fashion-video-1.mp4`, `fashion-video-2.mp4` |
| **Portfolio – Padel** | `padel-1.jpg` – `padel-4.jpg` + `padel-video.mp4` |
| **Portfolio – Bag** | `bag-1.jpg` – `bag-6.jpg` |
| **Services** | `drinks-2.jpg`, `bag-2.jpg`, `padel-2.jpg` (Karten-Header) |

---

## 3. Umgesetzte Sektionen

### 3.1 Navigation
- Glassmorphism-Effekt (70% Opacity + Backdrop-Blur)
- Sticky-Header mit Scroll-Effekt (kompaktere Padding bei Scroll)
- Mobile Hamburger-Menü mit animiertem Toggle

### 3.2 Hero
- Vollflächiger Video-Hintergrund (Viewport-Höhe) mit 4 MP4s nebeneinander (je 25 % Breite)
- Verwendete Videos: `fashion-video-1.mp4`, `drinks-video-1.mp4`, `fashion-video-2.mp4`, `header-video-4.mp4`
- Dunkles Overlay für Lesbarkeit, zentrierter weißer Text darüber
- Alle Hero-Videos: stummgeschaltet, geloopt, Wiedergabegeschwindigkeit 0.65×
- Responsive: 2×2-Grid auf ≤ 768 px
- Zwei CTAs: „Projekt anfragen" (primär) + „Portfolio ansehen" (Ghost)

### 3.3 Über mich
- Dunkler Hintergrund (surface-container-low) für Kontrast
- Persönlicher Text + animierte Statistik-Zähler (147+ Beiträge, 962 Follower, 50+ Brands)

### 3.4 Portfolio
- **Projektbasierte Struktur** statt einzelner Platzhalter
- Filter-Chips: Alle / Drinks / Fashion / Padel / Accessoires
- 4 Projekt-Gruppen mit Unter-Überschriften:
  - **Drinks & Lifestyle**: 5 Fotos + 1 Video (Matcha/BIKINI Brand Content)
  - **Fashion & Outfit**: 5 Fotos + 2 Videos (Kleidung Nahaufnahme, Outfit Reels)
  - **Sport & Padel**: 4 Fotos (Padel Court, Action, Equipment)
  - **Accessoires & Tasche**: 6 Fotos + 1 Video (Ledertasche, Street Style)
- Masonry-Grid mit staggered tall items pro Projekt
- Hover-Overlays mit Labels auf jedem Item
- Video-Items mit Play/Pause-Button (Click-to-Play, nur ein Video gleichzeitig)
- Alle Bilder mit `loading=\"lazy\"` für Performance

### 3.5 Services
- Drei Service-Karten: UGC Videos, Foto Content (featured), Content Pakete
- Konversionsorientierte Deutsche Texte mit Nutzen-Fokus und 4 Bullet Points je Karte
- Individuelle CTA-Buttons je Karte: „Jetzt UGC Video anfragen", „Foto-Shooting buchen", „Komplettpaket anfragen"
- Abschließender Section-CTA: „Dein individuelles Angebot in 24h"
- Hover-Lift-Animation; „Beliebt"-Badge auf der hervorgehobenen Karte

### 3.6 Prozess
- 4-Schritte-Ablauf: Anfrage → Briefing → Produktion → Lieferung
- SVG-Icons statt Zahlen (Sprechblase, Dokument, Videokamera, Häkchen)
- Kompaktes vertikales Padding (≈ 15 % des ursprünglichen Werts)
- Keine Trennlinie zwischen den Schritten
- Responsiv: 2-spaltig bei ≤ 768 px, 1-spaltig bei ≤ 480 px

### 3.7 Kontakt
- Zweispaltiges Layout: Info + Formular
- Formularfelder: Name, E-Mail, Marke, Service-Auswahl, Nachricht
- Client-seitige Validierung + Erfolgsmeldung
- Direkte E-Mail- und Instagram-Links

### 3.8 Footer
- Logo, Navigation, Social Links, Copyright
- Impressum- und Datenschutz-Links im Copyright-Bereich ergänzt

---

## 3.9 Rechtliche Seiten

### impressum.html
- Eigenes Layout mit `legal-page`-Klasse, nutzt bestehendes Design-System (Fonts, CSS-Variablen)
- Navigation mit Links zurück zu `index.html`
- Platzhalter-Felder für: Name, Adresse, USt-ID, Verantwortlicher
- Impressum/Datenschutz von `robots.txt` mit `Disallow` ausgeschlossen (kein SEO-Wert)

### datenschutz.html
- Gleiche Struktur wie Impressum
- Abgedeckte Themen: Hosting, Kontaktformular, Google Fonts, externe Links (Instagram/TikTok), Analytics, Betroffenenrechte (Art. 15–21 DSGVO)
- Platzhalter für: Hosting-Anbieter, Formular-Dienst, Analytics-Tool, Datum

---

## 4. Design-System-Umsetzung

| Design-Vorgabe | Umsetzung |
| :--- | :--- |
| **No-Line Rule** | Keine 1px-Borders für Sektionen; Trennung durch Background-Shifts |
| **Glassmorphism** | Navigation + Floating Cards: 70% Opacity + blur(20px) |
| **Tonal Layering** | Elevation durch Hintergrundfarben statt Schatten |
| **Typografie** | Manrope (Display/Headlines) + Inter (Body/Labels) |
| **Farbpalette** | Surface #807475, Primary #a6646f, Muted Earthy Tones |
| **Intentional Asymmetry** | Staggered Portfolio-Grid, asymmetrische Layouts |
| **Ghost Borders** | outline-variant @ 20% Opacity für Input-Felder |
| **No Drop Shadows** | Keine Standard-Schatten; nur subtile Box-Shadows auf Primary-CTAs |
| **Kein reines Schwarz** | Text in #2c2325 (on-surface) statt #000000 |

---

## 4.1 SEO-Umsetzung

| Maßnahme | Datei | Details |
| :--- | :--- | :--- |
| **Title-Tag** | `index.html` | Keywords: UGC Creator, Lifestyle, Fashion, Beauty, Marken |
| **Meta Description** | `index.html` | Conversion-orientiert, 24h-Response als USP |
| **Meta Keywords** | `index.html` | 10 relevante Keywords (DE) |
| **Canonical-Tag** | `index.html` | `https://www.annie-kunth.de/` (Platzhalter) |
| **Open Graph** | `index.html` | og:title, og:description, og:image (1200×630), og:locale de_DE |
| **Twitter Card** | `index.html` | summary_large_image, @anniie_kunth |
| **JSON-LD Schema** | `index.html` | `Person`-Typ mit jobTitle, sameAs (IG/TT), offers, knowsAbout |
| **Alt-Texte** | `index.html` | About-Strip + alle 3 Service-Karten-Bilder verbessert |
| **robots.txt** | `robots.txt` | `Allow: /`, Impressum/Datenschutz `Disallow`, Sitemap-Verweis |
| **sitemap.xml** | `sitemap.xml` | One-Page; priority 1.0, changefreq monthly |
| **Favicon-Links** | `index.html` | `favicon.png` + `apple-touch-icon.png` (Dateien noch erstellen) |

> **Hinweis:** Alle URLs mit `https://www.annie-kunth.de` sind Platzhalter und müssen vor Go-Live durch die echte Domain ersetzt werden.

---

## 5. JavaScript-Features

- **Mobile Navigation:** Hamburger-Menü mit CSS-Animationen
- **Scroll-Animationen:** IntersectionObserver für Fade-In-Effekte
- **Counter-Animation:** Animierte Zähler mit Ease-Out-Kurve
- **Portfolio-Filter:** Chip-basierte Projekt-Filterung (Alle / Drinks / Fashion / Padel / Accessoires)
- **Video Play/Pause:** Click-to-Play für Portfolio-Videos; nur ein Video gleichzeitig aktiv
- **Hero-Wiedergabegeschwindigkeit:** 0.65× für alle Hero-Hintergrundvideos
- **Kontaktformular:** Client-seitige Validierung + Erfolgsfeedback
- **Smooth Scrolling:** Sanftes Scrollen zu Ankerpunkten

---

## 6. Responsive Breakpoints

| Breakpoint | Anpassungen |
| :--- | :--- |
| **> 1024px** | Volle Desktop-Ansicht |
| **≤ 1024px** | Kleinere Hero-Bilder, 2-Spalten Services |
| **≤ 768px** | Mobile Navigation, einspaltiges Layout, gestackte Elemente |
| **≤ 480px** | Kompakte Ansicht, einzelne Portfolio-Spalte |

---

## 7. Änderungsprotokoll

| Version | Datum | Änderung |
| :--- | :--- | :--- |
| **v1.0** | 15.04.2026 | Erstversion: vollständige Landing Page mit Platzhalter-Portfolio |
| **v1.1** | 15.04.2026 | Echte Medien integriert, alle Dateien umbenannt, Portfolio in 4 Projektgruppen aufgeteilt |
| **v1.2** | 15.04.2026 | Services-Section: konversionsorientierte Texte, individuelle CTAs, Section-CTA |
| **v1.3** | 15.04.2026 | Hero komplett neu: 4 MP4-Videos als Hintergrund, Overlay, 0.65× Wiedergabegeschwindigkeit |
| **v1.4** | 15.04.2026 | Prozess-Section: SVG-Icons statt Zahlen, kompaktes Padding, Trennlinie entfernt |
| **v1.5** | 15.04.2026 | `bag-video.mp4` → `padel/padel-video.mp4` korrekt zugeordnet; Bag-Section ohne Video |
| **v1.6** | 24.04.2026 | SEO-Optimierung: erweiterter `<head>` (OG, Twitter Card, JSON-LD, Canonical), Alt-Texte verbessert, Footer-Links; `impressum.html`, `datenschutz.html`, `robots.txt`, `sitemap.xml` erstellt |

---

## 8. Offene Punkte / Nächste Schritte

- [ ] **Domain einsetzen:** Alle `https://www.annie-kunth.de`-Platzhalter in `index.html`, `robots.txt`, `sitemap.xml` durch echte Domain ersetzen
- [ ] **Impressum ausfüllen:** `impressum.html` – Name, Adresse, USt-ID eintragen
- [ ] **Datenschutz ausfüllen:** `datenschutz.html` – Hosting-Anbieter, Formular-Dienst, Analytics-Tool, Datum eintragen
- [ ] **Favicon erstellen:** `favicon.png` (32×32 px) und `apple-touch-icon.png` (180×180 px) anlegen
- [ ] **OG-Bild optimieren:** `annie-hero.jpg` in 1200×630 px Crop für Social Sharing
- [ ] **Google Fonts lokal hosten:** Für bessere DSGVO-Konformität und LCP-Performance
- [ ] **Portfolio-Inhalte:** Weitere Projekte und Videos hinzufügen, sobald verfügbar
- [ ] **Video-Thumbnails:** Custom Poster-Frames für Videos erstellen (derzeit erstes Frame aus Metadaten)
- [ ] **Backend-Integration:** Kontaktformular an E-Mail-Service anbinden (z. B. Formspree, Netlify Forms)
- [ ] **Performance:** Bilder in WebP konvertieren
- [ ] **Analytics:** Tracking einrichten (z. B. Plausible – DSGVO-freundlich, kein Cookie-Banner nötig)
- [ ] **Profilbild:** Separates, freigestelltes Hero-Bild erstellen (aktuell wird Instagram-Screenshot verwendet)
