import {When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {loginPage} from '../pages/login.page';
import {inventoryPage} from '../pages/inventory.page';

const userNames = {
    standart: 'standart_user',
    error: 'error_user',
};
const password = 'secret_sauce'

When('I visit SauceDemo page', () => {
    loginPage.visitSauceDemo();
});

When(/^I login as (standart|error) user$/, (user) => {
    loginPage.login(userNames[user], password);
});

Then('Login page shoud be displayed', () => {
    loginPage.expectLoginPageIsDisplayed();
});

Then('I should be redirected to Products List page', () => {
    inventoryPage.expectInventoryPageIsDisplayed();
});