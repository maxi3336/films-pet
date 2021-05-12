import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { getGenres, getUpcomingMovies } from "../../api/TMDB";
import MovieModal from "../../components/Modals/MovieModal/MovieModal";
import Movie from "../../components/Movie/Movie";
import Empty from "../../components/Secondary/Empty";
import PageLoader from "../../components/Secondary/Loader";
import {
  ReleasesStyled,
  ReleasesListContainer,
  ReleasesList,
  Title,
} from "./Releases.styles";

const Releases = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [movieModal, setMovieModal] = useState();

  useEffect(() => {
    const updateMovies = async () => {
      setIsLoading(true);

      const _movies = await getUpcomingMovies();
      const _genres = await getGenres();

      const moviesWithGenres = _movies?.map((movie) => {
        const genres = _genres.genres.filter((genre) =>
          movie.genre_ids.includes(genre.id)
        );

        return { ...movie, genres: genres.map(({ name }) => name) };
      });

      setIsLoading(false);

      setMovies(moviesWithGenres);
    };

    !movies && updateMovies();
  }, [movies]);

  return (
    <ReleasesStyled>
      <Title>
        <h1>Последние релизы</h1>
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

export default Releases;
