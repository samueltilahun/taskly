import React from 'react';
import {
  FaHome, FaTasks, FaFileAlt, FaBell, FaCommentAlt, FaSignInAlt,
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
  FaInfoCircle, FaCogs, FaHeadset
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-teal-400">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { label: "Home", icon: FaHome, href: "/" },
              { label: "Tasks", icon: FaTasks, href: "/tasks" },
              { label: "Reports", icon: FaFileAlt, href: "/reports" },
              { label: "Notifications", icon: FaBell, href: "/notifications" },
              { label: "Testimonials", icon: FaCommentAlt, href: "/testimonials" },
              { label: "Login", icon: FaSignInAlt, href: "/login" },
            ].map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a href={href} className="flex items-center text-gray-300 hover:text-teal-400 transition">
                  <Icon className="mr-2 text-teal-400" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-teal-400">Contact Us</h3>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start"><FaMapMarkerAlt className="mr-2 text-teal-400 mt-1" /> 123 Taskly Street, City Name</p>
            <p className="flex items-start"><FaEnvelope className="mr-2 text-teal-400 mt-1" /> support@taskly.com</p>
            <p className="flex items-start"><FaPhoneAlt className="mr-2 text-teal-400 mt-1" /> +123 456 7890</p>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-teal-400">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
              <a key={idx} href="#" className="hover:text-teal-400 transition text-gray-300">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* About Taskly */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-teal-400">About Taskly</h3>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start"><FaInfoCircle className="mr-2 text-teal-400 mt-1" /> Seamless task management system to stay organized.</p>
            <p className="flex items-start"><FaCogs className="mr-2 text-teal-400 mt-1" /> Integrate workflows for maximum efficiency.</p>
            <p className="flex items-start"><FaHeadset className="mr-2 text-teal-400 mt-1" /> 24/7 support for all your needs.</p>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Taskly. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
