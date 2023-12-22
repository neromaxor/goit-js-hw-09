const section = document.querySelector('section');

const newSection = `<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>`;

section.insertAdjacentHTML('beforeend', newSection);

const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const textarea = form.querySelector('[name="message"]');

const initialData = localStorage.getItem('feedback-form-state');

if (initialData) {
  try {
    const initialFormData = JSON.parse(initialData);
    email.value = initialFormData.email;
    textarea.value = initialFormData.message;
  }
  catch (e) {
    console.error('LOCAL STORAGE PARSE ERROR', e);
  }
}

form.addEventListener('input', () => {
  const formData = {
    email: email.value.trim(),
      massage: textarea.value.trim()

};
localStorage.setItem('feedback-form-state', JSON.stringify(formData));

});


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const emailValue = email.value;
  const messageValue = textarea.value;


  if (emailValue === '' || messageValue === '') {
    alert('Please fill in both fields in the form.');
    return;


  }

  console.log({ email: emailValue, message: messageValue });
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
