const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../../client/dist/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/pages/index.html'));
});


app.listen(8080, () => {
    console.log('Now you are listening to port number 8080');
});