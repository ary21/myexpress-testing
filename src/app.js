const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const {
	healthCheckRoutes
} = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cors());

app.get('/', (req, res) => {
	res.json({
		status: true
	})
});

app.use('/health', healthCheckRoutes);

// Connect to mongoDB
let mongoDB = process.env.MONGODB_URL;
console.log('Connecting to mongo >', mongoDB);
mongoose.connect(mongoDB, {
	useNewUrlParser: true
});
mongoose.Promise = global.Promise;

mongoose.connection.on('error', console.error.bind(console, '❌❌❌ MongoDB Connection Error ❌❌❌'));

module.exports = app;