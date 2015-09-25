chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	console.log(request);
	console.log(sender);
	console.log(sendResponse);
	if(request.url && request.filename) {
	    chrome.downloads.download({
		url: request.url,
		filename: request.filename
	    });
	}
    }
);