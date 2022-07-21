import React, { useEffect, useState } from 'react';
import tmdbInstance from '../apis/tmdb';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Box, CardMedia} from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Pagination, Navigation} from 'swiper';

import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const slideShow = ()=>{
    const [movies, setMovies]= useState([]);
    const baseUrlForMovie = 'https://image.tmdb.org/t/p/w300';

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
            spaceBetween={30}
            autoplay
            pagination={{clickable:true}}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='swiper'>
            {movies.map((movie) => {
                return(
                    <SwiperSlide key={movie.id}>
                        <Card className='boxy' sx={{width:'100%'}}>
                            <Link style={{textDecoration:'none'}} to={`/DetailFilm/${movie.id}`}>
                                <Box className='boxy' sx={{width:'80em', objectFit:'cover'
                                    , objectPosition:'center', height:'20em'}}>
                                    <CardMedia
                                        component='img'
                                        image={`${baseUrlForMovie}${movie.backdrop_path}`}
                                        alt={movie.title}></CardMedia>
                                    </Box>
                            </Link>
                        </Card>
                    </SwiperSlide>
                )
            })}
        </Swiper></>
    )
};

export default slideShow;