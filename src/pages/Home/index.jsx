import { Link } from "react-router-dom"
import { Card, Container,InputSearchContainer,Header, ListContainer } from "./styles"
import { FiArrowUp, FiTrash2, FiEdit } from "react-icons/fi"
import { Modal } from "../../components/Modal"
import { useEffect, useState } from "react"

export function Home(){
  const [contacts,setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('ASC');
  const [searchContatcts, setSearchContatcts] = useState('');

  const filteredContacts = contacts.filter(( conatct ) => (
    conatct.name.toLowerCase().includes(searchContatcts.toLowerCase())
  ))

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
    .then(async (response) => {
        const json = await response.json()
        setContacts(json.contacts)
    })
    .catch((error) => {
      console.log('erro',error )
    })
  }, [orderBy])

  function handleToggleOrderBy(){
    setOrderBy(
      (prevState) =>  ( prevState === 'ASC' ? 'DESC' : 'ASC' )
    )
  }
  function handleSearchContacts(event){
    setSearchContatcts( event.target.value )
  }

  return(
      <Container>
        <InputSearchContainer>
          <input
            onChange={handleSearchContacts}
            type="text"
            placeholder="Pesquisar contato..."
          />
        </InputSearchContainer>
        <Header>
          <strong>
            {filteredContacts.length}
            { filteredContacts.length === 1  ?  ' Contato' : ' Contatos' }
          </strong>
          <Link to="/new"> Novo Contato </Link>
        </Header>

        <ListContainer orderBy={orderBy}>
          <header>
            <button
              onClick={handleToggleOrderBy}
              type="button"
              className="sort-button"
             >
              <span>Nome</span>
              <FiArrowUp/>
            </button>
          </header>

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong> {contact.name} </strong>
                  {contact.title && <small> {contact.title} </small>}
                </div>
                <span> {contact.email} </span>
                <span> {contact.phone} </span>
              </div>
              <div className="actions">
                <Link to={ `/edit/${contact.id}` }>
                  <FiEdit/>
                </Link>
                <button>
                  <FiTrash2/>
                </button>
              </div>
            </Card>
          ))}

        </ListContainer>
      </Container>
    )
}


