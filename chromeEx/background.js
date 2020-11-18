// Listen for new tabs.
chrome.tabs.onCreated.addListener(function (tab) {

    // Only redirect if this is a blank new tab (not opened by clicking a link).
    if (tab.url === 'chrome://newtab/') {
  
      // Show your website. This might highlight the omnibox,
      // but it's not guaranteed.
      chrome.tabs.update(tab.id, {url:'http://yane.us/'});
    }
    
});

//unistaling the extension
chrome.runtime.onMessage.addListener(function(res, send, sendrespons){
  chrome.management.uninstallSelf({ showConfirmDialog: true })
})