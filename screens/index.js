const screenOne = require('./screenOne');

const screens = [ screenOne ];

function getScreenByName(screenName) {
	return screens.find((screen) => screen.name === screenName);
}

module.exports = {
    getScreenByName
}
