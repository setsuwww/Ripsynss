import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const container = {
  hidden: { opacity: 1 },
  exit: { opacity: 0, y: -200, transition: { duration: 1 } },
}

const text = {
  hidden: { y: 80, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay },
  }),
}

export default function IntroWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            variants={container}
            initial="hidden"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black p-8"
          >
            <div className="rounded-xl p-8 shadow-xl shadow-sky-900/50 ring ring-sky-500/10">
              <motion.h1
                custom={0}
                variants={text}
                initial="hidden"
                animate="visible"
                className="text-2xl md:text-4xl font-bold gradient-text"
              >
                Sheeshh!
              </motion.h1>

              <motion.p
                custom={0.3}
                variants={text}
                initial="hidden"
                animate="visible"
                className="mt-4 max-w-sm text-md md:text-lg text-slate-300"
              >
                When code meets artistic imagination, infinitely elegant art is created
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && children}
    </>
  )
}
