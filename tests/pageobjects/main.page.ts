import { test, Locator, Page, expect }from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class MainPage {
    readonly page: Page;
    readonly userNameBtn: Locator;
    readonly signInBtn: Locator;
    readonly signOutBtn: Locator;
    readonly homeBtn: Locator;
    readonly newTaskBtn: Locator;
    readonly searchField: Locator;
    readonly myPageBtn: Locator;
    readonly wikiPageBtn: Locator
    readonly taskBtn: Locator
    readonly helpBtn: Locator
    readonly repositoryBtn: Locator


    constructor(page: Page) {
      this.page = page;  
      this.userNameBtn = page.locator('[class="user active"]')
      this.signInBtn = page.locator('[href="/login"]');
      this.signOutBtn = page.locator('[class="logout"]');
      this.homeBtn = page.locator('[class="home"]');
      this.newTaskBtn = page.locator('[class*="new-issue"]');
      this.searchField = page.locator('[id="q"]');
      this.myPageBtn = page.locator('[class="my-page"]');
      this.wikiPageBtn = page.locator('[href="/projects/redmine/wiki"]');
      this.taskBtn = page.locator('[class="issues"]');
      this.helpBtn = page.locator('[class="help"]');
      this.repositoryBtn = page.locator('[class="repository"]');

      

      
    }

      async clickUserNamebtn() {
        await this.userNameBtn.click();
      }
      async clickSignInBtn() {
        await this.signInBtn.click();
      }
      async clickSignOutBtn() {
        await this.signOutBtn.click();
      }
      async clickHomeBtn() {
        await this.homeBtn.click();
      }
      async clickNewTaskBtn() {
        await this.newTaskBtn.click();
      }
      async setSearchField() {
        await this.searchField.fill('bug2');
      }
      async clickMyPagebtn() {
        await this.myPageBtn.click();
      }
      async clickWikiPageBtn() {
        await this.wikiPageBtn.click();
      }
      async clickTaskBtn() {
        await this.taskBtn.click()
      }
      async clickHelpBtn() {
        await this.helpBtn.click()
      }
      async clickRepositoryBtn() {
        await this.repositoryBtn.click()
      }
    
      
}
