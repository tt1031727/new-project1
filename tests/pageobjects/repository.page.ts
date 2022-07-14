import { test, Locator, Page, expect }from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class RepositoryPage{

    readonly page: Page;
    readonly sandBoxBtn: Locator;
    readonly revisionRBtn: Locator;
    readonly chechDifBtn: Locator;

    

    constructor(page: Page) {
      this.page = page;  
      this.sandBoxBtn = page.locator('[href="/projects/redmine/repository/show/sandbox"]')
      this.revisionRBtn = page.locator('[id="cb-5"]')
      this.chechDifBtn = page.locator('[type="submit"]')

    }

      async clickSandBoxBtn() {
        await this.sandBoxBtn.click();
      }
      async clickRevisionRbtn() {
        await this.revisionRBtn.click();
      }
      async clickCheckDifbtn() {
        await this.chechDifBtn.click();
      }
        
}