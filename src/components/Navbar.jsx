import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button>Login</Button>
          <Button><Link to={'/r'} style={{ textDecoration: "none", color: "white"}}>Registration</Link></Button>
          <Button><Link to={'/t'} style={{ textDecoration: "none", color: "white"}}>Tab</Link></Button>
          <Button><Link to={'/'} style={{ textDecoration: "none", color: "white"}}>First</Link></Button>
          <Button><Link to={'/s'} style={{ textDecoration: "none", color: "white"}}>Message</Link></Button>
          <Button><Link to={'/c'} style={{ textDecoration: "none", color: "white"}}>Counter</Link></Button>
          <Button><Link to={'/n'} style={{ textDecoration: "none", color: "white"}}>New</Link></Button>
          <Button><Link to={'/f'} style={{ textDecoration: "none", color: "white"}}>Form</Link></Button>
          <Button><Link to={'/a'} style={{ textDecoration: "none", color: "white"}}>ApiGet</Link></Button>
          <Button><Link to={'/co'} style={{ textDecoration: "none", color: "white"}}>Comb</Link></Button>
          <Button><Link to={'/gc'} style={{ textDecoration: "none", color: "white"}}>GridCard</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
