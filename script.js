const signUpButton = document.getElementById('signUpButton')
const signInButton = document.getElementById('signInButton')

const signupForm = document.getElementById('signup');
const signinForm = document.getElementById('signin');

// Add an event listener for the button to show the signup form
signUpButton.addEventListener('click', function() {
    signinForm.style.display='none';
    signupForm.style.display='block';
})

signInButton.addEventListener('click', function() {
    signinForm.style.display='block';
    signupForm.style.display='none';
})
