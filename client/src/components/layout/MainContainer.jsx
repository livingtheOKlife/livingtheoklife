import PropTypes from 'prop-types'

function MainContainer ({children}) {
  return (
    <main id="main-container">
      <div id="main-wrapper">
        {children}
      </div>
    </main>
  )
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainContainer