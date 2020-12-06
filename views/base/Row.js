class Row {
	constructor({ dimens = undefined, alignment = undefined, backgroundColor = '#FFFFFF', children = [] }) {
		this.type = 'row';
		this.dimens = dimens;
		this.alignment = alignment;
		this.backgroundColor = backgroundColor.toLocaleUpperCase();
		this.children = children;
	}
}

module.exports = Row;
