import {useState } from "react";
import "./App.css";


function App(){
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const convertCurrency = async() => {};

  return(
    <>
       <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Currency Converter</h1>

      <div className="container mx-auto flex flex-col gap-4 w-full max-w-md">
        <input
          type="number"
          value={amount}
          onChange={(e)=> setAmount(e.target.value)}
          className="border border-white rounded-3xl px-4 py-3 bg-transparent text-white outline-none"
          placeholder="Enter amount"
       />

       <select 
          value={from}
          onChange={(e)=> setFrom(e.target.value)}
          className="border border-white rounded-3xl px-4 py-3 bg-black text-white outline-none" 
       >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
       </select>

        <select 
          value={to}
          onChange={(e)=>setTo(e.target.value)}
          className="border border-white rounded-3xl px-4 py-3 bg-black text-white outline-none"
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        
      </div>

      <button className="border border-white rounded-2xl px-3 py-2 mt-3 w-35 bg-blue-800 cursor-pointer" type="submit">Convert</button>

    </div>
        
    </>
  )
}

export default App;