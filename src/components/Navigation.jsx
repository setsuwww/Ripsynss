import clsx from "clsx"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { useActiveSection } from "./hooks/useActiveSection"
import { useScrollSection } from "./hooks/useScrollSection"

export default function Navigation() {
  const scrolled = useScrollSection()
  const activeSection = useActiveSection()
  const [open, setOpen] = useState(false)

  return (
    <header className="p-2">
      <nav
        className={clsx(
          "fixed z-50 left-1/2 -translate-x-1/2 transition-all",
          scrolled ? "glass-effect top-4 rounded-full" : "top-6"
        )}
      >
        <div className={clsx(
            "mx-auto flex items-center justify-between",
            "w-[calc(100vw-2rem)] max-w-7xl",
            "transition-all duration-300",
            scrolled ? "px-8 py-3" : "px-6 py-6"
          )}
        >
          <span className="font-pixel font-bold text-white dark:text-slate-800 space-x-2">
            Rifqi<span className="gradient-text"> Synyster</span>
          </span>

          <DesktopNav active={activeSection} />

          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <MobileNav
          open={open}
          active={activeSection}
          scrolled={scrolled}
          onClose={() => setOpen(false)}
        />
      </nav>
    </header>
  )
}
