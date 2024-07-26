import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <div className='main-content-projects'>
            <div className='title'>
                <h1>Projects</h1>
            </div>
            <div className='project-row'>
                <div className='project-card'>
                    <div className='project-title'>
                        <p>Map Emission</p>
                    </div>
                    <div className='hover-content'>
                        <p>Tracks the amount of carbon emission given a trip.</p>
                        <p>Click me for the GitHub link!</p>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-title'>
                        <p>Korean Quiz Simulator</p>
                    </div>
                    <div className='hover-content'>
                        <p>Always was nervous for my Korean quizes in class so decided to make a simulator...</p>
                        <p>Click me for the GitHub link!</p>
                    </div>
                </div>
            </div>
            <div className='project-row'>
                <div className='project-card'>
                    <div className='project-title'>
                        <p>Personal Website</p>
                    </div>
                    <div className='hover-content'>
                        <p>You're looking at it now!</p>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='project-title'>
                        <p>TBD...</p>
                    </div>
                    <div className='hover-content'>
                        <p>TBD...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects