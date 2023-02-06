import express from 'express';
import dotenv  from "dotenv";
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

dotenv.config();

import healthCheckRoutes from './routes/health.route.js';
import itemsRoutes from './routes/item.route.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cors());

app.get('/', (req, res) => {
	res.json({
		status: true,
		msg: 'Hello World'
	})
});

app.use('/health', healthCheckRoutes);
app.use('/items', itemsRoutes);

// Connect to mongoDB
let urlMongoDB = process.env.MONGODB_URL;
if (!urlMongoDB || urlMongoDB == '') {
	throw new Error('mongoDB url connection not found!!');
}

console.log('Connecting to mongo >>', urlMongoDB);
mongoose.connect(urlMongoDB, {
	useNewUrlParser: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, '❌❌❌ MongoDB Connection Error ❌❌❌'));

export default app;