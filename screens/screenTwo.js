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
			value: 'Экран 2',
			color: '#000000',
			size: '30 sp',
		},
		{
			type: 'middle-button-gradient',

			text: 'Перейти на 3 экран',
			corners: '10 dp',
			gradientAngle: '90',
			firstColor: '#00FF00',
			secondColor: '#11FF11',

			onClick: {
				navigateTo: 'ScreenThree',
			},
		},
	],
};

const appBar = {
    leading: {
        type: 'back-arrow'
    },
    title: {
        text: 'Screen Two',
        alignment: 'center',
        color: '#000000'
    },
    
    actions: [
      {
        type: 'menu-burger',
        onClick: 'openAlert'
      }
    ]
};

const screenUI = {
	name: 'ScreenTwo',

	appBar,

	body,
};

module.exports = screenUI;
