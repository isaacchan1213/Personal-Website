import React from 'react'

const Projects = () => {
    return (
        <div className='flex flex-col items-center gap-[10px]'>
            <div className='title'>
                <h1>Projects</h1>
            </div>
            <div className='max-w-[380px] flex-col md:max-w-[800px] m-auto flex md:flex-row gap-[10px] justify-center'>
                <div className='w-[350px] relative md:w-[450px] h-[250px] border border-moonYellow'>
                    <a href="https://github.com/isaacchan1213/MapEmissions" target="_blank" rel="noreferrer noopener">
                        <div className='relative w-full h-full z-[1] flex items-center justify-center text-[20px] text-moonYellow'>
                            <p>Map Emission</p>
                        </div>
                        <div className='absolute inset-0 z-20 bg-orange text-white opacity-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center text-center justify-center gap-1 hover:opacity-100'>
                            <p>Tracks the amount of carbon emission given a trip.</p>
                            <p>Click me for the GitHub link!</p>
                        </div>
                    </a>
                </div>
                <div className='w-[350px] relative md:w-[450px] h-[250px] border border-moonYellow'>
                    <a href="https://github.com/isaacchan1213/Korean-Quiz-Simulator" target="_blank" rel="noreferrer noopener">
                        <div className='relative w-full h-full z-[1] flex items-center justify-center text-[20px] text-moonYellow'>
                            <p>Korean Quiz Simulator</p>
                        </div>
                        <div className='absolute inset-0 z-20 bg-orange text-white opacity-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center text-center justify-center gap-1 hover:opacity-100'>
                            <p>Simple yet effective terminal based simulator that takes in a vocab list and then simulates a quiz through text to speech.</p>
                            <p>Click me for the GitHub link!</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='max-w-[380px] flex-col md:max-w-[800px] m-auto flex md:flex-row gap-[10px] justify-center'>
                <div className='w-[350px] relative md:w-[450px] h-[250px] border border-moonYellow'>
                    <a href="https://github.com/isaacchan1213/Personal-Website" target="_blank" rel="noreferrer noopener">
                        <div className='relative w-full h-full z-[1] flex items-center justify-center text-[20px] text-moonYellow'>
                            <p>Personal Website</p>
                        </div>
                        <div className='absolute inset-0 z-20 bg-orange text-white opacity-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center text-center justify-center gap-1 hover:opacity-100'>
                            <p>Made with love.</p>
                            <p>You're looking at it now!</p>
                        </div>
                    </a>
                </div>
                <div className='w-[350px] relative md:w-[450px] h-[250px] border border-moonYellow'>
                    <div className='relative w-full h-full z-[1] flex items-center justify-center text-[20px] text-moonYellow'>
                        <p>TBD...</p>
                    </div>
                    <div className='absolute inset-0 z-20 bg-orange text-white opacity-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center text-center justify-center gap-1 hover:opacity-100'>
                        <p>TBD...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects