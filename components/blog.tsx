"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Design",
    excerpt: "Exploring emerging trends in digital design and their impact on user experience.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "DESIGN",
  },
  {
    id: 2,
    title: "Minimalism in Digital Spaces",
    excerpt: "How less can be more when creating meaningful digital experiences.",
    date: "2024-03-08",
    readTime: "7 min read",
    category: "PHILOSOPHY",
  },
  {
    id: 3,
    title: "Creative Development Process",
    excerpt: "Behind the scenes of building innovative web applications and interfaces.",
    date: "2024-02-28",
    readTime: "6 min read",
    category: "PROCESS",
  },
  {
    id: 4,
    title: "Typography in Modern Design",
    excerpt: "The art and science of choosing the right typefaces for digital products.",
    date: "2024-02-20",
    readTime: "4 min read",
    category: "TYPOGRAPHY",
  },
  {
    id: 5,
    title: "Accessibility in Web Development",
    excerpt: "Building inclusive digital experiences that work for everyone.",
    date: "2024-02-10",
    readTime: "8 min read",
    category: "DEVELOPMENT",
  },
  {
    id: 6,
    title: "Color Theory in UI Design",
    excerpt: "Understanding the psychology and application of color in user interfaces.",
    date: "2024-01-25",
    readTime: "6 min read",
    category: "DESIGN",
  },
]

export function Blog() {
  const [currentPost, setCurrentPost] = useState(0)
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
          setCurrentPost((prev) => (prev + 1) % blogPosts.length)
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

  const nextPost = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPost((prev) => (prev + 1) % blogPosts.length)
      setIsTransitioning(false)
    }, 200)
  }

  const prevPost = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPost((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
      setIsTransitioning(false)
    }, 200)
  }

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const post = blogPosts[currentPost]

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/10 rounded-full animate-pulse"
            style={{
              left: `${30 + (i * 8)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Section Label */}
      <div
        className={`absolute top-16 right-6 md:right-12 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-right">
          <span className="text-sm text-muted-foreground tracking-[0.2em] font-light">THOUGHTS</span>
          <div className="w-20 h-px bg-gradient-to-l from-foreground/50 to-transparent mt-1"></div>
        </div>
      </div>

      {/* Post Counter */}
      <div
        className={`absolute top-16 left-6 md:left-12 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-left">
          <span className="text-sm text-muted-foreground font-mono tracking-wider">
            {String(currentPost + 1).padStart(2, '0')} — {String(blogPosts.length).padStart(2, '0')}
          </span>
          <div className="text-xs text-muted-foreground/60 mt-1">ARTICLES</div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevPost}
        disabled={isTransitioning}
        className={`absolute left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full border border-foreground/20 hover:border-foreground/40 bg-background/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl group disabled:opacity-50 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
        aria-label="Previous post"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
      </button>

      <button
        onClick={nextPost}
        disabled={isTransitioning}
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full border border-foreground/20 hover:border-foreground/40 bg-background/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-xl group disabled:opacity-50 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        aria-label="Next post"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className={`transition-all duration-500 ${
          isTransitioning ? "opacity-0 transform scale-95 blur-sm" : "opacity-100 transform scale-100 blur-0"
        }`}>
          
          {/* Post Title */}
          <div
            className={`text-center mb-12 transition-all duration-800 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight italic leading-none mb-6">
              <span className="text-foreground">
                {post.title}
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground tracking-[0.15em] font-light">
              <span>{post.category}</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span>{new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Post Details Card */}
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-foreground/10 via-foreground/5 to-foreground/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-background/20 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 md:p-12 hover:border-foreground/20 transition-all duration-500">
                
                {/* Excerpt */}
                <div className="text-center mb-8">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
                    {post.excerpt}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="relative group/btn">
                    <div className="absolute -inset-1 bg-gradient-to-r from-foreground/10 to-foreground/5 rounded-full opacity-0 group-hover/btn:opacity-100 transition-all duration-500 blur-sm"></div>
                    <Button
                      variant="outline"
                      className="relative rounded-full px-8 py-3 border-foreground/20 hover:border-foreground/40 transition-all duration-500 group bg-background/50 backdrop-blur-sm hover:scale-105 hover:shadow-xl"
                    >
                      <span className="font-light tracking-wide">READ ARTICLE</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="rounded-full px-6 py-3 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-foreground/5"
                  >
                    <span className="font-light tracking-wide">SHARE</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <div className="flex items-center gap-3 mb-4">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPost(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                index === currentPost ? "bg-foreground scale-125" : "bg-foreground/30 hover:bg-foreground/60"
              }`}
              aria-label={`Go to post ${index + 1}`}
            >
              {index === currentPost && (
                <div className="absolute inset-0 rounded-full bg-foreground animate-ping opacity-20"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="w-32 h-px bg-foreground/20 relative overflow-hidden rounded-full">
          <div 
            className="absolute top-0 left-0 h-full bg-foreground/50 transition-all duration-4000 ease-linear"
            style={{ width: isPaused ? '100%' : '0%', transitionDuration: isPaused ? '0ms' : '4000ms' }}
          ></div>
        </div>
      </div>
    </section>
  )
}
