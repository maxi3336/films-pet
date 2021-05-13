import styled from "styled-components";

export const ReleasesStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const ReleasesListContainer = styled.div`
  width: 100%;
  flex: 1;
`;

export const ReleasesList = styled.div`
  flex: 1;

  padding: 40px;

  display: flex;

  gap: 60px 30px;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  align-self: flex-start;

  padding: 40px;
  padding-top: 65px;
  font-size: 28px;
  color: #f5f5f4;
`;

export const Pages = styled.div`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;

export const Page = styled.span`
  padding: 5px;

  cursor: pointer;

  color: ${({ isActive }) => (isActive ? "#7BC1FF" : "#E2E2E2")};

  pointer-events: ${({ isActive }) => (!isActive ? "auto" : "none")};

  &:hover {
    opacity: 0.7;
  }
`;
