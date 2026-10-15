import React, { useState, useEffect } from 'react'

const App = () => {
  const [formData, setFormData]=useState({
    name:"",
    email:"",
    password:""
  }) 

  useEffect(()=>{
    console.log("formData updated:", formData)
  },[formData])

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    alert("Registration Successful");
    console.log("Submitted Data:", formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" id="" value={formData.name} onChange={handleChange}/>
        <br /> <br />
        <input type="email" name="email" placeholder="Enter Email" id="" value={formData.email} onChange={handleChange}/>
        <br /> <br />
        <input type="password" name="password" placeholder="Enter Password" id="" value={formData.password} onChange={handleChange}/>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App