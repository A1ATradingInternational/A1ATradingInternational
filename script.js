const form = document.querySelector('#notify-form');
const note = document.querySelector('#form-note');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  note.textContent = `Thank you — we'll be in touch at ${email}.`;
  form.reset();
});
