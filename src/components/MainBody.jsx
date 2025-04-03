import React from 'react'
import "./styles.css"
import { FaRocket, FaChartLine, FaShieldAlt, FaLightbulb} from 'react-icons/fa';

const MainBody = () => {
  const testimonials = [
    {
      id: 1,
      quote: "This platform completely transformed our business operations. The efficiency gains are incredible!",
      author: "Sarah Johnson",
      role: "COO, TechSolutions Inc.",
      rating: "5.0",
    },
    {
      id: 2,
      quote: "We've tried many solutions, but none compare to the seamless integration this platform offers.",
      author: "Michael Chen",
      role: "CTO, Digital Innovations",
      rating: "4.5",
    },
    {
      id: 3,
      quote: "The customer support alone makes this worth every penny. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Marketing Director, BrandWorks",
      rating: "5.0",
    }
  ];

  const features = [
    {
      icon: <FaRocket className="text-2xl text-blue-600" />,
      title: "Lightning Fast",
      description: "Optimized for performance with near-instant response times"
    },
    {
      icon: <FaChartLine className="text-2xl text-green-600" />,
      title: "Actionable Analytics",
      description: "Real-time data visualization to drive your business decisions"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-purple-600" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance with industry standards"
    },
    {
      icon: <FaLightbulb className="text-2xl text-yellow-500" />,
      title: "Smart Automation",
      description: "AI-powered workflows that learn and adapt to your needs"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
      
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://patternico.com/patterns/svg/pattern-1.svg')]"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with <span className="text-blue-600">Our Platform</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The all-in-one solution that helps growing businesses streamline operations, increase productivity, and drive revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-8 rounded-lg transition duration-300 shadow hover:shadow-md border border-gray-200">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <p className="text-3xl font-bold text-blue-600">10,000+</p>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-green-600">99.9%</p>
            <p className="text-gray-500">Uptime</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-purple-600">24/7</p>
            <p className="text-gray-500">Support</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-yellow-500">5x</p>
            <p className="text-gray-500">ROI Guarantee</p>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features Designed for You
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to succeed in one comprehensive platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 hover:border-blue-100">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our customers have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex mb-3 rating">
                {testimonial.rating}
              </div>
              <blockquote className="text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-medium text-gray-800">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses already experiencing the difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
              Get Started Now
            </button>
            <button className="bg-transparent hover:bg-blue-700 font-medium py-3 px-8 rounded-lg transition duration-300 border border-white">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainBody
