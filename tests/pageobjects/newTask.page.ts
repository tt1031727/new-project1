import { test, Locator, Page, expect }from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class NewTaskPage {
    readonly page: Page;
    readonly themeField: Locator;
    readonly descriptionField: Locator;
    readonly createBtn: Locator;
    

    constructor(page: Page) {
      this.page = page;  
      this.themeField = page.locator('[id="issue_subject"]');
      this.descriptionField = page.locator('[id="issue_description"]');
      this.createBtn = page.locator('[name="commit"]');
      
      
    }

    async inputThmField() {
        await this.themeField.fill('test1234');
      }
    async inputDscrptField() {
        await this.descriptionField.fill('test1234');
      }
      async clickCreateBtn() {
        await this.createBtn.click();
      }
}