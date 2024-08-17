import { Link } from "react-router-dom";
import {
  Card,
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  ErrorContainer,
  EmptyListContainer,
} from "./styles";
import { FiArrowUp, FiTrash2, FiEdit } from "react-icons/fi";
import { Modal } from "../../components/Modal";
import { Loader } from "../../components/Loader";
import emptyBox from "../../assets/images/empty-box.svg";
import sad from "../../assets/images/sad.svg";
import { Button } from "../../components/Button";
import { useContacts } from "../../hooks/useContacts";

export function Home() {
  const {
    contacts,
    isLoading,
    hasError,
    orderBy,
    filteredContacts,
    handleSearchContacts,
    handleToggleOrderBy,
    handleTryAgain,
  } = useContacts();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {!hasError && contacts.length > 0 && (
        <InputSearchContainer>
          <input
            onChange={handleSearchContacts}
            type="text"
            placeholder="Pesquisar contato..."
          />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={
          hasError
            ? "flex-end"
            : contacts.length > 0
            ? "space-between"
            : "center"
        }
      >
        {!hasError && contacts.length > 0 && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? " Contato" : " Contatos"}
          </strong>
        )}

        <Link to="/new"> Novo Contato </Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad" />

          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar Novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      <ListContainer orderBy={orderBy}>
        {!hasError && (
          <>
            {contacts.length < 1 && !isLoading && (
              <EmptyListContainer>
                <img src={emptyBox} alt="Empty Box" />

                <p>
                  Você ainda não tem nenhum contato cadastrado! Clique no botão
                  <strong> ”Novo contato” </strong> à cima para cadastrar o seu
                  primeiro!
                </p>
              </EmptyListContainer>
            )}

            {filteredContacts.length > 0 && (
              <header>
                <button
                  onClick={handleToggleOrderBy}
                  type="button"
                  className="sort-button"
                >
                  <span>Nome</span>
                  <FiArrowUp />
                </button>
              </header>
            )}

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
                  <Link to={`/edit/${contact.id}`}>
                    <FiEdit />
                  </Link>
                  <button>
                    <FiTrash2 />
                  </button>
                </div>
              </Card>
            ))}
          </>
        )}
      </ListContainer>
    </Container>
  );
}
