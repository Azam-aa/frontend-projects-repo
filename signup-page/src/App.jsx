import { useState } from 'react'
import sidepage from './assets/sidepage.jpeg'
import './App.css'
import Page from './Component/page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex h-screen '>
          <div className='w-1/2 flex items-center justify-center '>
              < Page />
          </div>

          <div className='w-1/2 h-full'>
           <img className='w-full h-full object-cover' src={sidepage} alt="side image" />
          </div>
     </div>
    </>
  )
}

export default App
