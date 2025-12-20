import { Moon, Sun } from "lucide-react"
import { useDarkMode } from "./useDarkMode"

export default function ThemeToggle() {
  const [theme, setTheme] = useDarkMode()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg transition-colors hover:bg-black/10 dark:hover:bg-white/10"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
