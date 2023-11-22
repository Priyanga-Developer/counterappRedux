import React, { useState } from 'react'
import { useSelector,useDispatch} from "react-redux"
import { decrement, increment,reset,increaseAmount } from './counterslice'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch =useDispatch();
    const [amount,setAmount]=useState(0);
    const addValue=Number(amount)||0;
    const resetAll=()=>{
        setAmount(0)
        dispatch(reset())
    }
  return (
  <section>
             <p>{count} </p>
             <div>
                <button type='button' onClick={()=>dispatch(decrement())}>-</button>
                <button type='button' onClick={()=>dispatch(increment())}>+</button>
             
        </div>
        <input type="text"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
         />
        <div>
            <button onClick={()=>dispatch(increaseAmount(addValue))}>Add Amount</button>
            <button onClick={resetAll}>Reset</button>
        </div>
  </section>
  )
}

export default Counter