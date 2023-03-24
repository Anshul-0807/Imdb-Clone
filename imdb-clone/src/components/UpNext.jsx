import React from 'react'
import {Box, Typography, styled} from '@mui/material';


const Component = styled(Box)`
width: 40%
`;

const Poster = styled('img')({
  width :88
})

const UpNext = ({movies}) => {
  return (
   <Component>
     <Typography>Up Next</Typography>
     {
      movies.splice(0,3).map(movie => (
        <Box>
          <Poster 
           src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
           <Typography>{movie.original_title}</Typography>
        </Box>
      ))
     }
   </Component>


  )
}

export default UpNext