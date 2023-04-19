import { Container,Header, ListContainer } from "./styles"
import { FiArrowUp } from "react-icons/fi"
export function ContactsList(){
  return(
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href=""> Novo Contato </a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <FiArrowUp/>
          </button>
        </header>
      </ListContainer>
    </Container>
  )
}
