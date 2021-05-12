import styled from "styled-components";
import { ModalBody } from "../Modal.styles";

export const MovieModalBody = styled(ModalBody)`
  background-image: url(${(p) => p.poster});
  background-repeat: no-repeat;
  background-size: 100%;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #f5f5f4;
`;

export const Content = styled.div`
  flex: 1;

  margin-top: 57%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  & h2 {
    color: #8baeca;
  }

  & p {
    color: #dadada;
    line-height: 1.4em;
    letter-spacing: 0.03em;
  }
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Release = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Footer = styled.div`
  margin-top: auto;

  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Button = styled.button`
  outline: none;
  border: none;

  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;

  border-radius: 8px;
  cursor: pointer;
  background-color: #44aeff;

  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: #ebebeb;

  &:hover {
    opacity: 0.8;
  }
`;
