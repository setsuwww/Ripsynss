import { useState, useCallback, useMemo } from "react"
import { projects as rawProjects } from "../../../constants/projects"
import ProjectCard from "./ProjectCard"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function PortfolioProjects() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = useMemo(() => rawProjects, [])

  const openModal = useCallback((index) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => setIsOpen(false), [])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const glass = "backdrop-blur-xs border border-white/20";
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} onClick={openModal} />
      ))}

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-800/80 flex items-center justify-center">
          <button className={`${glass} absolute top-20 right-7 bg-white/10 p-3 py-2 px-5 text-white hover:text-red-500 rounded-full text-4xl`} onClick={closeModal}>×</button>
          <button className={`${glass} absolute left-10 bg-white/10 p-3 text-white hover:text-yellow-500 text-2xl rounded-full`} onClick={prev}>←</button>
          <button className={`${glass} absolute right-10 bg-white/10 p-3 text-white hover:text-yellow-500 text-2xl rounded-full`} onClick={next}>→</button>

          <LazyLoadImage src={projects[currentIndex].image} alt={projects[currentIndex].title}
            loading="lazy" effect="blur"
            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-lg transition-all"
          />
        </div>
      )}
    </>
  )
}
