class SimpleRecycler {
	constructor({ grid = undefined, dimens = undefined, renderItem = {}, itemsCount = 0, onClick = {} }) {
		this.type = 'simple-recycler';
		this.grid = grid;
		this.dimens = dimens;
		this.renderItem = renderItem;
		this.itemsCount = itemsCount;
		this.onClick = onClick;
	}
}

module.exports = SimpleRecycler;
