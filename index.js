const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const { getScreenByName } = require('./screens/index');

app.post('/config', (req, res) => {
	const { screenName } = req.body;
 
   console.log(screenName)

	const screen = getScreenByName(screenName);
	res.status(200).json(screen);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Listeting on port ${PORT}`);
});
