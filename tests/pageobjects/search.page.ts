import { test, Locator, Page, expect }from '@playwright/test';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class SearchPage {
    readonly page: Page;
    readonly taskFilter: Locator;
    readonly resultOfSearch: Locator;
    readonly nameResult: Locator;

    constructor(page: Page) {
      this.page = page;  
      this.taskFilter = page.locator('a[href*="/search?issues"]');
      this.resultOfSearch = page.locator('[href="/issues/16366"]');
      this.nameResult = page.locator('//h2'); 
    }

    async clickTaskFilter() {
        await this.taskFilter.click();
      }
    async clickResult() {
        await this.resultOfSearch.click();
      }
    async checkNameResult() {
        await expect(this.nameResult).toContainText('Defect #16366')
    }
    }