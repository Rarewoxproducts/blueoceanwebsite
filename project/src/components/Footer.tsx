import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { label: 'ABOUT', path: '/about' },
    { label: 'ENERGY TRANSITION & SUSTAINABILITY', path: '/energy-transition' },
    { label: 'PORTFOLIO', path: '/portfolio' },
    { label: 'TEAM', path: '/team' },
    { label: 'CAREERS', path: '/careers' },
    { label: 'CONTACT US', path: '#' }
  ];

  const legalLinks = ['Privacy Policy', 'Privacy Rights', 'Terms of Use', 'Additional Disclosures'];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <img
                src="/photo_2026-01-15_09-02-33.jpg"
                alt="Blue Ocean Holdings LLC"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-600 leading-relaxed italic text-lg">
              A leading infrastructure investor.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              link.path === '#' ? (
                <a
                  key={link.label}
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2026 Blue Ocean Holdings LLC. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
