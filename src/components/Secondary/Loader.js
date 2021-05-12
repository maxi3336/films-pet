import Loader from "react-loader-spinner";
import { LoaderStyled } from "./Secondary.styles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PageLoader = () => {
  return (
    <LoaderStyled>
      <Loader
        type="Oval"
        color="#f5f5f4"
        secondaryColor="#ABABAB"
        height={32}
        width={32}
      />
    </LoaderStyled>
  );
};

export default PageLoader;
