import React, { useEffect, useState } from 'react';
import tmdbInstance from '../apis/tmdb';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Box, CardMedia} from '@mui/material';

import {Autoplay, Pagination, Navigation} from 'swiper';

import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const SlideShow = ()=>{
    const [movies, setMovies]= useState([]);
    const baseUrlForMovie = 'https://www.themoviedb.org/movie/';

    useEffect(()=>{
        const fetchDataMovies = async () => {
            try {
                const responseIMDB = await tmdbInstance.get(
                    '/movie/popular'
                );
                setMovies(responseIMDB.data.results);
            } catch (err){
                console.log(err);
            }
        };
        fetchDataMovies();
}, []);

    return (
        <>
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
            autoplay
            pagination={{clickable:true}}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='swiper'>
            {movies.map((movie) => {
                return(
                    <SwiperSlide key={movie.id}>
                        <Card className='boxy' sx={{width:'20%'}}>
                            <Link style={{textDecoration:'none'}} to={`/DetailMovie/${movie.id}`}>
                                <Box className='boxy' sx={{width:'80em', objectFit:'cover'
                                    , objectPosition:'center', height:'20em'}}>
                                    <CardMedia
                                        component='img'
                                        image={`${baseUrlForMovie}${movie.backdrop_path}`}
                                        alt={movie.title}>
                                    </CardMedia>
                                    </Box>
                            </Link>
                        </Card>
                    </SwiperSlide>
                )
            })}
        </Swiper></>
    )
};

export default SlideShow;