import React from 'react'
import './Resume.css'
import IsaacResume from './assets/Isaac Chan CS Resume.pdf'

const Resume = () => {
    return (
        <div className='main-content-resume'>
            <div className='resume-content'>
                <div className='text-resume'>
                    <p>Interested?</p>
                    <p>Check out my resume below.</p>
                </div>
                <div className='button-resume'>
                    <button><a href='https://drive.google.com/file/d/1BX9SbmxdHkfJselcpQOZNSiejJJ1ayeM/view?usp=sharing' download='Isaac Chan CS Resume.pdf'>Resume</a></button>
                </div>
            </div>
        </div>
    );
}

export default Resume