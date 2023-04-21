import styled from "styled-components";

export const Container = styled.div`
  & + &{
    margin-top: 1rem;
  }

  >small{
    color: ${({theme}) => theme.COLOR.danger[400]};
    display: block;
    margin-top: 0.5rem;
  }
`
