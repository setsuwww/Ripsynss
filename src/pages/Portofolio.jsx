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
      <section className="relative w-full min-h-screen pt-20 pb-16 overflow-hidden bg-black">
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

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm mb-8" />

        <a href="https://github.com/setsuwww" target="_blank" rel="noopener noreferrer"
          className="group flex items-center gap-2 px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg transition-all duration-300 hover:bg-radial hover:from-white/20 hover:to-slate-500/5 hover:scale-105"
        >
          <Github className="w-5 h-5 text-white group-hover:scale-125 transition-transform" />
          <span className="text-sm font-medium text-white group-hover:text-yellow-500 tracking-wide">
            Visit My GitHub
          </span>
        </a>

        <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm mt-8" />
      </div>
    </>
  )
}
