const { DEFAULT } = require('../constants/constants');
const View = require('./View');

// class Text extends View {
// 	constructor(value = 'Текст', color = '#000000', size = '10 sp') {
// 		super();
// 		this.type = 'text';
// 		this.value = value;
// 		this.color = color;
// 		this.size = size;
// 	}
// }

class Text {
	constructor({ value = 'Text', color = '#000000', size = '10 sp', textAlignment = 'start', typeface = DEFAULT }) {
		this.type = 'text';
		this.value = value;
		this.color = color;
		this.size = size;
		this.textAlignment = textAlignment;
		this.typeface = typeface;
	}
}

module.exports = Text;
