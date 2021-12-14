// view password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('fa-eye-slash');
});


// Greet as per the time

// document.getElementById('liveGreet');
const time = new Date().getHours();
let greeting;
if (time >= 0 && time < 12) {
  greeting = "Good Morning!";
} else if (time == 12) {
  greeting = "Good Noon!";
} else if (time >= 12 && time <= 16) {
    greeting = "Good Afternoon!";
}
 else {
  greeting = "Good Evening";
}
document.getElementById("liveGreet").innerHTML = greeting;

