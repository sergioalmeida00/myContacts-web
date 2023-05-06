import {Httpclient} from "./utils/Httpclient";

class ContactsService{
  constructor(){
    this.httpClient = new Httpclient('http://localhost:3001')
  }
  async loadContacts(orderBy = 'ASC'){
    const {contacts} = await this.httpClient.get(`/contacts?orderBy=${orderBy}`)
    return contacts
  }

  async createContact(contact){
    return this.httpClient.post('/contacts',contact)
  }
}

export default new ContactsService();
