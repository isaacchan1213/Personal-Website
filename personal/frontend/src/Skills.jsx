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

const Skills = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='title'>
                <h1>Skills</h1>
            </div>
            <div className='max-w-[350px] sm:max-w-[430px] md:max-w-[800px] h-[700px] flex flex-col m-auto'>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='caption'>
                        <h2 className="text-[24px]">Programming Languages</h2>
                    </div>
                    <div className='w-[100%] flex flex-row justify-center gap-[25px]'>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={JavaIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={PythonIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={SwiftIcon}/>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='caption'>
                        <h2 className="text-[24px]">Web Technologies & Databases</h2>
                    </div>
                    <div className='w-[100%] flex flex-row justify-center gap-[25px]'>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={HtmlIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={JSIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={CSSIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={JavaIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={MYSqlIcon}/>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='caption'>
                        <h2 className="text-[24px]">Frameworks & Libraries</h2>
                    </div>
                    <div className='w-[100%] flex flex-row justify-center gap-[25px]'>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={ReactIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={SvelteIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={FlaskIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={NodeJSIcon}/>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='caption'>
                        <h2 className="text-[24px]">Developer Tools</h2>
                    </div>
                    <div className='w-[100%] flex flex-row justify-center gap-[25px]'>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={VSCodeIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={npm}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={SpyderIcon}/>
                        <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-moonYellow rounded-[10%] object-cover  border-borderGray" src={AnacondaIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills