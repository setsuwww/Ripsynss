const colorPalette = {
  sky: `
    from-sky-500/10 to-sky-600/10 border-sky-400/20 text-sky-300
    dark:from-sky-500/10 dark:to-sky-600/10 dark:border-sky-600/20 dark:text-sky-700
  `,

  teal: `
    from-teal-500/10 to-teal-600/10 border-teal-400/20 text-teal-300
    dark:from-cyan-500/10 dark:to-cyan-600/10 dark:border-cyan-600/20 dark:text-cyan-700
  `,

  green: `
    from-green-500/10 to-green-600/10 border-green-400/20 text-green-300
    dark:from-green-500/10 dark:to-green-600/10 dark:border-green-600/20 dark:text-green-700
  `,

  orange: `
    from-orange-500/10 to-orange-600/10 border-orange-400/20 text-orange-300
    dark:from-orange-500/10 dark:to-orange-600/10 dark:border-orange-600/20 dark:text-orange-700
  `,

  violet: `
    from-violet-500/10 to-violet-600/10 border-violet-400/20 text-violet-300
    dark:from-violet-500/10 dark:to-violet-600/10 dark:border-violet-600/20 dark:text-violet-700
  `,

  red: `
    from-red-500/10 to-red-600/10 border-red-400/20 text-red-300
    dark:from-red-500/10 dark:to-red-600/10 dark:border-red-600/20 dark:text-red-700
  `,

  amber: `
    from-amber-500/10 to-amber-600/10 border-amber-400/20 text-amber-300
    dark:from-amber-500/10 dark:to-amber-600/10 dark:border-amber-600/20 dark:text-amber-700
  `,

  lime: `
    from-lime-500/10 to-lime-600/10 border-lime-400/20 text-lime-300
    dark:from-lime-500/10 dark:to-lime-600/10 dark:border-lime-600/20 dark:text-lime-700
  `,

  emerald: `
    from-emerald-500/10 to-emerald-600/10 border-emerald-400/20 text-emerald-300
    dark:from-emerald-500/10 dark:to-emerald-600/10 dark:border-emerald-600/20 dark:text-emerald-700
  `,

  slate: `
    from-slate-800/20 to-slate-800/20 border-white/30 text-white
    dark:from-slate-200/40 dark:to-slate-100/40 dark:border-slate-400/20 dark:text-slate-800
  `,

  gray: `
    from-gray-500/10 to-gray-600/10 border-gray-400/20 text-gray-300
    dark:from-gray-500/10 dark:to-gray-600/10 dark:border-gray-600/20 dark:text-gray-700
  `,

  purple: `
    from-purple-500/10 to-purple-600/10 border-purple-400/20 text-purple-300
    dark:from-purple-500/10 dark:to-purple-600/10 dark:border-purple-600/20 dark:text-purple-700
  `,
}

export const techColors = {
  Tailwindcss: colorPalette.teal,

  React: colorPalette.sky,
  Golang: colorPalette.sky,

  Vuejs: colorPalette.green,
  Flask: colorPalette.green,

  MySQL: colorPalette.orange,
  Svelte: colorPalette.orange,

  PostgreSQL: colorPalette.teal,

  Laravel: colorPalette.red,

  Inertia: colorPalette.violet,

  Vite: colorPalette.violet,

  MariaDB: colorPalette.amber,

  Python: colorPalette.lime,

  MongoDB: colorPalette.emerald,

  SQLite: colorPalette.gray,

  Nextjs: colorPalette.slate,

  "ASP.Net": colorPalette.purple,
}
