import express from 'express';

const app = express();

import path from 'path';

import fs from 'fs';

import staticModule from './modules/static/static.module';

const nodemailer = require('nodemailer');

const PORT = process.env.port || 4200;

app.use(express.static(path.join(__dirname, '../../client/dist/')));
app.use(
  express.json({
    type: ['application/json', 'text/plain'],
    limit: '100mb',
  })
);

staticModule(app);

app.get('/helloWorld', (req, res) => {
  res.send('Hello from Docker compose updated');
});

app.get('/testendpoint', (req, res) => {
  res.send('CD in actions');
});

app.listen(PORT, () => {
  console.log(`Now you are listening to port number ${PORT}`);
});
