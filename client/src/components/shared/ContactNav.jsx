import { FaAt, FaPhone } from 'react-icons/fa6'

function ContactNav() {
  return (
    <nav className="contact-nav">
      <a href="tel:+447939553217" className="contact-nav-link">
        <FaPhone />
        +447939553217
      </a>
      <a href="mailto:oliver.philip.kelly@outlook.com" className="contact-nav-link">
        <FaAt />
        oliver.philip.kelly@outlook.com
      </a>
    </nav>
  )
}

export default ContactNav