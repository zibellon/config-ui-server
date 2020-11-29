const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const { screenUI } = require('./shema.js');

app.get('/config', (req, res) => {
	const screens = {
		ScreenAuthUI: {
			ui: [
				{
					'el-name': 'text-input',
					options: {
						hint: '???????? ???? ?????',
					},
				},
				{
					'el-name': 'text',
					options: {
						text: 'Test - ????????? ????',
						textSize: 18,
					},
				},
				{
					'el-name': 'button',
					options: {
						text: 'TestBTN',
					},
					navigateTo: 'ScreenListUI',
				},
			],
		},

		ScreenListUI: {
			ui: [],
		},
	};
	res.status(200).json(screenUI);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Listeting on port ${PORT}`);
});
