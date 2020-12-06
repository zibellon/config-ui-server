class Screen {
	constructor({ name, appBar = {}, body = {} }) {
		this.name = name;
		this.appBar = appBar;
		this.body = body;
	}
}

module.exports = Screen;
