import React from "react"
import { techColors } from "../../../constants/techColor"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectCard = React.memo(function ProjectCard({ project, index, onClick }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-xs border border-white/10 hover:border-sky-500/30 dark:border-gray-400/30 dark:hover:border-yellow-300/50 rounded-2xl overflow-hidden cursor-pointer
      hover:outline hover:outline-offset-4 hover:outline-sky-500/20 dark:hover:outline-yellow-200/50 transition-all
    "
      data-aos="zoom-in"
    >
      <div className="relative overflow-hidden cursor-pointer p-2 rounded-2xl" onClick={() => onClick(index)}>
        <LazyLoadImage
          src={project.image || "/placeholder.webp"} alt={project.title}
          effect="blur" loading="lazy"
          className="w-full h-48 object-cover p-2 rounded-2xl"
        />
      </div>

      <div className="pb-6 px-6">
        <h1 className="tracking-wide text-xl font-bold text-white dark:text-slate-700 mb-3 group-hover:text-violet-400 transition-colors">
          {project.title}
        </h1>
        <p className="text-slate-400 dark:text-slate-600 mb-6 text-sm leading-relaxed line-clamp-3">{project.description}</p>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-300 dark:text-slate-600 uppercase tracking-wider">Built with</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <div key={techIndex} className={`group/badge relative overflow-hidden px-3 py-1.5 text-xs font-medium rounded-full border backdrop-blur-xs transition-all hover:scale-105
                ${techColors[tech] || "from-white/10 to-white/20 border-white/20 text-white"} bg-gradient-to-r cursor-pointer`}
              >
                <span className="relative z-10">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

export default ProjectCard
