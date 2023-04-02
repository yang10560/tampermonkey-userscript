// ==UserScript==
// @name         微博暗黑模式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  微博搜索页面显示暗黑模式
// @description:en Weibo seach page use dark mode
// @author       夜雨
// @match        https://s.weibo.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=weibo.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    setTimeout(() => {
        var html = document.querySelector("html")
        html.style.color = "#ffffff"
        html.setAttribute("data-theme", "dark")
        document.body.style.color = "#ffffff"
        document.querySelector(".m-main-nav").setAttribute("style", "color:#ffffff;background-color:#111")
        document.querySelectorAll(".main-side a").forEach(item => {
            item.setAttribute("style", "color:#ffffff;background-color:#111")
        })
        document.querySelectorAll("#pl_feedlist_index a").forEach(item => {
            item.setAttribute("style", "color:#ffffff;background-color:#111")
        })
        document.querySelectorAll("#pl_topic_header").forEach(item => {
            item.setAttribute("style", "color:#ffffff;background-color:#111")
        })
        document.querySelectorAll(".m-page").forEach(item => {
            item.setAttribute("style", "color:#ffffff;background-color:#111")
        })
        document.querySelectorAll(".m-error").forEach(item => {
            item.setAttribute("style", "color:#ffffff;background-color:#111")
        })
        document.querySelectorAll("textarea").forEach(item => {
            item.setAttribute("style", "color:#ffffff;background-color:#111")
        })


    }, 1000)

    // Your code here...
})();

