chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.url + "-" + request.filename);
    if(request.url && request.filename) {
      chrome.downloads.download({
        url: request.url,
        filename: request.filename
      });
    }
  }
);

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {please_download_things: true}, function(response) {
      console.log("it is done");
    });
  });
});
