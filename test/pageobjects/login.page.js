const todayHomePage = require('./today-home.page');
const {getButtonByText, getElementById} = require('../util/selectors');

class LoginPage {
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using userEmail and userPassword
     */
    async login (userEmail, userPassword) {
        const continueButton = await getButtonByText("CONTINUE");
        await continueButton.click();

        const logInButton = await getButtonByText("LOG IN");
        await logInButton.click();

        const emailButton = await getButtonByText("EMAIL");
        await emailButton.click();

        const emailInput = await getElementById("de.sevenmind.android:id/cellDialogTextInputEditText");
        await emailInput.setValue(`${userEmail}\\n`);

        const passwordInput = await getElementById("de.sevenmind.android:id/cellDialogTextInputEditText");
        await passwordInput.setValue(`${userPassword}\\n`);

        return todayHomePage;
    }
}

module.exports = new LoginPage();
