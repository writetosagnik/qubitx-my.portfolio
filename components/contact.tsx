"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
      {/* Section Label */}
      

      {/* Location */}
      <div className="absolute top-32 right-6 md:right-12">
        
      </div>

      <div className="w-full max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light italic leading-none mb-8 text-balance">
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
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-mono">hello@yourname.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-mono">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-mono">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-light mb-4">Follow</h4>
              <div className="flex gap-6">
                {["LinkedIn", "Twitter", "GitHub", "Dribbble"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-transparent border-foreground/20 focus:border-foreground/40"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-transparent border-foreground/20 focus:border-foreground/40"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-transparent border-foreground/20 focus:border-foreground/40"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="bg-transparent border-foreground/20 focus:border-foreground/40 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="outline"
                className="w-full md:w-auto rounded-full px-8 py-2 border-foreground/20 hover:border-foreground/40 transition-colors group bg-transparent"
              >
                <span className="mr-2">SEND MESSAGE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium tracking-wider">Y</span>
              <span className="text-lg font-medium tracking-wider">N</span>
            </div>

            <div className="text-sm text-muted-foreground">© 2025 Your Name. All rights reserved.</div>

            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-20 right-6 md:right-12">
        
      </div>
    </section>
  )
}
