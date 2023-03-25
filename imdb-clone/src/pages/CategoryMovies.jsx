import { Box } from "@mui/material";
import React from "react";
import Header from "../components/common/Header";
import {useState, useEffect} from 'react';
import { categoryMovies } from "../services/api";


const CategoryMovies = () => {
 
 const [movies, setMovies] = useState([])

 useEffect(() => {
  const getData = async () => {
    let response = await categoryMovies(API_URL)
    setMovies(response.results);
  }
  getData()
 }, [third])
 

  return (
    <>
      <Header />
      <Box>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
        >
          {movies.map((movie) => (
            <>
              <StyledBanner
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
              <Title>{movie.original_title}</Title>
            </>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default CategoryMovies;
