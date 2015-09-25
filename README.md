Props to [caseywatts](http://github.com/caseywatts) for most of inhaler.js.

Downloader needed something more. Eventually got Chrome Extension EventPage working. chrome.downloads.download() fails silently when it doesn't like its args. And people wonder why I don't like JS.

![facepalm](https://dl.dropboxusercontent.com/u/379705/images/single-facepalm.gif)

## How to Use

1. `git clone` the repo like normal
2. "load unpacked extension" into chrome. The `unpacked extension` is the folder that contains this entire repo - see [google's docs](https://developer.chrome.com/extensions/getstarted#unpacked]) for details.
3. Ta-da! Currently it'll run on any slack emoji edit page automatically every time. (PR a `browseraction` toggle for us if you want? ;D)
