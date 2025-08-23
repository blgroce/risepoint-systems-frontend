'use client'

import { motion } from 'framer-motion'
import { HeartIcon, LightBulbIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Partnership Approach',
    description: 'We work alongside you as true partners, invested in your long-term success and growth.',
    icon: UsersIcon,
  },
  {
    name: 'Practical Innovation',
    description: 'We implement proven technology solutions that deliver real results for growing businesses.',
    icon: LightBulbIcon,
  },
  {
    name: 'Relationship-Driven',
    description: 'We believe in building genuine, long-term partnerships with our clients. Your growth is our success.',
    icon: HeartIcon,
  },
  {
    name: 'Scaling-Focused',
    description: 'Every solution we implement is designed to help growing businesses scale efficiently and sustainably.',
    icon: ShieldCheckIcon,
  },
]

const leadership = [
  {
    name: 'Brian Groce',
    role: 'Co-Founder & CTO',
    bio: 'With 25+ years in web and software development, Brian brings deep technical expertise and a passion for helping businesses leverage technology to scale effectively.',
    image: '/team/brian.jpg'
  },
  {
    name: 'Tom Erickson',
    role: 'Co-Founder & CEO',
    bio: 'Bringing 50+ years of marketing and advertising experience, Tom understands how to build lasting business relationships and drive growth through strategic implementation.',
    image: '/team/tom.jpg'
  }
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-subtle-pattern">
        {/* Geometric elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-32 right-24 w-40 h-40 bg-blue-100/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-16 w-28 h-28 bg-purple-100/15 rounded-full blur-xl"></div>
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Risepoint Systems
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Building relationships. Implementing technology. Scaling businesses. We partner with growing companies 
              to implement smart technology solutions that help them scale efficiently while maintaining the personal touch 
              that makes them unique.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded by Brian Groce and Tom Erickson, Risepoint Systems emerged from a shared passion: 
              building genuine relationships and finding innovative ways to help growing businesses scale through technology. 
              We believe the most successful implementations don't just solve problems—they strengthen the human connections 
              that drive business forward.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Brian brings 25+ years of software development expertise, while Tom contributes 50+ years of marketing 
              and advertising experience. Together, we understand that technology is most powerful when it enhances 
              relationships, streamlines growth, and empowers teams to focus on what they do best—building their business 
              and serving their customers.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              What drives us is simple: we love helping growing businesses overcome scaling challenges through 
              thoughtful technology implementation. We're not just vendors—we're partners invested in your long-term success.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="bg-animated-gradient py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Methodology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Relationships First, Technology Second
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We believe in building lasting partnerships with growing businesses. Our approach focuses on understanding 
              your unique challenges and implementing technology solutions that help you scale efficiently while 
              maintaining the personal touch that sets you apart.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Relationship-Driven Discovery
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We start by building a relationship with you and understanding your business goals. 
                    Every solution is designed to help you scale while preserving what makes your business unique.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]">
                    <span className="text-white font-bold">2</span>
                  </div>
                  Collaborative Development
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We work closely with your team throughout development, ensuring solutions integrate seamlessly 
                    with existing processes and culture.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]">
                    <span className="text-white font-bold">3</span>
                  </div>
                  Continuous Improvement
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We don't just deliver and disappear. We monitor performance, gather feedback, and continuously 
                    optimize to ensure long-term success.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What drives us every day
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {values.map((value) => (
                <motion.div 
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-16"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]">
                      <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-dot-pattern py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leadership Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our leadership team brings together decades of experience in AI, enterprise software, and human-centered design.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {leadership.map((person) => (
              <motion.li 
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-48 w-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-600">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm leading-6 text-blue-600">{person.role}</p>
                <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}