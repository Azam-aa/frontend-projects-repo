import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Sidebar from './components/Sidebar'
import { div } from 'three/tsl'


function App() {
  

  return (
   <div className='flex h-screen'>
    <div className='w-[20%]'>< Sidebar /></div>
     <div className='w-[80%]'>< Form /></div>
     
    </div>
  )
}

export default App
