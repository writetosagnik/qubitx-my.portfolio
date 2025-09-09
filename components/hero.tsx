"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const totalProjects = 6

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % totalProjects)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + totalProjects) % totalProjects)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 overflow-hidden"
    >
      {/* Portfolio Year */}
      <div
        className={`absolute top-32 left-6 md:left-12 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      ></div>

      {/* Scroll Indicator */}
      <div
        className={`absolute top-32 right-6 md:right-12 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-sm text-muted-foreground animate-pulse">scroll</span>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
            <div className="absolute inset-2 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300">
              <div className="text-gray-500 text-sm font-medium">Your Photo</div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Name */}
        <div
          className={`mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
            Your Name
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-foreground/40 to-transparent mx-auto mt-3"></div>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-6xl md:text-8xl lg:text-9xl font-light italic leading-none mb-8 text-balance transition-all duration-1200 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          creative developer
        </h1>

        {/* Subtitle */}
        <div
          className={`mb-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm text-muted-foreground tracking-wider mb-2">DESIGNER. DEVELOPER . UNDERGRAD</p>
        </div>

        {/* Enhanced Description */}
        <div
          className={`flex flex-col items-center justify-center gap-6 mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="max-w-2xl text-center">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 font-light">
              Passionate about crafting digital experiences that bridge imagination and functionality. 
              Creating meaningful connections through thoughtful design and clean code.
            </p>
            <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed font-light">
              Specializing in modern web technologies, user experience design, and bringing creative visions to life 
              through innovative solutions and attention to detail.
            </p>
          </div>

          {/* Resume Button */}
          <Button
            variant="outline"
            className="rounded-full px-8 py-2 border-foreground/20 hover:border-foreground/40 transition-all duration-300 group bg-transparent hover:scale-105 hover:shadow-lg"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1bzfLnoRGszbuzGsBx1vX5HnDmt8TOcr2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-1">resume</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>

      {/* Project Navigation Circle */}
      <div
        className={`absolute bottom-20 left-6 md:left-12 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative"></div>
      </div>

      {/* Contact Button */}
      <div
        className={`absolute bottom-20 right-6 md:right-12 transition-all duration-1200 delay-1200 ${
          isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 rotate-45"
        }`}
      >
        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 animate-pulse flex items-center justify-center group cursor-pointer border-0 focus:outline-none focus:ring-2 focus:ring-foreground/20"
        >
          <span className="text-xs font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-center leading-tight">
            Let's
            <br />
            Talk
          </span>
        </button>
      </div>
    </section>
  )
}
