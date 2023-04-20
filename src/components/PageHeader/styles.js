import styled from "styled-components";
export const Container = styled.div`
  > a{
    display: flex;
    align-items: center;
    gap: 0.3rem;
    text-decoration: none;
    font-weight: bold;
    color: ${({theme}) => theme.COLOR.purple};
    transition: all 0.2s ease-in;

    &:hover{
      filter: brightness(0.9);
    }
  }

  h1{
    font-size: 1.5rem;
  }
`;
