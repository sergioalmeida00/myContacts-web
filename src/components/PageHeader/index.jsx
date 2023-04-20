import { Container } from "./styles";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"


export function PageHeader({title}){
  return(
    <Container>
      <Link to="/">
        <FiArrowLeft/>
        <span>Voltar</span>
      </Link>

      <h1> { title } </h1>
    </Container>
  )
}
