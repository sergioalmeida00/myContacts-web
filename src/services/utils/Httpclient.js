import { delay } from "../../utils/delay";
class Httpclient{

  constructor(baseUrl){
    this.baseUrl = baseUrl
  }

  async get(path){
    const response =  await fetch(`${this.baseUrl}${path}`)
    await delay(500)

    return  await response.json()
  }

  async post(){

  }

}
export {Httpclient}
