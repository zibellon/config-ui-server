// const screenOne = require('./screenOne');
// const screenTwo = require('./screenTwo');
// const screenThree = require('./screenThree');
// const screenFour = require('./screenFour');
const screenGrid = require('./screenGrid');
const screenPhone = require('./screenPhone');
const screenSms = require('./screenSms');
const screenDetail = require('./screenDetail');

// const screens = [ screenOne, screenTwo, screenThree, screenFour, screenFive ];
const screens = [ screenPhone, screenSms, screenGrid, screenDetail ];

function getScreenByName(screenName) {
	return screens.find((screen) => screen.name === screenName);
}

module.exports = {
	getScreenByName,
};
