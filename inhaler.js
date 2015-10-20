function initiateDownload() {
  function emoticonUrlFromRow(row) {
    var download_url = $(row).children().first().find('span').attr('data-original');
    var cleaned_up_download_url = download_url.replace('url(','').replace(')','');
    return cleaned_up_download_url;
  }

  function emoticonNameFromRow(row){
    var raw_emoticon_name = $(row).children()[1].innerHTML;
    var cleaned_up_emoticon_name = raw_emoticon_name.replace(':','').replace(':','').trim();
    return cleaned_up_emoticon_name;
  }

  function downloadURI(uri, name) {
    msg = {
      url: uri,
      filename: name
    };
    chrome.runtime.sendMessage(msg);
    return null;
  }

  function downloadEachOne() {
    $('.emoji_row').each(function(index, el) {
      var emoticon_name = emoticonNameFromRow(el);
      var url           = emoticonUrlFromRow(el);
      var file_type     = url.split(".").pop();
      downloadURI(url, emoticon_name + "." + file_type);
    });
  }

  var emoticonCount = $('.emoji_row').length;
  var confirmText = "About to download " + emoticonCount + " emoticons, this may take a while.\nDepending on your Chrome configuration, you may get a download dialog window for each one.";
  if(confirm(confirmText)) {
    downloadEachOne();
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.please_download_things === true) {
    initiateDownload();
  }
});
