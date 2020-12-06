class Column {
	constructor({ dimens = undefined, alignment = undefined, backgroundColor = '#FFFFFF', children = [] }) {
		this.type = 'column';
		this.dimens = dimens;
		this.alignment = alignment;
		this.backgroundColor = backgroundColor.toUpperCase();
		this.children = children;
	}
}

module.exports = Column;
