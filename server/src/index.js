const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const path = require('path');

app.use(express.json())


app.use(express.static(path.join(__dirname, '../../client/dist/')));

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/pages/contact.html'));
});


app.get('/', (req, res) => {
    res.status(200).send('OK');
});

app.post('/test', (req, res) => {
    console.log(req.body);
    console.log('get test')

    res.status(200).send(JSON.stringify(req.body));
});


app.listen(4200, () => {
    console.log('Listen to PORT 4200')
});