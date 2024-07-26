import React from 'react'
import ReactDOM from 'react-dom/client'
import Cover from './Cover.jsx'
import Navbar from './Navbar.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import '/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Cover />
    <div className='content'>
      <Skills/>
    </div>
    <div className='content'>
      <AboutMe />
    </div>
  </React.StrictMode>,
)
