"use client"

import { useEffect, useState } from 'react'

export function EmailJSDebug() {
  const [config, setConfig] = useState({
    serviceId: '',
    templateId: '',
    publicKey: '',
    isConfigured: false
  })

  useEffect(() => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    
    setConfig({
      serviceId,
      templateId,
      publicKey,
      isConfigured: !!(serviceId && templateId && publicKey)
    })
  }, [])

  // Only show in development
  if (process.env.NODE_ENV === 'production') return null

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-sm z-50">
      <h3 className="font-bold mb-2">EmailJS Debug</h3>
      <div className="space-y-1">
        <div>Service ID: {config.serviceId ? '✅ Set' : '❌ Missing'}</div>
        <div>Template ID: {config.templateId ? '✅ Set' : '❌ Missing'}</div>
        <div>Public Key: {config.publicKey ? '✅ Set' : '❌ Missing'}</div>
        <div className="pt-2">
          Status: {config.isConfigured ? 
            <span className="text-green-400">✅ Ready</span> : 
            <span className="text-red-400">❌ Not Configured</span>
          }
        </div>
      </div>
    </div>
  )
}
