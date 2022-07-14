import { test, Locator, Page, expect }from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class SignInPage {

    readonly page: Page;
    
    readonly loginField: Locator;
    readonly passField: Locator;
    readonly loginBtn: Locator;


    constructor(page: Page) {
      this.page = page;  
      
      this.loginField = page.locator('[name="username"]');
      this.passField = page.locator('[id="password"]');
      this.loginBtn = page.locator('[name="login"]');
      

      
    }


    
    async clickLoginBtn() {
       await this.loginBtn.click();
    }

    async setLogin() {
       await this.loginField.fill('test0023')
    }

    async setPass() {
        await this.passField.fill('test123')
    }

    async setData() {
       await this.setLogin()
       await this.setPass()
       await delay(500)
       await this.clickLoginBtn()
       await delay(500)

    }
}