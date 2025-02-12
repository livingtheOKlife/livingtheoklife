import PropTypes from 'prop-types'

import { FaNodeJs, FaPhp, FaReact, FaSass } from 'react-icons/fa6'

function TagList ({size}) {
  return (
    <div className="tags">
      <span className={`tag ${size} circle react`}>
        <FaReact />
      </span>
      <span className={`tag ${size} circle node`}>
        <FaNodeJs />
      </span>
      <span className={`tag ${size} circle php`}>
        <FaPhp />
      </span>
      <span className={`tag ${size} circle sass`}>
        <FaSass />
      </span>
    </div>
  )
}

TagList.propTypes = {
  size: PropTypes.string.isRequired
}

export default TagList