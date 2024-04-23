import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <Login username="Ali" pass="123" />
   </>
  )
}

export default App
