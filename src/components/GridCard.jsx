import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GridCard = () => {
    var[product,setProduct] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/jewelery")
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
     <Grid container spacing={2}>
        {product.map((val,i)=>{
            return(
                <Grid item xs={12} md={4}>
                     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

                </Grid>
            )
        })}
     </Grid>

    </div>
  )
}

export default GridCard
