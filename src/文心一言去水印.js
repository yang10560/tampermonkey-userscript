// ==UserScript==
// @name         百度文心一言去水印
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  去文心一言水印、去超时弹窗、去AI画图水印。CSDN-C知道去水印,去提问限制
// @author       夜雨
// @match        *://yiyan.baidu.com/*
// @match        *://so.csdn.net/so/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// @license      MIT
// ==/UserScript==


(function () {
    'use strict';

    var hideWater = function () {
        let divMask = document.querySelector('div[style^="pointer-events"]') || document.querySelector('#mask')
        if (divMask) {
            let hideMask = document.createElement("style");
            hideMask.setAttribute("id", "hideStyle")
            hideMask.innerHTML = `div[style^="pointer-events"]{height:0 !important;width:0 !important;transform: rotate(90deg);}`
            if (location.href.indexOf("csdn.net") > -1) hideMask.innerHTML = `#mask {height:0 !important;width:0 !important;transform: rotate(90deg);}`
            let divId = divMask.getAttribute("id")
            let v = document.querySelector("#hideStyle")
            if (v) {
                v.remove()
                document.body.append(hideMask)
            } else {

                document.body.append(hideMask)
            }

        }
    }


    var vv = () => {
        //来源 https://greasyfork.org/zh-CN/scripts/462166


        var old = null;
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
    }


    setTimeout(hideWater, 500)
    setTimeout(vv, 1000)


    //去超时弹窗。去AI画图水印
    setInterval(() => {
        document.body.parentElement.scrollTo(0, 0)
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

    }, 500)


    // Your code here...
})();
