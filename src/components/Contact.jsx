import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#092635] text-white'>
            <form action='' className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 '>Contact</p>
                </div>
                <input name='name' type='text' placeholder='Name' className='p-2' />
                <input name='email' type='email' placeholder='Email' className='my-4 p-2' />
                <textarea name='message' placeholder='Message' rows='10' className='p-2'></textarea>
                <button className='text-white border-2 px-4 py-1 mx-auto my-8 hover:bg-[#5C8374] hover:border-[#5C8374] flex items-center'>Let's talk!</button>
            </form>
        </div>
    )
}

export default Contact