import { Link } from 'react-router-dom'

import { projects } from '../data/db'

import MainContainer from '../components/layout/MainContainer'

import HeroWrapper from '../components/shared/HeroWrapper'
import TagList from '../components/shared/TagList'
import PageSection from '../components/shared/PageSection'
import MediaNav from '../components/shared/MediaNav'
import ContactNav from '../components/shared/ContactNav'
import ClickableButton from '../components/shared/ClickableButton'

function HomePage () {
  return (
    <MainContainer>
      <HeroWrapper imgUrl='src/assets/cover.jpg' title='Oliver Kelly'>
        <span className="hero-subtitle"><em>Full Stack</em> Web Developer</span>
        <span className="hero-body">Proficient in React, Node, and PHP. With experience developing full-stack applications and WordPress templates.</span>
        <TagList size='md' />
      </HeroWrapper>
      <PageSection section='skills'>
        <TagList size='lg' />
      </PageSection>
      <PageSection section='intro'>
        <h3>About Me</h3>
        <p>Most call me <em>Ollie</em>, but I call myself a <em>Full Stack Web Developer</em>.</p>
        <p>Throughout most of my career I have worked in production and manufacturing environments for companies such as <em>Johnson Matthey</em>, who produce over 70% of all catalytic converters across the globe, and <em>Dun-Bri</em>, the sole producer of all the wiring looms within the AA fleet.</p>
        <p>During my time with Johnson Matthey, I successfully <em>increased the potential throughput revenue</em> of the CSF department <em>by over £470m annually</em>, and <em>improved overall equipment efficiency by 76%</em>.</p>
        {/* Dun-Bri - founded quality assurance and set quality control standards */}
        <p>However, in 2020 my world completely changed when I decided to leave my career as a <em>Continuous Improvement Specialist</em> and pursue a career in the IT industry, a great passion of mine. I&apos;ve always had a <em>strong aptitude for problem solving</em>, and software development posed a great opportunity for me combine this with my <em>passion for technology</em>.</p>
      </PageSection>
      <PageSection section='brief'>
        <h4>Learn more...</h4>
        <MediaNav size='md' />
      </PageSection>
      <PageSection section='oklife'>
        <h3>About the <span className="logo"><em>OK</em>life</span></h3>
        {/* OKlife description */}
      </PageSection>
      <PageSection section='brief oklife'>
        <h4>Join the <span className="logo"><em>OK</em>life</span></h4>
        <ClickableButton type='extLink' size='md' href='https://www.oklife.com/sign-up'>Sign up</ClickableButton>
      </PageSection>
      <PageSection section='portfolio'>
        <div className="portfolio-header">
          <h3>Portfolio</h3>
          <p>Throughout my journey in software development, I have worked on a wide range of projects. Some of them simple frontend challenges, like <em>100 Days of CSS</em> and <em>Frontend Mentor</em>. Others more complicated, and in-depth, focusing on JavaScript and PHP.</p>
          <p>As time goes by, I hope to add to this list of projects with new exercises, both in web development and other areas of software development.</p>
        </div>
        <ul className="project-gallery">
          {
            projects.slice(0, 6).map((project) => (
              <li className="project-gallery-item" style={{backgroundImage: `url(${project.image})`}} key={project.title}>
                <div className="project-details">
                  <div className="project-header">
                    <span className="project-title">{project.title}</span>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <div className="project-brief">
                    {
                      project.brief.map((p) => (
                        <p key={p}>{p}</p>
                      ))
                    }
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        {
          projects.length > 6 && <Link to='/portfolio' className='nav-link'>View more</Link>
        }
        <div className="challenges">
          <h5>Challenges</h5>
          <a href="https://100dayscss.com/progress/livingtheOKlife/" target="_blank" rel="noopener noreferrer" className="nav-link">100 Days of CSS</a>
          {/* <a href="" target="_blank" rel="noopener noreferrer" className="nav-link">Frontend Mentor</a> */}
          {/* <a href="" target="_blank" rel="noopener noreferrer" className="nav-link">JavaScript 30</a> */}
        </div>
      </PageSection>
      <PageSection section='outro'>
        <h4>Get in touch...</h4>
        <ContactNav />
        <MediaNav size='lg' />
      </PageSection>
    </MainContainer>
  )
}

export default HomePage