import React, { useState, prevState } from 'react'
import PrevState from './prevState'

function StatewithObject() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setName((prevState) => ({ ...prevState, [name]: value }))
    }
    return (

        <div>
            <input type='text' name='firstName' value={name.firstName} onChange={handleChange} />
            <input type='text' name='lastName' value={name.lastName} onChange={handleChange} />
            <textarea type="text" placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value )} />

            <h3>Hello, {name.firstName} {name.lastName}</h3>
            <h6>{message}</h6>

        </div>
    )
}

export default StatewithObject