const { SMS_INPUT } = require('../constants/constants');
const Column = require('../views/base/Column');
const Spacer = require('../views/base/Spacer');
const MiddleButton = require('../views/buttons/MiddleButton');
const InputText = require('../views/InputText');
const AppBar = require('../views/screen/AppBar');
const Screen = require('../views/screen/Screen');
const Text = require('../views/Text');

const screen = new Screen({
	name: 'ScreenSms',
	appBar: new AppBar({
		leading: {
			type: 'back-arrow',
		},
		title: {
			text: 'СМС код',
			alignment: 'center',
			color: '#000000',
		},
	}),
	body: new Column({
		dimens: {
			width: '100 %',
			height: '100 %',
		},
		backgroundColor: '#ffffff',
		children: [
			new Column({
				dimens: {
					width: '100 %',
					padding: {
						all: '20 sp',
					},
				},
				children: [
					new InputText({
						hint: 'Номер телефона',
						inputType: SMS_INPUT,
					}),
					new Text({
						value: 'Если Вы не получили смс, запросить код повторно можно через 0:39',
						color: '#8A8A8F',
						size: '15 sp',
					}),
				],
			}),
			new Spacer(),
			new MiddleButton({
				text: 'Далее',
				fullWidth: true,
				textColor: '#FFFFFF',
				cornerRadius: '20 px',
				colorArray: [ '#EF7A47', '#FFD714' ],
				onClick: {
					action: 'navigateTo',
					props: {
						screenName: 'ScreenGrid',
					},
				},
			}),
		],
	}),
});

module.exports = screen;
