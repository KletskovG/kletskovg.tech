import express from 'express';

const app = express();

import path from 'path';

import cors from 'cors';

const PORT = process.env.port || 8080;

app.use(express.static(path.join(__dirname, '../../client/dist/')));
app.use(cors());

app.get('/check', (req, res) => {
  const data = {
    health: 'OK',
    currentPort: PORT,
  };
  res.status(200).send(JSON.stringify(data));
});

app.get('/gitlink', (req, res) => {
  console.log('Request to gitlinke');
  const data = {
    message: 'https://github.com/kletskovg',
  };
  res.status(200).send(JSON.stringify(data));
});

app.listen(PORT, () => {
  console.log('CORS is enabled');
  console.log(`Now you are listening to port number ${PORT}`);
});

module.exports = app;
