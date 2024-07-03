import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Reg = (props) => {
  return (
    <div>
        <center>
        <Typography variant="h1">WELCOME {props.data.age} years old {props.data.name}</Typography>    
      <TextField placeholder="Name"/>
      <br /><br />
      <TextField variant="outlined" placeholder="Age"/>
      <br /><br />
      <TextField variant="outlined" placeholder="Email"/>
      <br /><br />
      <TextField variant="outlined" placeholder="Father's Name"/>
      <br /><br />
      <TextField variant="outlined" placeholder="Mother's Name"/>
      <br /><br />
      <TextField variant="outlined" type="password" placeholder="Password"/>
      <br /><br />
      <TextField variant="outlined" type="password" placeholder="Confirm Password"/>
      <br /><br />
      <Button variant="contained">Submit</Button>
      </center>

    </div>
  )
}

export default Reg
