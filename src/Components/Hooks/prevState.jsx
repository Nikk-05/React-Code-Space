import React, {useState, prevState} from 'react'

function PrevState() {
    const [count, setCount]=useState(0) 
  return (
    <div>
        Count: {count}
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount((prevState)=>prevState+1)}>Increase</button>
        <button onClick={()=>setCount((prevState)=>prevState-1)}>Decrease</button>
    </div>
  )
}

export default PrevState