import React, { PureComponent } from 'react'

export class PurComponent extends PureComponent {  
  render() {
    console.log("Pure Component")
    return (
      <div>PureComponent {this.props.name} </div>
    )
  }
}

export default PurComponent