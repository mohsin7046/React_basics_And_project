import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
       {/* <h1 className='bg-red-400'>Hii</h1> */}
     <div className="w-screen h-screen"
          style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button className='outline-none bg-red-700 px-4 py-3 rounded-full text-white shadow-lg' onClick={() => setColor("Red")}>Red</button>
        <button className='outline-none bg-blue-400 px-4 py-3 rounded-full text-white shadow-lg' onClick={() => setColor("blue")}>blue</button>
        <button className='outline-none bg-black px-4 py-3 rounded-full text-white shadow-lg' onClick={() => setColor("black")}>black</button>
        <button className='outline-none bg-gray-600 px-4 py-3 rounded-full text-white shadow-lg' onClick={() => setColor("gray")}>grey</button>
        <button className='outline-none bg-purple-300 px-4 py-3 rounded-full text-white shadow-lg' onClick={() => setColor("purple")}>lavender</button>
        </div>
        </div>      
          </div>
          
  </>
  )
}

export default App
