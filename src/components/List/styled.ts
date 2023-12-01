import styled from '@emotion/styled';

export const List = styled.ul`
  mb: 3;
  max-height: calc(100vh - 200px);
  overflow-y: scroll;

  @media (width < 768px) {
    max-height: calc(100vh - 200px);
  }

  @media (width <= 403px) {
    max-height: calc(100vh - 250px);
  }

  @media (width <= 350px) {
    max-height: calc(100vh - 275px);
  }
`;
