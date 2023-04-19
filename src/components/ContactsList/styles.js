import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  >a {
    text-decoration: none;
    color: ${({theme}) => theme.COLOR.purple};
    font-weight: 700;
    padding: 0.75rem 0.875rem;
    border-radius: 4px;
    border: 2px solid ${({theme}) => theme.COLOR.purple};
    transition: all 0.2s ease-in;

    &:hover{
      background: ${({theme}) => theme.COLOR.purple_400};
      color: ${({theme}) => theme.COLOR.white};
    }
  }

  >strong{
    font-size: 1.5rem;
    color: ${({theme}) => theme.COLOR.gray_900};
  }
`

export const ListContainer = styled.div`
  margin-top: 1.5rem;

  header{
    button{
      background: transparent;
      border: none;
      font-size: 1rem;
      color: ${({theme}) => theme.COLOR.purple};
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      transition: all 0.2s ease-in;

      &:hover{
      filter: brightness(0.8);
    }
    }
  }

`
