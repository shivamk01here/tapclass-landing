const Footer = () => (
  
  <footer className="w-full bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4">
      <p className="tracking-wide">
        © {new Date().getFullYear()} <span className="text-white font-medium">TapClass</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
