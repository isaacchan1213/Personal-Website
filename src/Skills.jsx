import React from 'react';
import JavaIcon from './assets/java-isaac.png'
import PythonIcon from './assets/python-isaac.svg'
import SwiftIcon from './assets/swift-isaac.png'
import HtmlIcon from './assets/html-isaac.png'
import CSSIcon from './assets/css-isaac.png'
import JSIcon from './assets/js-isaac.png'
import MYSqlIcon from './assets/mysql-isaac.svg'
import ReactIcon from './assets/react-isaac.png'
import SvelteIcon from './assets/svelte-isaac.png'
import npm from './assets/npm-isaac.png'
import FlaskIcon from './assets/flask-isaac.png'
import VSCodeIcon from './assets/vscode-isaac.png'
import SpyderIcon from './assets/spyder-isaac.png'
import AnacondaIcon from './assets/anaconda-isaac.png'
import NodeJSIcon from './assets/nodejs-isaac.svg'
import TailwindIcon from './assets/tailwind-isaac.png'

const Skills = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='title'>
                <h1>Skills</h1>
            </div>
            <div className='max-w-[350px] sm:max-w-[430px] md:max-w-[800px] flex flex-col m-auto gap-[20px]'>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='caption'>
                        <h2 className="text-[24px]">Programming Languages</h2>
                    </div>
                    <div className='w-[100%] flex flex-row justify-center gap-[25px]'>
                    <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                        <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={JavaIcon}/>
                    </div>
                    <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                        <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={PythonIcon}/>
                    </div>
                    <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                        <img className="w-[30px] h-[30px] scale-[0.78] md:w-[40px] md:h-[40px] md:scale-[0.78] object-cover" src={SwiftIcon}/>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='caption'>
                        <h2 className="text-[24px]">Frameworks & Libraries</h2>
                    </div>
                    <div className='w-[100%] flex flex-row justify-center gap-[25px]'>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={ReactIcon}/>
                        </div>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[50px] h-[60px] scale-[0.6] md:w-[80px] md:h-[80px] md:scale-[0.6] object-cover" src={SvelteIcon}/>
                        </div>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[40px] h-[50px] scale-[0.6] md:w-[50px] md:h-[70px] md:scale-[0.6] object-cover" src={FlaskIcon}/>
                        </div>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={NodeJSIcon}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='caption'>
                        <h2 className="text-[24px]">Developer Tools</h2>
                    </div>
                    <div className='w-[100%] flex flex-row justify-center gap-[25px]'>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">   
                            <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={VSCodeIcon}/>
                        </div>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={npm}/>
                        </div>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={SpyderIcon}/>
                        </div>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={AnacondaIcon}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='caption'>
                        <h2 className="text-[24px]">Web Technologies & Databases</h2>
                    </div>
                    <div className='w-[100%] flex flex-row justify-center gap-[25px]'>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={HtmlIcon}/>
                        </div>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={JSIcon}/>
                        </div>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] scale-[0.78] object-cover" src={CSSIcon}/>
                        </div>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[45px] h-[30px] scale-[0.8] md:w-[60px] md:h-[40px] object-cover md:scale-[0.8]" src={TailwindIcon}/>
                        </div>
                        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray flex flex-row justify-center items-center">
                            <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" src={MYSqlIcon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills