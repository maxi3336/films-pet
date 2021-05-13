import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useSelector } from "react-redux";
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
  Pages,
  Page,
} from "./Releases.styles";

const Releases = () => {
  const [movies, setMovies] = useState();
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [movieModal, setMovieModal] = useState();

  const { genres } = useSelector((state) => state.movies);

  useEffect(() => {
    const updateMovies = async () => {
      setIsLoading(true);

      const result = await getUpcomingMovies();

      const _pages = [];
      for (let i = 1; i <= result.total_pages; i++) {
        _pages.push(i);
      }
      setPages(_pages);
      setCurrentPage(result.current_page);

      const _movies = result.movies;

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
    !movies && !genres && setIsLoading(true);
  }, [movies, genres]);

  const switchPageHandler = async (pageNum) => {
    setIsLoading(true);

    setCurrentPage(pageNum);

    const result = await getUpcomingMovies(pageNum);

    const _movies = result.movies;

    const moviesWithGenres = _movies?.map((movie) => {
      const _genres = genres.filter((genre) =>
        movie.genre_ids.includes(genre.id)
      );

      return { ...movie, genres: _genres.map(({ name }) => name) };
    });

    setIsLoading(false);

    setMovies(moviesWithGenres);
  };

  return (
    <ReleasesStyled>
      <Title>
        <h1>Последние релизы</h1>
      </Title>
      {!movies || isLoading ? (
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
      {pages && currentPage ? (
        <Pages>
          {pages?.map((page) => (
            <Page
              onClick={() => switchPageHandler(page)}
              isActive={page === currentPage}
            >
              {page}
            </Page>
          ))}
        </Pages>
      ) : null}

      {movieModal ? (
        <MovieModal movie={movieModal} close={() => setMovieModal()} />
      ) : null}
    </ReleasesStyled>
  );
};

export default Releases;
