import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { MovieState } from "./movieState";

const MovieDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const url = location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie);
    },[movies, url]);

    return ( 
        <Details>
        <HeadLine>
            <h2>Movie Title</h2>
        </HeadLine>
        </Details>
     );
}
 
const Details = styled.div `
    
`;

const HeadLine = styled.div `
    
`;
export default MovieDetail;