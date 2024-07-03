import { Button } from '@mui/material';
import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
  return (
    <div>
        <center>
      <h1>counter:{count}</h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
      </center>
    </div>
  )
}

export default Counter
