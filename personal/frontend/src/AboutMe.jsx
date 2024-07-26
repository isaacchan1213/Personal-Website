import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='main-content-about'>
            <div className='title-about'>
                <h1>About Me</h1>
            </div>
            <div className='card'>
                <div className='sub-card'>
                    <div className='image'>
                        <p>🏋🏻</p>
                    </div>
                    <div className='text'>
                        <h2>Gym</h2>
                        <p>5 times a week.</p>
                    </div>
                </div>
                <div className='sub-card'>
                    <div className='image'>
                        <p>🎧</p>
                    </div>
                    <div className='text'>
                        <h2>Music</h2>
                        <p>At all times.</p>
                    </div>
                </div>
                <div className='sub-card'>
                    <div className='image'>
                        <p>👕</p>
                    </div>
                    <div className='text'>
                        <h2>Fashion</h2>
                        <p>For life.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe
