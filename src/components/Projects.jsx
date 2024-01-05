import React from 'react'
import Test from '../assets/projects/test.png'

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen bg-[#092635] text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4'>Projects</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${Test})`, backgroundSize: 300, borderRadius: 6 }}>
                        <div className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider pl-3'>Weather App</span>
                                <div className='pt-8 text-center'>
                                    <a href='/' className='rounded-3xl px-4 py-2 m-2 border-2 border-white text-white font-bold text-base'>
                                        <button >Demo</button>
                                    </a>
                                    <a href='/' className='rounded-3xl px-4 py-2 m-2 border-2 border-white text-white font-bold text-base'>
                                        <button >Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Test})`, backgroundSize: 300, borderRadius: 6 }}>
                        <div className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider pl-3'>Weather App</span>
                                <div className='pt-8 text-center'>
                                    <a href='/' className='rounded-3xl px-4 py-2 m-2 border-2 border-white text-white font-bold text-base'>
                                        <button >Demo</button>
                                    </a>
                                    <a href='/' className='rounded-3xl px-4 py-2 m-2 border-2 border-white text-white font-bold text-base'>
                                        <button >Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Test})`, backgroundSize: 300, borderRadius: 6 }}>
                        <div className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider pl-3'>Weather App</span>
                                <div className='pt-8 text-center'>
                                    <a href='/' className='rounded-3xl px-4 py-2 m-2 border-2 border-white text-white font-bold text-base'>
                                        <button >Demo</button>
                                    </a>
                                    <a href='/' className='rounded-3xl px-4 py-2 m-2 border-2 border-white text-white font-bold text-base'>
                                        <button >Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects