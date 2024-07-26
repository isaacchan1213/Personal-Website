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
            <p>A leader at heart <span class="effect">❤️</span></p>
            <p>An aspring full stack software engineer <span class="effect">😎</span></p>
            <p>Aiming to make the world better than I left it <span class="effect">🌎</span></p>
            <p>Always striving to learn more <span class="effect">💪</span></p>
            <p>And never willing to give up <span class="effect">🙅‍♂️</span></p>
        </div>
        </div>
    );
}

export default AboutMe