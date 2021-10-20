const {getTextViewByText} = require('../util/selectors');

class TodayHomePage {
    async getWelcomeText () { 
        const visibleTextView = await getTextViewByText("welcome");
        return await visibleTextView.getText();
    }
}

module.exports = new TodayHomePage();
