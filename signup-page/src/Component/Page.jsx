import React, { useState } from 'react'

const Page = () => {
const [fromData, setFormData] = useState({
  fullName:"",
  email:"",
  password:"",
  confirmPassword:"",
})

const [error, setErrors] = useState({});
const [loading, setLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);

const handleChange = (e) => {
  setFormData({...fromData, [e.target.name]:e.target.value});
}

const validate = () => {
  let newErros = {};

  if(FormData.fullName.length < 3){
    newErrors.fullName = "Name must be at least characters";
  }

  if(!FormData.email.includes("@")){
    newErrors.email = "Enter a valid email";
  }

  if(FormData.password.length < 8){ 
    newErrors.password = "Password must be character";
  }

  if(FormData.password !== FormData.confirmPassword){
    newErrors.confirmPassword = "Password do not match";
  }


  return newErrors;
}

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if(objectDirection.keys(validationErrors).length > 0){
    setErrors(validationErrors);
    return;
  }

  setErrors({});
  setLoading(true);

  setTimeout(()=>{
    console.log("User Registereed:",formData);
    setLoading(false);
    alert("Singup successful!");
  }, 1500);

}

  return (
    <div className='mx-3 mt-1 font-[Poppins] rounded-[12px] p-8  '>
      <h1 className='font-bold text-[59.25px] '>Sign up</h1>
      <h3 className='text-[20px]'>Let the awesome begin</h3>

        <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-3">
       
        <input value={formData.fullName} onChange={handleChange} className='border border-black rounded-[8px] p-4 w-90 ' type="text" placeholder='Full Name'/>
        <input value={formData.email} onChange={handleChange} className='border border-black rounded-[8px] p-4 w-90 ' type="email" placeholder='Email'/>
        <input value={formData.password} onChange={handleChange} className='border border-black rounded-[8px] p-4 w-90 ' type="password" placeholder='Password' />
        <input value={formData.confirmPassword} onChange={handleChange}  className='border border-black rounded-[8px] p-4 w-90 ' type="password" placeholder='Repeat Password'  />
      

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
