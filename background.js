// Define the login function
function login(){
  console.log("");
  // Your custom logic here
  chrome.tabs.create({
    url: 'https://192.168.192.200/sonicui/7/login/#/',
    active: false
  }, function(tab) {
    console.log('New tab created:', tab);
  
    // Inject JavaScript into the newly created tab
    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        files: ["script.js"],
      })
      .then(() => console.log("script injected"))
      .catch((err) => console.error('Failed to inject script:', err));
  });
}
login()
// Create an alarm that triggers the login function every 1 minute
chrome.alarms.create("loginAlarm", {
  periodInMinutes: 0.5,  // Runs every 1 minute
});

// Listen for the alarm and run the login function when the alarm triggers
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "loginAlarm") {
    login();
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "login") {
    // Perform login function here
    console.log("Login button pressed")

    // Simulating an asynchronous login process
  login()

    // Return true to indicate that we will send a response asynchronously
   
  }
})


