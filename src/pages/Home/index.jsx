import { Link } from "react-router-dom"
import { Card, Container,InputSearchContainer,Header, ListContainer } from "./styles"
import { FiArrowUp, FiTrash2, FiEdit } from "react-icons/fi"

export function Home(){
  return(
      <Container>
        <InputSearchContainer>
          <input type="text" placeholder="Pesquisar contato..."/>
        </InputSearchContainer>
        <Header>
          <strong>3 Contatos</strong>
          <Link to="/new"> Novo Contato </Link>
        </Header>

        <ListContainer>
          <header>
            <button type="button" className="sort-button">
              <span>Nome</span>
              <FiArrowUp/>
            </button>
          </header>

          <Card>
            <div className="info">
              <div className="contact-name">
                <strong>Sérgio ALmeida</strong>
                <small>instagram</small>
              </div>
              <span>sergioalmeida00@gmail.com</span>
              <span>(79) 99999-9999</span>
            </div>
            <div className="actions">
              <Link to="/edit/123">
                 <FiEdit/>
              </Link>
              <button>
                 <FiTrash2/>
              </button>
            </div>
          </Card>
        </ListContainer>
      </Container>
    )
}
