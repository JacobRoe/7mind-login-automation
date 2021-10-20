const assert = require('assert');
const loginPage = require('../pageobjects/login.page');
const {USER_EMAIL, USER_PASSWORD} = process.env;

describe('Login Page', () => {
    it('should login with valid credentials', async () => {
        const expectedWelcomeText = "Welcome back, you're now logged in and can continue your journey ✨";
        
        const todayHomePage = await loginPage.login(USER_EMAIL, USER_PASSWORD);
        const actualWelcomeText = await todayHomePage.getWelcomeText();

        assert.strictEqual(actualWelcomeText, expectedWelcomeText);
    });
});
