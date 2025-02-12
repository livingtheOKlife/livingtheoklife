import PropTypes from 'prop-types'

import { FaCodepen, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

function MediaNav ({size}) {
  return (
    <nav className="media-nav">
      <a href='https://www.linkedin.com/in/livingtheoklife/' target='_blank' className={`media-nav-link ${size}`}>
        <FaLinkedinIn />
      </a>
      <a href='https://github.com/livingtheOKlife' target='_blank' className={`media-nav-link ${size}`}>
        <FaGithub />
      </a>
      <a href='https://codepen.io/livingtheOKlife' target='_blank' className={`media-nav-link ${size}`}>
        <FaCodepen />
      </a>
    </nav>
  )
}

MediaNav.propTypes = {
  size: PropTypes.string.isRequired
}

export default MediaNav