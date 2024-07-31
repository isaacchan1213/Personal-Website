import React from 'react'

const AboutMe = () => {
    return (
        <div className="max-w-[350px] md:max-w-[600px] h-[450px] lg:max-w-[800px] flex flex-col md:h-[750px] m-auto items-center">
            <h1>About Me</h1>
        <div className='flex flex-col gap-[20px]'>
            <p className="text-[20px] md:text-[32px]"><strong>I am...</strong></p>
            <p className="text-[20px] md:text-[32px]">A leader at heart <span className="animate-grow-shrink inline-block">❤️</span></p>
            <p className="text-[20px] md:text-[32px]">An aspring full stack software engineer <span className="animate-grow-shrink inline-block">😎</span></p>
            <p className="text-[20px] md:text-[32px]">Aiming to make the world better than I left it <span className="animate-grow-shrink inline-block">🌎</span></p>
            <p className="text-[20px] md:text-[32px]">Always striving to learn more <span className="animate-grow-shrink inline-block">💪</span></p>
            <p className="text-[20px] md:text-[32px]">And never willing to give up <span className="animate-grow-shrink inline-block">🙅‍♂️</span></p>
        </div>
        </div>
    );
}

export default AboutMe