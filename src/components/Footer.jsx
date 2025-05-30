import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4" id="footer-nav-heading">Navigation</h2>
            <nav aria-labelledby="footer-nav-heading">
              <ul className="space-y-2" role="list">
                <li>
                  <Link to="/" className="hover:text-gray-300 transition-colors" aria-label="Go to home page">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-gray-300 transition-colors" aria-label="View projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-300 transition-colors" aria-label="Contact me">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4" id="footer-social-heading">Connect</h2>
            <nav aria-labelledby="footer-social-heading">
              <ul className="space-y-2" role="list">
                <li>
                  <a
                    href="https://github.com/saiprathima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Visit my GitHub profile"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/prathima-parsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Visit my LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4" id="footer-contact-heading">Get in Touch</h2>
            <address className="not-italic" aria-labelledby="footer-contact-heading">
              <p className="mb-2">
                <a
                  href="mailto:saiprathimaparsa@gmail.com"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Send me an email"
                >
                  saiprathimaparsa@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Prathima Parsa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 