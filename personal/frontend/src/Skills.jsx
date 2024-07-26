import React from 'react';
import './Skills.css'
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
        <div className='main-content-skills'>
            <div className='title'>
                <h1>Skills</h1>
            </div>
            <div className='skill-wrapper'>
                <div className='card-skill'>
                    <div className='caption'>
                        <h2>Programming Languages</h2>
                    </div>
                    <div className='row'>
                        <img src={JavaIcon}/>
                        <img src={PythonIcon}/>
                        <img src={SwiftIcon}/>
                    </div>
                </div>
                <div className='card-skill'>
                    <div className='caption'>
                        <h2>Web Technologies & Databases</h2>
                    </div>
                    <div className='row'>
                        <img src={HtmlIcon}/>
                        <img src={JSIcon}/>
                        <img src={CSSIcon}/>
                        <img src={JavaIcon}/>
                        <img src={MYSqlIcon}/>
                    </div>
                </div>
                <div className='card-skill'>
                    <div className='caption'>
                        <h2>Frameworks & Libraries</h2>
                    </div>
                    <div className='row'>
                        <img src={ReactIcon}/>
                        <img src={SvelteIcon}/>
                        <img src={FlaskIcon}/>
                        <img src={NodeJSIcon}/>
                    </div>
                </div>
                <div className='card-skill'>
                    <div className='caption'>
                        <h2>Developer Tools</h2>
                    </div>
                    <div className='row'>
                        <img src={VSCodeIcon}/>
                        <img src={npm}/>
                        <img src={SpyderIcon}/>
                        <img src={AnacondaIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills