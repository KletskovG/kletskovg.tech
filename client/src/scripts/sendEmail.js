function contactMe() {
    alert('Contact me!')

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
    const name = document.querySelector('.name').value;
    const text = document.querySelector('.your-text').value;

    if (!subject || !name || !text) {
        console.log('SOme of fields was not send correctly');
        return;
    }

    const body = JSON.stringify({ subject, name, text });

    console.log(body);

    fetch('http://localhost:4200/email', {
        method: 'post',
        mode: 'no-cors',
        body,
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

contactMe();