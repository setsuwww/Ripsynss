import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMariadb,
  SiMongodb,
  SiDotnet
} from "react-icons/si"

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
      "Vue-based framework with SEO-Friendly same as Nextjs but Vue-based.",
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
      "PHP Elegant backend framework with Blade, APIs, and Model, View, Controller.",
  },

  {
    Icon: SiDotnet,
    title: "ASP.Net Core",
    color: `
      text-purple-400
      dark:text-purple-500
    `,
    bg: `
      bg-gradient-to-br from-purple-600/20 to-purple-800/10 border-l-2 border-purple-600
      dark:bg-gradient-to-br dark:from-purple-600/30 dark:to-purple-500/10 dark:border-purple-600
    `,
    border: `
      border-purple-500/30 hover:border-purple-500/50
      hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-transparent
      dark:border-purple-600/40 dark:hover:border-purple-700/60
      dark:hover:bg-gradient-to-br dark:hover:from-purple-600/20 dark:hover:to-transparent
    `,
    outline: `hover:outline-purple-500/30 dark:hover:outline-purple-500/60`,
    description:
      "Microsoft's cross-platform framework for building modern web apps with C#",
  },
]

export const databases = [
  {
    Icon: SiMysql,
    title: "MySQL",
    color: `
      text-cyan-400
      dark:text-cyan-500
    `,
    bg: `
      bg-gradient-to-br from-cyan-500/20 to-cyan-700/10 border-l-2 border-cyan-500
      dark:bg-gradient-to-br dark:from-cyan-500/20 dark:to-cyan-400/10 dark:border-cyan-600
    `,
    border: `
      border-cyan-500/20 hover:border-cyan-500/40
      hover:bg-gradient-to-br hover:from-cyan-500/5 hover:to-transparent
      dark:border-cyan-600/30 dark:hover:border-cyan-700/50
      dark:hover:bg-gradient-to-br dark:hover:from-cyan-500/10 dark:hover:to-transparent
    `,
    outline: `hover:outline-cyan-500/20 dark:hover:outline-cyan-400/60`,
    description:
      "Popular open-source relational database management system known for reliability and performance.",
  },

  {
    Icon: SiPostgresql,
    title: "PostgreSQL",
    color: `
      text-teal-400
      dark:text-teal-500
    `,
    bg: `
      bg-gradient-to-br from-teal-500/20 to-teal-700/10 border-l-2 border-teal-500
      dark:bg-gradient-to-br dark:from-teal-500/20 dark:to-teal-400/10 dark:border-teal-600
    `,
    border: `
      border-teal-500/20 hover:border-teal-500/40
      hover:bg-gradient-to-br hover:from-teal-500/5 hover:to-transparent
      dark:border-teal-600/30 dark:hover:border-teal-700/50
      dark:hover:bg-gradient-to-br dark:hover:from-teal-500/10 dark:hover:to-transparent
    `,
    outline: `hover:outline-teal-500/20 dark:hover:outline-teal-400/60`,
    description:
      "Advanced object-relational database with emphasis on extensibility and SQL compliance.",
  },

  {
    Icon: SiMariadb,
    title: "MariaDB",
    color: `
      text-amber-400
      dark:text-amber-500
    `,
    bg: `
      bg-gradient-to-br from-amber-500/20 to-amber-700/10 border-l-2 border-amber-500
      dark:bg-gradient-to-br dark:from-amber-500/20 dark:to-amber-400/10 dark:border-amber-600
    `,
    border: `
      border-amber-500/20 hover:border-amber-500/40
      hover:bg-gradient-to-br hover:from-amber-500/5 hover:to-transparent
      dark:border-amber-600/30 dark:hover:border-amber-700/50
      dark:hover:bg-gradient-to-br dark:hover:from-amber-500/10 dark:hover:to-transparent
    `,
    outline: `hover:outline-amber-500/20 dark:hover:outline-amber-400/60`,
    description:
      "Community-developed fork of MySQL with enhanced features, and storage engines.",
  },

  {
    Icon: SiMongodb,
    title: "MongoDB",
    color: `
      text-green-400
      dark:text-green-500
    `,
    bg: `
      bg-gradient-to-br from-green-500/20 to-green-700/10 border-l-2 border-green-500
      dark:bg-gradient-to-br dark:from-green-500/20 dark:to-green-400/10 dark:border-green-600
    `,
    border: `
      border-green-500/20 hover:border-green-500/40
      hover:bg-gradient-to-br hover:from-green-500/5 hover:to-transparent
      dark:border-green-600/30 dark:hover:border-green-700/50
      dark:hover:bg-gradient-to-br dark:hover:from-green-500/10 dark:hover:to-transparent
    `,
    outline: `hover:outline-green-500/20 dark:hover:outline-green-400/60`,
    description:
      "NoSQL document database with high performance, horizontal scaling, and flexible schema design.",
  },
]
