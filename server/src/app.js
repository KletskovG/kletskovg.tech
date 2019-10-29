const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const path = require('path');

const fs = require('fs');

const nodemailer = require('nodemailer');

const cors = require('cors');

let CONFIG;

try {
    CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, '../serverconfig.json'), 'utf8'));
} catch (err) {
    console.log(err);
    CONFIG = null;
}


const PORT = process.env.port || 4200;


app.use(express.static(path.join(__dirname, '../../client/dist/')));
app.use(express.json());
app.use(express.json({
    type: ['application/json', 'text/plain']
}));

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


app.post('/email', (req, res) => {
    console.log(req.body)

    const subject = req.body.subject;
    const from = req.body.from;
    const text = req.body.text + '\n\n Letter from kletskovg.tech';

    if (!subject || !from || !text) {
        console.log('One of the vields was not valid');
        const message = 'One of the vields was not valid';
        res.status(400).send(JSON.stringify(message));
        return;
    }

    //
    const transporter = nodemailer.createTransport({
        service: 'yandex',
        auth: CONFIG.email.auth
    });

    const mailOptions = {
        from: CONFIG.email.auth.user,
        to: CONFIG.email.target,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {

            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            const message = 'Message was sent!';
            res.status(200).send(JSON.stringify(message));
        }
    });

});

app.listen(PORT, () => {
    console.log(`Now you are listening to port number ${PORT}`);
});