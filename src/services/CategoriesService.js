import { Httpclient } from "./utils/Httpclient";

class CategoriesService {
  constructor() {
    this.httpClient = new Httpclient("http://localhost:3001");
  }

  async getAllCategories() {
    const { category } = await this.httpClient.get(`/categories`);
    return category;
  }
}

export default new CategoriesService();
