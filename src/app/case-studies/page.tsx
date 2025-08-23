'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, ChartBarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const caseStudies = [
  {
    id: 1,
    title: 'How TechFlow Increased Productivity by 250% with AI-Enhanced Workflows',
    client: 'TechFlow Systems',
    industry: 'Professional Services',
    challenge: 'Manual project management and resource allocation processes were consuming 40% of senior consultants\' time, limiting their ability to focus on high-value client work.',
    solution: 'Implemented an AI-powered project management system that automates resource allocation, predicts project timelines, and identifies potential bottlenecks before they occur.',
    results: [
      '250% increase in consultant productivity',
      '60% reduction in project delivery times',
      '95% improvement in resource utilization',
      '$2.4M annual cost savings'
    ],
    implementation: '8 weeks',
    testimonial: {
      quote: "Risepoint Systems didn't just give us software—they gave us superpowers. Our consultants can now focus on what they do best: solving complex problems for our clients.",
      author: 'Jennifer Martinez',
      role: 'CEO, TechFlow Systems'
    },
    metrics: {
      timeframe: '6 months post-implementation',
      roi: '340%',
      satisfaction: '98%'
    }
  },
  {
    id: 2,
    title: 'Transforming Customer Service: A Human-AI Collaboration Success Story',
    client: 'Meridian Financial',
    industry: 'Financial Services',
    challenge: 'Rising customer inquiries were overwhelming support staff, leading to longer wait times and decreased satisfaction scores.',
    solution: 'Developed an AI assistant that handles routine inquiries while seamlessly escalating complex issues to human agents, complete with context and suggested solutions.',
    results: [
      '75% reduction in average response time',
      '40% increase in customer satisfaction scores',
      '300% improvement in agent efficiency',
      '90% of customers prefer the new hybrid approach'
    ],
    implementation: '6 weeks',
    testimonial: {
      quote: "Our customers love the instant responses for simple questions, and our agents love having more time for the complex cases where they can really make a difference.",
      author: 'Michael Chen',
      role: 'Head of Customer Experience, Meridian Financial'
    },
    metrics: {
      timeframe: '12 months post-implementation',
      roi: '450%',
      satisfaction: '96%'
    }
  },
  {
    id: 3,
    title: 'From Manual to Magical: Automating Complex Processes While Keeping People in Control',
    client: 'Precision Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Quality control processes were entirely manual, leading to inconsistent results and requiring 12 hours of inspection time per production batch.',
    solution: 'Implemented computer vision AI for initial quality screening, with human experts reviewing flagged items and continuously training the system based on their decisions.',
    results: [
      '99.9% quality detection accuracy',
      '80% reduction in inspection time',
      '50% decrease in production defects',
      'Zero job losses—inspectors became quality supervisors'
    ],
    implementation: '10 weeks',
    testimonial: {
      quote: "The AI catches things we might miss when we're tired, and we catch things it's still learning. Together, we've never been more effective.",
      author: 'Robert Kim',
      role: 'Quality Control Manager, Precision Manufacturing Corp'
    },
    metrics: {
      timeframe: '18 months post-implementation',
      roi: '380%',
      satisfaction: '99%'
    }
  }
]

export default function CaseStudies() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-subtle-pattern">
        {/* Geometric elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-36 left-8 w-48 h-48 bg-teal-100/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-12 w-32 h-32 bg-purple-100/15 rounded-full blur-xl"></div>
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Success{' '}
              <span className="bg-gradient-to-r from-[#0066CC] to-purple-600 bg-clip-text text-transparent">
                Stories
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Discover how organizations across industries have transformed their operations through 
              human-centered AI solutions that empower teams and deliver extraordinary results.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {/* Header */}
                <div className="mb-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-500">{study.client}</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                    {study.title}
                  </h2>
                </div>

                {/* Content Grid */}
                <div className="lg:grid lg:grid-cols-3 lg:gap-16">
                  {/* Challenge & Solution */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-red-600 mb-3">The Challenge</h3>
                      <p className="text-gray-600 leading-7">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#0066CC] mb-3">Our Solution</h3>
                      <p className="text-gray-600 leading-7">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-green-600 mb-3">The Results</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <ChartBarIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <blockquote className="text-lg text-gray-900 mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="h-12 w-12 bg-gradient-to-br from-teal-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-sm font-semibold text-[#0066CC]">
                            {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{study.testimonial.author}</p>
                          <p className="text-sm text-gray-600">{study.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Sidebar */}
                  <div className="mt-12 lg:mt-0">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Metrics</h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                          <ClockIcon className="h-5 w-5 text-[#0066CC]" />
                          <div>
                            <p className="text-sm text-gray-600">Implementation</p>
                            <p className="font-semibold text-gray-900">{study.implementation}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <ChartBarIcon className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="text-sm text-gray-600">ROI</p>
                            <p className="font-semibold text-gray-900">{study.metrics.roi}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <UserGroupIcon className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="text-sm text-gray-600">Client Satisfaction</p>
                            <p className="font-semibold text-gray-900">{study.metrics.satisfaction}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-4">
                          Measured over {study.metrics.timeframe}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white bg-[#0066CC] rounded-md hover:bg-[#0052A3] transition-colors"
                        >
                          Get Similar Results
                          <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="bg-dot-pattern py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Consistent Results Across All Engagements
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our human-centered approach delivers measurable impact every time
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-white p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">Average Productivity Gain</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">225%</dd>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col bg-white p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">Average ROI</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">390%</dd>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col bg-white p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">Implementation Time</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">8 weeks</dd>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col bg-white p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">Client Satisfaction</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">98%</dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0066CC]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to write your success story?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
              Join the growing number of organizations that have transformed their operations 
              through human-centered AI solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0066CC] shadow-sm hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Start Your Transformation
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:text-cyan-100 transition-colors">
                Explore our services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}