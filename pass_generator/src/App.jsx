import { useState, useCallback , useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState("false")
  const [charAllowed, setCharAllowed] = useState("false")
  const [password, setPassword] = useState("")
  
  const passRef = useRef(null)

  const PassCopy = useCallback(
    () => {
      passRef.current?.select()
      // passRef.current?.setSelectionRange(0,3)  ==>  for a particular selection range
      window.navigator.clipboard.writeText(password)
    },
    [password])

  const Pass_Generator = useCallback(
  () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXZabcddefghijklmnopqrstuvwxyz";

  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "@#$%^&*(){}[]?"

  for (let i = 0; i <= length; i++) {
    const char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)

  }
   ,[length, numberAllowed, charAllowed, setPassword])


   useEffect( () => {
    Pass_Generator()
   },[length,numberAllowed,charAllowed,Pass_Generator]);

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400  bg-gray-800'>
      <h1 className='text-white text-center mt-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          
        <input type='Text'
         value={password}
         placeholder='Password'
         className=' w-full rounded-lg px-3 py-4 text-2xl font-semibold'
         ref={passRef}
        readOnly
        />
        <button 
        className='bg-orange-400 text-white outline-none px-3 py-5 shrink-0'
        onClick={PassCopy}
        >Copy</button>
        </div>
        <div>
          <input 
          type='range'
          value={length}
          min={6}
          max={100}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='p-2'>Length: {length}</label>
          <input 
          type='checkbox'
          defaultChecked = {numberAllowed}
          className='m-2'
          id='num_check'
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          
        }}
          ></input>
          <label htmlFor='num_check'>Number</label>

        
          <input 
          type='checkbox'
          defaultChecked={charAllowed}
          className='m-2'
          id='char_check'
          onChange={() => {
            setCharAllowed((prev) => !prev)

        }}
          ></input>
          <label htmlFor='char_check'>special-char</label>
        </div>
      </div>
    </>
  )
}

export default App
