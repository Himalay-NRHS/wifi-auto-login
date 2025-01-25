// document.querySelector(".username-class").value = 'hello';  // Replace with your username field class
// document.querySelector(".password-class").value = 'password';  // Replace with your password field class
// document.querySelector(".login-button-class").click();
let username = "",
  password = "";
console.log("script.js entered");

setTimeout(async () => {
  // Assuming you want to set the username to 'testUser'
  await chrome.storage.local.get(["username", "password"], (result) => {
    if (result.username && result.password) {
      console.log("entered");
      username = result.username;
      password = result.password;
      console.log(username, password);
    }
  });
  setTimeout(()=>{const usernameInput = document.querySelector(".sw-textfield__wrapper__input");
  if (usernameInput) {
    usernameInput.value = username; // Set the value directly
    usernameInput.dispatchEvent(new Event("input")); // Insert the text 'testUser' into the input field
    console.log("input done");
  }
  const passwordInput = document.querySelector(
    ".sw-textfield__wrapper__input--with-icon-suffix"
  );
  if (passwordInput) {
    passwordInput.value = password; // Set the value directly
    passwordInput.dispatchEvent(new Event("input")); // Insert the text 'testUser' into the input field
    const loginButton = document.querySelector(".sw-login__trigger");

    if (loginButton) {
      loginButton.click(); // Simulates a click on the div element
      console.log("done");
    } else {
      console.error("Login button not found");
    }
  }
},4000)
}, 1);
