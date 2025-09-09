"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function Header() {
  const [currentTime, setCurrentTime] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      })
      setCurrentTime(timeString.toUpperCase())
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo/Initials */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <span className="text-lg font-medium tracking-wider transition-all duration-300 hover:scale-110">uxgnik</span>
          
        </div>

        {/* Time Display */}
        <div className="hidden md:block">
          <span className="text-sm text-muted-foreground font-mono transition-all duration-300">{currentTime}</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm tracking-wider hover:text-foreground/70 transition-all duration-300 hover:scale-105"
          >
            PROJECTS
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => scrollToSection("blog")}
            className="text-sm tracking-wider hover:text-foreground/70 transition-all duration-300 hover:scale-105"
          >
            BLOGS
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm tracking-wider hover:text-foreground/70 transition-all duration-300 hover:scale-105"
          >
            ABOUT
          </button>
          <button
            onClick={toggleTheme}
            className="w-6 h-6 rounded-full ml-4 transition-all duration-300 hover:scale-125 flex items-center justify-center border border-foreground/20 hover:border-foreground/40 relative group"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {mounted && (
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  theme === "dark" 
                    ? "bg-foreground translate-x-0" 
                    : "bg-background border border-foreground translate-x-0"
                }`}
              />
            )}
            {/* Hover tooltip */}
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {mounted && theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>
        </nav>
      </div>
    </header>
  )
}
