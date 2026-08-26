const registerForm = document.getElementById("registerForm");

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  clearErrors();

  let isValid = true;

  const username = document.getElementById('username').value.trim();
  const mail = document.getElementById('mail').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const age = document.getElementById('age').value.trim();
  const country = document.getElementById('country').value;
  
  const genderChecked = document.querySelector('input[name="gender"]:checked');
  const hobbiesChecked = document.querySelectorAll('input[name="hobbies"]:checked');

  if (username === '') {
    showError('usernameError', 'Username xanasi bos ola bilmez.');
    isValid = false;
  } else if (username.length < 3) {
    showError('usernameError', 'Username en azi 3 simvoldan ibaret olmalidir.');
    isValid = false;
  }

  if (mail === '') {
    showError('mailError', 'Mail adi bos ola bilmez.');
    isValid = false;
  }

  if (email === '') {
    showError('emailError', 'Email xanasi bos ola bilmez.');
    isValid = false;
  } else if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
    showError('emailError', 'Duzgun email unvani daxil edin (numune: user@example.com).');
    isValid = false;
  }

  if (password === '') {
    showError('passwordError', 'Sifre bos ola bilmez.');
    isValid = false;
  } else if (password.length < 6) {
    showError('passwordError', 'Sifre en azi 6 simvol olmalidir.');
    isValid = false;
  }

  if (age === '') {
    showError('ageError', 'Yas xanasi bos ola bilmez.');
    isValid = false;
  } else if (parseInt(age) <= 0) {
    showError('ageError', 'Yas 0-dan boyuk olmalidir.');
    isValid = false;
  }

  if (country === '') {
    showError('countryError', 'Zehmet olmasa bir olke secin.');
    isValid = false;
  }

  if (!genderChecked) {
    showError('genderError', 'Zehmet olmasa cinsinizi secin.');
    isValid = false;
  }

  if (hobbiesChecked.length === 0) {
    showError('hobbiesError', 'En azi 1 hobbi secmelisiniz.');
    isValid = false;
  }

  if (isValid) {
    alert('Qeydiyyat ugurla tamamlandi!');
  }
});

function showError(elementId, message) {
  const errorSpan = document.getElementById(elementId);
  if (errorSpan) {
    errorSpan.innerText = message;
  }
}

function clearErrors() {
  const errorSpans = document.querySelectorAll('.error-message');
  errorSpans.forEach(span => {
    span.innerText = '';
  });
}