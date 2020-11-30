const screenOne = require('./screenOne');
const screenTwo = require('./screenTwo');
const screenThree = require('./screenThree');

const screens = [ screenOne, screenTwo, screenThree ];

function getScreenByName(screenName) {
	return screens.find((screen) => screen.name === screenName);
}

module.exports = {
	getScreenByName,
};
