const screenOne = require('./screenOne');
const screenTwo = require('./screenTwo');
const screenThree = require('./screenThree');
const screenFour = require('./screenFour');
const screenFive = require('./screenFive')

const screens = [ screenOne, screenTwo, screenThree, screenFour, screenFive ];

function getScreenByName(screenName) {
	return screens.find((screen) => screen.name === screenName);
}

module.exports = {
	getScreenByName,
};
