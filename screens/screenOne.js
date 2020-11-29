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
		justifyContent: 'end',
		alignContent: 'start',
		alignItems: 'center',
	},

	backgroundColor: '#00FF00',

	children: [
		{
			type: 'column',
			dimens: {
				width: '100 %',
			},

			alignment: {
				alignItems: 'center',
				alignContent: 'center',
			},

			children: [
				{
					type: 'row',
					dimens: {
						width: '100 %',
						padding: {
							top: '20 dp',
						},
					},

					alignment: {
						justifyContent: 'space_between',
						alignItems: 'center',
					},

					children: [
						{
							type: 'text',

							value: 'Товары на сумму',
							color: '#000000',
							size: '15 sp',
						},
						{
							type: 'text',

							value: '190.00 руб',
							color: '#000000',
							size: '15 sp',
						},
					],
				},
				{
					type: 'row',
					dimens: {
						width: '100 %',
						padding: {
							top: '20 dp',
						},
					},

					alignment: {
						justifyContent: 'space_between',
						alignItems: 'center',
					},

					children: [
						{
							type: 'text',

							value: 'Доставка',
							color: '#000000',
							size: '15 sp',
						},
						{
							type: 'text',

							value: '200.00 руб',
							color: '#000000',
							size: '15 sp',
						},
					],
				},
				{
					type: 'row',
					dimens: {
						width: '100 %',
						padding: {
							top: '20 dp',
						},
					},

					alignment: {
						justifyContent: 'space_between',
						alignItems: 'center',
					},

					children: [
						{
							type: 'text',

							value: 'Скидка',
							color: '#FF0000',
							size: '15 sp',
						},
						{
							type: 'text',

							value: '-28 руб',
							color: '#FF0000',
							size: '15 sp',
						},
					],
				},
				{
					type: 'row',
					dimens: {
						width: '100 %',
						padding: {
							top: '20 dp',
						},
					},

					alignment: {
						justifyContent: 'space_between',
						alignItems: 'center',
					},

					children: [
						{
							type: 'text',

							value: 'Итого',
							color: '#000000',
							size: '20 sp',
							typeface: 'BOLD',
						},
						{
							type: 'text',

							value: '162 руб',
							color: '#000000',
							size: '20 sp',
							typeface: 'BOLD',
						},
					],
				},
				{
					type: 'row',
					dimens: {
						width: '100 %',
						padding: {
							top: '40 dp',
						},
					},

					alignment: {
						justifyContent: 'space_between',
						alignContent: 'end',
					},

					children: [
						{
							type: 'column',
							dimens: {
								width: '50 %',
							},

							alignment: {
								justifyContent: 'start',
							},

							children: [
								{
									type: 'text',

									value: 'Анастасия Иванова',
									color: '#000000',
									size: '15 sp',
								},

								{
									type: 'text',

									dimens: {
										margin: {
											vertical: '10 dp',
										},
									},

									value: 'г. Алушта, ул.\nСоветская, д. 35',
									color: '#000000',
									size: '15 sp',
								},
							],
						},
						{
							type: 'text',

							value: 'Изменить',
							color: '#00FF00',
							size: '17 sp',
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

			alignment: {
				alignItems: 'center',
				alignContent: 'center',
			},

			children: [
				{
					type: 'middle-button-gradient',

					text: 'Оформить заказ',
					corners: '10 dp',
					gradientAngle: '90',
					firstColor: '#00FF00',
					secondColor: '#11FF11',
				},
				{
					type: 'text',

					alignment: {
						textAlignment: 'center',
					},

					value: 'Нажимая кнопку оформить\nВы принимаете условия',
					color: '#000000',
					size: '15 sp',
				},
				{
					type: 'text',

					dimens: {
						margin: {
							top: '10 dp',
						},
					},

					alignment: {
						textAlignment: 'center',
					},

					value: 'публичной оферты',
					color: '#00FF00',
					size: '15 sp',
				},
			],
		},
	],
};

const appBar = {};

const screenUI = {
	name: 'ScreenOne',

	appBar,

	body,
};

module.exports = screenUI;
