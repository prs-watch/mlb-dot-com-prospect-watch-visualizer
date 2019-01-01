/*
    background process.
*/
let count

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        count = request.value
    }
)

var get_count = () => {
    return count
}
