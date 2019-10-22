// <label class="col-5" >
//   <input type="text" placeholder = "Whats your name?" class="w-100" >
//     </label>
//     < label class="col-5" >
//       <input type="text" placeholder = "Email" class="w-100" >
//         </label>
//         < label class="col-10" >
//           <input type="text" placeholder = "Topic" class="w-100" >
//             </label>

window.onload = () => {
  const sendEmailButton: HTMLElement = document.querySelector('.button-send');
  sendEmailButton.addEventListener('click', () => {
    sendEmail();
  });
}

function sendEmail() {
  const nameInput: HTMLInputElement = document.querySelector('.send-name');
  const topicInput: HTMLInputElement = document.querySelector('.send-topic');
  const emailInput: HTMLInputElement = document.querySelector('.send-email');
  const messageInput: HTMLTextAreaElement = document.querySelector('.send-text');
  
  const message = {
    name: nameInput.value,
    topic: topicInput.value,
    email: emailInput.value,
    message: messageInput.value,
  }

  console.log(message);
}