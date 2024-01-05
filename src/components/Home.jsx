import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { IoMdDownload } from 'react-icons/io'
import Resume from '../assets/Sean_Lam.pdf'
// import Profile from '../assets/profile.png'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#092635]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <span className='text-xl text-[#9EC8B9]'>Hello, I&apos;m{' '}</span>
                <TypeAnimation sequence={['Sean Lam', 1000, 'A Fullstack Developer', 1000]} wrapper='span' speed={50} repeat={Infinity} className='text-4xl sm:text-7xl font-bold text-[#9EC8B9]' />
                <div>
                    <button className='text-white border-2 px-6 mt-8 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>
                        <a href={Resume} download className='flex items-center'>My Resume <IoMdDownload className='ml-3' /> </a>
                    </button>
                </div>
            </div>
            {/* <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <img src={Profile} alt='profile' className='absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={200} height={200} />
            </div> */}
        </div>
    )
}

export default Home