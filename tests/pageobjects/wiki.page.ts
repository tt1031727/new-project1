import { test, Locator, Page, expect }from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class WikiPage {

    readonly page: Page;
    readonly wikiText: Locator;


    constructor(page: Page) {
      this.page = page;  
      this.wikiText = page.locator('[class="gravatar"]');

    }
    async viewWikiText() {
       expect (await this.wikiText.isVisible())
    }

}
