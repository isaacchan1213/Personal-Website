import React, {useState} from 'react';
import GithubIcon from './assets/github-icon.png'
import LinkedinIcon from './assets/linkedin-icon.png'
import InstagramIcon from './assets/instagram-icon.png'
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen);
    
    return (
        <nav className="p-[2rem] sm:sticky top-0 flex justify-between items-center sm:p-[3rem] bg-darkBlue z-[1000]">
            <div className='flex justify-between w-full md:w-auto'>
                <div className='logo'>
                    <a className="text-[20px] font-medium text-moonYellow text-nowrap" href="#home"><h2>Isaac Chan</h2></a>
                </div>
                <div className="mt-[-9px] md:hidden">
                    <Hamburger toggled={isOpen} toggle={setIsOpen} color="#F5F5F5" />
                </div>
            </div>
            <div className={`${isOpen ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-darkBlue bg-opacity-90 flex flex-col items-center justify-center z-[999] transition-opacity duration-300 md:relative md:flex md:flex-row md:gap-[20px]`} onClick={() => setIsOpen(false)}>
                <ul className="flex flex-col items-center list-none gap-6 md:flex-row md:gap-[20px]">
                    <li><a className="text-moonYellow font-semibold hover:underline" href="#about-me">About Me</a></li>
                    <li><a className="text-moonYellow font-semibold hover:underline" href="#skills">Skills</a></li>
                    <li><a className="text-moonYellow font-semibold hover:underline" href="#hobbies">Hobbies</a></li>
                    <li><a className="text-moonYellow font-semibold hover:underline" href="#projects">Projects</a></li>
                    <li><a className="text-moonYellow font-semibold hover:underline" href="#resume">Resume</a></li>
                    <li><a className="text-moonYellow font-semibold hover:underline" href="#contact">Contact</a></li>
                    <ul className="md:hidden">
                        <li><a href="https://github.com/isaacchan1213" target="_blank" rel="noreferrer noopener"><img className="w-[30px] h-[30px] rounded-[30%] inline text-moonYellow font-semibold hover:underline mr-[5px] mb-[5px]" src={GithubIcon} alt="GitHub"/>GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/isaacchan1213/" target="_blank" rel="noreferrer noopener"><img className="w-[30px] h-[30px] rounded-[30%] inline text-moonYellow font-semibold hover:underline mr-[5px] mb-[5px]" src={LinkedinIcon} alt="LinkedIn"/>LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/isaacchn_" target="_blank" rel="noreferrer noopener"><img className="w-[30px] h-[30px] rounded-[30%] inline text-moonYellow font-semibold hover:underline mr-[5px] mb-[5px]" src={InstagramIcon} alt="Instagram"/>Instagram</a></li>
                    </ul>
                </ul>
            </div>
            <ul className="hidden md:flex list-none gap-[10px]">
                    <li><a href="https://github.com/isaacchan1213" target="_blank" rel="noreferrer noopener"><img className="w-[35px] h-[30px] rounded-[30%]" src={GithubIcon} alt="GitHub"/></a></li>
                    <li><a href="https://www.linkedin.com/in/isaacchan1213/" target="_blank" rel="noreferrer noopener"><img className="w-[35px] h-[30px] rounded-[30%]" src={LinkedinIcon} alt="LinkedIn"/></a></li>
                    <li><a href="https://www.instagram.com/isaacchn_" target="_blank" rel="noreferrer noopener"><img className="w-[35px] h-[30px] rounded-[30%]" src={InstagramIcon} alt="Instagram"/></a></li>
            </ul>
        </nav>
    );
}

export default Navbar