// import React, { Component } from 'react'

// class IntervalCounter extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             count:0
//         }
//     }
    
//     componentDidMount(){
//         this.Interval = setInterval(this.tick,1000)
//     }

//     tick = ()=>{
//         this.setState({count:this.state.count+1})
//     }

//     componentWillUnmount(){
//         clearInterval(this.Interval)
//     }

//   render() {
//     return (
//       <div>
//         <h2>{this.state.count}</h2>
//       </div>
//     )
//   }
// }

// export default IntervalCounter

// // --------------------------------------------------------------------------------
import React, { useEffect, useState} from 'react'

export default function IntervalCounter() {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("useEffect called")
        const Interval = setInterval(()=>setCount(count+1),1000)
        return ()=>{
            clearInterval(Interval)
        }
    },[count])


  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}
