import { Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative w-full">
      <div className="relative z-10 bg-white/5 backdrop-blur-xs border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">

          <div className="flex justify-center items-center space-x-2 text-slate-400 text-sm">
            <span>© {year}</span>
            <span className="font-pixel font-medium gradient-text"><span className='text-white mr-1'>Rifqi</span>Synyster</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex justify-center items-center mt-3 space-x-2 text-xs text-slate-500">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-rose-400 animate-pulse" />
            <span>by a passionate developer</span>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  )
}
