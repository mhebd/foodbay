const express = require('express');
require('dotenv').config({ path: '.env' });
const morgan = require('morgan');
const cors = require('cors');
const error = require('./middleware/error');
const path = require('path');

// Create Server
const app = express();

// Use MiddleWare
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

// Route End Point
app.use('/api/v1/user', require('./router/user'));
app.use('/api/v1/category', require('./router/category'));
app.use('/api/v1/featured-card', require('./router/featuredCard'));
app.use('/api/v1/slider', require('./router/slider'));
app.use('/api/v1/review', require('./router/review'));
app.use('/api/v1/product', require('./router/product'));

// Show Error Message
app.use(error);

//->Show UI...
if (process.env.NODE_ENV === 'development') {
	app.use(express.static('client'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client'));
	});
} else if (process.env.NODE_ENV === 'development') {
	app.get('/', (req, res) => {
		res.send('Hello, Developer...');
	});
}

module.exports = app;
