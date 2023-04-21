import { Form,ButtonContainer } from "./styles"
import { FormGroup } from "../FormGroup"
import { Input } from "../Input"
import { Select } from "../Select"
import { Button } from "../Button"
import { useState } from "react"

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

  function handleSubmit(event){
    event.preventDefault()
    console.log({name, email,phone,category})
  }

  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          placeholder="Nome"
          valeu={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup >
        <Input
          type="email"
          placeholder="E-mail"
          valeu={email}
          onChange={(event) => setEmail(event.target.value)}
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
