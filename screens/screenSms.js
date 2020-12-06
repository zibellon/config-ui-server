const body = {
	type: 'column',

	dimens: {
		//Ширина, Высота, отступы
		width: '100 %',
		height: '100 %',
	},

	alignment: {
		justifyContent: 'space_between',
		alignContent: 'center',
		alignItems: 'center',
	},

	backgroundColor: '#FFFFFF',

	children: [
		{
			type: 'column',
			dimens: {
				width: '100 %',
				padding: {
					all: '20 dp',
				},
			},

			children: [
				{
					type: 'row',
					dimens: {
						width: '100 %',
					},

					children: [
						{
							type: 'text-input',

							hint: 'СМС Код',

							typeInput: 'sms-input',
						},
					],
				},
				{
					type: 'row',
					dimens: {
						width: '100 %',
						padding: {
							top: '14 dp',
						},
					},
					children: [
						{
							type: 'text',

							value: 'Если Вы не получили смс, запросить код повторно можно через 0:39',
							color: '#000000',
							size: '15 sp',
						},
					],
				},
			],
		},
		{
			type: 'column',
			dimens: {
				width: '100 %',
			},

			children: [
				{
					type: 'middle-button-gradient',

					text: 'Далее',
					gradientAngle: '90',
					firstColor: '#EF7A47',
					secondColor: '#FFD714',

					onClick: {
						action: 'navigateTo',
						props: {
							screenName: 'ScreenFive',
						},
					},
				},
			],
		},
	],
};

const appBar = {
	leading: {
		type: 'back-arrow',
	},
	title: {
		text: 'СМС код',
		alignment: 'center',
		color: '#000000',
	},
};

const screenUI = {
	name: 'ScreenSms',

	appBar,

	body,
};

module.exports = screenUI;
