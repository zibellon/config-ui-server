const { TEXT_INPUT } = require('../constants/constants');

class InputText {
	constructor({ hint = 'Hint', inputType = TEXT_INPUT }) {
		this.type = 'text-input';
		this.hint = hint;
		this.inputType = inputType;
	}
}

module.exports = InputText;
