// First we make class Component to know the functionality of hooks
// import React, { Component } from 'react'

// class UseEffectHook extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//         count:0
//     }
//   }

//   componentDidMount(){
//     document.title = `Clicked ${this.state.count} times`
//   }

//   componentDidUpdate(prevProps, prevState){
//     document.title = `Clicked ${this.state.count} times`
//   }

//   render() {
//     return (
//       <div>
//       <button onClick={()=>this.setState({count: this.state.count + 1 })}>Clicked {this.state.count} times</button>
//       </div>
//     )
//   }
// }

// export default UseEffectHook


// -------------------------------------------------------------------------

import React,{useState,useEffect} from 'react'

function UseEffectHook() {
    const [count, setCount]=useState(0)
    const [name,setName]=useState("")

    useEffect(()=>{
        console.log("useEffect - Updating document title")
        document.title=`You Clicked ${count} times`
    },[count])

  return (
    <div>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffectHook