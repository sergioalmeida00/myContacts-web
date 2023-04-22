import { Form,ButtonContainer } from "./styles"
import { FormGroup } from "../FormGroup"
import { Input } from "../Input"
import { Select } from "../Select"
import { Button } from "../Button"
import { useState } from "react"
import { isEmailValid } from "../../utils/isEmailValid"


export function ContactForm({buttonLabel}){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [errors,setErrors] = useState([])

  function handleNameChange(event){
    setName(event.target.value)
    if(!event.target.value){
      setErrors((prevState) => [
        ...prevState,
        {field:'name', message:'Nome é Obrigatório'}
      ])
    }else{
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name'
      ))
    }
  }

  function handleEmailChange(event){
    setEmail(event.target.value)

    if(event.target.value && !isEmailValid(event.target.value)){
      const errorAlreadyExists = errors.find((error) => error.field === 'email')
      if(errorAlreadyExists){
        return
      }

      setErrors((prevState) => [
        ...prevState,
        {field:'email', message:'E-mail invalido'}
      ])

    }else{
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'email'
      ))
    }
  }

  function getErrorMessageByFieldName(fieldName){
    return errors.find((error) => error.field === fieldName)?.message
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log({name, email,phone,category})
  }

  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          placeholder="Nome"
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
           type="text"
           placeholder="Telefone"
           valeu={phone}
           onChange={(event) => setPhone(event.target.value)}
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
        <Button type="submit"> { buttonLabel } </Button>
      </ButtonContainer>
    </Form>
  )
}
