console.log('background.js loaded');

chrome.tabs.create({
  url: 'https://192.168.192.200/sonicui/7/login/#/',
  active: false
}, function(tab) {
  console.log('New tab created:', tab);

  // Inject JavaScript into the newly created tab
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id }, // Use tab.id directly instead of getTabId()
      files: ["script.js"],
    })
    .then(() => console.log("script injected"))
    .catch((err) => console.error('Failed to inject script:', err));
});