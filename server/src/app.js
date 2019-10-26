const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.port || 4200;


app.use(express.static(path.join(__dirname, '../../client/dist/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/pages/index.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/pages/blog.html'));
});

app.get('/about-me', (req, res) => {
   res.sendFile(path.join(__dirname, '../../client/dist/pages/about-me.html'));
});

app.get('/projects', (req, res) => {
   res.sendFile(path.join(__dirname, '../../client/dist/pages/projects.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/pages/contact.html'));
});


app.listen(PORT, () => {
    console.log(`Now you are listening to port number ${PORT}`);
});