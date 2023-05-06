import { delay } from "../utils/delay";

class ContactsService{
  async loadContacts(orderBy = 'ASC'){
    const response =  await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
    await delay(500)
    const {contacts} = await response.json()

    return contacts
  }
}

export default new ContactsService();
