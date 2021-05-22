const express = require('express')
const axios = require('axios');
const app = express()

app.use(express.json())

app.get('/artists/:name', async function (req, res) {
	const response = await axios.get(`https://vagalume.com.br/${req.params.name}/index.js`);
	res.json(response.data);
})

app.listen(3000, function () {
	console.log('Rodando o servidor em http://localhost:3000');
})

