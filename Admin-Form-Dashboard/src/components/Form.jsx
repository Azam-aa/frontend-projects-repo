import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col w-[799px] h-[1595px]  gap-[32px] overflow-y-auto sticky top-0' >
        <p className='text-center font-bold font-poppins w-[799px] h-[24px] text-[20px] mt-5'>Candidate Eligibility Criteria</p>
        <p className=' text-center text-gray-400 text-[14px] font-poppins mt-[10px] mx-[3.5px] '>Specify the minimum education, relevant specialization, certifications, and experience required for this role. This helps ensure only suitable candidates apply — making your hiring process faster and more efficient.</p>

        <div className=' flex flex-col gap-[24px] mx-7 '>
              <label className='w-[146px] h-[18px] font-poppins text-[14px] leading-[18px] font-medium'>Highest qualication</label>
              <input className='border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 ' type="text" placeholder='Select Highest qualification'/>

              <label className='w-[146px] h-[18px] font-poppins text-[14px] leading-[18px] font-medium'>Educational qualification</label>
              <input className='border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 ' type="text" placeholder='Select educational qualification'/>
        

              <label className='w-[146px] h-[18px] font-poppins text-[14px] leading-[18px] font-medium'>Highest qualication</label>
              <input className='border-[1px] border-gray-400 font-[400] text-gray-600 text-[14px]  rounded-[4px] p-3 ' type="text" placeholder='Select Highest qualification'/>
        
        </div>
      
     </div>
  )
}

export default Form
