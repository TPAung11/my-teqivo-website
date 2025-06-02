import { FaTelegramPlane, FaViber, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">We will offer for your needs and we will try our Best.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Customize Software Developments</li>
                <li>I.T Solutions and Services</li>
                <li>Computer Programming Teaching</li>
                <li>IT Consulting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: teqivo.it@gmail.com</li>
                <li>Phone: 09 256519771</li>
                <li>Phone: 09 754735695</li>
                <li>Address: 110 Street, Between 65 * 66 Streets, Mandalay.</li>
              </ul>
            </div>

<div>
  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
  <a
      href="https://facebook.com/demo"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      title="Facebook"
      className="text-blue-600 hover:text-blue-800"
    >
      <FaFacebookF size={24} />
    </a>
    
    <a
      href="https://t.me/demo"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Telegram"
      title="Telegram"
      className="text-sky-600 hover:text-sky-800"
    >
      <FaTelegramPlane size={24} />
    </a>
    
    <a
      href="https://viber.com/demo"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Viber"
      title="Viber"
      className="text-purple-600 hover:text-purple-800"
    >
      <FaViber size={24} />
    </a>

    
    {/* <a
      href="https://linkedin.com/demo"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
      className="text-blue-700 hover:text-blue-900"
    >
      <FaLinkedinIn size={24} />
    </a> */}
  </div>
</div>

          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>© {new Date().getFullYear()} TEQIVO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }