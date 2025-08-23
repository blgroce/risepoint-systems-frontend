'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CogIcon, CodeBracketIcon, ChartBarIcon, LightBulbIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'AI Workflow Integration',
    description: 'Transform your existing processes with intelligent automation that enhances human decision-making.',
    icon: CogIcon,
    features: [
      'Custom AI solutions tailored to your existing processes',
      'Seamless integration with current tools and systems', 
      'Training and change management support',
      'Continuous optimization and improvement'
    ],
    benefits: [
      'Reduce manual tasks by up to 80%',
      'Maintain human oversight and control',
      'Increase accuracy and consistency',
      'Scale expertise across your organization'
    ]
  },
  {
    name: 'Custom Software Development',
    description: 'Build bespoke applications designed specifically for your unique business needs and workflows.',
    icon: CodeBracketIcon,
    features: [
      'Modern, scalable architecture and design',
      'User-centric interface and experience',
      'API-first development approach',
      'Cloud-native and secure by design'
    ],
    benefits: [
      'Perfect fit for your specific requirements',
      'Competitive advantage through custom features',
      'Full ownership and control of your solution',
      'Future-proof technology stack'
    ]
  },
  {
    name: 'Process Automation & Optimization',
    description: 'Identify bottlenecks and implement intelligent workflows that adapt to your business needs.',
    icon: ChartBarIcon,
    features: [
      'Comprehensive process analysis and mapping',
      'Intelligent workflow design and implementation',
      'Performance monitoring and analytics',
      'Continuous improvement recommendations'
    ],
    benefits: [
      'Eliminate repetitive manual tasks',
      'Reduce errors and improve quality',
      'Free up time for strategic work',
      'Measurable ROI and performance gains'
    ]
  },
  {
    name: 'AI Strategy Consulting',
    description: 'Develop a comprehensive roadmap for AI adoption that aligns with your business objectives.',
    icon: LightBulbIcon,
    features: [
      'AI readiness assessment and gap analysis',
      'Strategic roadmap development',
      'Risk assessment and mitigation planning',
      'Technology evaluation and selection'
    ],
    benefits: [
      'Clear path to AI transformation',
      'Reduced implementation risks',
      'Optimized resource allocation',
      'Competitive market positioning'
    ]
  }
]

const process = [
  {
    step: '01',
    name: 'Discovery & Assessment',
    description: 'We start by understanding your current processes, challenges, and goals through comprehensive analysis.'
  },
  {
    step: '02', 
    name: 'Strategy & Planning',
    description: 'We develop a tailored strategy and implementation plan that aligns with your business objectives.'
  },
  {
    step: '03',
    name: 'Development & Implementation',
    description: 'Our expert team builds and deploys your solution using proven methodologies and best practices.'
  },
  {
    step: '04',
    name: 'Training & Support',
    description: 'We ensure your team is fully equipped to leverage the new capabilities with comprehensive training.'
  },
  {
    step: '05',
    name: 'Optimization & Growth',
    description: 'We continuously monitor performance and optimize the solution to maximize long-term value.'
  }
]

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-subtle-pattern">
        {/* Geometric elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-20 w-36 h-36 bg-teal-100/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-100/15 rounded-full blur-xl"></div>
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-[#0066CC] to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              From strategy to implementation, we provide comprehensive solutions that empower your team 
              to achieve extraordinary results through human-centered AI integration.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0066CC]">
                      <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">{service.name}</h2>
                  </div>
                  <p className="text-lg leading-8 text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#0066CC] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`mt-12 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-teal-50 to-purple-50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <service.icon className="h-24 w-24 text-[#0066CC] mx-auto mb-4" />
                      <p className="text-lg font-semibold text-gray-900">{service.name}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-mesh-pattern py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#0066CC]">Our Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How we deliver results
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our proven methodology ensures successful implementation and maximum value from your AI investment.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0066CC] text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute mt-8">
                      <ArrowRightIcon className="h-6 w-6 text-gray-400 transform translate-x-20" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0066CC]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your workflow?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
              Let's discuss how our services can empower your team to achieve extraordinary results 
              through human-centered AI solutions.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0066CC] shadow-sm hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}