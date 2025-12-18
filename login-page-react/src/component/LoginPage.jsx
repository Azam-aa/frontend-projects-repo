import {use, useState} from "react";
import bg from "../assets/bg.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import logo from "../assets/logo.png";

const LoginPage = () => {

    const [email, setEmail]= useState("");
    const [password, setPassword]=useState("");

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        if(!emailRegex.test(email)){
            alert("Enter a valid email address");
            return;
        }

        if(!passwordRegex.test(password)){
            alert("Password must be 8+ chars with uppercase, lowercase, number & special character");
             return;
        }
         alert("Login successful (API integration pending)");
    }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src={bg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="relative z-10 w-[353px] h-[471px] rounded-[25px] 
                      border-[7px] border-white bg-white/10 
                      backdrop-blur-md shadow-xl 
                      flex flex-col items-center justify-center gap-2 "
      >
        <img src={logo} alt="logo" className="w-12 h-12 cursor-pointer" />
        <p className="font-bold text-[16px]">Welcome back</p>
        <p className="text-gray-400 text-[12px]">
          Please enter your details to sign in
        </p>

        <div className="flex gap-3 mt-4">
         <div onClick={() => window.open("https://www.icloud.com/", "_blank")} className="w-[75px] h-[30px] border border-black rounded-xl flex items-center justify-center cursor-pointer"> <img src={apple} className="w-3 h-3 " /></div>
          <div onClick={()=> window.open("https://tinyurl.com/2kvmbm2w","_blank")} className="w-[75px] h-[30px] border border-black rounded-xl flex items-center justify-center cursor-pointer"> <img src={google} className="w-3 h-3 " /></div>
          <div onClick={()=> window.open("https://www.facebook.com/login/","_blank")} className="w-[75px] h-[30px] border border-black rounded-xl flex items-center justify-center cursor-pointer"> <img src={facebook} className="w-3 h-3 " /></div>
        </div>

        <div className="flex flex-col mt-4">
        <label className="px-4 text-black font-bold text-[12px] ">E-Mail Address</label>
        <input className="text-[12px] border rounded-xl w-[259px] h-[30px] p-3 m-2" type="email" placeholder="Enter your email..." value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>

        <div className="flex flex-col mt-2">
        <label className="px-4 text-black font-bold text-[12px] ">Password</label>
        <input className="text-[12px] border rounded-xl w-[259px] h-[30px] p-3 m-2" type="password" placeholder="Password@1234" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <div className="mt-0 flex w-[259px] items-center justify-between px-2">
  <div className="flex items-center gap-1">
    <input
      type="checkbox"
      className="h-[15px] w-[15px]"
    />
    <label className="text-[12px]">Remember me</label>
  </div>

  <p className="cursor-pointer text-[12px] text-gray-500 hover:underline">
    Forgot password?
  </p>
</div>


<button className="bg-black w-[259px] rounded-[12px] mt-2 text-white p-2 cursor-pointer" onClick={handleLogin}>Sign in</button>

<div className="mt-0 flex w-[259px] items-center justify-between px-8">
  <div className="flex items-center gap-1">
   <p className="cursor-pointer text-[12px] text-gray-500 hover:underline">
    Don't have an account yet?
  </p>
    <label onClick={() => alert("Signup page is under construction 🚧")} className="text-[12px] cursor-pointer">Sign up</label>
  </div>

  
</div>
    
      </div>
    </div>
  );
};

export default LoginPage;
