'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, CalendarDaysIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const contactInfo = [
  {
    name: 'Phone',
    value: '(281) 935-0373',
    icon: PhoneIcon,
    href: 'tel:+12819350373'
  }
]

const faqs = [
  {
    question: 'How long does a typical AI implementation take?',
    answer: 'Most of our implementations take 6-12 weeks from start to finish, depending on complexity and scope. We work in sprints to deliver value incrementally.'
  },
  {
    question: 'What kind of ROI can we expect?',
    answer: 'Our clients typically see 300-500% ROI within the first year, with productivity gains of 200-300%. We provide detailed ROI projections during our assessment.'
  },
  {
    question: 'Do you work with existing systems?',
    answer: 'Absolutely. We specialize in integrating AI into your existing workflows and systems without disrupting your current operations.'
  },
  {
    question: 'What support do you provide after implementation?',
    answer: 'We offer comprehensive support including training, ongoing optimization, and 24/7 technical support to ensure your long-term success.'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Company: ${formData.company}\n\n${formData.message}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again or email us directly at hello@risepointsystems.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-subtle-pattern">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00AACC] to-[#0066CC] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        {/* Geometric elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-24 left-12 w-32 h-32 bg-teal-100/20 rounded-full blur-xl"></div>
          <div className="absolute top-96 right-16 w-24 h-24 bg-orange-100/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-24 left-1/4 w-16 h-16 bg-teal-100/20 rounded-full blur-md"></div>
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Let's{' '}
              <span className="bg-gradient-to-r from-[#0066CC] to-purple-600 bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Ready to transform your workflow with human-centered AI? Schedule your free consultation 
              and discover how we can empower your team to achieve extraordinary results.
            </motion.p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00AACC] to-[#0066CC] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
                Schedule Your Free AI Readiness Assessment
              </h2>
              
              {!isSubmitted ? (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0066CC] sm:text-sm sm:leading-6"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0066CC] sm:text-sm sm:leading-6"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0066CC] sm:text-sm sm:leading-6"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0066CC] sm:text-sm sm:leading-6"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0066CC] sm:text-sm sm:leading-6"
                      placeholder="Describe your current challenges and what you'd like to achieve..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-md bg-[#0066CC] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0052A3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Schedule Free Consultation'
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank you!</h3>
                  <p className="text-gray-600 mb-6">
                    We've received your request and will be in touch within 24 hours to schedule your 
                    free AI readiness assessment.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#0066CC] hover:text-[#0052A3] font-medium"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}
            </div>

            {/* Contact Info & FAQ */}
            <div className="mt-16 lg:mt-0">
              {/* Contact Information */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.name} className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5 text-[#0066CC]" />
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-600">{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar Booking */}
              <div className="bg-teal-50 rounded-2xl p-6 mb-12">
                <div className="flex items-center mb-4">
                  <CalendarDaysIcon className="h-6 w-6 text-[#0066CC] mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Prefer to book directly?</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Schedule a 30-minute discovery call to discuss your AI implementation needs.
                </p>
                <a 
                  href="https://calendar.app.google/meShfgWMUGYxype19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0066CC] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#0052A3] transition-colors text-center"
                >
                  Book Calendar Appointment
                </a>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h4 className="text-base font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-animated-gradient py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              What happens next?
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0066CC] text-white font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Assessment</h3>
                <p className="text-sm text-gray-600">
                  We'll analyze your current processes and identify AI opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0066CC] text-white font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Proposal</h3>
                <p className="text-sm text-gray-600">
                  Receive a tailored solution with clear ROI projections
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0066CC] text-white font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-sm text-gray-600">
                  Launch your human-centered AI solution in 6-12 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}