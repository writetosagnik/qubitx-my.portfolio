"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSimple() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Creative Developer</h1>
        <p className="text-muted-foreground mt-4">This is a simple hero section</p>
        <p className="text-sm mt-2">Visible: {isVisible.toString()}</p>
        <Button className="mt-4">
          Test Button <ArrowUpRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </section>
  )
}
