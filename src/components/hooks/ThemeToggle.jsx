import { useDarkMode } from "./useDarkMode"

export default function ThemeToggle() {
  const [theme, setTheme] = useDarkMode()

  return (
    <button aria-label="Toggle theme" className="group flex items-center gap-x-2 mt-4 md:mt-0 border-l-2 border-transparent hover:bg-sky-500/10 hover:border-sky-300/20 dark:hover:bg-yellow-500/10 dark:hover:border-yellow-300/40 rounded-full p-1 md:px-2.5 md:py-2 transition-colors" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <div
        className="
        relative flex items-center justify-center
        w-6 md:w-7 h-6 md:h-7 rounded-full
        border border-sky-700/40 dark:border-yellow-500/40
        transition-colors
        hover:bg-slate-800/5 dark:hover:bg-white/10
      "
      >
        {/* Ping ring */}
        <span
          className="
          absolute inline-flex h-full w-full rounded-full
          opacity-40 animate-ping
          bg-sky-400/40 dark:bg-yellow-400/40
        "
        />

        {/* Solid dot */}
        <span
          className="
          relative inline-flex h-2 md:h-3 w-2 md:w-3 rounded-full
          bg-sky-400 group-hover:bg-sky-600 dark:bg-yellow-400 group-hover:dark:bg-yellow-600
          transition-all
        "
        />
      </div>

      {theme === "dark" 
        ? (<span className="text-yellow-600">Light mode</span>) 
        : (<span className="text-sky-400">Dark mode</span>)
      }
    </button>
  )
}
