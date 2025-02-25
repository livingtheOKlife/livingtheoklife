import { projects } from '../data/db'

import MainContainer from '../components/layout/MainContainer'

import HeroWrapper from '../components/shared/HeroWrapper'
import PageSection from '../components/shared/PageSection'
import TagList from '../components/shared/TagList'
import ContactNav from '../components/shared/ContactNav'
import MediaNav from '../components/shared/MediaNav'

/**
 * @todo 24 - Complete Frontend Mentor Challenges
 * @todo 25 - Complete JavaScript 30 Challenges
 */

function PortfolioPage () {
  return (
    <MainContainer page='portfolio-page'>
      <HeroWrapper imgUrl='src/assets/portfolio-hero.jpg' title='My Portfolio'>
        <span className="hero-body">A collection of my <em>projects</em>, and development <em>challenges</em> that I have completed.</span>
        <TagList size='md' />
      </HeroWrapper>
      <PageSection section='skills'>
        <TagList size='lg' />
      </PageSection>
      <PageSection section='projects'>
        <h3>Projects</h3>
        <p>View my latest projects below, or visit my <a href="https://github.com/livingtheOKlife" target="_blank" rel="noopener noreferrer">GitHub</a> for more.</p>
        <ul className="project-gallery">
          {
            projects.slice(0, 10).map((project, i) => (
              <li className="project-gallery-item" style={{backgroundImage: `url(${project.image})`}} key={i}>
                <div className="project-details">
                  <div className="project-header">
                    <span className="project-title">{project.title}</span>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <div className="project-brief">
                    {
                      project.brief.map((p, x) => (
                        <p key={x}>{p}</p>
                      ))
                    }
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </PageSection>
      <PageSection section='brief'>
        <h4>Learn more...</h4>
        <MediaNav size='md' />
      </PageSection>
      <PageSection section='challenges'>
        <h3>Challenges</h3>
        <p>Sometimes, as a developer, you need a distraction. Something to take your mind away from the problem you have been struggling over. For me, I like to complete simple challenges like those listed below.</p>
        <a href="https://100dayscss.com/progress/livingtheOKlife/" target="_blank" rel="noopener noreferrer" className="nav-link">100 Days of CSS</a>
        {/* <a href="" target="_blank" rel="noopener noreferrer" className="nav-link">Frontend Mentor</a> */}
        {/* <a href="" target="_blank" rel="noopener noreferrer" className="nav-link">JavaScript 30</a> */}
      </PageSection>
      <PageSection section='outro'>
        <h4>Get in touch...</h4>
        <ContactNav />
        <MediaNav size='lg' />
      </PageSection>
    </MainContainer>
  )
}

export default PortfolioPage