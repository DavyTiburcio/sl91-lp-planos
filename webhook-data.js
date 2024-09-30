const express = require('express');
const app = express();

// Middleware para tratar o corpo da requisição como JSON
app.use(express.json());

// Rota que vai receber o webhook
app.post('/webhook-data', (req, res) => {
  const eventData = req.body;

  // Processa os dados do webhook e armazena/encaminha ao frontend
  console.log('Webhook recebido:', eventData);

  // Responde ao servidor de webhook com um status 200
  res.status(200).send('Webhook recebido com sucesso');
});

app.listen(4200, () => {
  console.log('Servidor ouvindo na porta 4200');
});
