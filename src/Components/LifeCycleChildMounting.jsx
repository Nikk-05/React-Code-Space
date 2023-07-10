import React, { Component } from 'react'

class LifeCycleChildMounting extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Nikhil"
        }
        console.log("LifeCycleChildMounting Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleChildMounting getDerivedStateFromProps')
        return null;
    }
   
    componentDidMount(){
        console.log("LifeCycleChildMounting componentDidMount")
    }
  render() {
    console.log("LifeCycleChildMounting render")
    return (
      <div>
      LifeCycleChildMounting
      </div>
    )
  }
}

export default LifeCycleChildMounting