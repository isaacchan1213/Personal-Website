import React from 'react'

const AboutMe = () => {
    return (
        <div className="max-w-[350px] m-auto md:max-w-[600px] lg:max-w-[800px] flex flex-col md:m-auto items-center">
            <div className="w-[100%] flex flex-row justify-start">
                <h1 className="text-[25px] md:text-[30px] mb-[20px]">About Me</h1>
            </div>
            <div className='w-[100%] flex flex-col gap-[15px] content-start'>
                <p className='text-[18px] md:text-[20px]'>
                    Hello! My name is Isaac and I'm a rising sophomore majoring in Computer Science with a minor in Data Science at 
                    Boston University with a deep interest in software engineering. I started my love for all things tech
                    ever since high school after reluctantly deciding in my sophomore year to signup for my very first CS class. Though
                    challenging at the time, it introduced to me how much I enjoyed problem solving and critical thinking, something I have grown
                    to love about this field. Ever since then, I followed through this passion and never looked back. 
                </p>
                <p className='text-[18px] md:text-[20px]'>
                    Fast forward to now, and I've now had so many majors parts of my life revolve around this industry. Whether it be 
                    having the privledge to land my first role as a software engineer in a ed-tech startup, fostering a community for 
                    like-minded CS majors through a non-profit, or even deepening my software skills at a fellowship, these are all experiences
                    I truly love and cherish. 
                </p>
            </div>
        </div>
    );
}

export default AboutMe