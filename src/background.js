/*
author: prs-watch

Receive position info.
*/
var count

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        count = request.value
    }
)
