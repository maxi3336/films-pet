import { MainStyled, MainContainer } from "./MainLayout.styles";

import Navigation from "../Navigation/Navigation";
import Routes from "../Routes/Routes";

const MainLayout = () => {
  return (
    <MainStyled>
      <Navigation />
      <MainContainer>
        <Routes />
      </MainContainer>
    </MainStyled>
  );
};

export default MainLayout;
