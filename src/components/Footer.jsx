import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Send
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Our Company': [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    'Resources': [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community', href: '#' },
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
    'Enterprise': [
      { name: 'Sales', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Enterprise', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-800 text-white overflow-hidden">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/20 to-purple-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                TapClass
              </span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Discover the full scale of TapClass capabilities. Everything your academy needs, managed in one tap.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">hello@tapclass.com</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="group">
                  <h3 className="font-bold text-white mb-6 text-lg relative">
                    {category}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500"></div>
                  </h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-all duration-300 relative group inline-block"
                        >
                          <span className="relative z-10">{link.name}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 -m-1"></div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700/50 pt-16 mb-16">
          <div className="max-w-lg mx-auto text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-lg">
                Get the latest updates on new features and academy management tips.
              </p>
            </div>
            <div className="relative">
              <div className="flex gap-3 p-2 bg-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-600/50">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none text-white placeholder-gray-400 text-lg"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-6 md:mb-0">
              © 2024 TapClass. All rights reserved. Crafted with ❤️ in India
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gradient-to-br from-gray-700/50 to-gray-600/50 hover:from-purple-600 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-gray-600/30 hover:border-transparent hover:scale-110 hover:rotate-6 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;