// ==UserScript==
// @name         aigcfun无限key
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  AI无限用key
// @author       夜雨
// @match        https://aigcfun.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`.floating-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.floating-btn button {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
}`)


    setTimeout(() => {
        var mydiv = document.createElement("div")
        mydiv.setAttribute("class", "floating-btn")
        var mybtn = document.createElement("button")
        mybtn.innerText = "重置key"
        mybtn.addEventListener("click", () => {
            console.log("clear")
            localStorage.clear()
            location.reload()
        })
        mydiv.append(mybtn)
        document.body.append(mydiv)
    }, 2000)


    // Your code here...
})();