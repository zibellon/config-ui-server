class AppBar {
	constructor({ leading = undefined, title = {}, actions = undefined }) {
		this.leading = leading;
		this.title = title;
		this.actions = actions;
	}
}

module.exports = AppBar;
