// ==UserScript==
// @name         QQ链接自动打开
// @namespace    http://yeyu1024.xyz
// @version      1.0
// @description  PC上使用浏览器点开QQ链接，在提示非QQ官方链接页面自动打开对应的链接
// @author       夜雨
// @match        https://c.pc.qq.com/*
// @icon         https://mat1.gtimg.com/www/icon/favicon2.ico
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    let linkUrl = ""

    if(location.href.includes('c.pc.qq.com')){
        linkUrl = document.querySelector("div#url").innerText;
        linkUrl && (window.location.href = linkUrl) ;
    }

})();