import { Httpclient } from "./utils/Httpclient";

class ContactsService {
  constructor() {
    this.httpClient = new Httpclient("http://localhost:3001");
  }
  async loadContacts(orderBy = "ASC") {
    const { contacts } = await this.httpClient.get(
      `/contacts?orderBy=${orderBy}`
    );
    return contacts;
  }

  async createContact(contact) {
    return this.httpClient.post("/contacts", { body: contact });
  }

  async findContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }
}

export default new ContactsService();
