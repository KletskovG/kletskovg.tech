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

    // const isValid = validateEmail(subject, from, text);

    // if (isValid === false) {
    //     const errors = document.querySelectorAll('.error');
    //     const errorsLength = errors.length;

    //     for (let i = 0; i < errorsLength; i++) {
    //         errors[i].style.opacity = '1';
    //     }
    //     return;
    // }


    const errors = document.querySelectorAll('.error');
    const errorsLength = errors.length;

    for(let i = 0; i < errorsLength; i++) {
        errors[i].style.opacity = '0';
    }


    const body = JSON.stringify({ subject, from, text });

    console.log(body);

    alert('The mail was send to me!');

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

            if (res.status === 200) {
                console.log(res.message)
                alert('Email was sent to me!');
            }

            else {
                alert('There was an error')
            }
        })
        .catch(err => console.log(err));
}

contactMe();
