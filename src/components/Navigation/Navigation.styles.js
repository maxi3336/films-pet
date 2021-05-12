import styled from "styled-components";

export const NavigationStyled = styled.nav`
  width: 300px;

  display: flex;
  flex-direction: column;

  padding: 50px 0;

  background-color: rgba(18, 20, 25, 0.9);

  .nav__item {
    transition: all 0.3s;

    position: relative;

    padding: 20px 20px 20px 40px;

    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.05em;
    color: #cbcbcb;

    display: flex;
    align-items: center;

    svg {
      position: absolute;
      right: 20px;

      display: none;

      width: 24px;
      height: 24px;
      fill: #b8b8b8;
    }
  }

  .nav__item--active {
    background-color: rgb(40, 53, 63);
    color: #ee544d;

    background-image: url("../../assets/icons/arrow-right.svg");
    background-position: right;

    svg {
      display: block;
    }
  }
`;
