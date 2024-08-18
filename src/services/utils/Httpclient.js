import APIError from "../../errors/APIError";
import { delay } from "../../utils/delay";
class Httpclient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`);
    await delay(500);

    let responseBody = null;

    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/json")) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }

  async post(path, body) {
    await delay(500);

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });

    let responseBody = null;

    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/json")) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }
}
export { Httpclient };
