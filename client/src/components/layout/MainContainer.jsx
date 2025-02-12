import PropTypes from 'prop-types'

function MainContainer ({children}) {
  return (
    <main id="main-container">
      {children}
    </main>
  )
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainContainer