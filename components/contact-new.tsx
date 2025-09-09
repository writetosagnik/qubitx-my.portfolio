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
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light italic leading-none mb-8">
            let's collaborate
          </h2>
          <div className="max-w-md mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary
              together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-mono">writeto.uxgnik@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-mono">Bhubaneswar, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Name</label>
                  <Input 
                    className="bg-transparent border-foreground/20 focus:border-foreground/40"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email</label>
                  <Input 
                    type="email"
                    className="bg-transparent border-foreground/20 focus:border-foreground/40"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Message</label>
                <Textarea 
                  rows={6} 
                  className="bg-transparent border-foreground/20 focus:border-foreground/40 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>
              <Button type="submit" variant="outline" className="rounded-full px-8 py-2 border-foreground/20 hover:border-foreground/40">
                Send Message <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
