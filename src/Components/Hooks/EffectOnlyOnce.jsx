// import React, { Component } from 'react'

// class EffectOnlyOnce extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             x:0,
//             y:0
//         }
//     }
    
//     logMousePosition= e=>{
//         this.setState({x:e.clientX, y: e.clientY})
//     }

//     componentDidMount(){
//         window.addEventListener('mousemove',this.logMousePosition)
//     }

//   render() {
//     return (
//       <div style={this.state.x === this.state.y ? {backgroundColor:'green'}: {} }>
//       <h3>X  - {this.state.x} </h3>
//       <h3>Y  - {this.state.y} </h3>
//       </div>
//     )
//   }
// }

// export default EffectOnlyOnce

// -----------------------------------------------------------------------//
import React, { useEffect,useState } from 'react'

export default function EffectOnlyOnce() {
    const [x, setX]=useState(0)
    const [y, setY]=useState(0)

    const logMousePosition = (e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("UseEffect Called")
        window.addEventListener('mousemove',logMousePosition)
    },[])

  return (
    <div>
        <h3>  X- {x} </h3>
        <h3> Y - {y} </h3>
    </div>
  )
}
