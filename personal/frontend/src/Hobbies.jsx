import React from 'react';
import './Hobbies.css'

const Hobbies = () => {
    return (
        <div className='main-content-hobbies'>
            <div className='title-hobbies'>
                <h1>Hobbies</h1>
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

export default Hobbies
