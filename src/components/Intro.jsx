import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-slate-800/10 dark:bg-white/10 z-50 lg:p-0 p-8"
          >
            <div className="outline-1 outline-offset-6 outline-sky-600 dark:outline-yellow-400 ring ring-sky-500/10 dark:ring-yellow-500/10 border-0 border-t-2 border-sky-500/20 dark:border-yellow-500/20 shadow-xl shadow-sky-900/50 dark:shadow-yellow-900/70 rounded-xl p-8 flex flex-row items-center gap-12">

              <div className="flex flex-col text-left">
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -200, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="text-2xl md:text-4xl font-bold gradient-text"
                >
                  Sheeshh!
                </motion.h1>

                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="mt-4 text-md md:text-lg text-slate-300 dark:text-slate-600 max-w-sm"
                >
                  When code meets artistic imagination, infinitely elegant art is created
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && <>{children}</>}
    </>
  );
}
