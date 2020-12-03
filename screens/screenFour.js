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
			type: 'simple-recycler',
			renderItem: {
				type: 'row',

				alignment: {
					justifyContent: 'space_between',
					alignItems: 'center',
				},
				children: [
					{
						type: 'text',
						value: 'Item',
						color: '#009900',
						size: '15 sp',
					},
					{
						type: 'text',
						value: 'KEK',
						color: '#FF0000',
						size: '15 sp',
					},
				],
			},
			count: 10,
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
	name: 'ScreenTwo',

	appBar,

	body,
};

module.exports = screenUI;
