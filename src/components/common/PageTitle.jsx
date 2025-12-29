import React from "react"

const TitleSection = ({ text, highlight, isHeading = false, description = ""}) => {
  return (
    <>
      <h1 className={`mb-6
        ${isHeading
          ? "flex flex-col space-y-2 text-5xl sm:text-6xl lg:text-7xl"
          : "text-4xl sm:text-5xl lg:text-6xl"}
        `} data-aos = "zoom-in"
      >
        <span className="apple-font shiny-text">{text} </span>
        {highlight && <span className="apple-font font-extrabold gradient-text">{highlight}</span>}
      </h1>

      {description && (
        <p className="h2-responsive text-slate-400 dark:text-slate-600 max-w-sm mx-auto" data-aos="zoom-out">
          {description}
        </p>
      )}
    </>
  )
}

export default React.memo(TitleSection)
