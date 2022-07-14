import { test, Locator, Page, expect }from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class TaskPage {
    readonly page: Page;
    readonly selectAllBtn: Locator;

    constructor(page: Page) {
      this.page = page;  
      this.selectAllBtn = page.locator('[alt="Toggle_check"]') 
    }
    async clickSelectAllBtn() {
      await this.selectAllBtn.click()
    }


}