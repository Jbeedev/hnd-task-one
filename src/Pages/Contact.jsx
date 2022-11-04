import React from 'react'

const Contact = () => {
  return (
    <div className='mx-5'>
        <div className='mt-7'>
            <h1 className='font-bold text-lg'>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form action="" className='mt-7 flex flex-col'>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="">First name</label>
                <input className='border' type="text" placeholder='Enter your first name' />
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="">Last name</label>
                <input className='border' type="text" placeholder='Enter your last name' />
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="">Email</label>
                <input className='border' type="text" placeholder='yourname@email.com' />
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="">Message</label>
                <textarea className='border' name="" id="" cols="20" rows="5"></textarea>
            </div>
            <div className='flex flex-col space-y-2'>
                <input type="checkbox" placeholder='Enter your first name' />
            </div>
        </form>
    </div>
  )
}

export default Contact