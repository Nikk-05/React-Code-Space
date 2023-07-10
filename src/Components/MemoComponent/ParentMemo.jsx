import React, { Component} from 'react'
import MemoComp from './MemoComp';

export class Parent extends Component {
    constructor(props) {
        super(props);
        {
            this.state={
                name:'Nikhil'
            }
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Nikhil'
            })
        },2000)
    }
  render() {
    console.log('********************Parent Component****************')
    return (
      <div>
         Parent
         <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default Parent