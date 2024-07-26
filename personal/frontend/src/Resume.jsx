import React from 'react'
import './Resume.css'
import IsaacResume from './assets/Isaac Chan CS Resume.pdf'

const Resume = () => {
    return (
        <div className='main-content-resume'>
            <div className='resume-content'>
                <div className='text-resume'>
                    <p>Interested?</p>
                    <p>Download my resume below.</p>
                </div>
                <div className='button-resume'>
                    <button><a href={IsaacResume} download='Isaac Chan CS Resume.pdf'>Resume</a></button>
                </div>
            </div>
        </div>
    );
}

export default Resume