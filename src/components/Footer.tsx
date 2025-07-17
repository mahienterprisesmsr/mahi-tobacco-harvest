import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Leaf, Award, Globe, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Quality Control', href: '#quality' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const products = [
    'North Virginia',
    'Flue-Cured Virginia',
    'Bidi Tobacco',
    'Burley Tobacco',
    'Oriental Tobacco',
    'Hookah Tobacco'
  ];

  const certifications = [
    'ISO 9001:2015',
    'HACCP Standards',
    'Organic Certified',
    'Fair Trade Compliant',
    'Export Quality'
  ];

  return (
    <footer className="bg-tobacco-brown text-cream">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-tobacco-brown font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Mahi Enterprises</h3>
                <p className="text-sm text-cream/70">Premium Tobacco Worldwide</p>
              </div>
            </div>
            <p className="text-cream/80 mb-6 leading-relaxed text-sm">
              Sourcing premium tobacco directly from family farms for international 
              distribution since 1990. Quality guaranteed, relationships built to last.
            </p>
            <div className="flex items-center space-x-3 text-sm">
              <Heart className="w-4 h-4 text-golden-amber" />
              <span className="text-cream/70">Ethical sourcing since 1990</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-golden-amber">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-cream/80 hover:text-cream hover:text-golden-amber transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-golden-amber">
              Our Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product} className="flex items-center space-x-2">
                  <Leaf className="w-3 h-3 text-sage-green-light" />
                  <span className="text-cream/80 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Certifications */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-golden-amber">
              Contact Info
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-golden-amber mt-0.5" />
                <div className="text-sm">
                  <p className="text-cream/80">info@mahienterprises.com</p>
                  <p className="text-cream/60 text-xs">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-golden-amber mt-0.5" />
                <div className="text-sm">
                  <p className="text-cream/80">+91 40 2345-6789</p>
                  <p className="text-cream/60 text-xs">Mon-Sat 9AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-golden-amber mt-0.5" />
                <div className="text-sm">
                  <p className="text-cream/80">Hyderabad, India</p>
                  <p className="text-cream/60 text-xs">Global Distribution</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h5 className="font-semibold mb-3 text-cream flex items-center">
                <Award className="w-4 h-4 mr-2 text-golden-amber" />
                Certifications
              </h5>
              <div className="flex flex-wrap gap-1">
                {certifications.map((cert) => (
                  <Badge 
                    key={cert} 
                    variant="outline" 
                    className="text-xs border-cream/30 text-cream/70 hover:bg-cream/10"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-cream/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-cream/60">
            © 2024 Mahi Enterprises. All rights reserved. | Established 1990
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-cream/60">
            <span className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Serving 50+ Countries</span>
            </span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;