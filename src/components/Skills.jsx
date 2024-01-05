import React from 'react'
import Java from '../assets/skills/java.png'
import CSharp from '../assets/skills/csharp.png'
import Python from '../assets/skills/python.png'
import Node from '../assets/skills/node.png'
import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import Tailwind from '../assets/skills/tailwind.png'
import JavaScript from '../assets/skills/javascript.png'
import ReactJS from '../assets/skills/react.png'
import ReactNative from '../assets/skills/react-native.png'
import Next from '../assets/skills/next.png'
import Git from '../assets/skills/git.png'
import Firebase from '../assets/skills/firebase.png'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#092635] text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4'>Skills</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
                    <div className='hover:scale-150 duration-500'>
                        <img src={Java} alt='Java' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={CSharp} alt='CSharp' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={Python} alt='Python' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={Node} alt='Node' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={HTML} alt='HTML' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={CSS} alt='CSS' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={Tailwind} alt='Tailwind' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={JavaScript} alt='JavaScript' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={ReactJS} alt='ReactJS' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={ReactNative} alt='ReactNative' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={Next} alt='Next' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={Git} alt='Git' className='w-20 mx-auto' />
                    </div>
                    <div className='hover:scale-150 duration-500'>
                        <img src={Firebase} alt='Firebase' className='w-20 mx-auto' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills