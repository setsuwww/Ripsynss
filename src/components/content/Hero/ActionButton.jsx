import { motion as Motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

export default function ActionButtons() {
  return (
    <Motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
      <Motion.a href="#portfolio" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group ring-2 border-0 ring-sky-300 dark:ring-yellow-600 bg-gradient-to-r from-sky-200 dark:from-yellow-500 to-sky-600 dark:to-yellow-700 hover:from-sky-100 dark:hover:from-yellow-400 hover:to-sky-700 dark:hover:to-yellow-600 hover:border-transparent dark:text-yellow-100 text-sky-950 font-semibold px-7 py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center">
        View My Work
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Motion.a>

      <Motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="font-pixel group relative inline-block">
        <span className="pointer-events-none absolute inset-0 rounded-full shine-border p-[4px]" />

        <span className="relative z-10 flex items-center px-7 py-3 rounded-full font-semibold border border-violet-900 dark:border-violet-300 hover:border-violet-400 dark:hover:border-violet-500 bg-gradient-to-b from-violet-100/0 via-violet-300/10 to-violet-500/20 hover:to-violet-500/40 transition-colors">
          <Mail className="mr-2 w-5 h-5 text-violet-300 dark:text-fuchsia-700 transition-all group-hover:scale-110" />
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-violet-600 dark:form-violet-200 to-fuchsia-200 dark:to-fuchsia-600">Get In Touch</span> 
        </span>
      </Motion.a>
    </Motion.div>
  )
}
