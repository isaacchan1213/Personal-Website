import React from 'react'

const AboutMe = () => {
    return (
        <div className="max-w-[350px] m-auto md:max-w-[600px] lg:max-w-[800px] flex flex-col md:m-auto items-center">
            <div className="w-[100%] flex flex-row justify-start">
                <h1 className="text-[25px] md:text-[30px] mb-[20px]">About Me</h1>
            </div>
            <div className='w-[100%] flex flex-col gap-[15px] content-start'>
                <p className='text-[18px] md:text-[20px]'>
                    Hello! My name is Isaac and I'm a rising sophomore at Boston University majoring in Computer Science with a minor in Data Science.
                    I started my love for all things tech ever since high school after reluctantly deciding to signup for my very 
                    first CS class. Though challenging at the time, it introduced to me the importance of problem solving and critical thinking, two things in which 
                    I have grown to love about this field.
                </p>
                <p className='text-[18px] md:text-[20px]'>
                    Fast forwarding to today, I continously immerse myself within this ever growing environment. Whether that be through
                    my internship as a Software Engineer at an ed-tech startup, my vital role as VP of Community at a nonprofit
                    dedicated in helping CS majors integrate into the tech industry, or even deepening my software engineering skills as a Fellow, 
                    these are all experiences I truly love and cherish. I am committed to pursing similar opportunities in the future, 
                    and have no itention on ever looking back.
                </p>
            </div>
        </div>
    );
}

export default AboutMe