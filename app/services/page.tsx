import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications, e-commerce solutions, and responsive websites tailored to your business needs.',
    icon: '/window.svg',
    features: [
      'Full-stack Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Integration',
      'UI/UX Design'
    ]
  },
  {
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud services to optimize your infrastructure and enhance scalability.',
    icon: '/globe.svg',
    features: [
      'Cloud Migration',
      'AWS/Azure Services',
      'Cloud Security',
      'DevOps Solutions',
      'Performance Optimization'
    ]
  },
  {
    title: 'IT Consulting',
    description: 'Strategic technology consulting to drive digital transformation and business growth.',
    icon: '/file.svg',
    features: [
      'Digital Strategy',
      'Technology Assessment',
      'Process Optimization',
      'Security Audits',
      'IT Infrastructure Planning'
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive IT solutions tailored to your business needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Image src={service.icon} alt={service.title} width={32} height={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}