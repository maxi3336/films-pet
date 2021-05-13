// import { getPopularMovie, getMovieById } from "./api/TMDB";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "./api/TMDB";
import { Container } from "./App.styles";
import Header from "./components/Header/Header";
import MainLayout from "./components/MainLayout/MainLayout";
import { setGenres } from "./redux/reducers/movies";

const App = () => {
  const dispatch = useDispatch();

  const { genres } = useSelector((state) => state.movies);

  useEffect(() => {
    const updateGenres = async () => {
      const _genres = await getGenres();
      dispatch(setGenres(_genres.genres));
    };

    !genres && updateGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genres]);

  return (
    <Container>
      <Header />
      <MainLayout />
    </Container>
  );
};

export default App;
