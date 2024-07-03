import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {

    // useState
    var[name,setName] = useState("Abhi");
    var[data,setData]= useState();

    const inputHandler = (e)=>{
        setName(e.target.value)
    }
    const changeName = ()=>{
        console.log("btn clicked")
        setData(name)

    }

  return (
    <div>
        <center>
      <h1 style={{ color: "darkblue", fontSize: "100px", textDecoration: "italic"}}>WELCOME</h1>
      <p style={{ color: "darkblue", fontSize: "60px", textDecoration: "italic"}}>My Web Page</p>
      <Typography variant='h3'>Hello {data}</Typography>
      <TextField variant="outlined" onChange={inputHandler}/>
      <br /><br />
      <Button variant="contained" onClick={changeName}>submit</Button>
      </center>
    </div>
  )
}

export default StateBasic
