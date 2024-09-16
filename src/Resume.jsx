import React from 'react'

const Resume = () => {
    return (
        <div className='items-center md:flex flex-col md:items-center'>
            <div className='max-w-[450px] m-auto mt-[150px] mb-[150px] md:mt-0 md:mb-0 md:max-w-[600px] flex flex-col items-center gap-[50px]'>
                <div className='text-[30px] md:text-[50px] text-center'>
                    <p>Interested?</p>
                    <p>Check out my resume below.</p>
                </div>
                <div className='button'>
                    <button className="bg-moonYellow text-darkBlue border-none p-[10px] py-[5px] rounded-[4px] cursor-pointer text-[16px] transform scale-[1.8] hover:border-solid border hover:animate-blink-shadow-button"><a className="no-underline text-black" href='https://drive.google.com/file/d/1t12ItrJFJW_60E8eqlIPNLWCuYiu2FGE/view?usp=sharing' target="_blank" rel="noreferrer noopener">Resume</a></button>
                </div>
            </div>
        </div>
    );
}

export default Resume