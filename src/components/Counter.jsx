import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'



function Counter() {

  const [amount,setAmount]=useState(0)

const dispatch=useDispatch()

 const {count}= useSelector((state)=>state.counterReducer)

 const handleincremntByAmount=()=>{
  if(amount){

    dispatch(incrementByAmount(Number(amount)))

  }
  else{
    alert("please enter the amount")
  }
 }
  return (
    <div className='d-flex align-items-center justify-content-center flex-column p-3' style={{minHeight:'100vh',backgroundColor:'black'}}>
         <h1 className='text-white mb-5'>  Counter App</h1>
         <div className=' text-center  justify-content-center border border-3 border-white p-3 rounded flex-column' style={{height:'400px',width:'700px'}}>
            <h1 className='fs-1 text-white'>{count}</h1>
            <div className="mt-5 d-flex align-items-center justify-content-around">
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
                <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>

            </div>
            <div className='mt-5 d-flex justify-content-between'>
                <input onChange={(e)=>setAmount(e.target.value)} type="text" className='form-control' placeholder='incremeted counter amount'/>
                <button onClick={handleincremntByAmount} className='btn btn-info ms-3'>Increment By Amount</button>
            </div>
         </div>
    </div>
  )
}

export default Counter