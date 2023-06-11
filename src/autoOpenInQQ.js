// ==UserScript==
// @name         QQ链接自动打开
// @namespace    http://yeyu1024.xyz
// @version      1.6
// @description  PC上使用QQ、QQ邮箱点开链接，浏览器提示非QQ官方链接页面时自动打开对应的链接。另外支持贴吧
// @author       夜雨
// @match        *://c.pc.qq.com/*
// @match        *://mail.qq.com/cgi-bin/*
// @match        *://jump.bdimg.com/safecheck/*
// @icon         https://mat1.gtimg.com/www/icon/favicon2.ico
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    function getParams(name){
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return '';
    }


    let linkUrl = ""

    if(location.href.includes('c.pc.qq.com')){
        linkUrl = getParams('pfurl') || getParams('url');
        //debugger;
        if(!linkUrl){
            linkUrl = document.querySelector("div.safety-url").innerText;
        }
    }

    if(location.href.includes('jump.bdimg.com')){
        document.querySelector("a.btn.btn-next").click()
    }

    if(location.href.includes('mail.qq.com')){

        try{
            goUrl(1);
            console.log("goUrl: ")
            return;
        }catch (e) {
            console.log("exception:", e)
            linkUrl = document.querySelector("div.safety-url").innerText;
        }

    }

    linkUrl && (window.location.href = linkUrl.startsWith("http")? linkUrl:`http://${linkUrl}`) ;


})();