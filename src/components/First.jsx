import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = (props) => {
  return (
    <div>
      <center>
      <h1>WELCOME {props.name} is {props.age} young</h1>
      <input type="text" placeholder='username'/>
      <br /><br />
      <input type="password" placeholder='password'/>
      <br /><br />
      <button>login</button>
      <br /><br /><br /><br />
      <Typography variant="h1">welcome</Typography>
      <br /><br />
      <TextField variant="outlined" label="username"/>
      <br /><br />
      <TextField type="password" variant="outlined" label="password"/>

      <br /><br />
      <TextField variant="filled" label="username"/>
      <br /><br />
      <TextField type="password" variant="filled" label="password"/>

      <br /><br />
      <TextField variant="standard" label="username"/>
      <br /><br />
      <TextField type="password" variant="standard" label="password"/>

      <br /><br />
      <Button variant="text" color="success">Submit</Button>
      <br /><br />
      <Button variant="contained" color="secondary">Submit</Button>
      <br /><br />
      <Button variant="outlined" color="error">Submit</Button>

      
      </center>
    </div>
  )
}

export default First
