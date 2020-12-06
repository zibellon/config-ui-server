class MiddleButton {
	constructor({
		text = 'Кнопка',
		textColor = '#FFFFFF',
		colorArray = undefined,
		cornerRadius = undefined,
		fullWidth = false,
		onClick = {},
	}) {
		this.type = 'middle-button';
		this.text = text;
		this.textColor = textColor;
		this.colorArray = colorArray;
		this.cornerRadius = cornerRadius;
		this.fullWidth = fullWidth;
		this.onClick = onClick;
	}
}

module.exports = MiddleButton;
