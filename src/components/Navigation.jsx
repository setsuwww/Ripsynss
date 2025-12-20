import clsx from 'clsx'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { navItems } from "../constants/navItems"
import ThemeToggle from './hooks/ThemeToggle'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )
    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <header className='p-2'>
      <nav
        className={clsx(
          "fixed z-50 transition-all duration-300",
          "left-1/2 -translate-x-1/2",
          scrolled
            ? "glass-effect top-4 md:px-8 rounded-full"
            : "top-6"
        )}
      >
        <div
          className={clsx(
            "mx-auto max-w-6xl w-[calc(100vw-2rem)] md:w-[calc(100vw-4rem)]",
            "rounded-2xl md:rounded-full",
            "border-none",
            "transition-all duration-300",
            scrolled ? "p-3 px-6 lg:p-5" : "p-4 lg:p-7"
          )}
        >

          <div className="flex justify-between items-center">
            <p className="font-pixel flex items-center space-x-3 font-bold">
              <span className="text-md md:text-lg tracking-wider text-white dark:text-slate-900">
                Rifqi<span className="gradient-text"> Synyster</span>
              </span>
            </p>

            <div className="hidden md:flex space-x-8">
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "flex items-center tracking-wide rounded-lg transition-all duration-300",
                      activeSection === item.href.slice(1)
                        ? "text-sky-400 dark:text-yellow-600 font-semibold bg-radial from-sky-500/15 dark:from-yellow-500/20 px-4 py-1"
                        : "text-slate-500 dark:text-slate-700 hover:text-slate-300 dark:hover:text-slate-900"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx(
                "md:hidden p-2 rounded-lg transition-all",
                isOpen
                  ? "text-sky-400 bg-sky-500/10 dark:text-yellow-600 dark:bg-yellow-500/20"
                  : "text-rose-400 bg-rose-500/10 dark:text-rose-600 dark:bg-rose-500/10"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={clsx(
                  "md:hidden fixed z-50",
                  "left-1/2 -translate-x-1/2",
                  "w-[calc(100vw-2rem)] max-w-sm",
                  "rounded-2xl border",
                  "bg-zinc-900/90 dark:bg-white/90",
                  "border-white/10 dark:border-slate-800/10",
                  "backdrop-blur-sm shadow-xl",
                  scrolled ? "top-20" : "top-24"
                )}
              >
                <ul className="flex flex-col p-3">
                  {navItems.map((item) => {
                    const active = activeSection === item.href.slice(1)

                    return (
                      <li key={item.href} className='gap-y-2'>
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={clsx(
                            "block w-full rounded-xl px-4 py-2.5 text-center",
                            "text-base font-medium transition-colors duration-200",
                            active
                              ? "bg-zinc-800/90 dark:bg-slate-200 text-white dark:text-slate-900"
                              : "text-white/70 dark:text-slate-700 hover:bg-white/5 dark:hover:bg-slate-800/5"
                          )}
                        >
                          {item.label}
                        </a>
                      </li>
                    )
                  })}
                   <ThemeToggle />
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
