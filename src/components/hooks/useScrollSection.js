import { useEffect, useState } from "react"

export function useScrollSection(offset = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > offset
      setScrolled(prev => (prev !== next ? next : prev))
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [offset])

  return scrolled
}
