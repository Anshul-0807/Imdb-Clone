import React from 'react'
import { useEffect, useState } from 'react'
// component
import Header from '../components/common/Header'
import { categoryMovies } from '../services/api'
import { NOWPLAYING_API_URL } from '../constants/constant'
import { Box } from '@mui/material'
import Banner from '../components/Banner'


const Home = () => {

 const [movies, setMovies] = useState([])

  useEffect(() => {
    const getData = async () => {
     let response = await categoryMovies(NOWPLAYING_API_URL);
     setMovies(response.results);
    }
    getData()
  }, [])
  

  return (
    <>
      <Header/>
      <Box>
        <Banner/>
      </Box>
    </>
  )
}

export default Home