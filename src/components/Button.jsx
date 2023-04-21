import styled from "styled-components";

export const Button = styled.button`
  /* width: 100%; */
  padding: 0 1rem;
  height: 3.25rem;
  border: none;
  border-radius: 4px;
  background: ${({theme,danger}) => ( danger ? theme.COLOR.danger[300] :theme.COLOR.purple_400 )};
  color: ${({theme}) => theme.COLOR.white};
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease-in;

  &:hover{
    filter: brightness(0.9);
  }

  &[disabled]{
    background:#ccc;
    cursor: not-allowed;
  }

`
