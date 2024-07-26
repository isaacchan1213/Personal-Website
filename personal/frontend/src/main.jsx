import React from 'react'
import ReactDOM from 'react-dom/client'
import Cover from './Cover.jsx'
import Navbar from './Navbar.jsx'
import '/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Cover />
    <div className='content'>
      <h1>hello</h1>
    </div>
  </React.StrictMode>,
)
