import { Heart } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative w-full">
      <div className="relative z-10 bg-white/5 dark:bg-slate-800/5 backdrop-blur-xs border-t border-white/10 dark:border-slate-800/10">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* container utama */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">

            {/* LEFT SIDE */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:space-y-2">

              {/* copyright */}
              <div className="text-slate-400 dark:text-slate-600 text-xs md:text-sm">
                © {year}{" "}
                <span className="font-pixel font-medium gradient-text">
                  <span className="text-white dark:text-slate-800 mr-1">
                    Rifqi
                  </span>
                  Synyster
                </span>{" "}
                All rights reserved.
              </div>

              {/* made with */}
              <div className="flex items-center mt-2 space-x-2 text-xs text-slate-500">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-rose-400 dark:text-rose-600 animate-pulse" />
                <span>by a passionate developer</span>
              </div>

              {/* gradient */}
              <div className="mt-4 flex justify-center md:justify-start w-full">
                <div className="w-24 h-[0.6px] md:h-px bg-gradient-to-r from-sky-400/50 dark:from-yellow-400/60 to-transparent" />
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs md:text-sm text-slate-400 dark:text-slate-600">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-sky-400 dark:hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}
