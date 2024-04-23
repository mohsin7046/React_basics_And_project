import { useState, useEffect } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './currencyInfo/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from ,setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

   const currencyInfo = useCurrencyInfo("usd")
   const options = Object.keys(currencyInfo)

   function Swap() {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
   function Convert() {   
    setConvertedAmount(amount*currencyInfo[to])
  }
   
  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url('https://images.pexels.com/photos/321452/pexels-photo-321452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
    >

      <div className='flex flex-row'>  
        </div>
        <div className="row-start-1 row-end-4">
          <div className='w-full/2'>

            <div className='w-full mx-w-md mx-auto border border-gray-60 
            rounded-lg p-5 backdrop-blur-sm bg-white/30'>
              <form onSubmit={(e) => {
                e.preventDefault();
                Convert()
              }}>
                  <div className='w-full mb-1'>
                      <InputBox 
                        label="From"
                        amount = {amount}
                        OnchangeAmount={(currency)=>setAmount(currency)}
                        currencyOption={options}
                        OncurrencyChange={(currency)=>setConvertedAmount(amount)}
                        selectCurrency={from}
                      />
                  </div>
                  <div className='relative w-full h-0.5'>
                      <button type='button' 
                        className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white
                        rounded-md bg-blue-600 text-white px-2 py-0.5'
                        onClick={Swap()} 
                        >
                          swap
                      </button>
                  </div>

                  <div className='w-full mt-1 mb-4'>
                      <InputBox 
                        label="To"
                        amount = {convertedAmount}
                        
                        currencyOption={options}
                        OncurrencyChange={(currency)=>setTo(currency)}
                        selectCurrency={to}
                        amountDisable
                      />
                  </div>
                  <button type='submit' className='w-full bg-blue-600 
                  text-white px-4 py-3 rounded-lg'>
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default App
