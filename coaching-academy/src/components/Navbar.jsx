import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="container-custom">

        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-wide">
              Standard Coaching Academy
            </span>
            <span className="text-xs text-gray-400 tracking-wider">
              Excellence in Education
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider transition ${
                  isActive(link.path)
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-6 px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Admission Inquiry
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm uppercase tracking-wide transition ${
                  isActive(link.path)
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 text-center px-6 py-3 bg-white text-black font-semibold rounded-lg"
            >
              Admission Inquiry
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
