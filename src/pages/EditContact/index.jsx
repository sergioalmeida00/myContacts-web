import { PageHeader } from "../../components/PageHeader";
import { Loader } from "../../components/Loader";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ContactsService from "../../services/ContactsService";
import { useState } from "react";
import toast from "../../utils/toast";
import { useRef } from "react";
import ContactForm from "../../components/ContactForm";

export function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const contactFormRef = useRef();

  useEffect(() => {
    async function loadContacts() {
      try {
        const { contactResult } = await ContactsService.findContactById(id);

        contactFormRef.current.setFieldsValues(contactResult);

        setIsLoading(false);
        setContactName(contactResult.name);
      } catch {
        navigate("/");
        toast({
          type: "danger",
          text: "Contato não encontrado!",
        });
      }
    }
    loadContacts();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? "Carregando" : `Editar Contato ${contactName}`}
      />
      <ContactForm ref={contactFormRef} buttonLabel="Salvar alterações" />
    </>
  );
}
