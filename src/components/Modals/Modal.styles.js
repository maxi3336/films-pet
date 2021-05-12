import styled, { keyframes } from "styled-components";

const show = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.2);
`;

export const ModalBody = styled.div`
  position: relative;

  padding: 32px;
  border-radius: 16px;

  background-color: #28353f;

  animation: ${show} 0.3s;
`;

export const ModalHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 24px;
  font-weight: bold;
  color: #f5f5f4;

  & svg {
    width: 24px;
    height: 24px;
    cursor: pointer;

    fill: #f5f5f4;

    margin-left: auto;

    &:hover {
      opacity: 0.3;
    }
  }
`;
