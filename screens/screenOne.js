const body = {
	type: 'column',

	dimensions: {
		//Ширина, Высота, отступы
		width: '100 %',
		height: '100 %',

		padding: {
			all: '20 dp',
		},
	},

	justifyContent: 'justify_between',
	alignContent: 'center',
	alignItems: 'center',

	backgroundColor: '#FFFFFF',

	// params: {
	//     justifyContent: 'center',
	//     backgroundColor: 'red',
	// },

	children: [
		{
			type: 'column',
			dimensions: {
				width: '100 %',
			},

			alignItems: 'center',
			alignContent: 'center',

			children: [
				{
					type: 'row',
					dimensions: {
						width: '100 %',
						padding: {
							top: '20 dp',
						},
					},

					justifyContent: 'space_between',
					alignItems: 'center',

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
					dimensions: {
						width: '100 %',
						padding: {
							top: '20 dp',
						},
					},

					justifyContent: 'space_between',
					alignItems: 'center',

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
					dimensions: {
						width: '100 %',
						padding: {
							top: '20 dp',
						},
					},

					justifyContent: 'space_between',
					alignItems: 'center',

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
					dimensions: {
						width: '100 %',
						padding: {
							top: '20 dp',
						},
					},

					justifyContent: 'space_between',
					alignItems: 'center',

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
					dimensions: {
						width: '100 %',
						padding: {
							top: '40 dp',
						},
					},

					justifyContent: 'space_between',
					alignContent: 'end',

					children: [
						{
							type: 'column',
							dimensions: {
								width: '50 %',
							},

							justifyContent: 'start',

							children: [
								{
									type: 'text',

									value: 'Анастасия Иванова',
									color: '#000000',
									size: '15 sp',
								},

								{
									type: 'text',

									dimensions: {
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
			dimensions: {
				width: '100 %',
			},

			alignItems: 'center',
			alignContent: 'center',

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

					alignment: 'center',

					value: 'Нажимая кнопку оформить\nВы принимаете условия',
					color: '#000000',
					size: '15 sp',
				},
				{
					type: 'text',

					dimensions: {
						margin: {
							top: '10 dp',
						},
					},

					alignment: 'center',

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
