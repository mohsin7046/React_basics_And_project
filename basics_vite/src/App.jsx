import { useState } from 'react' //Hookes is used 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter] = useState(10)
// let counter = 5
  const Add = () => {
    
      if(counter>=50){
        console.log("Value become out of range");
      }
      else{
        setCounter(counter + 1)
        console.log("Clicked",counter);
      }
  }
  const Remove = () => {
    if(counter<=0){
      console.log("Value become negative");
    }
    else{
      setCounter(counter - 1)
    console.log("Removed",counter);
    }
    
  }
 // We can acesss variable anywhere using useState hooks in react
  return (
    <>
      <h1>Counter : {counter}</h1> 
      <button onClick={Add}>Add Count{counter}</button>
      <button onClick={Remove}>Remove Count{counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
