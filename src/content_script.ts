import {createApp} from "vue"
import Window from "./components/Window.vue";

console.log('content_script.ts')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    const text = message.text
    // alert('url: ' + document.location.href + '\nselectionText: ' + text)
    const div = document.createElement('div')
    div.id = 'yomu'
    document.body.appendChild(div)
    createApp(Window, {text: text}).mount('#yomu')
    sendResponse({})
})

export {}
