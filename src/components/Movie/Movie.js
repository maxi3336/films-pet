import {
  MovieStyled,
  Rating,
  Poster,
  About,
  Title,
  Genres,
  PosterHover,
} from "./Movie.styles";

import { MAIN_IMAGE_URL } from "../../api/urls";
import { ReactComponent as HandIcon } from "../../assets/icons/tap.svg";

const Movie = ({ movie, ...props }) => {
  return (
    <MovieStyled className="movie" {...props}>
      <Rating className="movie__rating">{movie.vote_average}</Rating>
      <Poster className="movie__poster">
        <img src={`${MAIN_IMAGE_URL}/${movie.poster_path}`} alt="Poster" />
        <PosterHover className="movie__poster-hover">
          <HandIcon />
        </PosterHover>
      </Poster>
      <About>
        <Title>{movie.title}</Title>
        <Genres>
          {movie.genres.map((genre, index) =>
            index < 2 ? (
              <span key={genre}>
                {genre}
                {index !== 1 && movie.genres[index + 1] ? ", " : ""}
              </span>
            ) : null
          )}
        </Genres>
      </About>
    </MovieStyled>
  );
};

export default Movie;
