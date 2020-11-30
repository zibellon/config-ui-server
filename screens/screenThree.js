const body = {
	type: 'column',

	dimens: {
		//Ширина, Высота, отступы
		width: '100 %',
		height: '100 %',

		padding: {
			all: '20 dp',
		},
	},

	alignment: {
		justifyContent: 'space_between',
		alignContent: 'center',
		alignItems: 'center',
	},

	backgroundColor: '#FFFFFF',

	children: [
		{
			type: 'text',
			value: 'Экран 3',
			color: '#000000',
			size: '30 sp',
		},
		{
			type: 'middle-button',

			text: 'Перейти на 1 экран',
			corners: '10 dp',
			gradientAngle: '90',
			backgroundColor: '#00FF00',

			onClick: {
				navigateTo: 'ScreenOne',
			},
		},
	],
};

const appBar = {};

const screenUI = {
	name: 'ScreenThree',

	appBar,

	body,
};

module.exports = screenUI;
