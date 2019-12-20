import express from 'express';
import fs from 'fs';
import nodemailer from 'nodemailer';
import path from 'path';

let SERVERCONFIG: any;

try {
  SERVERCONFIG = fs.readFileSync(path.join(__dirname, '../serverconfig.json'));
  SERVERCONFIG = JSON.parse(`${SERVERCONFIG}`);
} catch (error) {
  SERVERCONFIG = null;
}



function staticModule(app = express()) {
  app.get('/', (req, res) => {
    try {
      sendStaticPage(res, 'index');
    } catch (error) {
      console.log('There was an error');
      res.send('Hello home!');
    }
  });

  app.get('/blog', (req, res) => {
    sendStaticPage(res, 'blog');
  });

  app.get('/about-me', (req, res) => {
    sendStaticPage(res, 'about-me');
  });

  app.get('/projects', (req, res) => {
    sendStaticPage(res, 'projects');
  });
  

  function sendStaticPage(res: express.Response, name: string) {
    res.sendFile(path.join(__dirname, `../../client/dist/pages/${name}.html`));
  }


  app.post('/email', (req, res) => {
    console.log(req.body);

    const subject = req.body.subject;
    const from = req.body.from;
    const text = req.body.text + '\n\n Letter from kletskovg.tech';

    if (!subject || !from || !text) {
      console.log('One of the vields was not valid');
      const message = 'One of the vields was not valid';
      res.status(400).send(JSON.stringify(message));
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'yandex',
      auth: SERVERCONFIG.email.auth,
    });

    const mailOptions = {
      from: SERVERCONFIG.email.auth.user,
      to: SERVERCONFIG.email.target,
      subject,
      text,
    };

    console.log('Try to send Email');
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);

        // if (error.responseCode === 421) {
        //   sendAgain(mailOptions);
        // }
      } else {
        console.log('Email sent: ' + info.response);
        const message = 'Message was sent!';
        res.status(200).send(JSON.stringify(message));
      }
    });
  });

  app.post('/file', (req, res) => {
    const subject = `${req.body.name}`;
    const from = 'From smbd';
    const text = 'Just text';

    const transporter = nodemailer.createTransport({
      service: 'yandex',
      auth: SERVERCONFIG.email.auth,
    });

    const mailOptions = {
      from: SERVERCONFIG.email.auth.user,
      to: SERVERCONFIG.email.target,
      subject,
      text,
      attachments: [
        {
          path: req.body.data,
        },
      ],
    };

    res.status(200).send({ message: 'OK' });

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        const message = 'Message was sent!';
        res.status(200).send(JSON.stringify(message));
      }
    });
  });
}

export default staticModule;
