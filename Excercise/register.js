const form = document.querySelector('#form');
const fname = document.querySelector('#fname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const fnameValue = fname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === '') {
    setErrorFor(fname, 'First Name cannot be blank');
  } else {
    setSuccessFor(fname);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if (passwordValue.length < 8) {
    setErrorFor(password, 'Password must be at least 8 characters');
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'input error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'input success';
}

function isEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
