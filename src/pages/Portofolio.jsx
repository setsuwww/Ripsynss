import { Github } from "lucide-react"
import { useState, useCallback } from "react"
import GridBackground from "../components/common/GridBackground"
import BallsBackground from "../components/common/SoftGradients"
import PortfolioProjects from "../components/content/Portfolio/MyProject"
import TitleSection from "../components/common/PageTitle"
import CarouselCard from "../components/content/Portfolio/MobileMyProject"
import ModalViewer from "../components/content/Portfolio/MobileModal"
import CarouselNav from "../components/content/Portfolio/CarouselNavigation"

import { projects } from "../constants/projects"

import SEOHeader from "@/components/SEO/SEOHeader"

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const minSwipe = 50
  const [startX, setStartX] = useState(null)
  const [endX, setEndX] = useState(null)

  const nextSlide = useCallback(() => setCurrentSlide((p) => (p + 1) % projects.length), [])
  const prevSlide = useCallback(() => setCurrentSlide((p) => (p - 1 + projects.length) % projects.length), [])
  const nextModal = () => setModalIndex((p) => (p + 1) % projects.length)
  const prevModal = () => setModalIndex((p) => (p - 1 + projects.length) % projects.length)

  const openModal = (index) => {
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const handleTouchStart = (e) => {
    setEndX(null)
    setStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => setEndX(e.targetTouches[0].clientX)

  const handleTouchEnd = () => {
    if (!startX || !endX) return
    const delta = startX - endX
    if (delta > minSwipe) nextSlide()
    else if (delta < -minSwipe) prevSlide()
  }

  return (
    <>
      <SEOHeader title="Ripsynss" description="Portfolio Page references" url="https://ripsynss.vercel.app" image="/pp.webp" />
      <section className="relative w-full min-h-screen pt-20 pb-16 overflow-hidden bg-black dark:bg-white">
        <GridBackground />
        <BallsBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <TitleSection text="My" highlight="Portfolio" description="A collection of projects that showcase my skills and passion for creating amazing digital experiences." />
          </header>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioProjects openModal={openModal} />
          </div>

          <div className="md:hidden relative">
            <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} >
              <div className="flex transition-transform" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {projects.map((project, i) => (
                  <CarouselCard key={project.id} project={project} onClick={() => openModal(i)} />
                ))}
              </div>
            </div>
            <CarouselNav onPrev={prevSlide} onNext={nextSlide} current={currentSlide} total={projects.length} />
          </div>
        </div>

        <ModalViewer isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
          project={projects[modalIndex]}
          onPrev={prevModal} onNext={nextModal}
        />
      </section>

      <div className="flex items-center justify-center w-full my-12 gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sky-500/20 dark:via-yellow-500/30 to-transparent" />

        <div className="group px-3 py-4 md:py-2.5 rounded-full border border-slate-500/30 md:border-slate-500/15 hover:border-slate-500/30 dark:hover:border-slate-400/50 delay-5 transition-all md:hover:py-4 cursor-pointer">
          <a href="https://github.com/setsuwww" target="_blank" rel="noopener noreferrer"
            className="
            group px-5 py-3 rounded-full 
            bg-slate-500/10 dark:bg-slate-300/10 border border-slate-500/35 md:border-slate-500/10 group-hover:border-slate-500/35 dark:group-hover:border-slate-400/55 delay-10 transition-all
          "
          >
            <span className="px-4 py-1.5 rounded-full border border-slate-500/45 md:border-slate-500/5 group-hover:border-slate-500/45 dark:group-hover:border-slate-400/60 gradient-text delay-15 transition-all">View My GitHub</span>
          </a>
        </div>

        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sky-500/20 dark:via-yellow-500/30 to-transparent" />
      </div>
    </>
  )
}
