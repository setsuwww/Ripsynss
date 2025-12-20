import { useEffect, useState } from "react"

export function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light"
    return localStorage.theme || "light"
  })

  useEffect(() => {
    const root = window.document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.theme = theme
  }, [theme])

  return [theme, setTheme]
}
