import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='main-content-about'>
            <div className="title-about">
                <h1>About Me</h1>
            </div>
        <div className='description'>
            <p><strong>I am...</strong></p>
            <p>A leader at heart <span className="effect">❤️</span></p>
            <p>An aspring full stack software engineer <span className="effect">😎</span></p>
            <p>Aiming to make the world better than I left it <span className="effect">🌎</span></p>
            <p>Always striving to learn more <span className="effect">💪</span></p>
            <p>And never willing to give up <span className="effect">🙅‍♂️</span></p>
        </div>
        </div>
    );
}

export default AboutMe