import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-cursive text-4xl text-primary mb-4">Kereyu</h3>
            <p className="text-muted-foreground">
              Where timeless elegance meets serenity
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:reservations@Kereyu.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                reservations@Kereyu.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <span>
                  123 Coastal Paradise Drive
                  <br />
                  Serene Bay, SB 12345
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#suites"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Suites
                </a>
              </li>
              <li>
                <a
                  href="#dining"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dining
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-accent" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-accent" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Kereyu Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
