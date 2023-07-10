import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent';
import PurComponent from './PurComponent';

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
         <RegularComponent name={this.state.name}/>
         <PurComponent name={this.state.name}/>
      </div>
    )
  }
}

export default Parent