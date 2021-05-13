import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useSelector } from "react-redux";
import { getGenres, getPopularMovies } from "../api/TMDB";
import MovieModal from "../components/Modals/MovieModal/MovieModal";
import Movie from "../components/Movie/Movie";
import Empty from "../components/Secondary/Empty";
import PageLoader from "../components/Secondary/Loader";
import {
  ReleasesStyled,
  ReleasesListContainer,
  ReleasesList,
  Title,
} from "./Releases/Releases.styles";

const Trending = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [movieModal, setMovieModal] = useState();

  const { genres } = useSelector((state) => state.movies);

  useEffect(() => {
    const updateMovies = async () => {
      setIsLoading(true);

      const _movies = await getPopularMovies();

      const moviesWithGenres = _movies?.map((movie) => {
        const _genres = genres.filter((genre) =>
          movie.genre_ids.includes(genre.id)
        );

        return { ...movie, genres: _genres.map(({ name }) => name) };
      });

      setIsLoading(false);

      setMovies(moviesWithGenres);
    };

    !movies && genres && updateMovies();
  }, [movies, genres]);

  return (
    <ReleasesStyled>
      <Title>
        <h1>В тренде</h1>
      </Title>
      {!movies && isLoading ? (
        <PageLoader />
      ) : movies?.length && !isLoading ? (
        <ReleasesListContainer>
          <Scrollbars autoHide>
            <ReleasesList>
              {movies?.map((movie) => (
                <Movie
                  key={movie.id}
                  movie={movie}
                  onClick={() => setMovieModal(movie)}
                />
              ))}
            </ReleasesList>
          </Scrollbars>
        </ReleasesListContainer>
      ) : (
        <Empty />
      )}
      {movieModal ? (
        <MovieModal movie={movieModal} close={() => setMovieModal()} />
      ) : null}
    </ReleasesStyled>
  );
};

export default Trending;
