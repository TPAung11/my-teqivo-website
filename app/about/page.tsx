/* export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Your comprehensive technology partner for success</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are dedicated to empowering businesses and individuals through innovative technology solutions. Our comprehensive services span from enterprise IT solutions to educational programming courses, ensuring our clients stay ahead in the digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">Delivering cutting-edge solutions</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">Ensuring highest quality standards</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl">
            //Modern gradient background instead of image
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">IT Solutions & Services</h3>
              <p className="text-gray-600">Comprehensive IT solutions tailored to your business needs</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Custom Software Development</h3>
              <p className="text-gray-600">Bespoke software solutions designed for your specific requirements</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Programming Education</h3>
              <p className="text-gray-600">Expert-led computer programming courses and training</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">IT Consulting</h3>
              <p className="text-gray-600">Strategic technology consulting for business growth</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8">Let's discuss how our services can help you achieve your goals</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  )
} */

import Image from "next/image";

/* export default function About() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">About Us</h1>
          <p className="text-xl text-purple-700">Your comprehensive technology partner for success</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Mission</h2>
            <p className="text-lg text-indigo-700 mb-6">
              We are dedicated to empowering businesses and individuals through innovative technology solutions. Our comprehensive services span from enterprise IT solutions to educational programming courses, ensuring our clients stay ahead in the digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-400 to-green-500 p-4 rounded-lg text-white">
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-blue-50">Delivering cutting-edge solutions</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-400 to-yellow-500 p-4 rounded-lg text-white">
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-purple-50">Ensuring highest quality standards</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-r from-indigo-500 via-green-500 to-purple-500 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            style={{'opacity':'0.2'}}
          />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="font-bold mb-2">IT Solutions & Services</h3>
              <p className="text-blue-100">Comprehensive IT solutions tailored to your business needs</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Custom Software Development</h3>
              <p className="text-pink-100">Bespoke software solutions designed for your specific requirements</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Programming Education</h3>
              <p className="text-indigo-100">Expert-led computer programming courses and training</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-white">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">IT Consulting</h3>
              <p className="text-purple-100">Strategic technology consulting for business growth</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-lg text-indigo-100 mb-8">Let's discuss how our services can help you achieve your goals</p>
          <a href="/contact" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  )
} */

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Us</h1>
          <p className="text-xl text-slate-600">Your comprehensive technology partner for success</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Mission</h2>
            <p className="text-lg text-indigo-700 mb-6">
              We are dedicated to empowering businesses and individuals through innovative technology solutions. Our comprehensive services span from enterprise IT solutions to educational programming courses, ensuring our clients stay ahead in the digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-300 to-indigo-500 p-4 rounded-lg text-white">
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-blue-50">Delivering cutting-edge solutions</p>
              </div>
              <div className="bg-gradient-to-bl from-indigo-300 to-indigo-500 p-4 rounded-lg text-white">
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-purple-50">Ensuring highest quality standards</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
            <Image
              src="/hero-bg.png"
              alt="Hero Background"
              fill
              className="object-cover mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Cards */}
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-blue-800 group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-3 text-slate-800 hover:text-blue-800">Customize Software Developments</h3>
              <p className="text-slate-600 hover:text-blue-600">The Best solutions for your business needs</p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-green-800 group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-3 text-slate-800 hover:text-green-800">IT Solutions & Services</h3>
              <p className="text-slate-600 hover:text-green-600">Comprehensive IT solutions tailored to your business needs</p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-purple-800 group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="font-bold mb-3 text-slate-800 hover:text-purple-800">Computer Programming Teaching</h3>
              <p className="text-slate-600 hover:text-purple-600">Smart, Modernize and Effective for Computer Programming teaching</p>
              
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-orange-800">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-3 text-slate-800 hover:text-orange-800">IT Consulting</h3>
              <p className="text-slate-600 hover:text-orange-600">Comprehensive IT Consulting tailored to your business needs</p>
            </div>

          </div>
        </div>

        <div className="text-center bg-indigo-800 p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-lg text-slate-300 mb-8">Let's discuss how our services can help you achieve your goals</p>
          <a href="/contact" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-50 transition duration-300">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  )
}