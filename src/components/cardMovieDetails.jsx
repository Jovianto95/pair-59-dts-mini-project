
import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';
const cardMovieDetails = (props) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w300";

  return (
    <Card className="boxy" sx={{width: 150, marginBottom: 5, marginRight: 2}}>
      <Link style={{textDecoration: 'none'}} to="/DetailFilm">
      <Box className="boxy">
        <CardMedia
          component="img"
          image={`${baseUrlForMovie}${props.movie.poster_path}`}
          alt={props.movie.title}/>
        <CardContent
          sx={{
            gap: 2,
            width: 1,
          }}
        >
          
          <Typography component="div" variant="body1">
            {props.movie.title}
          </Typography>
          <Rating
            value={props.movie.vote_average / 2}
            precision={0.1}
            readOnly
          />
          <Typography variant="body2">
           {props.movie.release_date}
          </Typography>
        </CardContent>
      </Box>
      </Link>
      
    </Card>
  );
};

export default cardMovieDetails;