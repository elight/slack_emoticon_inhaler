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
