import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  gap: 150px;

  height: 60px;

  background-color: #ee544d;
  padding: 0 50px;
`;

export const Logo = styled.div`
  color: #f5f5f4;
  font-size: 25px;
  line-height: 0;
  font-weight: bold;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    width: 18px;
    height: 18px;
    fill: #f5f5f4;
  }

  & input {
    background-color: transparent;
    outline: none;
    border: none;

    font-size: 14px;
    letter-spacing: 0.05em;
    color: #f5f5f4;

    &::placeholder {
      color: #dfdfdf;
    }
  }
`;
