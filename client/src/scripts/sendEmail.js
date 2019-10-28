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

    fetch('http://localhost:4200/email', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body,
    })
        .then(res => {
            if (res.status === 200) {
                alert('Email was sent to me!');
            }
            else {
                alert(res.json().message);
            }
        })
        .catch(err => console.log(err));
}

contactMe();