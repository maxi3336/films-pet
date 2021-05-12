import { HeaderStyled, Logo, Search } from "./Header.styles";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo>FILMS APP</Logo>
      <Search>
        <SearchIcon />
        <input type="text" placeholder="Search movies" />
      </Search>
    </HeaderStyled>
  );
};

export default Header;
