const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send("Bem-vindo a API da sua primeira pipeline!");
})

app.listen(3000);