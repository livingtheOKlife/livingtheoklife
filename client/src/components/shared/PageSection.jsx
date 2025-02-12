import PropTypes from 'prop-types'

function PageSection ({section, children}) {
  return (
    <section className={`page-section ${section}`}>
      <div className="section-wrapper">
        {children}
      </div>
    </section>
  )
}

PageSection.propTypes = {
  section: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default PageSection