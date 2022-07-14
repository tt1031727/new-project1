import { test, Locator, Page, expect }from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class UserPage {

    readonly page: Page;
    readonly userAvatar: Locator;


    constructor(page: Page) {
      this.page = page;  
      this.userAvatar = page.locator('[class="gravatar"]');

    }
    async getUserAvatar() {
       expect (await this.userAvatar.isVisible())
    }

}
