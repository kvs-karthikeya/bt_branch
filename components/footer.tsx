import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-primary">About Us</h3>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              Excellence in education and innovation. Dedicated to nurturing talent and fostering growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-primary">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-primary transition-colors font-light"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-muted-foreground hover:text-primary transition-colors font-light">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-muted-foreground hover:text-primary transition-colors font-light">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="/bolt" className="text-muted-foreground hover:text-primary transition-colors font-light">
                  BOLT Club
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-primary">Contact</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-3 text-muted-foreground font-light">
                <Mail size={16} className="text-primary" />
                <span>info@university.edu</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground font-light">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground font-light">
                <MapPin size={37} className="text-primary" />
                <span>KL University, Green fields, Vaddeswaram, Andhra Pradesh, India, 522501</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-primary">Follow Us</h3>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-light">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/biotechnology-department-600111221" className="text-muted-foreground hover:text-primary transition-colors font-light">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kl_zenbiotech" className="text-muted-foreground hover:text-primary transition-colors font-light">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground font-light">
          <p>&copy; 2025 University Branch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
