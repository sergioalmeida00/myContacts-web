import { Form,ButtonContainer } from "./styles"
import { FormGroup } from "../FormGroup"
import { Input } from "../Input"
import { Select } from "../Select"
import { Button } from "../Button"
import { useState } from "react"
import { isEmailValid } from "../../utils/isEmailValid"
import { useErrors } from "../../hooks/useErrors"
import { formatPhone } from "../../utils/formatPhone"


export function ContactForm({buttonLabel}){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const {setError, removeError, getErrorMessageByFieldName,errors } = useErrors()

  const isFormValid = (name && errors.length === 0)

  function handleNameChange(event){
    setName(event.target.value)
    if(!event.target.value){
      setError({field:'name', message:'Nome é Obrigatório'})
    }else{
      removeError('name')
    }
  }

  function handleEmailChange(event){
    setEmail(event.target.value)

    if(event.target.value && !isEmailValid(event.target.value)){
      setError({field:'email', message:'E-mail invalido..'})
    }else{
      removeError('email')
    }
  }

  function handlePhoneChange(event){

    setPhone(formatPhone(event.target.value))
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log({name, email,phone,category})
  }


  return(
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          placeholder="Nome *"
          valeu={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')} >
        <Input
          type="email"
          placeholder="E-mail"
          valeu={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
           placeholder="Telefone"
           value={phone}
           onChange={handlePhoneChange}
           maxLength="15"
        />
      </FormGroup>

      <FormGroup>
        <Select
           valeu={category}
           onChange={(event) => setCategory(event.target.value)}
        >
          <option value="instagram">Instagram</option>
          <option value="linkedin">Linkedin</option>
          <option value="facebook">Facebook</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}> { buttonLabel } </Button>
      </ButtonContainer>
    </Form>
  )
}
