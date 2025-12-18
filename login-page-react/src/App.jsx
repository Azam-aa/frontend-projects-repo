import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bg from './assets/bg.png'
import apple from './assets/apple.png'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './component/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <div>
      <img className='w-full h-screen' src="bg.png" alt="" />

     </div> */}
     <LoginPage/>
    </>
  )
}

export default App
