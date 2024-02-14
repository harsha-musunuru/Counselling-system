import React, { useState } from 'react'
import axios from 'axios'

const FetchRegistrations = () => {
 const [res, setRes] = useState(null)
 axios.get('http://localhost8080/retrieve',{})
 .then(response=>{
    setRes(response.data)
    console.log(Response.data)
 })
  return (
    <div><h1>Registrations</h1>
    {res.data}
    </div>
  )
}

export default FetchRegistrations