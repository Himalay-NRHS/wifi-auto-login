document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")
    const messageDiv = document.getElementById("message")
    const showDataButton = document.getElementById("showData")
    const loginButton = document.getElementById("loginButton")
  
    // Check if user data exists
    chrome.storage.local.get(["username", "password"], (result) => {
      if (result.username && result.password) {
        messageDiv.textContent = "User data already exists."
        showDataButton.style.display = "block"
      }
    })
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const username = document.getElementById("username").value
      const password = document.getElementById("password").value
  
      // Store the data
      chrome.storage.local.set({ username: username, password: password }, () => {
        messageDiv.textContent = "Data stored successfully."
        showDataButton.style.display = "block"
      })
    })
  
    showDataButton.addEventListener("click", () => {
      chrome.storage.local.get(["username", "password"], (result) => {
        messageDiv.innerHTML = `Username: ${result.username}<br>Password: ${result.password}`
      })
    })
  
    loginButton.addEventListener("click", () => {
      chrome.runtime.sendMessage({ action: "login" }, (response) => {
        messageDiv.textContent = response.message
      })
    })
  })