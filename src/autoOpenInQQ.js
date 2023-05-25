// ==UserScript==
// @name         QQ链接自动打开
// @namespace    http://yeyu1024.xyz
// @version      1.1
// @description  PC上使用QQ、QQ邮箱点开链接，浏览器提示非QQ官方链接页面时自动打开对应的链接。
// @author       夜雨
// @match        *://c.pc.qq.com/*
// @match        *://mail.qq.com/cgi-bin/*
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

    if(location.href.includes('mail.qq.com')){
        linkUrl = document.querySelector("div.safety-url").innerText;
        linkUrl && (window.location.href = linkUrl) ;
    }


})();