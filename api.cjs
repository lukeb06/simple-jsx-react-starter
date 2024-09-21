require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const ok = true;

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization',
	);
	res.setHeader('Access-Control-Allow-Credentials', 'true');

	if (req.method === 'OPTIONS') return res.sendStatus(200);

	next();
});

app.get('/status', (req, res) => {
	res.status(200).json({ ok });
});

app.use(express.json());

app.listen(PORT, () => {
	console.log(`API active on port ${PORT}`);
});
