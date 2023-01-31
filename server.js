import app from './src/app.js';

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
	console.log(`🎉🎉🎉 Application running on port: http://localhost:${PORT} 🎉🎉🎉`);
});

export default server;