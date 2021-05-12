import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { getGenres, getUpcomingMovies } from "../../api/TMDB";
import Movie from "../../components/Movie/Movie";
import {
  ReleasesStyled,
  ReleasesListContainer,
  ReleasesList,
  Title,
} from "./Releases.styles";

const Releases = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const updateMovies = async () => {
      const _movies = await getUpcomingMovies();
      const _genres = await getGenres();

      const moviesWithGenres = _movies?.map((movie) => {
        const genres = _genres.genres.filter((genre) =>
          movie.genre_ids.includes(genre.id)
        );

        return { ...movie, genres: genres.map(({ name }) => name) };
      });

      setMovies(moviesWithGenres);
    };

    !movies && updateMovies();
  }, [movies]);

  return (
    <ReleasesStyled>
      <Title>
        <h1>Последние релизы</h1>
      </Title>
      <ReleasesListContainer>
        <Scrollbars autoHide>
          <ReleasesList>
            {movies
              ? movies.map((movie) => <Movie key={movie.id} movie={movie} />)
              : null}
          </ReleasesList>
        </Scrollbars>
      </ReleasesListContainer>
    </ReleasesStyled>
  );
};

export default Releases;
