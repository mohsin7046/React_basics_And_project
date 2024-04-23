import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  // const myobj = {
  //   username : "Ali",
  //   Pass : 123
  // }
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind-Demo</h1>
      <Card />
      <Card username = "Ali" btnText="Click me"/> 
      <Card btnText="Visit me"/>
    </>
  )
}

export default App
