import styled from "styled-components";

export const LoaderStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    letter-spacing: 0.05em;
    font-size: 28px;
    color: #cacaca;
    font-weight: bold;
  }
`;
