
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../Slice/CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount]= useState(2)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div>
            <input value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}/>
            <button onClick={()=>dispatch(incrementByAmount(Number(incrementAmount)))}>Add Amount</button>
        </div>
      </div>
    </div>
  )
}