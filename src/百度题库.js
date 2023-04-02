// ==UserScript==
// @name         百度题库显示答案
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  百度题库显示答案。
// @author       夜雨
// @match        https://easylearn.baidu.com/*
// @match        https://tiku.baidu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=easylearn.baidu.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    var clearMask = function () {
        if (document.querySelector(".mask")) {
            document.querySelectorAll(".mask").forEach(e => {
                e.remove();
            })
        }
        if (document.querySelector(".guid-to-app-mask")) {
            document.querySelectorAll(".guid-to-app-mask").forEach(e => {
                e.remove();
            })
        }
        console.log("清理完毕")

    }

    setTimeout(clearMask, 3000)

    // Your code here...
})();

