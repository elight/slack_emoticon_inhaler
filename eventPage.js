chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	if(request.url && request.filename) {
	    chrome.downloads.download({
		url: request.url,
		filename: request.filename
	    });
	}
    }
);
