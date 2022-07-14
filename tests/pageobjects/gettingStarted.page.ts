import { test, Locator, Page, expect }from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class GettingStartedPage {

    readonly page: Page;
    readonly getStartText: Locator;
    

    constructor(page: Page) {
      this.page = page;  
      this.getStartText = page.locator('//h1[contains(text(),"Getting Started")]')    
    }

      async checkGetStartText() {
        expect(this.getStartText).toContainText('Getting Started');
      }
        
}
