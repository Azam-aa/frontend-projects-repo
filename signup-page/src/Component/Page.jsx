import React from 'react'

const Page = () => {
  return (
    <div className='mx-3 mt-1 font-[Poppins] rounded-[12px] p-8  '>
      <h1 className='font-bold text-[59.25px] '>Sign up</h1>
      <h3 className='text-[20px]'>Let the awesome begin</h3>

        <form className="mt-14 flex flex-col gap-3">
       
        <input className='border border-black rounded-[8px] p-4 w-90 ' type="text" placeholder='Full Name'/>
        <input className='border border-black rounded-[8px] p-4 w-90 ' type="email" placeholder='Email'/>
        <input className='border border-black rounded-[8px] p-4 w-90 ' type="password" placeholder='Password' />
        <input className='border border-black rounded-[8px] p-4 w-90 ' type="password" placeholder='Repeat Password'  />
      

        <div className='flex flex-row gap-3 mt-5'>
            <button className='border p-3  rounded-[12px] w-30 bg-black text-white cursor-pointer' type='submit'>Sign Up</button>
            <button className='border p-3  rounded-[12px] w-30 cursor-pointer' >Go Back</button>
        </div>
        </form>
        <p className='mt-5 cursor-pointer text-gray-600'>I Already Have an Account </p>

        
        <div className='flex flex-row gap-5 mt-5'>
            <p className='cursor-pointer '>Terms and Conditions</p>
            <p className='cursor-pointer '>Privacy Policy</p>
        </div>

    </div>
  )
}

export default Page
