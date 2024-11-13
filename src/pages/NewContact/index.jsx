import ContactForm from "../../components/ContactForm";
import { PageHeader } from "../../components/PageHeader";
import { useContacts } from "../../hooks/useContacts";

export function NewContact() {
  const { onSubmitCreate } = useContacts();

  async function handleSubmit(formData) {
    const contact = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      category: formData.category,
    };

    await onSubmitCreate(contact);
  }
  return (
    <>
      <PageHeader title="Cadastrar Contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
