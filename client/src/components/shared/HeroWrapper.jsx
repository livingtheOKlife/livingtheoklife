import PropTypes from 'prop-types'

function HeroWrapper ({imgUrl, title, children}) {
  return (
    <section id='hero-wrapper' style={{backgroundImage: `url(${imgUrl})`}}>
      <div className="hero-cover">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  )
}

HeroWrapper.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default HeroWrapper