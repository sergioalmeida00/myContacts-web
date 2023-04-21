import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
`

export const Container = styled.div`
  width: 100%;
  max-width: 28rem;
  background-color: ${({theme}) => theme.COLOR.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 1.5rem;

  >h1{
    font-size: 1.4rem;
    margin-bottom: 0.8rem;

    color: ${({theme,danger}) => (danger ? theme.COLOR.danger[300] : theme.COLOR.gray_900 )};
  }
`

export const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  .cancel-button{
    background: transparent;
    border: none;
    font-size: 1rem;
    color: ${({theme}) => theme.COLOR.gray_200};
    transition: all 0.2s ease-in;

    &:hover{
      filter: brightness(0.8);
    }
  }

`
