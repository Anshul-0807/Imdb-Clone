import { Box , styled} from "@mui/material";
import React from "react";
import Header from "../components/common/Header";
import {useState, useEffect} from 'react';
import { categoryMovies } from "../services/api";
import Carousel from "react-multi-carousel";
// import styled from "@emotion/styled";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled('img')({
  height: 450,
  width: '100%'
})

const CategoryMovies = () => {
 
 const [movies, setMovies] = useState([])

 useEffect(() => {
  const getData = async () => {
    let response = await categoryMovies()
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
              {/* <Title>{movie.original_title}</Title> */}
            </>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default CategoryMovies;
