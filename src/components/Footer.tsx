import Link from 'next/link'
import Image from 'next/image'

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Schedule Consultation', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#001133]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <Image
                src="/RisePointLogo.png"
                alt="Risepoint Systems"
                width={180}
                height={54}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Empowering teams through human-centered AI solutions. We build software that amplifies human potential, 
              enabling organizations to achieve extraordinary results while maintaining the human touch that drives innovation.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-[#00AACC] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-[#00AACC] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-[#00AACC] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2024 Risepoint Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}