import { Box , Typography, styled, Divider} from "@mui/material";
import React from "react";
import Header from "../components/common/Header";
import {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { categoryMovies } from "../services/api";
import Carousel from "react-multi-carousel";
import { POPULAR_API_URL, TOPRATED_API_URL,UPCOMING_API_URL, moviestype } from "../constants/constant";
import Movieslist from "../components/Movieslist";


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

const Component = styled(Box)`
width: 80%
margin: auto;
`;

const Container = styled(Box)`
 background: #F5F5F5;
 padding: 10px;

`;

const CategoryMovies = () => {
 
 const [movies, setMovies] = useState([])
 
 const {search} = useLocation();

 useEffect(() => {
  const getData = async (API_URL) => {
    let response = await categoryMovies(API_URL)
    setMovies(response.results);
  }

  let API_URL;

  if(search.includes('popular')){
    API_URL = POPULAR_API_URL;
  }else if(search.includes('upcoming')){
    API_URL = UPCOMING_API_URL;
  }else if(search.includes('toprated')){
    API_URL= TOPRATED_API_URL;
  }

  getData(API_URL)
 }, [search])
 

  return (
    <>
      <Header />
      <Component>
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
        <Container>
          <Typography variant="h6">IMDb Charts</Typography>
          <Typography variant="h4"> IMDb {moviestype[search.split('=')[1]]} movies</Typography>
          <Typography>IMDB Top {movies.length} as rated by regular IMDb voter. </Typography>
          <Divider/>
          <Movieslist movies={movies}/>
        </Container>
      </Component>
    </>
  );
};

export default CategoryMovies;
