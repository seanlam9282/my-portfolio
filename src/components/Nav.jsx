import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#092635] text-gray-400'>
            <div>
                <img src='logo.png' alt='logo' className='w-28 h-14 pl-8'/>
            </div>

            <ul className='hidden md:flex'>
                <li className='group transition duration-500 hover:text-white'><Link to='home' smooth={true} duration={500}>Home<span class='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span></Link></li>
                <li className='group transition duration-500 hover:text-white'><Link to='about' smooth={true} duration={500}>About<span class='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span></Link></li>
                <li className='group transition duration-500 hover:text-white'><Link to='projects' smooth={true} duration={500}>Projects<span class='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span></Link></li>
                <li className='group transition duration-500 hover:text-white'><Link to='skills' smooth={true} duration={500}>Skills<span class='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span></Link></li>
                <li className='group transition duration-500 hover:text-white'><Link to='contact' smooth={true} duration={500}>Contact<span class='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span></Link></li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!showMenu ? <FaBars /> : <FaTimes />}
                
            </div>

            <ul className={!showMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#092635] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link to='home' smooth={true} duration={500} onClick={handleClick}>Home</Link></li>
                <li className='py-6 text-4xl'><Link to='about' smooth={true} duration={500} onClick={handleClick}>About</Link></li>
                <li className='py-6 text-4xl'><Link to='projects' smooth={true} duration={500} onClick={handleClick}>Projects</Link></li>
                <li className='py-6 text-4xl'><Link to='skills' smooth={true} duration={500} onClick={handleClick}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link to='contact' smooth={true} duration={500} onClick={handleClick}>Contact</Link></li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] bg-blue-800 text-white flex justify-between items-center ml-[-100px] hover:ml-0 duration-300'>
                        <a href='https://www.linkedin.com/in/seanlam9282/' className='flex justify-between items-center w-full'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-gray-600 text-white flex justify-between items-center ml-[-100px] hover:ml-0 duration-300'>
                        <a href='https://github.com/seanlam9282' className='flex justify-between items-center w-full'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-green-800 text-white flex justify-between items-center ml-[-100px] hover:ml-0 duration-300'>
                        <a href='mailto:sean.lam9282@gmail.com' className='flex justify-between items-center w-full'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav