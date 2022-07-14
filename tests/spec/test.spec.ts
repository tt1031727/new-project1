import { test, expect, } from "@playwright/test";
import "dotenv/config";
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
import { SignInPage } from '../pageobjects/signIn.page';
import { MainPage } from '../pageobjects/main.page';
import { UserPage } from '../pageobjects/user.page';
import {NewTaskPage } from '../pageobjects/newTask.page';
import { TaskPage } from '../pageobjects/task.page';
import { SearchPage } from "../pageobjects/search.page";
import { WikiPage } from "../pageobjects/wiki.page";
import { HelpPage } from "../pageobjects/help.page";
import { GettingStartedPage } from "../pageobjects/gettingStarted.page";
import { RepositoryPage } from "../pageobjects/repository.page";

test.beforeEach(async ({ page }) => { 
    await page.goto('https://www.redmine.org'); 
        await delay(3000);
        const signInPage = new SignInPage(page);
        const mainPage = new MainPage(page);
        await mainPage.clickSignInBtn()
        expect(page.url()).toBe('https://www.redmine.org/login');
        expect(await page.title()).toBe('Redmine');
        await delay(2000);
        await signInPage.setData()
        await delay(2000);
  });


test.describe('Test redmine',() => {
    test('Сheck for avatar',async ({ page }) => {
        const userPage = new UserPage(page);  
        const mainPage = new MainPage(page);
        await mainPage.clickUserNamebtn()
        await delay(2000);
        await userPage.getUserAvatar()
        await delay(2000);
    
    })
    test('check the create new task', async ({ page }) => {
        const mainPage = new MainPage(page);
        const newTaskPage = new NewTaskPage(page);
        await mainPage.clickNewTaskBtn();
        await delay(2000);
        await newTaskPage.inputThmField();
        await newTaskPage.inputDscrptField();
        await newTaskPage.clickCreateBtn();
        await delay(2000);
 
    })
    test('check the search', async ({ page }) => {
        const mainPage = new MainPage(page);
        const searchPage = new SearchPage(page);
        await mainPage.clickMyPagebtn();
        await page.screenshot({ path: 'screenshots/myTask.png' });
        await mainPage.setSearchField();
        await delay(2000);
        await page.keyboard.press('Enter')
        await delay(2000);
        await searchPage.clickResult()
        await searchPage.checkNameResult()
        await page.screenshot({ path: 'screenshots/myTaskInSearch.png' });
      
    })
    test('check the wiki text', async ({ page }) => {
        const mainPage = new MainPage(page);
        const wikiPage = new WikiPage(page);
        await mainPage.clickWikiPageBtn();
        await wikiPage.viewWikiText();
    })
    test('Checking the ability to select all tasks', async ({ page }) => {
        const taskPage = new TaskPage(page);
        const mainPage = new MainPage(page);
        await mainPage.clickTaskBtn();
        await delay(2000);
        await taskPage.clickSelectAllBtn();
        await page.screenshot({ path: 'screenshots/screenshot.png' });
        await delay(1000);
    })

    test('Check "getting started" text', async ({ page }) => {
        const mainPage = new MainPage(page);
        const helpPage = new HelpPage(page);
        const gettingStartedPage = new GettingStartedPage(page);
        await mainPage.clickHelpBtn();
        await delay(1000);
        await helpPage.checkGetStartBtn();
        await helpPage.clickGetStartBtn();
        await delay(1000);
        await gettingStartedPage.checkGetStartText();
        await delay(1000);
    })

    test('Checking for previous revisions.', async ({ page }) => {
        const mainPage = new MainPage(page);
        const repositoryPage = new RepositoryPage(page);
        await mainPage.clickRepositoryBtn();
        await delay(1000);
        await repositoryPage.clickSandBoxBtn();
        await delay(1000);
        await repositoryPage.clickCheckDifbtn();
        await delay(1000);
        await page.screenshot({ path: 'screenshots/screenshotDif.png' });    
    })


    test.afterEach(async ({ page }) => { 
        const mainPage = new MainPage(page);
        await mainPage.clickSignOutBtn()
        await delay(2000);
      });
})