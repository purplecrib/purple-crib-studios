# Design Brief

## Direction

Purple Crib Studios — Premium mediatech agency landing page combining tradition with innovative technology, showcasing photography and business solutions with vibrant purple branding.

## Tone

Brutalist minimalism meets luxury: bold geometric design, high-contrast typography, purposeful restraint with dramatic accent colors. Agency-grade confidence without decoration.

## Differentiation

Vivid purple accent gradients on hero text and CTAs paired with warm amber secondary creates visual tension; clean structural zones for Photography vs. Business Solutions clarity.

## Color Palette

| Token      | OKLCH             | Role                           |
| ---------- | ----------------- | ------------------------------ |
| background | 0.125 0.01 280    | Dark charcoal base              |
| foreground | 0.95 0.01 280     | White typography               |
| card       | 0.18 0.015 280    | Elevated surface for sections   |
| primary    | 0.68 0.26 300     | Vibrant purple brand accent     |
| accent     | 0.75 0.18 55      | Warm amber CTAs & highlights    |
| muted      | 0.25 0.03 280     | Subtle backgrounds & dividers   |

## Typography

- Display: Space Grotesk — bold geometric headings with tight tracking
- Body: Bricolage Grotesque — contemporary sans-serif for body text & UI
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold`, label `text-xs font-semibold tracking-widest uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Minimal shadows with intentional layering: card surfaces use `shadow-elevated` for depth; accent glows via `shadow-glow` on hero elements only. Clean borders and surface color variance create hierarchy.

## Structural Zones

| Zone    | Background              | Border              | Notes                                        |
| ------- | ----------------------- | ------------------- | -------------------------------------------- |
| Header  | `bg-background`         | subtle `border-b`   | Navigation minimal, logo in display font, dark mode toggle |
| Hero    | `bg-gradient-accent`    | —                   | Bold animated gradient, dual CTA buttons, scroll indicator |
| Services| `bg-background`         | —                   | Photography & Business Solutions side-by-side |
| Bento   | `bg-background`         | —                   | Bento grid showcasing services in premium cards |
| Content | alternating `bg-card/40`| —                   | Grid sections for features/benefits          |
| Footer  | `bg-muted/50`           | `border-t primary`  | Purple accent top border, contact details    |

## Spacing & Rhythm

Large gaps between sections (80–120px) create breathing room; content padding at 24–48px. Compact internal spacing (12–16px) emphasizes micro-hierarchy. Whitespace as primary design tool.

## Component Patterns

- **Buttons**: Primary `bg-primary text-primary-foreground` with `shadow-glow`, secondary `bg-accent text-accent-foreground`, both `rounded-lg hover:scale-105 transition-smooth`
- **Cards**: `bg-card rounded-xl shadow-elevated` with `border border-border/50`, hover lifts via `hover:-translate-y-1 transition-smooth`
- **Bento cards**: `bg-muted/30 rounded-2xl p-6` with `border border-primary/20`, hover scales and glows; tall cards span 2 rows, wide cards span 2 columns. Icon accented in primary color.
- **Badges**: `bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold`
- **Dark mode toggle**: Icon button in navbar, animates between sun/moon SVG on click

## Motion

- **Entrance**: Sections fade in staggered (0.1s delays per element) as page loads; hero headline slides left, CTAs slide right. `animate-fade-in` base with `.stagger-1` through `.stagger-4` utilities.
- **Scroll indicator**: Animated arrow bounces gently with opacity pulse at hero bottom (`animate-scroll-arrow-bounce`). Fades out on scroll via `.scroll-indicator.hidden`.
- **Hover**: Buttons scale 1.05, cards lift 4px, accent glow on hover. All transitions 0.3s cubic-bezier.
- **Decorative**: Bento grid cards scale in on entrance. Floating orbs in hero continue gentle float motion.
- **Responsive**: Motion reduces on `prefers-reduced-motion: reduce` via Tailwind's built-in support.

## Constraints

- Dark mode via `.dark` class toggle (no light mode)
- Dark mode toggle in navbar uses icon button with smooth transition
- Scroll indicator bounces smoothly with opacity variation (not sharp/jarring)
- Maximum 3 colors used in any single UI component
- No rounded corners below 8px except for tags/badges
- All animations 0.3s–0.6s, no bouncy easing
- Bento grid responsive: 2 cols mobile, 3–4 cols desktop

## Signature Detail

Vibrant purple-to-amber gradient applied as text fill on hero headline and CTA buttons; creates memorable brand moment. Animated scroll indicator at hero bottom uses gentle bounce with opacity pulse—Apple-inspired tactile feedback. Bento grid showcases services with premium card elevation and glow-on-hover; scale-in entrance animation staggered per card.

