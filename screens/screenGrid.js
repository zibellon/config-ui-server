const Column = require('../views/base/Column');
const RoundImageCard = require('../views/cards/RoundImageCard');
const Image = require('../views/images/Image');
const SimpleRecycler = require('../views/lists/SimpleRecycler');
const AppBar = require('../views/screen/AppBar');
const Screen = require('../views/screen/Screen');
const Text = require('../views/Text');

const screen = new Screen({
	name: 'ScreenGrid',
	appBar: new AppBar({
		leading: {
			type: 'back-arrow',
		},
		title: {
			text: 'Грид',
			alignment: 'center',
			color: '#000000',
		},
	}),
	body: new Column({
		dimens: {
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
			new SimpleRecycler({
				grid: {
					orientation: 'vertical',
					numColumns: 2,
				},
				dimens: {
					width: '100 %',
				},
				renderItem: new RoundImageCard({
					elevation: '6 dp',
					cornerRadius: '20 dp',

					dimens: {
						margin: {
							all: '8 dp',
						},
					},
					image: new Image({
						dimens: {
							width: '100 %',
							height: '100 dp',
						},
						url: 'https://strana.ua/img/article/2625/70_main.jpeg',
					}),
					content: new Column({
						children: [
							new Text({
								value: 'Товар',
								color: '#000000',
								size: '16 sp',
							}),
							new Text({
								value: 'Описание',
								color: '#000000',
								size: '15 sp',
							}),
						],
					}),
					onClick: {
						action: 'navigateTo',
						screenName: 'ScreenDetail',
					},
				}),
				itemsCount: 20,
			}),
		],
	}),
});

module.exports = screen;
