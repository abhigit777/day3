import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const FormBasics = () => {
    var[inputs,setInputs]= useState({username:"",email:"",place:""});

    const inputHandler = (e) =>{
        console.log(e.target.value);
        setInputs({...inputs, [e.target.name]: e.target.value});
        console.log(inputs);
    }
  return (
    <div>
        <center>
            <br />
      <TextField variant="outlined" label="username" onChange={inputHandler} name="username" value={inputs.username}/><br /><br />
      <TextField variant="outlined" label="email" onChange={inputHandler} name="email" value={inputs.email}/><br /><br />
      <TextField variant="outlined" label="place" onChange={inputHandler} name="place" value={inputs.place}/><br /><br />
      <Button variant="contained">Submit</Button>

      </center>

    </div>
  )
}

export default FormBasics
