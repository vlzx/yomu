import {createApp} from "vue";
import Popup from "./components/Popup.vue";

console.log('background.ts')

chrome.contextMenus.create({
    id: 'parse',
    title: 'yomu解析 "%s"',
    contexts: ['selection']
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (!tab?.id || !info.selectionText) {
        return
    }
    console.log(info)
    console.log(tab)
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (!tabs[0].id) {
            return
        }
        chrome.tabs.sendMessage(tabs[0].id, {'text': info.selectionText}, (response) => {
        console.log(response)
    });
    })
})

export {}
