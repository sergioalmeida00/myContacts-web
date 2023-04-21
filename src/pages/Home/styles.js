import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`
export const InputSearchContainer = styled.div`
  width: 100%;

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
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

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
    margin-bottom: 0.8rem;
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

export const Card = styled.div`
  background-color: ${({theme}) => theme.COLOR.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  & + & {
    margin-top: 1rem;
  }

  .info{
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    >span{
      color: ${({theme}) => theme.COLOR.gray_200};
      font-size: 0.875rem;
    }
  }
  .contact-name{
      display: flex;
      align-items: center;
      gap: 0.875rem;

      >strong{
        color: ${({theme}) => theme.COLOR.gray_900};
      }
      >small{
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
        background-color: ${({theme}) => theme.backgroundPurple};
        padding: 0.1rem 0.3rem;
        color: ${({theme}) => theme.COLOR.purple};
        border-radius: 4px;
      }
  }
  .actions{
    display: flex;
    align-items: center;
    gap: 0.5rem;

    >a{
      color: ${({theme}) => theme.COLOR.purple};
      font-size: 1.5rem;
      transition: all 0.2s ease-in;

      &:hover{
        filter: brightness(0.7);
      }
    }
    >button{
      border: none;
      background: transparent;
      font-size: 1.5rem;
      color: ${({theme}) => theme.COLOR.danger[300]};
      transition: all 0.2s ease-in;

      &:hover{
        filter: brightness(0.7);
      }
    }
  }
`

