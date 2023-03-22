import React from 'react'
import { useEffect, useState } from 'react'
// component
import Header from '../components/common/Header'
import { categoryMovies } from '../services/api'
import { NOWPLAYING_API_URL } from '../constants/constant'


const Home = () => {

 const [movies, setMovies] = useState()

  useEffect(() => {
    const getData = async ([]) => {
     let response = await categoryMovies(NOWPLAYING_API_URL)
     setMovies()
    }
    getData()
  }, [])
  

  return (
    <Header/>
  )
}

export default Home