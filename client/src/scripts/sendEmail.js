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

function validateEmail(subject, from, text) {
    const isFromEmail = from.indexOf('@') > -1;
    const isTopicLength = subject.length > 3;
    const isTextLength = text.length > 15;

    if (isFromEmail && isTopicLength && isTextLength) {
        console.log('Accepted')

        return true;
    }

    console.log('Shit');

    return false;
}


function sendEmail() {
    const subject = document.querySelector('.topic').value;
    const from = document.querySelector('.name').value;
    const text = document.querySelector('.your-text').value;

    const isValid = validateEmail(subject, from, text);

    if (isValid === false) {
        const errors = document.querySelectorAll('.error');
        const errorsLength = errors.length;

        for (let i = 0; i < errorsLength; i++) {
            errors[i].style.opacity = '1';
        }
        return;
    }


    const errors = document.querySelectorAll('.error');
    const errorsLength = errors.length;

    for(let i = 0; i < errorsLength; i++) {
        errors[i].style.opacity = '0';
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