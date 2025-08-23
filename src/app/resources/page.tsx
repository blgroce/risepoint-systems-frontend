'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { DocumentTextIcon, PlayIcon, PresentationChartLineIcon, ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Human-AI Collaboration in the Workplace',
    excerpt: 'Exploring how successful organizations are integrating AI while keeping humans at the center of decision-making.',
    author: 'Dr. Emily Watson',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'AI Strategy'
  },
  {
    id: 2,
    title: '5 Signs Your Organization is Ready for AI Implementation',
    excerpt: 'Key indicators that your team and processes are prepared for successful AI integration.',
    author: 'Marcus Rodriguez',
    date: 'December 10, 2024',
    readTime: '6 min read',
    category: 'Implementation'
  },
  {
    id: 3,
    title: 'Measuring ROI in AI Projects: Beyond the Numbers',
    excerpt: 'How to evaluate the true impact of AI initiatives on your organization\'s effectiveness.',
    author: 'David Kim',
    date: 'December 5, 2024',
    readTime: '10 min read',
    category: 'Business Strategy'
  }
]

const whitepapers = [
  {
    title: 'The Human-Centered AI Playbook',
    description: 'A comprehensive guide to implementing AI solutions that enhance rather than replace human capabilities.',
    pages: '32 pages',
    downloadCount: '2,847',
    features: [
      'Step-by-step implementation framework',
      'Real-world case studies and examples',
      'ROI calculation templates',
      'Change management strategies'
    ]
  },
  {
    title: 'ROI of AI Integration: A Practical Guide',
    description: 'Learn how to measure, track, and optimize the return on investment for your AI initiatives.',
    pages: '24 pages',
    downloadCount: '1,932',
    features: [
      'ROI calculation methodologies',
      'Key performance indicators for AI',
      'Cost-benefit analysis templates',
      'Success metrics and benchmarks'
    ]
  },
  {
    title: 'Building AI-Ready Teams',
    description: 'Essential strategies for preparing your workforce for successful AI collaboration.',
    pages: '28 pages',
    downloadCount: '3,156',
    features: [
      'Team readiness assessment tools',
      'Training and development programs',
      'Change management best practices',
      'Leadership strategies for AI adoption'
    ]
  }
]

const webinars = [
  {
    title: 'AI Ethics in Practice: Maintaining Human Values in Automated Systems',
    date: 'January 25, 2025',
    time: '2:00 PM EST',
    speaker: 'Dr. Emily Watson',
    attendees: '847 registered',
    status: 'upcoming'
  },
  {
    title: 'From Strategy to Implementation: Your First 90 Days with AI',
    date: 'January 18, 2025', 
    time: '1:00 PM EST',
    speaker: 'Sarah Chen & Marcus Rodriguez',
    attendees: '1,247 registered',
    status: 'upcoming'
  },
  {
    title: 'Transforming Customer Service with Human-AI Collaboration',
    date: 'December 14, 2024',
    speaker: 'David Kim',
    attendees: '2,156 attended',
    status: 'recorded'
  }
]

export default function Resources() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-subtle-pattern">
        {/* Geometric elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-40 right-16 w-36 h-36 bg-teal-100/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-24 left-20 w-24 h-24 bg-purple-100/15 rounded-full blur-lg"></div>
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Knowledge{' '}
              <span className="bg-gradient-to-r from-[#0066CC] to-purple-600 bg-clip-text text-transparent">
                Resources
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Explore our collection of insights, guides, and thought leadership content to help you 
              navigate the world of human-centered AI implementation.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Insights</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Stay up-to-date with the latest trends and best practices in human-centered AI.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="relative w-full">
                  <div className="aspect-[16/9] w-full bg-gradient-to-br from-teal-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6">
                    <DocumentTextIcon className="h-16 w-16 text-[#0066CC]" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-800">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="max-w-xl">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="text-gray-500">{post.readTime}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-[#0066CC] transition-colors">
                      <Link href={`/resources/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                  </div>
                  <div className="relative mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 bg-gradient-to-br from-teal-100 to-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-[#0066CC]">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">{post.author}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/resources/blog"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#0066CC] bg-cyan-50 rounded-md hover:bg-cyan-100 transition-colors"
            >
              View All Blog Posts
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Whitepapers */}
      <div className="bg-mesh-pattern py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Whitepapers & Guides</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              In-depth resources to guide your AI implementation journey.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <PresentationChartLineIcon className="h-8 w-8 text-[#0066CC] mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">{paper.pages}</p>
                    <p className="text-xs text-gray-500">{paper.downloadCount} downloads</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{paper.title}</h3>
                <p className="text-gray-600 mb-6">{paper.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {paper.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#0066CC] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-[#0066CC] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#0052A3] transition-colors">
                  Download Free Guide
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Webinars */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Webinars & Events</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Join our expert-led sessions to dive deep into AI implementation strategies.
            </p>
          </div>
          <div className="mx-auto mt-16 space-y-8">
            {webinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
              >
                <div className="lg:flex lg:items-center lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {webinar.status === 'upcoming' ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                          Upcoming
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                          Recorded
                        </span>
                      )}
                      <span className="flex items-center text-sm text-gray-500">
                        <CalendarDaysIcon className="h-4 w-4 mr-1" />
                        {webinar.date}
                        {webinar.time && ` • ${webinar.time}`}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Speaker: {webinar.speaker}</span>
                      <span>•</span>
                      <span>{webinar.attendees}</span>
                    </div>
                  </div>
                  <div className="mt-5 flex lg:mt-0 lg:ml-4">
                    {webinar.status === 'upcoming' ? (
                      <button className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#0066CC] rounded-md hover:bg-[#0052A3] transition-colors">
                        <CalendarDaysIcon className="h-4 w-4 mr-2" />
                        Register Now
                      </button>
                    ) : (
                      <button className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#0066CC] bg-cyan-50 rounded-md hover:bg-cyan-100 transition-colors">
                        <PlayIcon className="h-4 w-4 mr-2" />
                        Watch Recording
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/resources/webinars"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#0066CC] bg-cyan-50 rounded-md hover:bg-cyan-100 transition-colors"
            >
              View All Webinars
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-[#0066CC]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay informed with our newsletter
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
              Get the latest insights, case studies, and best practices in human-centered AI 
              delivered to your inbox monthly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-white/70 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 backdrop-blur-sm"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-[#0066CC] shadow-sm hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <p className="mt-4 text-sm text-teal-200">
              No spam, unsubscribe at any time. Read our{' '}
              <Link href="/privacy" className="underline hover:no-underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}