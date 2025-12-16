import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col w-[799px] h-[1595px]  gap-[32px] overflow-y-auto sticky top-0' >
        <p className='text-center font-bold font-poppins w-[799px] h-[24px] text-[20px] mt-5'>Candidate Eligibility Criteria</p>
        <p className=' text-center text-gray-400 text-[14px] font-poppins mt-[10px] mx-[3.5px] '>Specify the minimum education, relevant specialization, certifications, and experience required for this role. This helps ensure only suitable candidates apply — making your hiring process faster and more efficient.</p>

        <div className=' flex flex-col gap-[24px] mx-7 '>
              <label className=' font-poppins text-[14px] leading-[18px] font-medium'>Highest qualication</label>
              <input className='border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 ' type="text" placeholder='Select Highest qualification'/>

              <div className=' flex flex-col gap-[10px] '>
               <label className='font-poppins text-[14px] leading-[18px] font-medium'>Education qualication</label>
               <p className='text-[12px] text-gray-400  border-gray-400 font-[400] '>Choose "Any Qualification" if the job doesn't require a specific qualification</p>
               <select className='border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 '>
                <option value="">Select educational qualification</option>
                <option value="UG">UG</option>
                <option value="PG">PG</option>
                <option value="BCA">BCA</option>
                <option value="PhD">PhD</option>
               </select>
               </div>

               <div className=' flex flex-col gap-[10px] '>
               <label className='font-poppins text-[14px] leading-[18px] font-medium'>Is the above Educational qualification mandatory for job aspirants?</label>
               <p className='text-[12px] text-gray-400  border-gray-400 font-[400] '>Choosing 'yes' restricts this job to candidates with the listed qualifications.</p>
              <div className='flex gap-[24px]'>
               <label >
                <input type="radio" name="educationRequired" value="yes"  className="accent-[rgba(246,135,33,1)] " /> Yes
               </label>
                <label >
                <input type="radio" name="educationRequired" value="no" defaultChecked  className="accent-[rgba(246,135,33,1)]" /> No
               </label>
               </div>
               </div>

               <div className=' flex flex-col gap-[10px] '>
               <label className='font-poppins text-[14px] leading-[18px] font-medium'>Specialization</label>
               <p className='text-[12px] text-gray-400  border-gray-400 font-[400] '>Select "Any Specialization" if the job doesn't require a specific one</p>
               <input className='border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 ' type="text" placeholder='Select specialization'/>
               </div>

               <div className=' flex flex-col gap-[10px] '>
               <label className='font-poppins text-[14px] leading-[18px] font-medium'>Is the above specialization mandatory for job aspirants?</label>
               <p className='text-[12px] text-gray-400  border-gray-400 font-[400] '>Selecting 'yes' limits this job to candidates with the specified specializations.</p>
              <div className='flex gap-[24px]'>
               <label >
                <input type="radio" name="educationRequired" value="yes"  className="accent-[rgba(246,135,33,1)] " /> Yes
               </label>
                <label >
                <input type="radio" name="educationRequired" value="no" defaultChecked  className="accent-[rgba(246,135,33,1)]" /> No
               </label>
               </div>
               </div>

              <div className=' flex flex-col gap-[10px] '>
              <label className=' font-poppins text-[14px] leading-[18px] font-medium'>Preferred Academic Completion Year</label>
              <input type="date" className='border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 ' placeholder='Select Date'/>
              </div>

              <div className=' flex flex-col gap-[10px] '>
              <label className=' font-poppins text-[14px] leading-[18px] font-medium'>Highest qualication</label>
              <div className='flex flex-row  gap-[35px] '>  
              <input className='border-[1px]  border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 w-[366px] ' type="text" placeholder='Minimun(Year)'/>
               <input className='border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 w-[366px]' type="text" placeholder='Maximum(Year)'/>
              </div>
              </div>

              <label className=' font-poppins text-[14px] leading-[18px] font-medium'>Certifications </label>
              <input className='border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 ' type="text" placeholder='Enter certificate'/>

              <div className='flex flex-row  gap-[35px] '>  
             
             <div className=' flex flex-col gap-[10px] '>
              <label className=' font-poppins text-[14px] leading-[18px] font-medium'>Industry</label>
               <select className='w-[354px] border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 '>
                <option value="">Select Industry </option>
                <option value="UG">IT</option>
                <option value="PG">Non-IT</option>
               </select>
                </div>

               <div className=' flex flex-col gap-[10px] '>
               <label className=' font-poppins text-[14px] leading-[18px] font-medium'>Spoken Languages</label>
               <input className='w-[352px] border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 ' type="text" placeholder='Select Languages'/>
               </div>
              </div>

              <label className=' font-poppins text-[14px] leading-[18px] font-medium'>Written Languages</label>
              <input className='border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 ' type="text" placeholder='Select Languages'/>

              <div className=' flex flex-col gap-[10px] '>
              <label className=' font-poppins text-[14px] leading-[18px] font-medium'>When can you start ?</label>
              <div className='flex flex-wrap  gap-[12px] '>  
              <input className='w-[144px] h-[40px] border-[1px]  border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-[10px]  ' type="text" placeholder='Immediate Joiner'/>
              <input className='w-[144px] h-[40px] border-[1px]  border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-[10px]  ' type="text" placeholder='Within 1 Week'/>
              <input className='w-[144px] h-[40px] border-[1px]  border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-[10px]  ' type="text" placeholder='Within 15 days'/>
              <input className='w-[144px] h-[40px] border-[1px]  border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-[10px]  ' type="text" placeholder='Within 1 month'/>
              <input className='w-[144px] h-[40px] border-[1px]  border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-[10px]  ' type="text" placeholder='Within 2 month'/>
              <input className='w-[144px] h-[40px] border-[1px]  border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-[10px]  ' type="text" placeholder='Within 3 month'/>
              </div>
              </div>
        </div>
      
     </div>
  )
}

export default Form
