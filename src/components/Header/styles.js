import styled from "styled-components";

export const Container = styled.header`
  margin-top: 4.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img {
    width: 12rem;
  }
`

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  input{
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 4px;
    border: none;
    background: ${({theme}) => theme.COLOR.white};
    outline: 0;

    &::placeholder{
      color: ${({theme}) => theme.COLOR.gray_200};
    }
  }
`
