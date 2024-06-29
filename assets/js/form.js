
// TODO: Create a variable that selects the form element
const form = document.querySelector('form')
const username = document.querySelector('#username')
const title = document.querySelector('#title')
const content = document.querySelector('#content')
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function formSubmit(event) {
event.preventDefault()
if ((username.value === '') || (title.value === '') || (content.value === '')) {
  document.querySelector('#error').textContent= "Please complete the form."
  }
else {
  storeLocalStorage({username: username.value, title: title.value, content: content.value})
  redirectPage('./blog.html')
  }
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

form.addEventListener('submit', formSubmit)