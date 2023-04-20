import { PageHeader } from "../../components/PageHeader";
import { ContactForm } from "../../components/ContactForm";



export function NewContact(){
  return (
    <>
      <PageHeader title="Cadastrar Contato"/>
      <ContactForm
         buttonLabel="Cadastrar"
      />
    </>
  )
}
