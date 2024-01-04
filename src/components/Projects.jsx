import React from 'react'
// import Proj from '../assets/projects/proj1.png'

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen bg-[#092635] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4'>Projects</p>
                </div>
                {/* style={{backgroundImage: `url{${Proj}}`}} */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div>
                            <span></span>
                            <div>
                                <a>
                                    <button></button>
                                </a>
                                <a>
                                    <button></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects