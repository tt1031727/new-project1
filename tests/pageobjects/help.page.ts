import { test, Locator, Page, expect }from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class HelpPage {
    
    readonly page: Page;
    readonly getStartBtn: Locator;
    

    constructor(page: Page) {
      this.page = page;  
      this.getStartBtn = page.locator('//a[contains(text(),"Getting")]')    
    }

      async clickGetStartBtn() {
        await this.getStartBtn.click();
      }
      async checkGetStartBtn() {
        await this.getStartBtn.isEnabled();
      }
        
}