"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "threat detection system",
    agency: "AI. SECURITY",
    year: "2024",
    description: "State-of-the-art AI-powered threat detection system for real-time firearm identification using YOLOv8. Features 84.8% mAP50 accuracy with CPU optimization.",
    tags: ["Python", "YOLOv8", "OpenCV"],
    github: "https://github.com/writetosagnik/threat-detection-system",
  },
  {
    id: 2,
    title: "linkr",
    agency: "WEB. UTILITY",
    year: "2024",
    description: "Modern QR code generator with React frontend and FastAPI backend. Supports multiple formats (PNG, JPG, PDF, SVG) with customizable colors and dark theme.",
    tags: ["React", "FastAPI", "Python"],
    github: "https://github.com/writetosagnik/linkr",
  },
  {
    id: 3,
    title: "ContentCrafter",
    agency: "AI. SOCIAL",
    year: "2024",
    description: "AI-powered social media content creation tool integrated with Google's Gemini AI. Features intelligent chatbot and multi-platform content generation.",
    tags: ["React", "TypeScript", "Gemini AI"],
    github: "https://github.com/writetosagnik/ContentCrafter",
  },
  {
    id: 4,
    title: "GenZChats",
    agency: "MOBILE. AI",
    year: "2024",
    description: "Android chatbot app built with Kotlin and Gemini AI, designed as a relatable Gen Z college student providing academic and personal support.",
    tags: ["Kotlin", "Android", "Gemini AI"],
    github: "https://github.com/writetosagnik/GenZChats",
  },
]

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  const autoRotateRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused && isVisible) {
      autoRotateRef.current = setInterval(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentProject((prev) => (prev + 1) % projects.length)
          setIsTransitioning(false)
        }, 200)
      }, 4000)
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
      }
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
      }
    }
  }, [isPaused, isVisible])

  const nextProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
      setIsTransitioning(false)
    }, 200)
  }

  const prevProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
      setIsTransitioning(false)
    }, 200)
  }

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const project = projects[currentProject]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/10 rounded-full animate-pulse"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Section Label */}
      <div
        className={`absolute top-16 left-6 md:left-12 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-left">
          <span className="text-sm text-muted-foreground tracking-[0.2em] font-light">PROJECTS</span>
          <div className="w-20 h-px bg-gradient-to-r from-foreground/50 to-transparent mt-1"></div>
        </div>
      </div>

      {/* Project Counter */}
      <div
        className={`absolute top-16 right-6 md:right-12 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-right">
          <span className="text-sm text-muted-foreground font-mono tracking-wider">
            {String(currentProject + 1).padStart(2, '0')} — {String(projects.length).padStart(2, '0')}
          </span>
          <div className="text-xs text-muted-foreground/60 mt-1">COUNT</div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevProject}
        disabled={isTransitioning}
        className={`absolute left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full border border-foreground/20 hover:border-foreground/40 bg-background/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl group disabled:opacity-50 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
      </button>

      <button
        onClick={nextProject}
        disabled={isTransitioning}
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full border border-foreground/20 hover:border-foreground/40 bg-background/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl group disabled:opacity-50 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className={`transition-all duration-500 ${
          isTransitioning ? "opacity-0 transform scale-95 blur-sm" : "opacity-100 transform scale-100 blur-0"
        }`}>
          
          {/* Project Title */}
          <div
            className={`text-center mb-12 transition-all duration-800 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight italic leading-none mb-6">
              <span className="text-foreground">
                {project.title}
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground tracking-[0.15em] font-light">
              <span>{project.agency}</span>
            </div>
          </div>

          {/* Project Details Card */}
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-foreground/10 via-foreground/5 to-foreground/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-background/20 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 md:p-12 hover:border-foreground/20 transition-all duration-500">
                
                {/* Description */}
                <div className="text-center mb-8">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-xs font-medium text-muted-foreground hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="relative group/btn">
                    <div className="absolute -inset-1 bg-gradient-to-r from-foreground/10 to-foreground/5 rounded-full opacity-0 group-hover/btn:opacity-100 transition-all duration-500 blur-sm"></div>
                    <Button
                      variant="outline"
                      className="relative rounded-full px-8 py-3 border-foreground/20 hover:border-foreground/40 transition-all duration-500 group bg-background/50 backdrop-blur-sm hover:scale-105 hover:shadow-xl"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="font-light tracking-wide">VIEW ON GITHUB</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="rounded-full px-6 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-foreground/5"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <span className="font-light tracking-wide">SOURCE CODE</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <div className="flex items-center justify-center gap-3 mb-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                index === currentProject ? "bg-foreground scale-125" : "bg-foreground/30 hover:bg-foreground/60"
              }`}
              aria-label={`Go to project ${index + 1}`}
            >
              {index === currentProject && (
                <div className="absolute inset-0 rounded-full bg-foreground animate-ping opacity-20"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="w-32 h-px bg-foreground/20 relative overflow-hidden rounded-full mx-auto">
          <div 
            className="absolute top-0 left-0 h-full bg-foreground/50 transition-all duration-4000 ease-linear"
            style={{ width: isPaused ? '100%' : '0%', transitionDuration: isPaused ? '0ms' : '4000ms' }}
          ></div>
        </div>
      </div>
    </section>
  )
}
