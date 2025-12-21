import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import ThemeToggle from "../components/hooks/ThemeToggle"
import { navItems } from "../constants/navItems"

export default function MobileNav({ open, active, onClose, scrolled }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className={clsx(
            "md:hidden fixed z-50 left-1/2 -translate-x-1/2",
            "w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-slate-500",
            "bg-zinc-900/90 dark:bg-white/90 backdrop-blur-sm shadow-xl",
            scrolled ? "top-20" : "top-24"
          )}
        >
          <ul className="flex flex-col p-3">
            {navItems.map(item => {
              const isActive = active === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className={clsx(
                      "block rounded-xl px-4 py-2.5 text-center",
                      isActive
                        ? "bg-zinc-800 dark:bg-slate-200 text-white dark:text-slate-900"
                        : "text-white/70 dark:text-slate-700"
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
  )
}
