import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  //state to hold value from input box
  const [range , setRange] = useState("")
  //HOOK to dispatch a function in action
  const dispatch = useDispatch()
  //component can access the state by using useselector Hook
  const count = useSelector((state)=>state.counter.value)

  //check range in inputbox
  console.log(range);

  return (
   <>
      <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
          <h1 style={{fontSize:'90px'}}>{count}</h1>
          <div className='mt-5'>
              <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-primary p-3'>Decrement</button>
              {/* Number method is used to convert string into number */}
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
              <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
          </div>
      </div>
  
       {/* input box */}
       <div>
       <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control w-100 mt-3' placeholder='Enter the range'style={{borderColor:'red'}} />
     </div>
   </>
  )
}

export default Counter