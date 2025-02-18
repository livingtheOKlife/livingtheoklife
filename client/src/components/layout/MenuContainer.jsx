import PropTypes from 'prop-types'

import { useNavigate } from 'react-router-dom'

import { FaCodepen, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

function MenuContainer ({menuActive, setMenuActive}) {
  const navigate = useNavigate()
  return menuActive &&
    <aside id="menu-container">
      <nav id="menu-nav">
        <ul className="menu-nav-list">
          <li className="menu-nav-item" onClick={() => {
            navigate('/profile')
            setMenuActive(!menuActive)
          }}>Profile</li>
          <li className="menu-nav-item" onClick={() => {
            navigate('/oklife')
            setMenuActive(!menuActive)
          }}>OKlife</li>
          <li className="menu-nav-item" onClick={() => {
            navigate('/portfolio')
            setMenuActive(!menuActive)
          }}>Portfolio</li>
          <li className="menu-nav-item" onClick={() => {
            navigate('/about')
            setMenuActive(!menuActive)
          }}>About</li>
        </ul>
      </nav>
      <nav id="links-nav">
        <a href='https://www.linkedin.com/in/livingtheoklife/' target='_blank' className="links-nav-link">
          <FaLinkedinIn />
        </a>
        <a href='https://github.com/livingtheOKlife' target='_blank' className="links-nav-link">
          <FaGithub />
        </a>
        <a href='https://codepen.io/livingtheOKlife' target='_blank' className="links-nav-link">
          <FaCodepen />
        </a>
      </nav>
    </aside>
}

MenuContainer.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired
}

export default MenuContainer