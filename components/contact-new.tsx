"use client"

import { useState } from "react"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-16 sm:py-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic leading-none mb-6 sm:mb-8">
            let's collaborate
          </h2>
          <div className="max-w-md mx-auto px-4">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary
              together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                    <p className="font-mono text-sm sm:text-base">writeto.uxgnik@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                    <p className="font-mono text-sm sm:text-base">Bhubaneswar, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">Name</label>
                  <Input 
                    className="bg-transparent border-foreground/20 focus:border-foreground/40 text-sm sm:text-base"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">Email</label>
                  <Input 
                    type="email"
                    className="bg-transparent border-foreground/20 focus:border-foreground/40 text-sm sm:text-base"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">Message</label>
                <Textarea 
                  rows={5} 
                  className="bg-transparent border-foreground/20 focus:border-foreground/40 resize-none text-sm sm:text-base"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>
              <Button type="submit" variant="outline" className="rounded-full px-6 sm:px-8 py-2 border-foreground/20 hover:border-foreground/40 text-sm sm:text-base w-full sm:w-auto">
                Send Message <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
