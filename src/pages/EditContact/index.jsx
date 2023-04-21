import { PageHeader } from "../../components/PageHeader";
import { ContactForm } from "../../components/ContactForm";
import { Loader } from "../../components/Loader";

export function EditContact(){
  return (
    <>
      <PageHeader title="Editar Contato"/>
      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>

  )
}
