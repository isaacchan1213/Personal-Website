import React from 'react'

const AboutMe = () => {
    return (
        <div className="max-w-[350px] m-auto md:max-w-[600px] lg:max-w-[800px] flex flex-col md:m-auto items-center">
            <div className="w-[100%] flex flex-row justify-start">
                <h1 className="text-[25px] md:text-[30px] mb-[20px]">About Me</h1>
            </div>
            <div className='w-[100%] flex flex-col gap-[15px] content-start'>
                <p className='text-[18px] md:text-[20px]'>
                    Hello! My name is Isaac and I'm a sophomore at Boston University majoring in Computer Science with a minor in Data Science.
                    I started my love for all things tech ever since high school after reluctantly deciding to sign up for my very 
                    first CS class. Though challenging at the time, it introduced to me the importance of problem solving and critical thinking, two things in which 
                    I have grown to love about this field.
                </p>
                <p className='text-[18px] md:text-[20px]'>
                    Fast forwarding to today, I continously immerse myself within this ever growing environment. With prior experience as
                    a Software Engineering intern at an ed-tech startup, the VP of Community at a CS focused nonprofit, and a fellow
                    at a Software and AI program, I am always looking for ways that can help propel my passion for all things tech. 
                    I look forward to whatever work awaits for me in the future and am confident that no matter what that may be, I will succeed. 
                </p>
            </div>
        </div>
    );
}

export default AboutMe