import { List, ListItem, Typography } from '@mui/material'
import React from 'react'

const Movieslist = ({movies}) => {
  return (
   <>
    {
      movies.map(movie => (
        <List>
            <ListItem>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='poster' />
            </ListItem>
            <ListItem>
              <Typography>
                
              </Typography>
            </ListItem>
        </List>
      ))
    }
   </>
  )
}

export default Movieslist