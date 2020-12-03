const screenOne = require('./screenOne');
const screenTwo = require('./screenTwo');
const screenThree = require('./screenThree');
const screenFour = require('./screenFour');

const screens = [ screenOne, screenTwo, screenThree, screenFour ];

function getScreenByName(screenName) {
	return screens.find((screen) => screen.name === screenName);
}

module.exports = {
	getScreenByName,
};
