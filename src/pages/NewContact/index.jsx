import ContactForm from "../../components/ContactForm";
import { PageHeader } from "../../components/PageHeader";



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
