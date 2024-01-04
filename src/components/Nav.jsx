import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/logo.png'

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#092635] text-gray-300'>
            <div>
                <img src={Logo} alt="logo" className='w-[150px]' />
            </div>

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!showMenu ? <FaBars /> : <FaTimes />}
                
            </div>

            <ul className={!showMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#092635] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] bg-blue-800 flex justify-between items-center ml-[-100px] hover:ml-0 duration-300'>
                        <a href='https://www.linkedin.com/in/seanlam9282/' className='flex justify-between items-center w-full'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-gray-600 flex justify-between items-center ml-[-100px] hover:ml-0 duration-300'>
                        <a href='https://github.com/seanlam9282' className='flex justify-between items-center w-full'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-green-800 flex justify-between items-center ml-[-100px] hover:ml-0 duration-300'>
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