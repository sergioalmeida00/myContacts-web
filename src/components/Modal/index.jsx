import { Container, Overlay,Footer } from "./styles";
import { Button } from "../Button"
import ReactDOM from 'react-dom';

export function Modal({danger}){
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo do Modal</h1>
        <p>Corpo do Modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  )
}
