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

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/dist/pages/index.html'));
// });

// app.get('/blog', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/dist/pages/blog.html'));
// });

// app.get('/about-me', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/dist/pages/about-me.html'));

//   const textData = 'New home page' + new Date().getDate;

//   fs.writeFileSync(path.join(__dirname, 'log.txt'), textData, 'utf8');
// });

// app.get('/projects', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/dist/pages/projects.html'));
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/dist/pages/contact.html'));
// });

// app.get('/testendpoint', (req, res) => {
//   res.send('Test some endpoint');
// });

// app.post('/email', (req, res) => {
//   console.log(req.body);

//   const subject = req.body.subject;
//   const from = req.body.from;
//   const text = req.body.text + '\n\n Letter from kletskovg.tech';

//   if (!subject || !from || !text) {
//     console.log('One of the vields was not valid');
//     const message = 'One of the vields was not valid';
//     res.status(400).send(JSON.stringify(message));
//     return;
//   }

//   const transporter = nodemailer.createTransport({
//     service: 'yandex',
//     auth: CONFIG.email.auth,
//   });

//   const mailOptions = {
//     from: CONFIG.email.auth.user,
//     to: CONFIG.email.target,
//     subject,
//     text,
//   };

//   console.log('Try to send Email');
//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       console.log(error);

//       if (error.responseCode === 421) {
//         sendAgain(mailOptions);
//       }
//     } else {
//       console.log('Email sent: ' + info.response);
//       const message = 'Message was sent!';
//       res.status(200).send(JSON.stringify(message));
//     }
//   });
// });

app.get('/file', (req, res) => {
  res.sendFile(path.resolve(('../../client/dist/pages/file.html')));
});

// app.post('/file', (req, res) => {
//   const subject = `${req.body.name}`;
//   const from = 'From smbd';
//   const text = 'Just text';

//   const transporter = nodemailer.createTransport({
//     service: 'yandex',
//     auth: CONFIG.email.auth,
//   });

//   const mailOptions = {
//     from: CONFIG.email.auth.user,
//     to: CONFIG.email.target,
//     subject,
//     text,
//     attachments: [
//       {
//         path: req.body.data,
//       },
//     ],
//   };

//   res.status(200).send({ message: 'OK' });

//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//       const message = 'Message was sent!';
//       res.status(200).send(JSON.stringify(message));
//     }
//   });
// });


app.listen(PORT, () => {
  console.log(`Now you are listening to port number ${PORT}`);
});
