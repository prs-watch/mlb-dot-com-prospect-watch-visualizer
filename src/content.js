/*
    content process.
*/
$(window).on('load DOMSubtreeModified propertychange', () => {
    let info_list = []
    let count = {}

    const infos = $('#cards').find('.player-info')
    for (const info of infos){
        info_list.push(info.innerText)
    }
    for (const p of info_list){
        count[p] = (count[p]) ? count[p] + 1 : 1
    }
    chrome.runtime.sendMessage({
        value: {
            contents: count
        }
    });
})
