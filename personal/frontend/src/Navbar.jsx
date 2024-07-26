import React from 'react';
import './Navbar.css';
import GithubIcon from './assets/github-icon.png'
import LinkedinIcon from './assets/linkedin-icon.png'
import InstagramIcon from './assets/instagram-icon.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='logo'>
                <a href="#home"><h2>Isaac Chan</h2></a>
            </div>
            <ul className='menu'>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className='menu-socials'>
                <li><a href="https://github.com/isaacchan1213"><img src={GithubIcon}/></a></li>
                <li><a href="https://www.linkedin.com/in/isaacchan1213/"><img src={LinkedinIcon}/></a></li>
                <li><a href="https://www.instagram.com/isaacchn_"><img src={InstagramIcon}/></a></li>
            </ul>
        </nav>
    );
}

export default Navbar