import { Route } from "react-router";
import { routesList } from "./Routes.utils";

const Routes = () => {
  return (
    <>
      {routesList.map((route) => {
        const Component = route.Component;

        return (
          <Route key={route.title} exact path={route.path}>
            <Component />
          </Route>
        );
      })}
    </>
  );
};

export default Routes;
