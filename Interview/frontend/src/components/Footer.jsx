import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About InterviewPrep</h3>
          <p className="text-gray-400">
            We provide personalized interview questions, answers, and tips to help you succeed in any interview.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: support@interviewprep.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Location: Hyderabad,India</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-700 pt-4 mt-6">
        <p className="text-gray-400">&copy; 2024 InterviewPrep. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
