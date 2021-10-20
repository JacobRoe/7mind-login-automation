async function getButtonByText(text) {
	const selector = `new UiSelector().text("${text}").className("android.widget.Button")`;
	return await $(`android=${selector}`);
}

async function getTextViewByText(text) {
	const selector = `new UiSelector().textContains("${text}").className("android.widget.TextView")`;
	return await $(`android=${selector}`);
}

async function getElementById(id) {
	const selector = `new UiSelector().resourceId("${id}")`;
	return await $(`android=${selector}`);
}

module.exports = {
    getButtonByText,
    getTextViewByText,
    getElementById,
};
