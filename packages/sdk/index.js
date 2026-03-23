export class Shelby {
  constructor({ apiKey, baseUrl = "http://localhost:3000" }) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async store(content) {
    const res = await fetch(`${this.baseUrl}/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": Bearer ${this.apiKey}
      },
      body: JSON.stringify({ content })
    });
    if (!res.ok) throw new Error("Store failed");
    return res.json();
  }

  async search(query) {
    const res = await fetch(`${this.baseUrl}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": Bearer ${this.apiKey}
      },
      body: JSON.stringify({ query })
    });
    if (!res.ok) throw new Error("Search failed");
    return res.json();
  }
}
