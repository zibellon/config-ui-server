// const InputText = require('../views/InputText');
const Text = require('./../views/Text');
const Screen = require('../views/screen/Screen');
const AppBar = require('../views/screen/AppBar');
const Column = require('../views/base/Column');
const InputText = require('../views/InputText');
const MiddleButton = require('../views/buttons/MiddleButton');
const { PHONE_INPUT } = require('../constants/constants');
const Spacer = require('../views/base/Spacer');

// const body = {
// 	type: 'column',

// 	dimens: {
// 		//Ширина, Высота, отступы
// 		width: '100 %',
// 		height: '100 %',
// 	},

// 	alignment: {
// 		justifyContent: 'space_between',
// 		alignContent: 'center',
// 		alignItems: 'center',
// 	},

// 	backgroundColor: '#FFFFFF',

// 	children: [
// 		{
// 			type: 'column',
// 			dimens: {
// 				width: '100 %',
// 				padding: {
// 					all: '20 dp',
// 				},
// 			},

// 			children: [
// 				{
// 					type: 'row',
// 					dimens: {
// 						width: '100 %',
// 					},

// 					children: [
// 						// {
// 						// 	type: 'text-input',

// 						// 	hint: 'Номер телефона',

// 						// 	typeInput: 'phone-input',
// 						// },
// 						new InputText({
// 							hint: 'Номер телефона',
// 							inputType,
// 						}),
// 					],
// 				},
// 				{
// 					type: 'row',
// 					dimens: {
// 						width: '100 %',
// 						padding: {
// 							top: '14 dp',
// 						},
// 					},
// 					children: [
// 						// {
// 						// 	type: 'text',

// 						// 	value:
// 						// 		'Нажимая на кнопку “Далее”, я соглашаюсь с данными пользовательского соглашения и условиями политики конфиденциальнсти',
// 						// 	color: '#000000',
// 						// 	size: '15 sp',
// 						// },
// 						// new Text(
// 						// 	'Нажимая на кнопку “Далее”, я соглашаюсь с данными пользовательского соглашения и условиями политики конфиденциальнсти',
// 						// 	'#000000',
// 						// 	'20 sp',
// 						// ),
// 						new Text({
// 							value:
// 								'Нажимая на кнопку “Далее”, я соглашаюсь с данными пользовательского соглашения и условиями политики конфиденциальнсти',
// 						}),
// 					],
// 				},
// 			],
// 		},
// 		{
// 			type: 'column',
// 			dimens: {
// 				width: '100 %',
// 			},

// 			children: [
// 				{
// 					type: 'middle-button-gradient',

// 					text: 'Далее',
// 					gradientAngle: '90',
// 					firstColor: '#EF7A47',
// 					secondColor: '#FFD714',

// 					onClick: {
// 						action: 'navigateTo',
// 						props: {
// 							screenName: 'ScreenSms',
// 						},
// 					},
// 				},
// 			],
// 		},
// 	],
// };

// const appBar = {
// 	title: {
// 		text: 'Регистрация',
// 		alignment: 'center',
// 		color: '#000000',
// 	},
// };

// const screenUI = {
// 	name: 'ScreenPhone',

// 	appBar,

// 	body,
// };

const screen = new Screen({
	name: 'ScreenPhone',
	appBar: new AppBar({
		title: {
			text: 'Регистрация',
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
						inputType: PHONE_INPUT,
					}),
					new Text({
						value:
							'Нажимая на кнопку “Далее”, я соглашаюсь с данными пользовательского соглашения и условиями политики конфиденциальнсти',
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
						screenName: 'ScreenSms',
					},
				},
			}),
		],
	}),
});

module.exports = screen;

// module.exports = screenUI;
