import { FaBriefcase, FaBurger, FaLocationDot } from 'react-icons/fa6'

import { experience } from '../data/db'

import MainContainer from '../components/layout/MainContainer'

import HeroWrapper from '../components/shared/HeroWrapper'
import MediaNav from '../components/shared/MediaNav'
import PageSection from '../components/shared/PageSection'
import TagList from '../components/shared/TagList'
import ContactNav from '../components/shared/ContactNav'

/**
 * @todo 08 - [ProfilePage.jsx] Write 'Hospitality' description
 * @todo 09 - [ProfilePage.jsx] Create 'Physical Activity' content
 * @todo 10 - [ProfilePage.jsx] Create 'Problem Solving' content
 * @todo 11 - [ProfilePage.jsx] Create 'Reading and Research' content
 * @todo 12 - [ProfilePage.jsx] Create 'Music' content
 */

function ProfilePage () {
  return (
    <MainContainer page='profile-page'>
      <HeroWrapper imgUrl='src/assets/profile-hero.jpg' title='Oliver Kelly'>
        <span className="hero-subtitle">
          @<span className="logo">livingthe<em>OK</em>life</span>
        </span>
        <MediaNav size='md' />
      </HeroWrapper>
      <PageSection section='intro'>
        <img className='profile-picture' src="src/assets/profile-picture.jpg" alt="" />
        <div className="intro-details">
          <span className="intro-title"><em>Full Stack</em> Web Developer</span>
          <TagList size='xs' />
          <span className='intro-detail'>
            <FaLocationDot />
            Worksop, UK
          </span>
          <span className='intro-detail'>
            <FaBriefcase />
            Actively seeking
          </span>
          <span className="intro-detail">Currently seeking employment as a Full Stack Developer, whilst practising MERN stack development and studying PHP.</span>
        </div>
      </PageSection>
      <PageSection section='experience'>
        <h3>Experience</h3>
        <ul className="experience-list">
          {
            experience.map((exp, i) => (
              <li className="experience-item" key={i}>
                <header className="card-header">
                  <h6><em>{exp.company}</em> {exp.jobTitle}</h6>
                  {
                    exp.date !== '' && <span>{exp.date}</span>
                  }
                  {
                    exp.logo === 'hospitality' ? <FaBurger className='exp-icon' />
                    : exp.logo === 'career' ? <FaBriefcase className='exp-icon' />
                    : <img className='exp-icon' src={exp.logo} />
                  }
                </header>
                <main className="card-main">
                  {
                    exp.description.map((p, x) => (
                      <p key={x}>{p}</p>
                    ))
                  }
                </main>
              </li>
            ))
          }
        </ul>
      </PageSection>
      <PageSection section='brief'>
        <h4>Learn more...</h4>
        <MediaNav size='md' />
      </PageSection>
      <PageSection section='hobbies'>
        <h3>Hobbies and Interests</h3>
        <div className="hobby">
          <h4>Physical Activity</h4>
          <p>When I was younger, I played basketball</p>
          <p>This has developed in to daily training in the gym. Whether I am lifting weights, getting in some cardio, or just simply performing a stretching routine, you can always find me at the gym in the morning. I have found this to be the best way to start my day.</p>
          <p>Early morning activity helps me get my mind and body working first thing. It also provides a simple discipline as a set standard to carry throughout my day.</p>
          <p>20/20/20</p>
        </div>
        <div className="hobby">
          <h4>Problem Solving</h4>
          <p>Challenging myself to complete problem solving activities in my down time has become a profound part of my day to day life. Replacing mindless scrolling with a game of Chess has been a strong asset in changing my problem-solving mindset.</p>
          <img src="src/assets/chess.jpg" alt="" />
          <p>On any given day, I am fighting for a check mate with my Dad, as well as other players all over the globe on <a href="https://www.chess.com/member/livingtheoklife" target="_blank" rel="noopener noreferrer">chess.com</a>.</p>
        </div>
        <div className="hobby">
          <h4>Reading and Research</h4>
          <p>Winding down at the end of the day, after everything else is done, has been an essential part of my growth.</p>
          <p>I enjoy a captivating dive into a fictional world as much as the next person, but you can also find me enjoying self-guided improvement through a book on personal growth.</p>
        </div>
        <div className="hobby">
          <h4>Music</h4>
          <p>Without my headphones, the gym would be a very dark place.</p>
          <p>I also love to play guitar.</p>
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

export default ProfilePage