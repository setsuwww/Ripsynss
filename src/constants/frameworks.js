import { SiNextdotjs, SiNuxtdotjs, SiLaravel } from "react-icons/si"

export const frameworks = [
  {
    Icon: SiNextdotjs,
    title: "Nextjs",
    color: `
      text-white
      dark:text-slate-700
    `,
    bg: `
      bg-gradient-to-br from-white/10 to-white/5 border-l-2 border-white/50
      dark:bg-gradient-to-br dark:from-slate-500/20 dark:to-slate-400/20 dark:border-slate-400/50
    `,
    border: `
      border-white/20 hover:border-white/40
      hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent
      dark:border-slate-200/30 dark:hover:border-slate-600/50
      dark:hover:bg-gradient-to-br dark:hover:from-slate-200/40 dark:hover:to-transparent
    `,
    outline: `hover:outline-white/20 dark:hover:outline-slate-400/60`,
    description:
      "A powerful React framework with CSR, SSR, ISR, SSG, API Routing and SEO Performance",
  },

  {
    Icon: SiNuxtdotjs,
    title: "Nuxtjs",
    color: `
      text-emerald-300
      dark:text-emerald-600
    `,
    bg: `
      bg-gradient-to-br from-emerald-500/10 to-emerald-700/10 border-l-2 border-emerald-700
      dark:bg-gradient-to-br dark:from-emerald-500/20 dark:to-emerald-400/10 dark:border-emerald-600
    `,
    border: `
      border-emerald-500/20 hover:border-emerald-500/40
      hover:bg-gradient-to-br hover:from-emerald-500/5 hover:to-transparent
      dark:border-emerald-600/30 dark:hover:border-emerald-700/50
      dark:hover:bg-gradient-to-br dark:hover:from-emerald-500/10 dark:hover:to-transparent
    `,
    outline: `hover:outline-emerald-500/20 dark:hover:outline-emerald-400/60`,
    description:
      "Vue-based framework with SSR and SSG same as Nextjs but Vue-based.",
  },

  {
    Icon: SiLaravel,
    title: "Laravel",
    color: `
      text-red-300
      dark:text-red-600
    `,
    bg: `
      bg-gradient-to-br from-red-500/20 to-red-700/10 border-l-2 border-red-500
      dark:bg-gradient-to-br dark:from-red-500/20 dark:to-red-400/10 dark:border-red-600
    `,
    border: `
      border-red-500/20 hover:border-red-500/40
      hover:bg-gradient-to-br hover:from-red-500/5 hover:to-transparent
      dark:border-red-600/30 dark:hover:border-red-700/50
      dark:hover:bg-gradient-to-br dark:hover:from-red-500/10 dark:hover:to-transparent
    `,
    outline: `hover:outline-red-500/20 dark:hover:outline-red-400/60`,
    description:
      "PHP Elegant backend framework with Blade, APIs, and Model, View, Controller Structure.",
  },
]
