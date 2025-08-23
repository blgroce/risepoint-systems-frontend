'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeartIcon, BuildingOfficeIcon, TruckIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const industries = [
  {
    name: 'Healthcare & Life Sciences',
    description: 'Enhance patient care and accelerate research while maintaining the human touch that defines quality healthcare.',
    icon: HeartIcon,
    solutions: [
      'Patient care optimization and workflow enhancement',
      'Research acceleration through intelligent data analysis',
      'Administrative efficiency and documentation automation',
      'Clinical decision support systems'
    ],
    results: [
      '40% reduction in administrative burden',
      '25% faster research insights',
      '98% patient satisfaction maintained',
      'Zero compromise on care quality'
    ],
    caseStudy: {
      title: 'Regional Hospital Network',
      result: 'Reduced patient wait times by 60% while improving care coordination across 12 facilities.'
    }
  },
  {
    name: 'Financial Services',
    description: 'Streamline operations and enhance customer service while maintaining the trust and expertise that clients expect.',
    icon: BuildingOfficeIcon,
    solutions: [
      'Risk assessment automation with human oversight',
      'Customer service enhancement and personalization',
      'Compliance monitoring and reporting streamlining',
      'Fraud detection and prevention systems'
    ],
    results: [
      '50% faster risk assessments',
      '30% improvement in customer satisfaction',
      '80% reduction in compliance reporting time',
      '99.9% fraud detection accuracy'
    ],
    caseStudy: {
      title: 'Community Credit Union',
      result: 'Increased loan approval speed by 75% while maintaining rigorous risk standards and personal service.'
    }
  },
  {
    name: 'Manufacturing & Logistics',
    description: 'Optimize supply chains and improve quality control while preserving the craftsmanship and expertise of your workforce.',
    icon: TruckIcon,
    solutions: [
      'Supply chain optimization and demand forecasting',
      'Quality control enhancement and defect prediction',
      'Predictive maintenance and equipment monitoring',
      'Inventory management and automated replenishment'
    ],
    results: [
      '35% reduction in supply chain costs',
      '90% improvement in quality metrics',
      '70% decrease in unplanned downtime',
      '45% inventory optimization'
    ],
    caseStudy: {
      title: 'Aerospace Manufacturer',
      result: 'Achieved 99.99% quality standards while reducing inspection time by 50% through AI-assisted quality control.'
    }
  },
  {
    name: 'Professional Services',
    description: 'Amplify expertise and improve client interactions while maintaining the personal relationships that drive success.',
    icon: BriefcaseIcon,
    solutions: [
      'Knowledge management and expertise sharing',
      'Client interaction improvement and automation',
      'Project efficiency and resource optimization tools',
      'Document analysis and insight generation'
    ],
    results: [
      '60% faster knowledge retrieval',
      '40% improvement in project delivery',
      '85% increase in billable hours',
      '95% client retention rate'
    ],
    caseStudy: {
      title: 'Global Consulting Firm',
      result: 'Increased consultant productivity by 200% while delivering more personalized client recommendations.'
    }
  }
]

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-subtle-pattern">
        {/* Geometric elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-28 right-12 w-44 h-44 bg-blue-100/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-16 left-24 w-20 h-20 bg-purple-100/15 rounded-full blur-lg"></div>
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Industry{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Tailored AI solutions that understand the unique challenges and opportunities of your industry, 
              designed to enhance human expertise rather than replace it.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {/* Industry Header */}
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0066CC]">
                      <industry.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                    {industry.name}
                  </h2>
                  <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
                    {industry.description}
                  </p>
                </div>

                {/* Content Grid */}
                <div className={`lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  {/* Solutions and Results */}
                  <div className={`lg:col-span-7 ${index % 2 === 0 ? '' : 'lg:col-start-6'}`}>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Solutions</h3>
                        <ul className="space-y-3">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Proven Results</h3>
                        <ul className="space-y-3">
                          {industry.results.map((result, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Case Study */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-base font-semibold text-gray-900 mb-2">Success Story</h4>
                      <p className="text-lg font-medium text-[#0066CC] mb-2">{industry.caseStudy.title}</p>
                      <p className="text-gray-600">{industry.caseStudy.result}</p>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`mt-12 lg:mt-0 lg:col-span-5 ${
                    index % 2 === 0 ? '' : 'lg:col-start-1'
                  }`}>
                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50" />
                      <div className="relative z-10 text-center">
                        <industry.icon className="h-32 w-32 text-[#0066CC] mx-auto mb-6" />
                        <p className="text-xl font-semibold text-gray-900">{industry.name}</p>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-blue-200 rounded-full opacity-60" />
                      <div className="absolute bottom-6 left-6 w-6 h-6 bg-purple-200 rounded-full opacity-60" />
                      <div className="absolute top-1/3 left-4 w-4 h-4 bg-blue-300 rounded-full opacity-40" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-animated-gradient py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Cross-Industry Impact
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our human-centered approach delivers consistent results across all industries
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-white p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">Industries Served</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">15+</dd>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col bg-white p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">Average ROI</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">450%</dd>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col bg-white p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">Implementation Time</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">6-12 weeks</dd>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col bg-white p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">Success Rate</dt>
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
              Ready to transform your industry?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's explore how our industry-specific solutions can empower your team to achieve 
              extraordinary results while maintaining your competitive edge.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0066CC] shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Discuss Your Industry Needs
              </Link>
              <Link href="/case-studies" className="text-sm font-semibold leading-6 text-white hover:text-cyan-100 transition-colors">
                See detailed case studies <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}