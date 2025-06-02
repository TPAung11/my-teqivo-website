// 'use client'

// import { useState } from 'react'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     service: 'Web Development',
//     message: ''
//   })

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     // TODO: Implement form submission to your backend API
//     console.log('Form submitted:', formData)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <div className="min-h-screen py-20 bg-gray-50">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
//               <input
//                 type="text"
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interested In</label>
//               <select
//                 id="service"
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               >
//                 <option>Web Development</option>
//                 <option>Cloud Solutions</option>
//                 <option>IT Consulting</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               ></textarea>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

/* 'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web Development',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission to your backend API
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600">Let's discuss how we can help your business grow</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-xl border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-xl border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 transition-colors duration-200"
              >
                <option>IT Solutions & Services</option>
                <option>Custom Software Development</option>
                <option>Programming Education</option>
                <option>IT Consulting</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 block w-full rounded-xl border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 transition-colors duration-200"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} */

'use client'

import { useState } from 'react'
import { submitContact } from '../contact/action'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'IT Solutions & Services',
    message: ''
  })
  const [status, setStatus] = useState({
    message: '',
    type: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await submitContact(formData)
      setStatus({
        message: 'Message sent successfully!',
        type: 'success'
      })
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'IT Solutions & Services',
        message: ''
      })
    } catch (error) {
      setStatus({
        message: 'Failed to send message. Please try again.',
        type: 'error'
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600">Let's discuss how we can help your business grow</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-12">
        {status.message && (
            <div className={`mb-6 p-4 rounded-xl ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {status.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-3">
              <label htmlFor="name" className="block text-base font-medium text-slate-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 text-slate-700 bg-slate-50 rounded-xl border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 focus:ring-2 transition-all duration-200 hover:bg-slate-100 placeholder-slate-400"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="email" className="block text-base font-medium text-slate-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 text-slate-700 bg-slate-50 rounded-xl border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 focus:ring-2 transition-all duration-200 hover:bg-slate-100 placeholder-slate-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="company" className="block text-base font-medium text-slate-700">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="block w-full px-4 py-3 text-slate-700 bg-slate-50 rounded-xl border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 focus:ring-2 transition-all duration-200 hover:bg-slate-100 placeholder-slate-400"
                placeholder="Enter your company name"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="service" className="block text-base font-medium text-slate-700">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="block w-full px-4 py-3 text-slate-700 bg-slate-50 rounded-xl border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 focus:ring-2 transition-all duration-200 hover:bg-slate-100 appearance-none cursor-pointer"
              >
                <option className="py-2" value="IT Solutions & Services">IT Solutions & Services</option>
                <option className="py-2" value="Custom Software Development">Custom Software Development</option>
                <option className="py-2" value="Programming Education">Programming Education</option>
                <option className="py-2" value="IT Consulting">IT Consulting</option>
              </select>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="block text-base font-medium text-slate-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="block w-full px-4 py-3 text-slate-700 bg-slate-50 rounded-xl border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 focus:ring-2 transition-all duration-200 hover:bg-slate-100 placeholder-slate-400 resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-slate-900 text-white px-8 py-5 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:shadow-lg text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}