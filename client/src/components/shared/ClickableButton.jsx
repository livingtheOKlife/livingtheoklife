import PropTypes from 'prop-types'

import { useState } from 'react'

function ClickableButton ({type, size, href, children}) {
  const [click, setClick] = useState(false);
  return type === 'button' ?
      <button className={`btn ${size} ${click ? 'click' : ''}`} onMouseDown={() => setClick(!click)} onMouseUp={() => setClick(!click)}>{children}</button>
    : type === 'intLink' ?
      <a className={`btn ${size} ${click ? 'click' : ''}`} href={href} onMouseDown={() => setClick(!click)} onMouseUp={() => setClick(!click)}>{children}</a>
    : type === 'extLink' &&
      <a className={`btn ${size} ${click ? 'click' : ''}`} href={href} target="_blank" rel="noopener noreferrer" onMouseDown={() => setClick(!click)} onMouseUp={() => setClick(!click)}>{children}</a>
}

ClickableButton.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default ClickableButton