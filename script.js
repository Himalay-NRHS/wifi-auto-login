// document.querySelector(".username-class").value = 'hello';  // Replace with your username field class
// document.querySelector(".password-class").value = 'password';  // Replace with your password field class
// document.querySelector(".login-button-class").click();

setTimeout(()=>{
    // Assuming you want to set the username to 'testUser'
const usernameInput = document.querySelector('.sw-textfield__wrapper__input');
if (usernameInput) {
    usernameInput.value = '4SI23CS154';  // Set the value directly
    usernameInput.dispatchEvent(new Event('input')); // Insert the text 'testUser' into the input field
}
const passwordInput = document.querySelector('.sw-textfield__wrapper__input--with-icon-suffix');
if (passwordInput) {
    passwordInput.value = '6X8D272K';  // Set the value directly
    passwordInput.dispatchEvent(new Event('input'));  // Insert the text 'testUser' into the input field
  const loginButton = document.querySelector('.sw-login__trigger');

  if (loginButton) {
    loginButton.click();  // Simulates a click on the div element
    console.log("done")
  } else {
    console.error('Login button not found');
  }
}

},1000)
  