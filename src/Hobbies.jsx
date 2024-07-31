import React from 'react';

const Hobbies = () => {
    return (
        <div className='text-center'>
            <div className='mb-[20px]'>
                <h1>Hobbies</h1>
            </div>
            <div className='max-w-[350px] flex-col sm:max-w-[450px] md:flex-row md:max-w-[800px] h-[600px] mb-[350px] flex justify-around m-auto border-[3px] border-solid rounded-[2%] border-moonYellow items-center'>
                <div className='flex flex-col gap-[2px] items-center'>
                    <div className='text-[75px]'>
                        <p>🏋🏻</p>
                    </div>
                    <div className='flex flex-col items-center gap-[2px] text-moonYellow'>
                        <h2>Gym</h2>
                        <p>5 times a week.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[2px] items-center'>
                    <div className='text-[75px]'>
                        <p>🎧</p>
                    </div>
                    <div className='flex flex-col items-center gap-[2px] text-moonYellow'>
                        <h2>Music</h2>
                        <p>At all times.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[2px] items-center'>
                    <div className='text-[75px]'>
                        <p>👕</p>
                    </div>
                    <div className='flex flex-col items-center gap-[2px] text-moonYellow'>
                        <h2>Fashion</h2>
                        <p>For life.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hobbies
