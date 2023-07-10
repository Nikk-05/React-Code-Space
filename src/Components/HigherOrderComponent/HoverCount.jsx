import React, {useState} from 'react'
import UpdatedComponent from './withCounter' 

function HoverCount({count, incrementCounter}) {
  return (
    <div>
        <h1 onMouseOver={incrementCounter}>Hovered {count} Times</h1>
    </div>
  )
}

export default UpdatedComponent(HoverCount)