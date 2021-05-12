// import { getPopularMovie, getMovieById } from "./api/TMDB";
import { Container } from "./App.styles";
import Header from "./components/Header/Header";
import MainLayout from "./components/MainLayout/MainLayout";

const App = () => {
  // const movieHandler = async (e) => {
  //   const movie = await getMovieById(e.target.value);
  //   console.log(movie);
  // };

  // const getPopularFilmHandler = async () => {
  //   const movie = await getPopularMovie();
  //   console.log(movie);
  // };

  return (
    <Container>
      <Header />
      <MainLayout />
    </Container>
  );
};

export default App;
