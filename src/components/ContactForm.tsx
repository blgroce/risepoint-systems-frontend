'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, UserIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' })
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-100"
      >
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mb-4">
            <SparklesIcon className="h-6 w-6 text-[#00AACC]" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank you for reaching out!</h3>
          <p className="text-sm text-gray-600">We'll get back to you within 24 hours to discuss how we can empower your team.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-100"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Your AI Journey Today</h3>
        <p className="text-sm text-gray-600">Let's discuss how we can amplify your team's potential</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UserIcon className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <EnvelopeIcon className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <PhoneIcon className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone (Optional)"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your goals and challenges..."
          className="block w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
        />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#0066CC] to-[#00AACC] text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:from-[#0052A3] hover:to-[#0088AA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066CC] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Get Your Free Assessment'
          )}
        </button>
        
        <p className="text-xs text-center text-gray-500 mt-3">
          No spam, ever. We'll use this to understand your needs and reach out within 24 hours.
        </p>
      </form>
    </motion.div>
  )
}