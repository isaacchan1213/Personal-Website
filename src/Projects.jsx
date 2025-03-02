import React from 'react'
import ArrowIcon from './assets/arrow-icon.svg'

const Projects = () => {
    return (
        <div className='flex flex-col items-center gap-[10px]'>
            <div className='title'>
                <h1>Projects</h1>
            </div>
            <div className='max-w-[380px] flex-col md:max-w-[800px] m-auto flex md:flex-row gap-[10px] justify-center'>
                <div className='w-[350px] relative md:w-[450px] h-[250px] border border-moonYellow'>
                    <a href="https://devpost.com/software/ez-pt?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank" rel="noreferrer noopener">
                        <div className='relative w-full h-full z-[1] flex items-center justify-center text-[20px] text-moonYellow'>
                            <p>EZ-PT</p>
                            <img className="absolute bottom-2 right-2 w-[20px] h-[20px]" src={ArrowIcon}></img>
                        </div>
                        <div className='absolute inset-0 z-20 bg-orange text-white opacity-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center text-center justify-center gap-1 hover:opacity-100'>
                            <p>A self-guided physical therapy web application that utilizes computer vision and machine learning.</p>
                            <p>Click me for the DevPost link!</p>
                        </div>
                    </a>
                </div>
                <div className='w-[350px] relative md:w-[450px] h-[250px] border border-moonYellow'>
                    <a href="https://mindfulmeals.vercel.app/" target="_blank" rel="noreferrer noopener">
                        <div className='relative w-full h-full z-[1] flex items-center justify-center text-[20px] text-moonYellow'>
                            <p>Mindful Meals</p>
                            <img className="absolute bottom-2 right-2 w-[20px] h-[20px]" src={ArrowIcon}></img>
                        </div>
                        <div className='absolute inset-0 z-20 bg-orange text-white opacity-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center text-center justify-center gap-1 hover:opacity-100'>
                            <p>Monitors and provides AI driven estimates of your daily calories and protein based on your meals.</p>
                            <p>Click me for the website!</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='max-w-[380px] flex-col md:max-w-[800px] m-auto flex md:flex-row gap-[10px] justify-center'>
                <div className='w-[350px] relative md:w-[450px] h-[250px] border border-moonYellow'>
                    <a href="https://github.com/isaacchan1213/MapEmissions" target="_blank" rel="noreferrer noopener">
                        <div className='relative w-full h-full z-[1] flex items-center justify-center text-[20px] text-moonYellow'>
                            <p>Map Emission</p>
                            <img className="absolute bottom-2 right-2 w-[20px] h-[20px]" src={ArrowIcon}></img>
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
                            <img className="absolute bottom-2 right-2 w-[20px] h-[20px]" src={ArrowIcon}></img>
                        </div>
                        <div className='absolute inset-0 z-20 bg-orange text-white opacity-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center text-center justify-center gap-1 hover:opacity-100'>
                            <p>Simple yet effective terminal based simulator that takes in a vocab list and quizzes you with text to speech.</p>
                            <p>Click me for the GitHub link!</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects