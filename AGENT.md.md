# AGENT.md — Apologetics 101 Project Specification & AI Rules

## 1. Project Overview & Role
* **Project Name:** Apologetics 101 (Working Title)
* **Objective:** A fast, highly structured, editorial "cheat sheet" web app for Christian apologetics and biblical reliability.
* **Core Philosophy:** Content-first, high legibility, zero fluff. Takes complex historical, textual, and philosophical arguments and distills them into digestible, searchable, card-based frameworks.
* **AI Agent Role:** Lead Full-Stack Engineer and UX Specialist. Maintain rigid visual coherence, component architecture, and clean code standards.

---

## 2. Tech Stack & Architecture
* **Framework:** React 18+ (bootstrapped via Vite)
* **Styling:** Tailwind CSS + Lucide React (for minimalist technical iconography)
* **Type System / Validation:** TypeScript or JSDoc JS (Strict component typing)
* **Routing:** React Router v6 (or lightweight hash routing for SPA performance)
* **Deployment:** Vercel / GitHub Pages

---

## 3. Design System & Visual Direction
**Aesthetic Theme:** *Modern Editorial Brutalism & Blueprint Studio*
High structure, 1px architectural grid lines, high-contrast monochrome dark mode, industrial typography.

### 🎨 Color Palette
| Token Name | Hex / Value | Usage |
| :--- | :--- | :--- |
| `bg-primary` | `#0C0C0C` | App main background |
| `bg-surface` | `#121212` | Card/Section fill background |
| `text-primary` | `#F4F4F0` | Warm off-white primary text |
| `text-muted` | `#8E8E8A` | Secondary labels, descriptions |
| `border-grid` | `#2A2A2A` | Structural 1px grid lines (or `rgba(255,255,255,0.1)`) |
| `accent-pill` | `#1A1A1A` | Mono category badge backgrounds |

### 🔤 Typography & Hierarchy
1. **Primary Headers / Sans-Serif:** `Inter`, `Helvetica Now`, or system neo-grotesque sans.
   * *Style:* Bold, uppercase tracking (`tracking-wider`), tight vertical rhythm.
2. **Meta / UI / Mono:** `Space Mono`, `JetBrains Mono`, or `Courier Prime`.
   * *Style:* Small, crisp, all-caps tags, bracketed categories (e.g., `[MANUSCRIPTS]`, `[COSMOLOGY]`, `[THEODICY]`).

### 📐 Layout & Grid Guidelines
* **Architectural Grid:** Use 1px borders (`border border-[#2A2A2A]`) on content sections, topic cards, and headers to give a blueprint/technical schematic look.
* **Card Anatomy:**
  * Top: Monospace category pill + timestamp/read time.
  * Media Block: 16:9 or 4:3 edge-to-edge media/diagram block with subtle hover scale (`scale-[1.02]`) and darkening overlay (`bg-black/40`).
  * Content: Bold title, 30-second summary, and a bottom border action button ("EXPLORE ARGUMENT →").
* **Minimalist Inputs:** Search bars and form inputs must use `border-b border-[#2A2A2A]` only with no rounded background fill.

---

## 4. Content Architecture per Topic Card
Every apologetics module/article must adhere to this precise content structure:

1. **Category Tag:** Mono bracketed category (e.g., `[RELIABILITY & CANON]`).
2. **The 30-Second Summary:** 2–3 sentence takeaway for quick recall in conversations.
3. **The Logical Syllogism:** Step-by-step premises and conclusion (P1, P2, C).
4. **Historical & Archaeological Data:** Primary source quotes and manuscript stats.
5. **Objections & Rebuttals:** Direct Q&A accordion addressing common skeptical counter-arguments.

---

## 5. Coding Standards & Component Rules

1. **Tailwind Class Organization:**
   * Group utilities by layout, sizing, typography, and state:
     `className="flex flex-col border border-[#2A2A2A] bg-[#121212] p-6 transition-all duration-300 hover:border-[#F4F4F0]"`
2. **Component File Structure:**
   ```text
   src/
   ├── assets/
   ├── components/
   │   ├── layout/       (Navbar, Footer, GridContainer)
   │   ├── ui/           (MonoPill, BlueprintCard, SearchInput)
   │   └── apologetics/  (SyllogismBlock, ManuscriptTable, Accordion)
   ├── data/             (JSON/JS schemas containing topic data)
   └── pages/