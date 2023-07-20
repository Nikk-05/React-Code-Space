import React, {useState} from 'react'

const HookState = () =>{
    const [count,setCount]=useState(0)

    const incrementCounter= () =>{
        setCount(count+1)
    }
    return (
        <div>
            <button onClick={incrementCounter}>Clicked {count} times </button>
        </div>
    )
}
export default HookState;