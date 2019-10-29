//TODO: refactor this file

function contactMe() {
    const sendButton = document.querySelector('.email-send');

    if (!sendButton) {
        console.log('Button for sending email was not found');
        return
    }

    sendButton.addEventListener('click', (event) => {
        event.preventDefault();
        sendEmail();
    });
}

function sendEmail() {
    const subject = document.querySelector('.topic').value;
    const from = document.querySelector('.name').value;
    const text = document.querySelector('.your-text').value;

    if (!subject || !from || !text) {
        alert('Some fields was not filled correctly');
        return;
    }

    const body = JSON.stringify({ subject, from, text });

    console.log(body);

    fetch('http://kletskovg.tech/email', {
        method: 'post',
        mode: 'no-cors',
        headers: {
            'Content-type': 'application/json',
        },
        body,
    })
        .then(res => res.json())
        .then(res => {
            console.log(res.message)
            alert('Email was sent to me!');

            if (res.status === 200) {

            }
        })
        .catch(err => console.log(err));
}

contactMe();
