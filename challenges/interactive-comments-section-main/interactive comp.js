/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* form validation
- objevení vykřičníku a textu pod formulářem */

const exclamation = document.getElementsByClassName('error')
const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const formError = document.getElementsByClassName('form_error')
const input = document.getElementsByTagName('input')

/* validation */
function formValidation (event) {
  /* for loop for all input fields except submit input, so it is 4 */
  for (i = 0; i < 4; i++) {
    /* clear the form */
    input[i].classList.remove('error')
    formError[i].style.display = 'none'

    /* email validation */
    if (!email.validity.valid) {
      formError[2].style.display = 'block'
      email.classList.add('error')
      event.preventDefault()
    }

    /* validation of other fields */
    if ((input.type != 'email' || input.type != 'submit') && input[i].value == '') {
      formError[i].style.display = 'block'
      input[i].classList.add('error')
      event.preventDefault()
    }
  }
}

/* event listener on button, call the formValidation function */
form.addEventListener('submit', formValidation, false)
