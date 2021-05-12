import { NavigationStyled } from "./Navigation.styles";

import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-right.svg";
import { routesList } from "../Routes/Routes.utils";

const Navigation = () => {
  return (
    <NavigationStyled className="nav">
      {routesList.map((route) => (
        <NavLink
          className="nav__item"
          activeClassName="nav__item--active"
          to={route.path}
          key={route.title}
        >
          <span>{route.title}</span>
          <ArrowIcon />
        </NavLink>
      ))}
    </NavigationStyled>
  );
};

export default Navigation;
