import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://www.amazon.com.mx/");
  }

  async search(query: string) {
    const searchBox = this.page.getByRole("searchbox", {
      name: "Buscar en Amazon.com.mx",
    });
    await searchBox.click();
    await searchBox.fill(query);
    await this.page.getByRole("button", { name: "Ir", exact: true }).click();
  }
}
