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
			type: 'simple-recycler',
			grid: {
        orientation: 'vertical',
        numColumns: 2
      },
			dimens: {
				width: '100 %',
			},
			renderItem: {
				type: 'img-l-content-r',
				image: {
					type: 'image',
					dimens: {
						width: '100 dp',
						height: '100 dp',
					},
					url: 'https://strana.ua/img/article/2625/70_main.jpeg',
					isCircle: true,
				},
				content: {
					type: 'column',

					children: [
						{
							type: 'text',

							value: 'Название продукта',
							color: '#000000',
							size: '16 sp',
							typeface: 'BOLD',
						},
						{
							type: 'text',

							value: 'Название магазина',
							color: '#000000',
							size: '15 sp',
						},
						{
							type: 'text',

							value: 'Количество: 10',
							color: '#000000',
							size: '15 sp',
						},
						{
							type: 'text',

							value: '500 руб.',
							color: '#000000',
							size: '15 sp',
							typeface: 'BOLD',
						},
					],
				},
			},
			itemsCount: 15,
		},
	],
};

const appBar = {
	leading: {
		type: 'back-arrow',
	},
	title: {
		text: 'Screen Four',
		alignment: 'center',
		color: '#000000',
	},
};

const screenUI = {
	name: 'ScreenFour',

	appBar,

	body,
};

module.exports = screenUI;
