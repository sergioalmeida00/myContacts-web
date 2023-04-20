import { Form,ButtonContainer } from "./styles"
import { FormGroup } from "../FormGroup"
import { Input } from "../Input"
import { Select } from "../Select"
import { Button } from "../Button"

export function ContactForm({buttonLabel}){
  return(
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome"/>
      </FormGroup>

      <FormGroup>
        <Input type="email" placeholder="E-mail"/>
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Telefone"/>
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit"> { buttonLabel } </Button>
      </ButtonContainer>
    </Form>
  )
}
