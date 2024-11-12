import { Form, ButtonContainer } from "./styles";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { Select } from "../Select";
import { Button } from "../Button";
import { useState } from "react";
import { isEmailValid } from "../../utils/isEmailValid";
import { useErrors } from "../../hooks/useErrors";
import { formatPhone } from "../../utils/formatPhone";
import { useCategories } from "../../hooks/useCategories";
import { useContacts } from "../../hooks/useContacts";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";

const ContactForm = forwardRef(({ buttonLabel }, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();
  const { categories, isLoadingCategories } = useCategories();
  const { onSubmit } = useContacts();

  const isFormValid = name && category && errors.length === 0;

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (contact) => {
        setName(contact.name ?? ""),
          setEmail(contact.email ?? ""),
          setPhone(formatPhone(contact.phone) ?? ""),
          setCategory(contact.category_id ?? "");
      },
    }),
    []
  );

  function handleNameChange(event) {
    setName(event.target.value);
    if (!event.target.value) {
      setError({ field: "name", message: "Nome é Obrigatório" });
    } else {
      removeError("name");
    }
  }

  function handleCategory(event) {
    setCategory(event.target.value);
    if (!event.target.value) {
      setError({ field: "category", message: "Categoria é Obrigatório" });
    } else {
      removeError("category");
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "E-mail invalido.." });
    } else {
      removeError("email");
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({ name, email, phone, category });

    setIsSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          type="text"
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName("name")}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName("email")}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={category}
          onChange={handleCategory}
          error={getErrorMessageByFieldName("category")}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value=""> Selecione uma Categoria </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

export default ContactForm;
