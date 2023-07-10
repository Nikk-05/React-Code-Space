
import React, { Component } from 'react'
import LifeCycleChildMounting from './LifeCycleChildMounting'

class LifeCycleMounting extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Nikhil"
        }
        console.log("LifeCycleMounting Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleMounting getDerivedStateFromProps')
        return null;
    }
   
    componentDidMount(){
        console.log("LifeCycleMounting componentDidMount")
    }
  render() {
    console.log("LifeCycleMounting render")
    return (
      <div>
      <LifeCycleChildMounting/>
      </div>
    )
  }
}

export default LifeCycleMounting