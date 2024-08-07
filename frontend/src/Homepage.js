// src/Homepage.js
import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-md">
        <div className="text-3xl font-extrabold">AstraNex</div>
        <nav className="space-x-6">
          <a
            href="#features"
            className="hover:text-teal-200 transition duration-300"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-teal-200 transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="hover:text-teal-200 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="hover:text-teal-200 transition duration-300"
          >
            Contact
          </a>
          <Link to={"/login"}>
            <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition duration-300">
              Get Started
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1920x1080?text=Hero+Background')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col items-center justify-center h-full px-6 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Transform Your Learning Experience with AstraNex
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Secure, Engaging, and Innovative Solutions for Online Education
          </p>
          <div className="flex gap-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300">
              Start Your Free Trial
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Advanced Face Verification",
              description:
                "Ensure secure access to your online classes with our cutting-edge face recognition technology.",
              image: (
                <svg
                  className="w-12 h-12 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM19.03 12.97a8.007 8.007 0 00-1.87-3.05A8.007 8.007 0 0015.03 6.97A8.007 8.007 0 0012 4a8.007 8.007 0 00-3.05 1.87A8.007 8.007 0 005.97 8.97a8.007 8.007 0 00-1.87 3.05A8.007 8.007 0 0012 20a8.007 8.007 0 003.05-1.87A8.007 8.007 0 0019.03 12.97zM12 16a4 4 0 00-4-4M12 16a4 4 0 004-4"
                  />
                </svg>
              ),
            },
            {
              title: "Real-Time Abusive Language Filtering",
              description:
                "Automatically filter out offensive language to maintain a respectful learning environment.",
              image: (
                <svg
                  className="w-12 h-12 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 12h16m-7 4h7M6 20h12M6 16h12"
                  />
                </svg>
              ),
            },
            {
              title: "Seamless Attendance Management",
              description:
                "Manage attendance effortlessly through WhatsApp with our Twilio integration.",
              image: (
                <svg
                  className="w-12 h-12 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zM4 9h16M4 15h16"
                  />
                </svg>
              ),
            },
            {
              title: "Empower Teachers and Admins",
              description:
                "Robust tools to streamline class management and monitor progress.",
              image: (
                <svg
                  className="w-12 h-12 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7h18M3 12h18m-7 5h7M6 17h12M6 13h12"
                  />
                </svg>
              ),
            },
            {
              title: "Engaging Gamified Homework",
              description:
                "Make assignments fun and interactive with our gamification features.",
              image: (
                <svg
                  className="w-12 h-12 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h3M9 16h3M15 12h3M15 16h3M4 6h16M4 10h16"
                  />
                </svg>
              ),
            },
            {
              title: "Active Class Participation",
              description:
                "Encourage active participation with real-time questions and interactions.",
              image: (
                <svg
                  className="w-12 h-12 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v14m7-7H5"
                  />
                </svg>
              ),
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              {feature.image}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-200">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="flex flex-col items-center">
          {[
            {
              quote:
                "AstraNex has transformed our online classes. The face verification and abusive language filtering are game changers!",
              author: "Jane Doe, Educator",
            },
            {
              quote:
                "The integration with WhatsApp for attendance is seamless and cost-effective. Highly recommend!",
              author: "John Smith, Admin",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg mb-6 max-w-lg text-center transition-transform transform hover:scale-105 duration-300"
            >
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="text-2xl font-semibold">AstraNex</div>
            <nav className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="hover:text-teal-300 transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-teal-300 transition duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#faq"
                className="hover:text-teal-300 transition duration-300"
              >
                FAQs
              </a>
            </nav>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition duration-300"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition duration-300"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>
              Email:{" "}
              <a
                href="mailto:contact@astranex.com"
                className="hover:text-teal-300 transition duration-300"
              >
                contact@astranex.com
              </a>
            </p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
