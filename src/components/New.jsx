import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const New = () => {
  var[data,setData] = useState("click the button")
  const home = () => {
    setData("Home")
  }
  const gallery = () => {
    setData("Gallery")
  }
  const contacts = () => {
    setData("Contacts")
  }

  return (
    <div>
        <center>
      <Typography variant='h3'>Welcome To {data}</Typography>
      <br /><br />
      <Button variant="contained" color="primary" onClick={home}>Home</Button>&nbsp;
      <Button variant="contained" color="error" onClick={gallery}>Gallery</Button>&nbsp;
      <Button variant="contained" color="success" onClick={contacts}>Contacts</Button>
      </center>
    </div>
  )
}

export default New
