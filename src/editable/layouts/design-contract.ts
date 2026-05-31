import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f5f5f5',
  '--slot4-page-text': '#111820',
  '--slot4-panel-bg': '#f0f0f0',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#5a6472',
  '--slot4-soft-muted-text': '#76808f',
  '--slot4-accent': '#3665f3',
  '--slot4-accent-fill': '#3665f3',
  '--slot4-accent-soft': '#e9efff',
  '--slot4-dark-bg': '#111820',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#e7e7e7',
  '--slot4-cream': '#f5f5f5',
  '--slot4-warm': '#f5f5f5',
  '--slot4-lavender': '#f5f5f5',
  '--slot4-gray': '#f0f0f0',
  '--slot4-body-gradient': 'linear-gradient(180deg, #f5f5f5 0%, #f5f5f5 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-black/[0.08]',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_10px_32px_rgba(15,23,42,0.06)]',
  shadowStrong: 'shadow-[0_16px_44px_rgba(15,23,42,0.12)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.01),rgba(0,0,0,0.6))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-10 sm:py-12 lg:py-14',
  },
  layout: {
    safeGrid: 'grid gap-5 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]',
    minRailCard: 'w-[250px] shrink-0 snap-start',
  },
  type: {
    eyebrow: 'text-[11px] font-bold uppercase tracking-[0.18em]',
    heroTitle: 'text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl',
    sectionTitle: 'text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl',
    body: 'text-base leading-relaxed',
  },
  surface: {
    card: `rounded-3xl border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-3xl border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-3xl ${editablePalette.darkBg} ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary: `inline-flex items-center justify-center rounded-full bg-[var(--slot4-accent-fill)] px-7 py-3 text-sm font-bold text-white transition hover:opacity-90`,
    secondary: `inline-flex items-center justify-center rounded-full border ${editablePalette.border} ${editablePalette.surfaceBg} px-7 py-3 text-sm font-bold ${editablePalette.surfaceText} transition hover:bg-black/[0.03]`,
    accent: `inline-flex items-center justify-center rounded-full ${editablePalette.darkBg} px-7 py-3 text-sm font-bold text-white transition hover:opacity-90`,
  },
  media: {
    frame: `relative overflow-hidden rounded-2xl ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(15,23,42,0.14)]',
    fade: 'transition duration-300 hover:opacity-90',
  },
} as const

export const aiLayoutRules = [
  'Keep the UI light, utility-first, and commerce-like with clean grids and gray section slabs.',
  'Use horizontal product and event rails with multiple card variants.',
  'Preserve dynamic post rendering, routing, and postHref/buildPostUrl helpers.',
] as const
