class RoundImageCard {
	constructor({
		elevation = undefined,
		dimens = undefined,
		cornerRadius = undefined,
		image = {},
		content = {},
		onClick = undefined,
	}) {
		this.type = 'round-img-card';
		this.elevation = elevation;
		this.dimens = dimens;
		this.cornerRadius = cornerRadius;
		this.image = image;
		this.content = content;
		this.onClick = onClick;
	}
}

module.exports = RoundImageCard;
