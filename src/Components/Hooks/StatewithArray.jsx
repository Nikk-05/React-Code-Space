import React, {useState} from 'react'

function StatewithArray() {
    const [items, setItems] = useState([])

    const addItem = () =>{
        setItems([... items,{
            id : items.length,
            value : Math.floor(Math.random()*25) + 1
        }])
    }
  return (
    <div>
    <button onClick={addItem}>Add Items</button>
    <ul>
        {
            items.map(item=><li key={item.id} typeof='none'>{item.value}</li>)
        }
    </ul>
    
    </div>
  )
}

export default StatewithArray
