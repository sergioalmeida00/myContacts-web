import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  height:3.25rem ;
  background: ${({theme}) => theme.COLOR.white} ;
  border: 2px solid #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  padding: 0 1rem;
  font-size: 1rem;
  transition: border-color 0.2s ease-in;

  &:focus{
    border-color: ${({theme}) => theme.COLOR.purple_500};
  }
`
