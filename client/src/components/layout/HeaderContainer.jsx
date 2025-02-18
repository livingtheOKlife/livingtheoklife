import PropTypes from 'prop-types'

import { Link, useNavigate } from 'react-router-dom'

function HeaderContainer ({menuActive, setMenuActive}) {
  const navigate = useNavigate()
  return (
    <header id="header-container">
      <nav id="main-nav">
        <Link to='/' onClick={() => {
          if (menuActive) {
            setMenuActive(!menuActive)
          }
        }}>
          <span className="logo">livingthe<em>OK</em>life</span>
        </Link>
        <ul className="main-nav-list">
          <li className="main-nav-item" onClick={() => navigate('/profile')}>Profile</li>
          <li className="main-nav-item" onClick={() => navigate('/oklife')}>OKlife</li>
          <li className="main-nav-item" onClick={() => navigate('/portfolio')}>Portfolio</li>
          <li className="main-nav-item" onClick={() => navigate('/about')}>About</li>
        </ul>
        <button className={`menu-btn ${menuActive ? 'active' : ''}`} onClick={() => {
          let bars = document.querySelectorAll('.bar')
          for (let i = 0; i < bars.length; i++) {
            bars[i].classList.remove('basic')
          }
          setMenuActive(!menuActive)
        }}>
          <div className="bar basic"></div>
          <div className="bar basic"></div>
          <div className="bar basic"></div>
        </button>
      </nav>
    </header>
  )
}

HeaderContainer.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
}

export default HeaderContainer