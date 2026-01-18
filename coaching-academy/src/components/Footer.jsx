import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Standard Coaching Academy</h3>
                        <p className="text-sm leading-relaxed">
                            Empowering students with quality education and expert guidance to achieve their academic goals.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm hover:text-primary-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm hover:text-primary-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className="text-sm hover:text-primary-400 transition-colors">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm hover:text-primary-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>📧 azmat50917@gmail.com</li>
                            <li>📞 0336 9124670</li>
                            <li>📍 Standard Coaching Academy Near Islamia College BRT Stop opposite Nimra Masjid, Peshawar, Pakistan</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; {currentYear} Standard Coaching Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
