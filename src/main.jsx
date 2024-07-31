import React, {useRef} from 'react'
import ReactDOM from 'react-dom/client'
import Cover from './Cover.jsx'
import Navbar from './Navbar.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import Hobbies from './Hobbies.jsx'
import Projects from './Projects.jsx'
import Resume from './Resume.jsx'
import ContactMe from './ContactMe.jsx'
import '/index.css';

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <div className="gap-[300px] flex flex-col md:gap-[500px]">
        <section id="home">
          <Cover />
        </section>
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="hobbies">
          <Hobbies />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);