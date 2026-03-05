import React, { useMemo } from "react"
import {
  Code2,
  Database,
} from "lucide-react"
import { frameworks, databases } from "../../../constants/frameworks"

const FrameworkGrid = () => {
  // Render frameworks (3 items)
  const renderedFrameworks = useMemo(
    () => frameworks.map(({ Icon, title, color, bg, border, outline, description }) => (
          <div
            data-aos="zoom-in"
            key={title}
            className={`group glass-effect relative rounded-2xl p-6 flex flex-col items-start hover:scale-[1.02] transition-all duration-300 hover:bg-slate-500/10 border-b-0 border-l-2 hover:border-l-[3px] ${border} outline outline-offset-4 outline-slate-500/15 ${outline}`}
          >
            <div className={`w-12 h-12 mb-4 rounded-full ${bg} flex items-center justify-center`}>
              <Icon className={`group-hover:stroke-[0.1px] w-8 h-8 ${color}`} />
            </div>
            <h4 className={`font-pixel text-lg font-semibold mb-2 ${color}`}>{title}</h4>
            <p className="text-slate-400 dark:text-slate-600 text-sm leading-relaxed">{description}</p>
          </div>
        )
      ),
    [frameworks]
  )

  // Render databases (4 items)
  const renderedDatabases = useMemo(
    () => databases.map(({ Icon, title, color, bg, border, outline, description }) => (
          <div
            data-aos="zoom-in"
            key={title}
            className={`group glass-effect relative rounded-2xl p-6 flex flex-col items-start hover:scale-[1.02] transition-all duration-300 hover:bg-slate-500/10 border-b-0 border-l-2 hover:border-l-[3px] ${border} outline outline-offset-4 outline-slate-500/15 ${outline}`}
          >
            <div className={`w-12 h-12 mb-4 rounded-full ${bg} flex items-center justify-center`}>
              <Icon className={`group-hover:stroke-[0.1px] w-8 h-8 ${color}`} />
            </div>
            <h4 className={`font-pixel text-lg font-semibold mb-2 ${color}`}>{title}</h4>
            <p className="text-slate-400 dark:text-slate-600 text-sm leading-relaxed">{description}</p>
          </div>
        )
      ),
    [databases]
  )

  return (
    <div className="space-y-16">
      {/* Frameworks Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Code2 className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h2 className="text-2xl font-pixel font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frameworks & Libraries
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Modern web development frameworks we specialize in
            </p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700 ml-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderedFrameworks}
        </div>
      </section>

      {/* Databases Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <Database className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <h2 className="text-2xl font-pixel font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Databases
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Robust database solutions for every use case
            </p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderedDatabases}
        </div>
      </section>
    </div>
  )
}

export default React.memo(FrameworkGrid)
