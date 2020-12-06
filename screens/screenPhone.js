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

							hint: 'Номер телефона',

							typeInput: 'phone-input',
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

							value:
								'Нажимая на кнопку “Далее”, я соглашаюсь с данными пользовательского соглашения и условиями политики конфиденциальнсти',
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
							screenName: 'ScreenSms',
						},
					},
				},
			],
		},
	],
};

const appBar = {
	title: {
		text: 'Регистрация',
		alignment: 'center',
		color: '#000000',
	},
};

const screenUI = {
	name: 'ScreenPhone',

	appBar,

	body,
};

module.exports = screenUI;
