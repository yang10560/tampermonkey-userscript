// ==UserScript==
// @name         QQ链接自动打开
// @namespace    http://yeyu1024.xyz
// @version      2.4
// @description  PC上使用QQ、QQ邮箱，微云文档点开链接，浏览器提示非QQ官方链接页面时自动打开对应的链接。另外支持CSDN，简书，贴吧，微博，酷安，知乎，nodeseek
// @author       夜雨
// @match        *://c.pc.qq.com/*
// @match        *://weixin110.qq.com/cgi-bin/*
// @match        *://link.zhihu.com/*
// @match        *://mail.qq.com/cgi-bin/*
// @match        *://*.bdimg.com/safecheck/*
// @match        *://t.cn/*
// @match        *://*.coolapk.com/*
// @match        *://*.jianshu.com/go-wild*
// @match        *://link.csdn.net/*
// @match        *://google.urlshare.cn/umirror_url_check*
// @match        *://www.nodeseek.com/jump?to=*
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

    if(location.href.includes('bdimg.com')){
        document.querySelector("a.btn.btn-next").click()
    }

    if(location.href.includes('t.cn')){
        document.querySelector(".open-url a").click()
    }

    //酷安 https://www.coolapk.com/link?url=https%3A%2F%2Fwwu.lanzoub.com%2Fb0387ekmf
    if(location.href.includes('coolapk.com\/link')){
        linkUrl = getParams('url');

    }

    //知乎
    if(location.href.includes('zhihu.com')){
        linkUrl = getParams('target');
    }

    //简书
    if(location.href.includes('jianshu.com')){
        linkUrl = getParams('url');
    }

    //csdn
    if(location.href.includes('link.csdn.net')){
        linkUrl = getParams('target');
    }

    //微云文档
    if(location.href.includes('google.urlshare.cn')){
        linkUrl = getParams('url');
    }

    //nodeseek
    if(location.href.includes('nodeseek.com\/jump')){
        linkUrl = getParams('to');
    }

    //weixin
    if(location.href.includes('weixin110')){
        linkUrl = document.querySelector(".weui-msg__desc").innerText
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