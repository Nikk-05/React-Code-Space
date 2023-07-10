import React,{useState} from 'react'

function FormData(){
    const[data,setData]=useState({
        name:'',
        comment:'',
        option:'Select'
    })

    const handleData = (event)=>{
        setData({
            ...data,
           name:event.target.value
        })
    }

    const handleComment=(event)=>{
        setData({
            ...data,
            comment:event.target.value
        })
    }

    const handleOptions=(event)=>{
        setData({
            ...data,
            option:event.target.value
        })
    }

    const handleForm=(event)=>{
        event.preventDefault()
        Object.entries(data).forEach(([key, value])=>{
            console.log(`${key}: ${value}`)
        })
    }
    return (
      <div>
        <form onSubmit={handleForm}>
            <label>UserName</label>
            <input type="text" value={data.name} onChange={handleData}></input>
            <label>Comments</label>
            <textarea value={data.comment} onChange={handleComment}></textarea>

            <select value= {data.option} onChange={handleOptions}>
                <option value=''>Select</option>
                <option value="Angular">Angular</option>
                <option value='Vue'>Vue</option>
                <option value='React'>React</option>
                <option value='Problem Solving'>Problem Solving</option>
            </select>

            <button type="submit">Submit</button>
        </form>
      </div>
    )
}
export default FormData;