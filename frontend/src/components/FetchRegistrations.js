import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const FetchRegistration = () => {
    const [res, setRes] = useState(null)

    if(res == null){
        axios.get('https://localhost:27017/retrive', {}).then(response => {
        setRes(response.data)
        console.log(response.data)
    })
    }
  return (
    <div><h1>Registration</h1>
    
    {JSON.stringify(res)}

    </div>
  )
}

export default FetchRegistration