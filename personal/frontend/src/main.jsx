import React from 'react'
import ReactDOM from 'react-dom/client'
import Cover from './Cover.jsx'
import Navbar from './Navbar.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import Hobbies from './Hobbies.jsx'
import Projects from './Projects.jsx'
import Resume from './Resume.jsx'
import ContactMe from './ContactMe.jsx'
import '/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <section id="home">
      <Cover />
    </section>
    <section id="about-me">
      <AboutMe />
    </section>
    <section id="skills">
      <div className='content'>
        <Skills />
      </div>
    </section>
    <section id="hobbies">
      <div className='content'>
        <Hobbies />
      </div>
    </section>
    <section id="projects">
      <div className='content'>
        <Projects />
      </div>
    </section>
    <section id="resume">
      <Resume />
    </section>
    <section id="contact">
      <div className='content'>
        <ContactMe />
      </div>
    </section>
  </React.StrictMode>,
)
