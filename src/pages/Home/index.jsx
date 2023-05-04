import { Link } from "react-router-dom"
import { Card, Container,InputSearchContainer,Header, ListContainer } from "./styles"
import { FiArrowUp, FiTrash2, FiEdit } from "react-icons/fi"
import { Modal } from "../../components/Modal"
import { useEffect, useMemo, useState } from "react"
import { Loader } from "../../components/Loader"
import { delay } from "../../utils/delay"

export function Home(){
  const [contacts,setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('ASC');
  const [searchContatcts, setSearchContatcts] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  const filteredContacts = useMemo(() => {
   return contacts.filter(( contact ) => (
    contact.name.toLowerCase().includes(searchContatcts.toLowerCase())
    ))
  },[contacts,searchContatcts])

console.log("Renderizou")
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
    .then(async (response) => {
        await delay(500)
        const {contacts} = await response.json()
        setContacts(contacts)
    })
    .catch((error) => {
      console.log('erro',error )
    })
    .finally(() => {
      setIsLoading(false)
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
        <Loader isLoading={isLoading} />

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


