import { useEffect, useState } from "react"

export function useActiveSection() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return active
}
