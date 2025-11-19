export default function Footer() {
  const links = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Why STEBEQ', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'ROI Calculator', href: '#automation' },
      { name: 'Help Center', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  };

  return (
    <footer className="bg-bg-secondary py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Left Column - Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-medium text-primary mb-3">
              STEBEQ
            </h3>
            <p className="text-text-secondary text-sm italic mb-4">
              &ldquo;Capture rhythm. Create harmony. Cultivate genius.&rdquo;
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              STEBEQ transforms repetitive tasks into human creativity through transparent workflow intelligence.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-color pt-8">
          <p className="text-center text-text-secondary text-sm">
            © 2025 STEBEQ LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
