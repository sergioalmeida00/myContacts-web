import { useCallback, useEffect, useMemo, useState } from "react";
import ContactsService from "../services/ContactsService";

export function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("ASC");
  const [searchContatcts, setSearchContatcts] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchContatcts.toLowerCase())
    );
  }, [contacts, searchContatcts]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsListService = await ContactsService.loadContacts(orderBy);

      setHasError(false);
      setContacts(contactsListService);
    } catch (error) {
      setHasError(true);
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === "ASC" ? "DESC" : "ASC"));
  }

  function handleSearchContacts(event) {
    setSearchContatcts(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return {
    contacts,
    orderBy,
    searchContatcts,
    isLoading,
    hasError,
    filteredContacts,
    setOrderBy,
    handleToggleOrderBy,
    handleSearchContacts,
    handleTryAgain,
  };
}
