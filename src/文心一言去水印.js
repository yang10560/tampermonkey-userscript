// ==UserScript==
// @name         百度文心一言去水印
// @namespace    http://tampermonkey.net/
// @version      1.7
// @description  去文心一言水印、去星火水印。去天工水印。去通义千问水印、去超时弹窗、去AI画图水印。CSDN-C知道去水印,去提问限制。
// @author       夜雨
// @match        *://yiyan.baidu.com/*
// @match        *://so.csdn.net/so/search*
// @match        *://xinghuo.xfyun.cn/*
// @match        *://neice.tiangong.cn/*
// @match        *://tongyi.aliyun.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// @license      MIT
// @runat        document-end
// ==/UserScript==


(function () {
    'use strict';

    const hideWater = function () {
        let divMask = document.querySelector('div[style^="pointer-events"]')
            || document.querySelector('#mask') || document.querySelector("#watermark-wrapper")
            || document.querySelector("div[style*='pointer-events']")

        if (location.href.includes("tongyi")){
            divMask =  document.querySelector(".digit_watermark")
        }

        if (divMask) {
            let hideMask = document.createElement("style");
            hideMask.setAttribute("id", "hideStyle")
            hideMask.innerHTML = `div[style^="pointer-events"]{height:0 !important;width:0 !important;transform: rotate(90deg);overflow: hidden;}`//overflow: hidden; or transform-origin: top left;
            if (location.href.includes("csdn.net")) hideMask.innerHTML = `#mask {height:0 !important;width:0 !important;transform: rotate(90deg);overflow: hidden;}`
            if (location.href.includes("xinghuo")) hideMask.innerHTML = `#watermark-wrapper div {height:0 !important;width:0 !important;transform: rotate(90deg);overflow: hidden;}`
            if (location.href.includes("tiangong")) hideMask.innerHTML = `div[style*='pointer-events'] {height:0 !important;width:0 !important;transform: rotate(90deg);overflow: hidden;}`
            if (location.href.includes("tongyi")) hideMask.innerHTML = `.digit_watermark,div[style^="pointer-events"] {height:0 !important;width:0 !important;transform: rotate(90deg);overflow: hidden;}`


            let divId = divMask.getAttribute("id")
            let v = document.querySelector("#hideStyle")
            if (v) {
                v.remove()
                document.head.append(hideMask)
            } else {

                document.head.append(hideMask)
            }

        }
    };


    const vv = () => {
        //来源 https://greasyfork.org/zh-CN/scripts/462166


        let old = null;
        try {
            old = MutationObserver.prototype.observe;
            MutationObserver.prototype.observe = function (target, options) {
                console.log("Hook MutationObserver observe")
                hideWater();
                return old;

            }
        } catch (e) {
        }

        try {
            old = WebKitMutationObserver.prototype.observe;
            WebKitMutationObserver.prototype.observe = function (target, options) {
                console.log("Hook WebKitMutationObserver observe")
                hideWater();
                return old;
            }

        } catch (e) {
        }

        try {
            old = MozMutationObserver.prototype.observe;
            MozMutationObserver.prototype.observe = function (target, options) {
                console.log("Hook MozMutationObserver observe")
                hideWater();
                return old;
            }
        } catch (e) {
        }
    };


    setTimeout(hideWater, 2000)
    setTimeout(vv, 1500)


    //去超时弹窗。去AI画图水印
    setInterval(() => {
        document.body.parentElement.scrollTo(0, 0)
        if(location.href.includes("yiyan")){
            if (document.querySelector(".ant-modal-root")) {
                document.querySelectorAll(".ant-modal-root").forEach(item => {
                    item.remove()
                })
            }

            if (document.querySelector("img")) {
                document.querySelectorAll("img").forEach(item => {
                    try {
                        let imgUrl = item.getAttribute("src")
                        if (imgUrl.indexOf("wm_ai") > -1) {
                            item.setAttribute("src", imgUrl.replace(/style\/wm_ai/, ""))
                        }

                    } catch (e) {
                        //TODO handle the exception
                    }
                })
            }
        }

        if(location.href.indexOf("csdn")){
            //csdn限制
            let csdn_input = document.querySelector("#chat input[class='el-input__inner']");
            if(csdn_input && csdn_input.hasAttribute("disabled")){
                try{
                    console.log("----anti csdn disabled-----")
                    csdn_input.removeAttribute("disabled")
                    document.querySelector("#chat .icon-send").removeAttribute("style")
                    document.querySelector("#chat .message-input div").classList.remove("is-disabled")
                }catch (e) {
                    console.log(e)
                }

            }
            //clear csdn tips
            document.querySelectorAll(".record-item.left").forEach(item=>{
                try {
                    if(item.innerText.includes("次数已用完")){
                        console.log("----csdn delete item----")
                        item.remove()
                    }
                }catch (e) {
                    console.log(e)
                }
            })
        }

    }, 1000)


})();
