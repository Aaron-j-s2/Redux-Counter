import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementByAmount, incrementCounter, reset } from '../redux/counterSlice'

function Counter() {
  const[amount,setAmount] = useState(0)
 const count = useSelector((state)=>state.counter.count)
 const dispatch = useDispatch()

const handleSubmittion=()=>{
  if(amount){
  dispatch(incrementByAmount(+amount))
}
else{
  alert("Enter a valid number")
}
 }
  return (
    <div className="w-full  h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-sky-200">
      <p className="text-5xl font-bold text-gray-800">Counter App</p>
      <p className="text-7xl font-extrabold mt-6 text-gray-800">{count}</p>

      <div className="flex items-center gap-6 mt-8">
        <button 
          onClick={()=>dispatch(incrementCounter())}
          className="bg-red-800 hover:bg-green-600 rounded-full shadow-lg px-6 py-3 text-white font-semibold transition"
        >
          Increment
        </button>
        
        <button 
         onClick={()=>dispatch(reset())}
          className="bg-red-800 hover:bg-red-600 rounded-full shadow-lg px-6 py-3 text-white font-semibold transition"
        >
          Reset
        </button>
         <button 
          onClick={()=>dispatch(decrementCounter())}
          className="bg-red-800 hover:bg-red-500 rounded-full shadow-lg px-6 py-3 text-white font-semibold transition"
        >
          Decrement
        </button>
       
      </div>
      <div>
        <input type="text" placeholder='Enter amount'onChange={e=>setAmount(e.target.value)}/>
         <button onClick={handleSubmittion}
          className="ms-2 mt-10 bg-red-800 hover:bg-red-500 rounded-full shadow-lg px-6 py-3 text-red-100 font-semibold transition"
        >
          Check
        </button>
      </div>
    </div>
  )
}

export default Counter