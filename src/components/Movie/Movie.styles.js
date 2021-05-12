import styled from "styled-components";

export const MovieStyled = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  width: 230px;
  height: 350px;

  &:hover {
    cursor: pointer;

    .movie__rating {
      background-color: #ee544d;
    }

    .movie__poster-hover {
      display: flex;
    }
  }
`;

export const Rating = styled.div`
  z-index: 2;

  position: absolute;
  top: -14px;

  background-color: #dfac21;
  padding: 5px 15px;
  border-radius: 16px;

  color: #f5f5f4;
  font-weight: bold;
`;

export const Poster = styled.div`
  position: relative;

  width: 100%;
  height: 80%;

  overflow: hidden;

  box-shadow: 0px 11px 18px -1px rgba(0, 0, 0, 0.7);

  img {
    width: 100%;
  }
`;

export const PosterHover = styled.div`
  position: absolute;
  z-index: 1;

  left: 0;
  top: 0;

  display: none;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: rgba(238, 84, 77, 0.7);

  svg {
    width: 30px;
    height: 30px;

    fill: rgba(255, 255, 255, 0.6);

    padding: 15px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.7);

    &:hover {
      fill: #f5f5f4;
      border: 3px solid #f5f5f4;
    }
  }
`;

export const About = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h3`
  color: #f5f5f4;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.05em;
`;

export const Genres = styled.div`
  color: #8baeca;
  font-size: 14px;
`;
