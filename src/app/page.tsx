'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, UsersIcon, BoltIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import ContactForm from '@/components/ContactForm'

const valueProps = [
  {
    icon: UsersIcon,
    title: 'True Partnership Approach',
    description: 'We work alongside you as invested partners, taking time to understand your unique challenges and goals before implementing solutions.'
  },
  {
    icon: ChartBarIcon,
    title: 'Scale With Confidence',
    description: 'Our solutions help growing businesses handle increased demand without losing the personal touch that sets them apart.'
  },
  {
    icon: BoltIcon,
    title: 'Streamline Your Growth',
    description: 'Remove bottlenecks and automate repetitive tasks so your team can focus on building relationships and serving customers.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Maintain Your Culture',
    description: 'Technology that enhances your way of doing business, not replaces it. Keep what makes you unique while scaling efficiently.'
  }
]

const stats = [
  { label: 'Years of Software Development', value: '25+' },
  { label: 'Years of Marketing Expertise', value: '50+' },
  { label: 'Combined Industry Experience', value: '75+' },
  { label: 'Focus on Human-Centered AI', value: '100%' }
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
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
        <div className="mx-auto max-w-7xl py-12 sm:py-16 lg:py-20 px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Growing Your Business Through{' '}
                <span className="bg-gradient-to-r from-[#0066CC] to-[#00AACC] bg-clip-text text-transparent">
                  Genuine Partnership
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                We believe in building relationships first, technology second. Our partnership approach helps growing 
                businesses implement smart solutions that scale efficiently while preserving what makes you unique.
              </motion.p>
            </div>
            <div className="lg:pl-8">
              <ContactForm />
            </div>
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

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-teal-50 to-orange-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Decades of Experience, Future-Focused Solutions
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Combining deep industry expertise with cutting-edge AI innovation
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col bg-white p-8"
                >
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="py-24 sm:py-32 bg-mesh-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#0066CC]">Partnership for Growth</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Help Growing Businesses Scale
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We partner with ambitious businesses to implement technology that scales operations 
              while preserving the relationships and culture that drive your success.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {valueProps.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-16"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's Build a Partnership
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
              Start with a conversation. We'll learn about your business, understand your growth challenges, 
              and explore how we can help you scale while maintaining what makes you unique.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0066CC] shadow-sm hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Start a Conversation
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:text-cyan-200 transition-colors">
                Learn more about our services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}