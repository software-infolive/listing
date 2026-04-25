import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mobile Apps */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mobile Apps</h3>
            <p className="text-gray-400 mb-4">Get our mobile app for the best experience</p>
            <div className="space-y-2">
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-400 hover:text-rose-400 transition-colors"
              >
                📱 Get it on Google Play
              </a>
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-400 hover:text-rose-400 transition-colors"
              >
                🍎 Get it on App Store
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-rose-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-rose-400 transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/listings?category=Electronics" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/listings?category=Furniture" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/listings?category=Fashion" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Fashion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Mumbai</p>
              <p>India 401105</p>
              <p>Mobile +(91) 8369297282</p>
              <p>Mail. info@infolive.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link href="/terms" className="text-gray-400 hover:text-rose-400 transition-colors">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-rose-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-rose-400 transition-colors">
                Site Map
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Designed and Developed by InfoLive Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

