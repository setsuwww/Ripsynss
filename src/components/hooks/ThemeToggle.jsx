import { useDarkMode } from "./useDarkMode"

export default function ThemeToggle() {
  const [theme, setTheme] = useDarkMode()

  return (
    <button aria-label="Toggle theme" className="flex items-center gap-x-2 mt-4 md:mt-0" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <div
        className="
        relative flex items-center justify-center
        w-7 h-7 rounded-full
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
          relative inline-flex h-3 w-3 rounded-full
          bg-sky-400 hover:bg-sky-600 dark:bg-yellow-400 hover:dark:bg-yellow-600
          transition-all
        "
        />
      </div>

      {theme === "dark" 
        ? (<span className="text-yellow-400">Light mode</span>) 
        : (<span className="text-sky-400">Dark mode</span>)
      }
    </button>
  )
}
