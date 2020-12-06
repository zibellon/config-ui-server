const { BOLD } = require('../constants/constants');
const Column = require('../views/base/Column');
const Spacer = require('../views/base/Spacer');
const MiddleButton = require('../views/buttons/MiddleButton');
const AppBar = require('../views/screen/AppBar');
const Screen = require('../views/screen/Screen');
const Text = require('../views/Text');

const screen = new Screen({
	name: 'ScreenDetail',
	appBar: new AppBar({
		leading: {
			type: 'back-arrow',
		},
		title: {
			text: 'Подробная информация',
			alignment: 'center',
			color: '#000000',
		},
	}),
	body: new Column({
		children: [
			new Column({
				dimens: {
					padding: {
						all: '20 dp',
					},
				},
				children: [
					new Text({
						value: 'Товары',
						color: '#373737',
						size: '14 sp',
					}),
					new Text({
						value: 'Доставка',
						color: '#373737',
						size: '14 sp',
					}),
					new Text({
						value: 'Скидка',
						color: '#FF3131',
						size: '14 sp',
					}),
					new Text({
						value: 'Итого',
						color: '#373737',
						size: '14 sp',
						typeface: BOLD,
					}),
				],
			}),
			new Spacer(),
			new Column({
				dimens: {
					padding: {
						all: '20 dp',
					},
				},
				children: [
					new MiddleButton({
						text: 'Оформить заказ',
						textColor: '#ffffff',
						colorArray: [ '#64EABA', '#15CB8A' ],
						cornerRadius: '12 dp',
						onClick: {
							action: 'showToast',
							props: {
								toastText: 'Ок!',
							},
						},
					}),
					new Text({
						value: 'Нажимая на кнопку оформить Вы принимаете условия',
						color: '#373737',
						size: '14 sp',
						textAlignment: 'center',
					}),
					new Text({
						value: 'публичной оферты',
						color: '#15CB8A',
						size: '14 sp',
						textAlignment: 'center',
					}),
				],
			}),
		],
	}),
});

module.exports = screen;
