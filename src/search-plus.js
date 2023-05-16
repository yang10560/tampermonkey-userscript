// ==UserScript==
// @name         chatGPT tools Plus（修改版）
// @namespace    http://tampermonkey.net/
// @version      2.3.7
// @description  Google、必应、百度、Yandex、360搜索、谷歌镜像、搜狗、Fsou、duckduckgo侧边栏Chat搜索，集成国内一言，星火，天工，通义AI。即刻体验AI，无需翻墙，无需注册，无需等待！
// @author       夜雨
// @match      https://cn.bing.com/*
// @match      https://www.bing.com/*
// @match      *://*.bing.com/*
// @match      https://chat.openai.com/chat
// @match      https://www.google.com/*
// @match      https://duckduckgo.com/*
// @match      https://www.so.com/s*
// @match      *://m.so.com/s*
// @match      *://www.baidu.com/s*
// @match      https://www.baidu.com/*
// @match      https://m.baidu.com/*
// @match      *://yandex.ru/search*
// @match      *://yandex.com/search*
// @match      https://search.ecnu.cf/search*
// @match      https://search.aust.cf/search*
// @match      https://search.*.cf/search*
// @match      https://*.cf:*/*
// @match      *://gooo.azurewebsites.net/*
// @match      https://fsoufsou.com/search*
// @match      https://www.google.com.hk/*
// @match      *://www.sogou.com/*
// @match      *://m.sogou.com/*
// @match      *://wap.sogou.com/*
// @match      *://neice.tiangong.cn/*
// @icon64      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAZlBMVEUAAAD///+hoaFoaGhsbGy7u7vd3d2+vr76+vra2tr29va2trYrKyvg4ODs7OxXV1dgYGCtra0xMTGXl5fExMQ6OjqOjo7R0dEVFRWnp6dSUlIiIiIcHBwLCwt4eHhycnKEhIRHR0f14+hfAAADN0lEQVRYhe1WyZajMAyEsMQshgABEwIJ+f+fbC02W0yHnjnNvNYFDFbZKpUlO86v/e/Wpve/8M4TFckwSvI/cx8z11g2/tw9vZKrEIKe159GUkvwipPxVb4eQQzvYV12XX3Y/x6BT5LqUZkgWixEHF/9/hAAeozz0I8nOtzoccDfg8CbaZQrYkOGYUaEFO2RDUTT4MZefjkMpVcQo5/Wr2DSi9/bhlYPhukvZqf41l3hiiFv8xJR2CslIT+XXfc+YapojY60kG1ZA0rknj+lL4YtnGCQ4lbESSczf5R6Ugc5ee4AoL9KAwbwYXDWXJTXhaDhf2L3R44rxzkbgFgHn55Y0JJjzyeONpYLDn4CCPn7A46VaggjwIB6eEltAOConCUAcZVDXBKIHHgbp9IZ4KW0AZj8LAHaQEzaY0lmHk60AXiQ8XYFEDoVrRpXOmSfdQFfbMe7MuTOJMLU6IJqkh7PuTMVrhosAJCp2xrApA6Lk+p4VllMQjsAcNNkpzeQlKkPHhQb0VkAEgO8TSMaVqhMH/EyW57W2R7moNoBCjwDPg1QzM07QAk7o+wUrIcNwAVZ1ktAROE7gBMaEq4kaW8NgHlQOsrULiUoHjGT40PIqngHOIGYzRK22ggJz3TpbrCt7AMU9gPZwc4y5slJC7FO4woAxmcLgMMi0dF1ymSOtnMEYFDczxqtdJRM6HlAbhSvARIqHG+G5BJGqONoK2opooIMLQFaYMvWs0EJruNRV1b8vy+wqDtbEj2caAcQg5NWdIQL6IJPjIGg1gDKhLINARyxed4DpgLFq+vvKoRiEszGWmlCy0OmcyrqSxKr/eaUzFvDGnDWCX2d5zQmNdJsO4xoz8XeyqcpIdRexZ0BBOYl2r2wyHfwB2WFO0zBjS/Zv2Vc8Pey3l3kor0iR65Q+61Vr6GmttNSOtxRf+jgvfnW3eFa4CZ+3fb1k1q1uC0D3GmKC2s5zkxKvieqWbKQPvFpfbRnNF+pYn/+3ny6m0zW+9eYDIMxlQsbvKuO3zfrV5fWKMc4GLu6G+m2KY/fNNnu6/vu2drTv7fFjVuOP3dHy5MolJEqrKfvoPXp57vpr/3r9gUxwiW4OiuC3wAAAABJRU5ErkJggg==
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @grant       GM_openInTab
// @grant      GM_registerMenuCommand
// @grant      GM_setValue
// @grant      GM_getValue
// @grant      GM_getResourceText
// @grant      GM_setClipboard
// @run-at     document-end
// @require    https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js
// @require    https://cdn.staticfile.org/jquery-cookie/1.4.1/jquery.cookie.min.js
// @require    https://cdn.bootcdn.net/ajax/libs/marked/4.3.0/marked.min.js
// @require    https://cdn.bootcdn.net/ajax/libs/markdown-it/13.0.1/markdown-it.min.js
// @require    https://unpkg.com/axios/dist/axios.min.js
// @connect    api.forchange.cn
// @connect    wenxin110.top
// @connect    gpt008.com
// @connect    chatforai.cc
// @connect    api.aigcfun.com
// @connect    www.aiai.zone
// @connect    chatbot.theb.ai
// @connect    cbjtestapi.binjie.site
// @connect    ai.bo-e.com
// @connect    a.mydog.buzz
// @connect    freechatgpt.xgp.one
// @connect    luntianxia.uk
// @connect    chat.51buygpt.com
// @connect    extkj.cn
// @connect    api.tdchat0.com
// @connect    bxgav.tdchat0.com
// @connect    xeasy.me
// @connect   chat.wuguokai.cn
// @connect   ai5.wuguokai.top
// @connect   chat.aidutu.cn
// @connect   aichat.leiluan.cc
// @connect   chat.gptservice.xyz
// @connect   gpt66.cn
// @connect   ai.ls
// @connect   letsearches.com
// @connect   zhulei.xyz
// @connect   gpt.wobcw.com
// @connect   chat.68686.ltd
// @connect   t66.ltd
// @connect   www.aitianhu.com
// @connect   free.anzz.top
// @connect   chat.ohtoai.com
// @connect   freeopenai.xyz
// @connect   supremes.pro
// @connect   bnu120.space
// @connect   chat7.aifks001.online
// @connect   officechat.top
// @connect   ai.usesless.com
// @connect   www.ftcl.store
// @connect   sunls.me
// @connect   chat.wobcw.com
// @connect   www.pizzagpt.it
// @connect   www.phind.com
// @connect   chat.bushiai.com
// @connect   chatgpt.qdymys.cn
// @connect   easyai.one
// @connect   pp2pdf.com
// @connect   api.aichatos.cloud
// @connect   xiami.one
// @connect   chat2.wuguokai.cn
// @connect   www.gtpcleandx.xyz
// @connect   gpt.esojourn.org
// @connect   free-api.cveoy.top
// @connect   chatcleand.xyz
// @connect   154.40.59.105
// @connect   gptplus.one
// @connect   xcbl.cc
// @connect   hz-it-dev.com
// @connect   6bbs.cn
// @connect   toyaml.com
// @connect   38.47.97.76
// @connect   lbb.ai
// @connect   gamejx.cn
// @connect   chat86.cn
// @connect   ai001.live
// @connect   ai003.live
// @connect   ai006.live
// @connect   promptboom.com
// @connect   hehanwang.com
// @connect   caipacity.com
// @connect   chat.fdkang.top
// @connect   chatzhang.top
// @connect   51mskd.com
// @connect   forwardminded.xyz
// @connect   1chat.cc
// @connect   cytsee.com
// @connect   skybyte.me
// @connect   alllinkai1.com
// @connect   baidu.com
// @connect   geekr.dev
// @connect   chatgptdddd.com
// @connect   anfans.cn
// @connect   bing.com
// @connect   openai.com
// @connect   tongyi.aliyun.com
// @connect   haohuola.com
// @connect   xinghuo.xfyun.cn
// @connect   geetest.com
// @connect   neice.tiangong.cn
// @connect   baidu.com
// @license    MIT
// @website    https://yeyu1024.xyz/gpt.html
// @require    https://cdn.bootcdn.net/ajax/libs/showdown/2.1.0/showdown.min.js
// @require    https://cdn.bootcdn.net/ajax/libs/highlight.js/11.7.0/highlight.min.js
// @require    https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @require    https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.4/katex.min.js

// ==/UserScript==

(function () {
    'use strict';
    // grant       GM_getResourceText
    // resource markdownCss https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.css
    // resource highlightCss https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css
    //  GM_addStyle(GM_getResourceText("markdownCss"));
    // GM_addStyle(GM_getResourceText("highlightCss"));

    let JSver = '2.3.7';


    function getGPTMode() {
        return localStorage.getItem("GPTMODE");
    }

    let darkTheme = localStorage.getItem("darkTheme")
    console.log(darkTheme)
    //(prefers-color-scheme: light)
    function addHeadCss() {
        if(!document.getElementById("github-markdown-link")){
            if(!darkTheme) {
                //暗黑
                $("head").append($(
                    '<link id="github-markdown-link" rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/github-markdown-css/5.2.0/github-markdown.css" media="(prefers-color-scheme: dark)">'
                ));
            }else{
                $("head").append($(
                    '<link id="github-markdown-link" rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/github-markdown-css/5.2.0/github-markdown.css" media="(prefers-color-scheme: light)">'
                ));
            }

        }
        if(!document.getElementById("highlight-link")){
            if(!darkTheme) {
                //暗黑
                $("head").append($(
                    '<link id="highlight-link" rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.7.0/styles/base16/default-dark.min.css">'
                ));
            }else{
                $("head").append($(
                    '<link id="highlight-link" rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.7.0/styles/base16/default-light.min.css">'
                ));
            }

        }
        if(!document.getElementById("katex-link")){
            $("head").append($(
                '<link id="katex-link" href="https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.4/katex.css" rel="stylesheet">'
            ));
        }

        //spark-js
        if(!document.getElementById("spark-js")){
            $("head").append($(
                '<script id="spark-js" src="https://static.geetest.com/g5/gd.js"></script>'
            ));
        }

    }
    setTimeout(addHeadCss)
    setInterval(addHeadCss,5000)


    try {
        console.log(
            `%c【chatGPT tools Plus】已加载`,
            'color: yellow;font-size: large;font-weight: bold;background-color: darkblue;'
        );
        //禁用console 未转义警告
        hljs.configure({
            ignoreUnescapedHTML: true
        })
        const menu_updateChat_id = GM_registerMenuCommand("更新Chat", function (event) {
            GM_openInTab("https://greasyfork.org/zh-CN/scripts/459997")
        }, "updateChat");
        const menu_groupNum_id = GM_registerMenuCommand("交流群", function (event) {
            alert("交流群7：817298021\n交流群6：792365186\n交流群4：745163513\n交流群3:177193765\n交流群2:734403992\n交流群1:710808464\n交流总群：249733992")
        }, "groupNum");

        const menu_pubkey_id = GM_registerMenuCommand("更新key", function (event) {
            alert("正在更新...")
            setPubkey();
        }, "PUBKEY");
    } catch (e) {
        console.log(e)
    }

    //封装GM_xmlhttpRequest ---start---
    async function GM_fetch(details) {
       return new Promise((resolve, reject) =>{
           switch (details.responseType){
               case "stream":
                   details.onloadstart = (res)=>{
                       resolve(res)
                   }
                   break;
               default:
                   details.onload = (res)=>{
                       resolve(res)
                   };
           }

           details.onerror = (res)=>{
               reject(res)
           };
           details.ontimeout = (res)=>{
               reject(res)
           };
           details.onabort = (res)=>{
               reject(res)
           };
           GM_xmlhttpRequest(details)
        });
    }

    function GM_httpRequest(details, callBack, errorCallback, timeoutCallback, abortCallback){
        if(callBack){
            switch (details.responseType){
                case "stream":
                    details.onloadstart = callBack;
                    break;
                default:
                    details.onload = callBack
            }
        }
        if(errorCallback){
            details.onerror = errorCallback;
        }
        if(timeoutCallback){
            details.ontimeout = timeoutCallback;
        }
        if(abortCallback){
            details.onabort = abortCallback;
        }
        console.log(details)
        GM_xmlhttpRequest(details);
    }

    //封装GM_xmlhttpRequest ---end---


    let generateRandomIP = () => {
        const ip = [];
        for (let i = 0; i < 4; i++) {
            ip.push(Math.floor(Math.random() * 256));
        }
        console.log(ip.join('.'))
        return ip.join('.');
    }


    //动态pubkey
    function setPubkey() {
        let GPTMODE = getGPTMode()
        if (GPTMODE === "CHATGPT") {

            GM_fetch({
                method: "GET",
                nocache: true,
                url: "https://freeopenai.xyz/api.txt",
                headers: {
                    //"Content-Type": "application/json",
                    "Referer": `https://freeopenai.xyz/`
                }
            }).then((response)=> {
                let resp = response.responseText;
                console.log(response)
                if (!resp) {
                    localStorage.removeItem("openAIkey")
                    return
                }
                //localStorage.setItem("openAIkey", pubkey)
                let ht = ""
                let keys = resp.split("\n");
                keys.forEach(key => {
                    ht += `<a href='javascript:(function(){ localStorage.setItem("openAIkey","${key}");alert("更新成功：${key}")})();'>${key}</a><br>`
                })
                document.getElementById("gptAnswer").innerHTML =  ht;
                //document.getElementById("gptAnswer").innerText = "openAI key获取成功,请复制其中一个并点按钮添加:\n"+keys.join(",")
                localStorage.removeItem("openAIkey")
            }).catch((res)=>{
                console.log(res)
            })

        }else if(!GPTMODE || GPTMODE === "Default"){
            GM_fetch({
                method: "GET",
                url: "https://api.aigcfun.com/fc/key",
                headers: {
                    "Content-Type": "application/json",
                    "Referer": `https://aigcfun.com/`,
                    "X-Forwarded-For": generateRandomIP()
                }
            }).then((response)=> {
                let resp = response.responseText;
                let pubkey = JSON.parse(resp).data;
                if (!pubkey) {
                    document.getElementById("gptAnswer").innerText = "获取pubkey失败"
                    return
                }
                console.log("pubkey:" + pubkey);
                //GM_setValue("pubkey", pubkey)
                localStorage.setItem("pubkey", pubkey)
                document.getElementById("gptAnswer").innerText = "pubkey更新成功:" + pubkey
            })
        }else if(GPTMODE === "BNU120"){
            setTimeout(async () => {
                bnuKey = await setNormalKey("https://chat.1.bnu120.space");
                if(bnuKey){
                    showAnserAndHighlightCodeStr(`BNU120：更新成功,KEY:${bnuKey}`)
                }else {
                    showAnserAndHighlightCodeStr("BNU120：更新失败")
                }
            });
        }else {
            showAnserAndHighlightCodeStr("该线路不适用")
        }

    }

    function getPubkey() {
        //return GM_getValue("pubkey");
        return localStorage.getItem("pubkey");
    }

    //update AIGCFUN key.
    setTimeout(()=>{
        if (!getPubkey()){
            setPubkey();
        }
    })

    //enc-start
    async function digestMessage(r) {
        const hash = CryptoJS.SHA256(r);
        return hash.toString(CryptoJS.enc.Hex);
    }

    const generateSignature = async r => {
        const {
            t: e,
            m: t
        } = r;
        //const n = {}.PUBLIC_SECRET_KEY;
        let n = getPubkey();
        if (!n) {
            console.log("pubkey不存在，使用默认")
            n = "k6zeE77ge7XF"
        }
        console.log("CURRENT KEY:" + n)
        const a = `${e}:${t}:${n}`;
        return await digestMessage(a);
    };

    const generateSignatureWithPkey = async r => {
        const {
            t: e,
            m: t,
            pkey: n
        } = r;
        console.log("CURRENT KEY:" + n)
        const a = `${e}:${t}:${n}`;
        return await digestMessage(a);
    };

    let aesKey = "hj6cdzrhj72x8ht1";
    const AES_CBC = {

        encrypt: function(e, t) {
            return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(e), CryptoJS.enc.Utf8.parse(t), {
                iv: CryptoJS.enc.Utf8.parse(aesKey),
                mode: CryptoJS.mode.CBC
            }).toString()
        },
        decrypt: function(e, t) {
            return CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.parse(t), {
                iv: CryptoJS.enc.Utf8.parse(aesKey),
                mode: CryptoJS.mode.CBC
            }).toString(CryptoJS.enc.Utf8)
        }
    };
    //enc-end

    //start


    function addChatBtn() {

        let mybtn =
            `<span class="bg s_btn_wr"><input type="button" id="mybtn" value="加载chat" class="bg s_btn"></span>`;
        $(".bg.s_btn_wr").after(mybtn)
        document.getElementById("mybtn").addEventListener("click", function () {
            console.log("reloadPage")
            if (window.location.href.indexOf("https:\/\/www.baidu.com\/s") > -1) {
                GM_add_box_style(2)
                addBothStyle()
                keyEvent()
                appendBox(2).then((res) => {
                    pivElemAddEventAndValue(2)
                })
            }
        })
    }

    function isMobile() {
        let userAgentInfo = navigator.userAgent.toLowerCase();
        let mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod","Mobile"];
        let mobile_flag = false;
        //根据userAgent判断是否是手机
        for (let v = 0; v < mobileAgents.length; v++) {
            if (userAgentInfo.indexOf(mobileAgents[v].toLowerCase()) > -1) {
                mobile_flag = true;
                break;
            }
        }
        return mobile_flag;
    }


    //end

    function katexTohtml(rawHtml) {
       // console.log("========katexTohtml start=======")
        let renderedHtml = rawHtml.replace(/<em>/g, "").replace(/<\/em>/g, "").replace(/\$\$(.*?)\$\$/g, (_, tex) => {
            //debugger
            return katex.renderToString(tex, {displayMode: false, throwOnError: false});
        });
        renderedHtml = renderedHtml.replace(/\$(.*?)\$/g, (_, tex) => {
            //debugger
            return katex.renderToString(tex, {displayMode: false, throwOnError: false});
        });
       // console.log("========katexTohtml end=======")
        try {
            renderedHtml = filterXSS(renderedHtml) //filterXSS
        }catch (e) {
            console.warn(e)
        }

        return renderedHtml;
    }


    function filterXSS(input) {
        //let output = input.replace(/<script[^>]*>.*?<script>/gi, '');
        let output = input.replace(/<script/gi, '&lt;script');
        //output = output.replace(/<\/script/gi, '&lt;&#x2F;script');
        output = output.replace(/<meta/gi, '&lt;meta');
       // output = output.replace(/<\/meta/gi, '&lt;&#x2F;meta');
       /* output = output.replace(/<>]+?on\\\\w+=.*?>/gi, '');
        output = output.replace(/<[^>]*>.*?<iframe>/gi, '');
        output = output.replace(/<img[^>]+src=[\\']([^\\']+)[\\'][^>]*>/gi, '');
        output = output.replace(/<link rel=[\\']stylesheet[\\'][^>]+>/gi, ''); */
        return output;
    }

    let rawAns = undefined;
    let isShowRaw = false;
    //显示答案并高亮代码函数
    function showAnserAndHighlightCodeStr(codeStr) {
        if(!codeStr) return
        rawAns = codeStr;//记录原文
        try {
            document.getElementById('gptAnswer').innerHTML = `${katexTohtml(mdConverter(codeStr.replace(/\\n+/g, "\n")))}`
        } catch (e) {
            try {
                document.getElementById('gptAnswer').innerHTML = `${mdConverter(codeStr.replace(/\\n+/g, "\n"))}`
            }catch (e) {
                console.log(e)
            }
        }
        for (let i = 0; i <= document.getElementsByTagName("code").length - 1; i++) {
            document.getElementsByTagName("code")[i].setAttribute("class",
                "hljs");
            hljs.highlightAll()
        }
        //添加代码复制按钮 start
        let preList =  document.querySelectorAll("#gptAnswer pre")
        preList.forEach((pre)=>{
            try{
                if(!pre.querySelector(".btn-pre-copy")){
                    //<span class=\"btn-pre-copy\" onclick='preCopy(this)'>复制代码</span>
                    let copyBtn = document.createElement("span");
                    copyBtn.setAttribute("class","btn-pre-copy");
                    copyBtn.addEventListener("click",(event)=>{
                        let _this = event.target
                        console.log(_this)
                       let pre = _this.parentNode;
                       console.log(pre.innerText)
                       _this.innerText = '';
                       GM_setClipboard(pre.innerText, "text");
                        _this.innerText = '复制成功'
                       setTimeout(() =>{
                           _this.innerText = '复制代码'
                       },2000)
                    })
                    copyBtn.innerText = '复制代码'
                    pre.insertBefore(copyBtn, pre.firstChild)
                }
            }catch (e) {
                console.log(e)
            }
        })
        //添加代码复制按钮 end
    }

    //高亮代码函数
    function highlightCodeStr() {
        for (let i = 0; i <= document.getElementsByTagName("code").length - 1; i++) {
            document.getElementsByTagName("code")[i].setAttribute("class",
                "hljs");
            hljs.highlightAll()
        }
    }

    //顶级配置
    let webSessionId
    let autoClick = localStorage.getItem("autoClick")
    let your_qus
    let abortXml
    let regx = /search.*?\.cf/g;
    if (window.location.href.indexOf("bing.com") > -1) {

        GM_add_box_style(0)
        addBothStyle()
        keyEvent()
        appendBox(0).then((res) => {
            pivElemAddEventAndValue(0)
        })
        //linkToBing_beautification_script()
    }
    if (window.location.href.indexOf("google.com") > -1 || window.location.href.match(regx)) {
        GM_add_box_style(1)
        addBothStyle()
        keyEvent()
        appendBox(1).then((res) => {
            if(isMobile()){
                pivElemAddEventAndValue(11)
            }else {
                pivElemAddEventAndValue(1)
            }
        })
    }
    if (window.location.href.indexOf("https:\/\/www.baidu.com\/s") > -1 && !isMobile()) {
        GM_add_box_style(2)
        addBothStyle()
        keyEvent()
        appendBox(2).then((res) => {
            pivElemAddEventAndValue(2)
        })
    } else if (window.location.href.indexOf("https:\/\/m.baidu.com") > -1 || (window.location.href.indexOf(
        "baidu.com") > -1 && isMobile())) { //手机百度
        GM_add_box_style(2)
        addBothStyle()
        keyEvent()
        appendBox(6).then((res) => {
            pivElemAddEventAndValue(2)
        })
    }
    //俄罗斯yandex
    if (window.location.href.indexOf("yandex.ru\/search") > -1 || window.location.href.indexOf(
        "yandex.com\/search") > -1) {
        GM_add_box_style(1)
        addBothStyle()
        keyEvent()
        appendBox(3).then((res) => {
            pivElemAddEventAndValue(3)
        })
    }

    //360so
    if (window.location.href.indexOf("so.com\/s") > -1) {
        GM_add_box_style(1)
        addBothStyle()
        keyEvent()
        appendBox(4).then((res) => {
            if(isMobile()){
                pivElemAddEventAndValue(9)
            }else {
                pivElemAddEventAndValue(4)
            }
        })
    }

    //fsoufsou
    if (window.location.href.indexOf("fsoufsou.com\/search") > -1) {
        setTimeout(() => {
            GM_add_box_style(1)
            addBothStyle()
            keyEvent()
            appendBox(5).then((res) => {
                pivElemAddEventAndValue(5)
            })
        }, 3000)
    }

    //duckduckgo.com
    if (window.location.href.indexOf("duckduckgo.com\/\?q") > -1) {
        GM_add_box_style(1)
        addBothStyle()
        keyEvent()
        appendBox(7).then((res) => {
            pivElemAddEventAndValue(7)
        })
    }

    //sogou.com
    if (window.location.href.indexOf("sogou.com") > -1) {
        GM_add_box_style(1)
        addBothStyle()
        keyEvent()
        appendBox(8).then((res) => {
            if(isMobile()){
                pivElemAddEventAndValue(10)
            }else{
                pivElemAddEventAndValue(8)
            }
        })
    }

    //顶级函数
    function uuid() { //uuid 产生
        let s = [];
        let hexDigits = "0123456789abcdef";
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        return s.join("");
    }

    function GM_add_box_style(case_web) {
        case_web = 2;
        switch (case_web) {
            case 2:
                GM_addStyle(`
    #gptAnswer{
       margin: 10px;
       border-top: solid;
       border-bottom: solid;
    }
    #gptInput{
        border-radius: 20px;
        flex: 1;
        padding-left: 10px;
        height: 35px;
        border:0;
        background-color: transparent;
        font-size: 15px;
        font-weight: 500;
    }
    #button_GPT:hover{
        cursor: pointer;
    }
    #gptDiv{
        width:452px;
        flex: 1;
        display: flex;
        flex-direction: column;
        height: fit-content;
    }
    #gptInputBox{
        display:flex;
        justify-content: space-around;
        border-radius: 20px;
        border: 1px solid #c4c7ce;
        margin-left: 10px;
    }
    #button_GPT{
        border: 0;
        background-color: transparent;
        font-size: 14px;
        padding: 5px;
    }
    #gptStatus{
        margin-left: 10px;
    }
    #modeSelect {
        border: 1px solid #c4c7ce;
        border-radius: 10px;
        margin: 3px;
        margin-left: -1px;
    }
    
    .chatSetting{
        display: block;
        text-align: right;
        margin-top: 10px;
        margin-right: 8px;
        margin-bottom: 1px;
    }
    .chatHide{
         display: none;
    }
    
    #chatSetting{
       text-decoration: none !important;
    }
    #chatSetting:hover{
       cursor: pointer;
       text-decoration: underline !important;
    }
    
    #website a:nth-child(odd){
        color: #ffbb00;
    }
    
    #website a:nth-child(even){
        color: #0bbbac;
    }
    
    #website a {
        border: 1px solid;
        border-radius: 3px;
        margin-right: 9px;
        margin-bottom: 5px;
    }
    #website hr {
        border: none;
        border-top: 1px dashed #999;
        margin: 5px 0px 5px 0px;
    }

    gptDiv p{
        white-space: pre-line;
    }
    
    pre .btn-pre-copy{
        text-align: right;
        display: block;
    }
    
    pre .btn-pre-copy:hover{
        cursor: pointer;
    }
    
    
    `)
                break;
            default:
                alert("参数没设定")
        }

    }

    function do_it() {
        let finalResult
        let normalArray

        isShowRaw = false; //设置显示原文
        rawAns = undefined;//设置显示原文

        document.getElementById('gptAnswer').innerHTML = `<div>加载中<span id="dot"></span></div>`;

        //CHATGPT模式
        let GPTMODE = getGPTMode()
        if (GPTMODE && GPTMODE === "CHATGPT") {
            console.log("当前模式CHATGPT")
            if (!localStorage.getItem("openAIkey")) {
                let manualInput = confirm("openAIkey不存在 请更新,或者使用你自己的key");
                if (manualInput) {
                    let aikey = prompt("请输入您的openAIkey", "");
                    if (aikey) localStorage.setItem("openAIkey", aikey)
                } else {
                    return
                }

            }
            abortXml = GM_xmlhttpRequest({
                method: "POST",
                // url: "http://gpt008.com/backend-api/conversation",
                url: "https://freechatgpt.xgp.one/backend-api/conversation",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer null",
                    "Referer": "https://freechatgpt.xgp.one/",
                    // "Host":"gpt008.com",
                    "accept": "text/event-stream",
                    "x-openai-api-key": localStorage.getItem("openAIkey"),
                },
                data: JSON.stringify({//抓包conversation就可以看到这个结构
                    action: "next",
                    messages: [
                        {
                            id: uuid(),
                            author: {role: "user"},
                            role: "user",
                            content: {
                                content_type: "text",
                                parts: [your_qus],
                            },
                        },
                    ],
                    model: "text-davinci-002-render",
                    parent_message_id: uuid(),
                }),
                //    onprogress: function(msg){console.log(msg)},
                //     onreadystatechange:function(msg){log(msg)},
                onloadstart: (stream) => { //肝了好久，终于找到油猴接受SSE的接受方法了
                    let result = "";
                    const reader = stream.response.getReader();
                    //     console.log(reader.read)
                    let charsReceived = 0;
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            highlightCodeStr()
                            return;
                        }

                        charsReceived += value.length;
                        const chunk = value;
                        result += chunk;
                        normalArray = chunk

                        try {
                            let byteArray = new Uint8Array(chunk);
                            let decoder = new TextDecoder('utf-8');
                            const matchResults = decoder.decode(byteArray).match(/"parts":\s*\["(.+?)"\]/g);
                            let nowResult = matchResults[matchResults.length - 1];
                            nowResult = /\[\"(.*?)\"\]/g.exec(nowResult)[1];

                            console.log(nowResult)


                            if (nowResult !== "DONE") {//not done
                                finalResult = nowResult
                                showAnserAndHighlightCodeStr(finalResult)
                            } else {
                                console.log(nowResult)
                                showAnserAndHighlightCodeStr(finalResult)
                            }


                        } catch (ex) {
                            showAnserAndHighlightCodeStr(ex)
                            console.log(ex)
                        }


                        return reader.read().then(processText);
                    });
                },
                responseType: "stream",
                onerror: function (err) {
                    console.log(err)
                },
                ontimeout: function (err) {
                    console.log(err)
                }
            })


            return;
        } else if (GPTMODE && GPTMODE === "ANZZ") {
            console.log("当前模式ANZZ")
            ANZZ();
            //end if
            return;
        } else if (GPTMODE && GPTMODE === "THEBAI") {
            console.log("当前模式THEBAI")
            THEBAI()
            //end if
            return;
        } else if (GPTMODE && GPTMODE === "YQCLOUD") {
            console.log("当前模式YQCLOUD")
            YQCLOUD()
            //end if
            return;
        } else if (GPTMODE && GPTMODE === "HAOHUOLA") {
            console.log("HAOHUOLA")

            HAOHUOLA();

            //end if
            return;
        } else if (GPTMODE && GPTMODE === "PIZZA") {
            console.log("当前模式PIZZA")
            PIZZA();
            //end if
            return;
        } else if (GPTMODE && GPTMODE === "AITIANHU") {
            console.log("当前模式AITIANHU")
            AITIANHU()
            //end if
            return;
        } else if (GPTMODE && GPTMODE === "TDCHAT") {
            console.log("当前模式TDCHAT")
            TDCHAT()
            //end if
            return;
        } else if (GPTMODE && GPTMODE === "QDYMYS") {
            console.log("当前模式QDYMYS")
            QDYMYS();

            //end if
            return;
        } else if (GPTMODE && GPTMODE === "WGK") {
            console.log("当前模式WGK")

            WGK();

            //end if
            return;
        } else if (GPTMODE && GPTMODE === "T66") {

            console.log("T66")
            T66()

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "AILS") {

            console.log("AILS")
            AILS()

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "FDKANG") {
            console.log("FDKANG")
            FDKANG()

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "COOLAI") {
            console.log("COOLAI")
            try {
                resultCoolAI = [];
                WebsocketCoolAI.send(`42["ask",{"userId":"cool","content":"${your_qus}"}]`)
            } catch (e) {
                initSocket()
            }

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "PHIND") {
            console.log("PHIND")
            PHIND();

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "WOBCW") {
            console.log("WOBCW")
            WOBCW();


            return;
            //end if
        } else if (GPTMODE && GPTMODE === "HEHANWANG") {
            console.log("HEHANWANG")
            HEHANWANG();

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "EXTKJ") {
            console.log("EXTKJ")
            EXTKJ();

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "LBB") {
            console.log("LBB")
            LBB();

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "GAMEJX") {
            console.log("GAMEJX")
            GAMEJX();

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "AIFKS") {
            console.log("AIFKS")
            AIFKS();

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "USESLESS") {
            console.log("USESLESS")
            USESLESS();

            return;
            //end if
        } else if (GPTMODE && GPTMODE === "PRTBOOM") {
            console.log("PRTBOOM")
            PRTBOOM();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "SUNLE") {
            console.log("SUNLE")
            SUNLE();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "EASYAI") {
            console.log("EASYAI")
            EASYAI();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "CLEANDX") {
            console.log("CLEANDX")
            CLEANDX();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "ESO") {
            console.log("ESO")
            ESO();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "CVEOY") {
            console.log("CVEOY")
            CVEOY();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "XCBL") {
            console.log("XCBL")
            XCBL();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "HZIT") {
            console.log("HZIT")
            HZIT();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "TOYAML") {
            console.log("TOYAML")
            TOYAML();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "NBAI") {
            console.log("NBAI")
            NBAI();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "XEASY") {
            console.log("XEASY")
            XEASY();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "newBing") {
            console.log("newBing")
            newBing();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "BNU120") {
            console.log("BNU120")
            BNU120();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "DOG2") {
            console.log("DOG2")
            DOG2();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "LEMURCHAT") {
            console.log("LEMURCHAT")
            LEMURCHAT();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "MINDED") {
            console.log("MINDED")
            MINDED();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "CHAT1") {
            console.log("CHAT1")
            CHAT1();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "CYTSEE") {
            console.log("CYTSEE")
            CYTSEE();

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "CHATZHANG") {
            console.log("CHATZHANG")
            CHATZHANG()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "OFFICECHAT") {
            console.log("OFFICECHAT")
            OFFICECHAT()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "CHATWEB1") {
            console.log("CHATWEB1")
            CHATWEB1()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "LINKAI") {
            console.log("LINKAI")
            LINKAI()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "GEEKR") {
            console.log("GEEKR")
            GEEKR()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "ZHULEI") {
            console.log("ZHULEI")
            ZHULEI()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "CHATDDD") {
            console.log("CHATDDD")
            CHATDDD()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "OPENAI") {
            console.log("OPENAI")
            OPENAI()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "TONGYI") {
            console.log("TONGYI")
            TONGYI()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "SPARK") {
            console.log("SPARK")
            SPARK()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "TIANGONG") {
            console.log("TIANGONG")
            TIANGONG()

            return;
            //end if
        }else if (GPTMODE && GPTMODE === "YIYAN") {
            console.log("YIYAN")
            YIYAN()

            return;
            //end if
        }

        console.log("默认线路:")
        AIGCFUN();

    }

    //默认线路
    function AIGCFUN() {
        showAnserAndHighlightCodeStr("该线路较慢，请稍后")
        const now = Date.now();
        console.log(now);
        generateSignature({
            t: now,
            m: your_qus || ""
        }).then(sign => {
            console.log(sign)
            addMessageChain(messageChain1, {role: "user", content: your_qus})//连续话
            GM_fetch({
                method: "POST",
                url: "https://api.aigcfun.com/api/v1/text?key=" + getPubkey(),
                headers: {
                    "Content-Type": "application/json",
                    "Referer": "https://aigcfun.com/",
                    "origin": "https://aigcfun.com"
                },
                data: JSON.stringify({
                    messages: messageChain1,
                    tokensLength: your_qus.length + 10,
                    model: "gpt-3.5-turbo"
                }),
                responseType: "text",
            }).then(function (res) {
                if (res.status === 200) {
                    try {
                        console.log('成功....')
                        console.log(res)
                        let rest = JSON.parse(res.responseText).choices[0].text
                        console.log(rest)
                        showAnserAndHighlightCodeStr(rest);
                        addMessageChain(messageChain1, {
                            role: "assistant",
                            content: rest
                        })
                    } catch (e) {}

                } else {
                    showAnserAndHighlightCodeStr('访问失败了')
                }
            },function (reason){
                showAnserAndHighlightCodeStr(`出错了:${reason.status},${reason.statusText}`)
            });
        });
    }


    function creatBox() {
        return new Promise((resolve) => {
            let divE = document.createElement('div');
            let divId = document.createAttribute("id"); //创建属性
            divId.value = 'gptDiv'; //设置属性值
            divE.setAttributeNode(divId); //给div添加属性
            let pE = document.createElement('p');
            let pClass = document.createAttribute('class');
            pClass.value = 'textClass';
            pE.setAttributeNode(pClass)
            let pText = document.createTextNode("chatGPT tools Plus 已启动");
            pE.appendChild(pText);
            divE.appendChild(pE);
            divE.classList.add("gpt-container");
            divE.innerHTML = `
    <div id="gptInputBox">
        <input autocomplete="off" placeholder="若用不了,请更新KEY或切换线路" id="gptInput" list="suggestions" type=text><button id="button_GPT" ><svg width="15px" height="15px" focusable="false" viewBox="0 0 24 24"><path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path><path fill="#ea4335" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path><path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path><path fill="#4285f4" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path></svg>搜索</button>
        <datalist id="suggestions">
            <option value="你好"></option>
        </datalist>
    </div>
    <div class="chatSetting"><a id="chatSetting"><svg fill="#909399" width="15px" height="15px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5" fill="#909399"></circle></svg>设置</a></div>
    <div id=gptCueBox>
    <p class="chatHide" id="gptStatus">
   <select id="modeSelect">
      <option value="Default">默认线路[兼容]</option>
      <option value="newBing">New Bing</option>
      <option value="OPENAI">OPENAI</option>
      <option value="TONGYI">通义千问</option>
      <option value="YIYAN">百度文心</option>
      <option value="SPARK">讯飞星火</option>
      <option value="TIANGONG">天工AI</option>
      <option value="ANZZ">ANZZ</option>
      <option value="THEBAI">THEBAI</option>
      <option value="YQCLOUD">YQCLOUD</option>
      <option value="HAOHUOLA">HAOHUOLA</option>
      <option value="BNU120">BNU120</option>
      <option value="DOG2">DOG2</option>
      <option value="PIZZA">PIZZA[兼容]</option>
      <option value="AITIANHU">AITIANHU</option>
      <option value="TDCHAT">TDCHAT</option>
      <option value="GEEKR">GEEKR</option>
      <option value="LEMURCHAT">狐猴内置</option>
      <option value="CHAT1">CHAT1</option>
      <option value="OFFICECHAT">OFFICECHAT[挂]</option>
      <option value="CHATWEB1">CHATWEB1</option>
      <option value="LINKAI">LINKAI</option>
      <option value="CHATZHANG">CHATZHANG</option>
      <option value="MINDED">MINDED</option>
      <option value="CYTSEE">CYTSEE</option>
      <option value="QDYMYS">QDYMYS</option>
      <option value="WGK">WGK</option>
      <option value="NBAI">NBAI[挂]</option>
      <option value="T66">T66</option>
      <option value="ZHULEI">ZHULEI[兼容]</option>
      <option value="CHATDDD">CHATDDD</option>
      <option value="XEASY">XEASY</option>
      <option value="AILS">AILS</option>
      <option value="FDKANG">FDKANG[挂]</option>
      <option value="COOLAI">COOLAI[兼容]</option>
      <option value="PHIND">PHIND</option>
      <option value="WOBCW">WOBCW</option>
      <option value="EXTKJ">EXTKJ</option>
      <option value="HEHANWANG">HEHANWANG</option>
      <option value="LBB">LBB[兼容]</option>
      <option value="GAMEJX">GAMEJX</option>
      <option value="AIFKS">AIFKS[挂]</option>
      <option value="USESLESS">USESLESS</option>
      <option value="PRTBOOM">PRTBOOM</option>
      <option value="SUNLE">SUNLE</option>
      <option value="EASYAI">EASYAI[挂]</option>
      <option value="CLEANDX">CLEANDX</option>
      <option value="ESO">ESO</option>
      <option value="CVEOY">CVEOY</option>
      <option value="XCBL">XCBL</option>
      <option value="HZIT">HZIT[兼容]</option>
      <option value="TOYAML">TOYAML</option>
      <option value="CHATGPT">GPT</option>
    </select> 部分线路需要科学上网</p>
	<p class="chatHide" id="warn" style="margin: 10px"  ><a id="updatePubkey" style="color: #4e6ef2;" href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg>更新KEY</a>:适用于默认、GPT、BNU120线路</p>
	<p class="chatHide" id="autoClickP" style="margin: 10px"  ><a id="autoClick" style="color: #4e6ef2;" href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="text-lg iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 4H5v16h14V8h-4V4ZM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992Zm9 8.508a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5ZM7.527 17a4.5 4.5 0 0 1 8.945 0H7.527Z"></path></svg>自动点击开关</a>:用于设置搜索是否自动点击</p>
	<p class="chatHide" id="darkThemeP" style="margin: 10px"  ><a id="darkTheme" style="color: #4e6ef2;" href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.997c-5.523 0-10-4.478-10-10c0-5.523 4.477-10 10-10s10 4.477 10 10c0 5.522-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0-2v-12a6 6 0 0 1 0 12Z"></path></svg>暗黑模式开关</a>:用于设置暗黑,可能不生效</p>
	<div class="chatHide" id="website" style="margin-left: 10px; ">
	    <hr>
        <a target="_blank"  href="https://yeyu1024.xyz/gpt.html?random=${Math.random()}&from=js&ver=${JSver}">网页版</a>
        <a target="_blank"  href="https://yiyan.baidu.com/">文心</a>
        <a target="_blank"  href="https://tongyi.aliyun.com/">通义</a>
        <a target="_blank"  href="https://www.tiangong.cn/">天工</a>
        <a target="_blank"  href="https://xinghuo.xfyun.cn/">星火</a>
        <a target="_blank"  href="https://chat.openai.com/chat">OPENAI</a>
        <a target="_blank"  href="https://www.bing.com/search?q=Bing+AI&showconv=1">Bing AI</a>
        <hr>
        <a target="_blank"  href="https://bard.google.com/">Google Bard</a>
        <a target="_blank"  href="https://slack.com/apps/A04KGS7N9A8-claude">Claude</a>
        <a target="_blank"  href="https://greasyfork.org/scripts/459997">更新脚本</a>
        <a target="_blank"  href="https://yeyu1024.xyz/zhichi.png?id=yeyu">用爱发电</a>
        <a target="_blank"  href="https://yeyu1024.xyz/zfb.html?from=js&ver=${JSver}">支付宝红包</a>
        <hr>
	</div>
   <article id="gptAnswer" class="markdown-body"><div id="gptAnswer_inner">版本: ${JSver} 已启动,部分线路需要科学上网,更换线路请点击"设置"。当前线路: ${getGPTMode() || "Default"};当前自动点击状态: ${localStorage.getItem("autoClick") || "关闭"}<div></article>
    </div>
    <span class="speak" style="margin-right: 10px;text-align: right">
    <a id="speakAnser" style="cursor: pointer" href="javascript:void(0)" >
       <svg width="20" height="20" viewBox="0 0 17 16">
          <path d="M9 16.5v-9l6 4.5-6 4.5z" fill="#909399"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>朗读答案</a>
    
    <a id="copyAns" style="cursor: pointer" href="javascript:void(0)" >
       <svg width="12" height="12" data-v-13fede38="" t="1679666016648" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6241" class="icon"><path data-v-13fede38="" d="M661.333333 234.666667A64 64 0 0 1 725.333333 298.666667v597.333333a64 64 0 0 1-64 64h-469.333333A64 64 0 0 1 128 896V298.666667a64 64 0 0 1 64-64z m-21.333333 85.333333H213.333333v554.666667h426.666667v-554.666667z m191.829333-256a64 64 0 0 1 63.744 57.856l0.256 6.144v575.701333a42.666667 42.666667 0 0 1-85.034666 4.992l-0.298667-4.992V149.333333H384a42.666667 42.666667 0 0 1-42.368-37.674666L341.333333 106.666667a42.666667 42.666667 0 0 1 37.674667-42.368L384 64h447.829333z" fill="#909399" p-id="6242"></path></svg>
       复制答案</a>
    
    <a id="rawAns" style="cursor: pointer" href="javascript:void(0)" >
       <svg width="13" height="13" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" stroke="#909399" stroke-width="4" fill="none"></circle>
    </svg>原文切换</a>

</span>`;
            resolve(divE)
        })
    }

    let speakAudio;
    let isPlayend = true;
    async function pivElemAddEventAndValue(append_case) {
        let search_content

        try {
            if (append_case === 11) {//手机google
                search_content = document.querySelector("#tsf input").value
            }
            if (append_case === 10) {//手机sogou
                search_content = document.querySelector("input#keyword").value
            }
            if (append_case === 9) {//手机360
                search_content = document.querySelector("input#q").value
            }
            if (append_case === 8) {
                search_content = document.querySelector("input#upquery").value
            }
            if (append_case === 7) {
                search_content = document.querySelector("#search_form input").value
            }
            if (append_case === 5) {
                search_content = document.getElementById("search-input").value
            }

            if (append_case === 4) {
                search_content = document.getElementById("keyword").value
            }

            if (append_case === 3) {
                search_content = document.querySelectorAll("input")[0].value
            }

            if (append_case === 2) {
                search_content = document.getElementById('kw').value
            }
            if (append_case === 1) {
                try {
                    search_content = document.querySelector(
                        "#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input:nth-child(3)"
                    ).value
                } catch (e) {
                    search_content = document.querySelector("textarea").value
                }

            }
            if (append_case === 0) {
                search_content = document.getElementsByClassName('b_searchbox')[0].value
                if (!search_content) {
                    search_content = document.querySelector("textarea[class='b_searchbox']").value;
                }
            }
        } catch (e) {
            console.log(e)
        }

        document.getElementById("gptInput").value = search_content
        document.getElementById('button_GPT').addEventListener('click', () => {
            your_qus = document.getElementById("gptInput").value
            do_it()

        })

        //搜索建议
        document.getElementById('gptInput').addEventListener('keyup', () => {
            let current;
            let word = document.getElementById('gptInput').value;
            if(!word) return;
            if(current){
                current.abort();
            }
            console.log(word)
            current = GM_xmlhttpRequest({
                method: "GET",
                url: "https://www.baidu.com/sugrec?&prod=pc&wd="+encodeURIComponent(word),
                responseType: "text",
                onload:(r) => {
                    //console.log(r)
                    if (r.status === 200) {
                        //console.log(r);
                        let dataList = JSON.parse(r.responseText).g;
                        const su = document.querySelector('#suggestions');
                        su.innerHTML = '';
                        dataList && dataList.forEach(v => {
                            const optionElement = document.createElement('option');
                            optionElement.value = v.q;
                            optionElement.innerText = v.q;
                            su.appendChild(optionElement);
                        });
                    }

                }
            });
        })

        document.getElementById('updatePubkey').addEventListener('click', () => {
            document.getElementById("gptAnswer").innerText = "正在更新，请稍后..."
            setPubkey()
        })

        document.getElementById('autoClick').addEventListener('click', () => {
            if(autoClick){
                localStorage.removeItem("autoClick")
                autoClick = undefined;
                showAnserAndHighlightCodeStr("自动点击已经关闭")
            }else{
                localStorage.setItem("autoClick", "开启")
                autoClick = "开启"
                showAnserAndHighlightCodeStr("自动点击已经开启")
            }
        })

        document.getElementById('darkTheme').addEventListener('click', () => {
            if(darkTheme){
                localStorage.removeItem("darkTheme")
                darkTheme = undefined;
                showAnserAndHighlightCodeStr("暗黑已经开启")
            }else{
                localStorage.setItem("darkTheme", "关闭")
                darkTheme = "关闭"
                showAnserAndHighlightCodeStr("暗黑已经关闭")
            }
        })
        //朗读
        document.getElementById('speakAnser').addEventListener('click', () => {
           let ans = document.querySelector("#gptAnswer");
           if(!isPlayend){
               console.log('音频停止！');
               speakAudio.pause();
               isPlayend = true;
               return;
           }
           if(ans){
               let speakText = encodeURIComponent(ans.innerText);
               speakAudio = new Audio(`https://fanyi.sogou.com/reventondc/synthesis?text=${speakText}&speed=1&lang=zh-CHS&from=translateweb&speaker=5`);
               speakAudio.play()
               isPlayend = false;
               speakAudio.addEventListener("ended",function() {
                   isPlayend = true;
                   console.log('音频已播放完毕！');
               })
           }
        })

        //原文切换
        document.getElementById('rawAns').addEventListener('click', (ev) => {
           let ans = document.querySelector("#gptAnswer");
           if(!rawAns) return;
           if(!isShowRaw){
               ans.innerText = rawAns;
               isShowRaw = true;
           }else{
               showAnserAndHighlightCodeStr(rawAns)
               isShowRaw = false;
           }

        })

        //复制答案
        document.getElementById('copyAns').addEventListener('click', (ev) => {
           let ans = document.querySelector("#gptAnswer");
           if(isShowRaw){
               GM_setClipboard(rawAns, "text");
           }else{
               GM_setClipboard(ans.innerText, "text");
           }
        })

        document.getElementById('modeSelect').addEventListener('change', () => {
            const selectEl = document.getElementById('modeSelect');
            const selectedValue = selectEl.options[selectEl.selectedIndex].value;
            localStorage.setItem('GPTMODE', selectedValue);

            if (selectedValue === 'COOLAI') {
                initSocket();
            }
            if (selectedValue === 'GAMEJX') {
                setTimeout(setGroupid_gamejx)
            }
            document.getElementById('gptAnswer').innerHTML = `切换成功，当前线路:${selectedValue}`;
        });

        let chatSetting = false;
        document.getElementById('chatSetting').addEventListener('click', () => {
          if(!chatSetting){
             //显示内容
             try{
                 document.querySelector("#gptStatus").classList.remove("chatHide")
                 document.querySelector("#warn").classList.remove("chatHide")
                 document.querySelector("#autoClickP").classList.remove("chatHide")
                 document.querySelector("#darkThemeP").classList.remove("chatHide")
                 document.querySelector("#website").classList.remove("chatHide")
             }catch (e) {
                 console.log(e)
             }
              chatSetting = true;
          }else{
              //隐藏
              try{
                  document.querySelector("#gptStatus").classList.add("chatHide")
                  document.querySelector("#warn").classList.add("chatHide")
                  document.querySelector("#autoClickP").classList.add("chatHide")
                  document.querySelector("#darkThemeP").classList.add("chatHide")
                  document.querySelector("#website").classList.add("chatHide")
              }catch (e) {
                  console.log(e)
              }
              chatSetting = false;
          }
        })

    }

    async function appendBox(append_case) {
        return new Promise((resolve, reject) => {
            creatBox().then((divE) => {
                let resetWidth = ()=>{
                    try {
                        document.querySelector("#gptDiv").style.setProperty("width",
                            "100%")
                        /*document.querySelector("#gptInput").setAttribute("class",
                            "se-input adjust-input")*/
                    } catch (e) {
                        console.error(e)
                    }
                }

                switch (append_case) {
                    case 0: //bing
                        if (divE) {
                            if(isMobile()){
                                //手机bing
                                document.getElementById('b_results').prepend(divE)
                                resetWidth();
                            }else{
                                document.getElementById('b_context').prepend(divE)
                            }
                        }
                        break;
                    case 1: //google
                        if(isMobile()){
                            //手机google
                            document.querySelector("div#msc").after(divE);
                            resetWidth();
                        }else if (document.getElementsByClassName('TQc1id ')[0]) {
                            document.getElementsByClassName('TQc1id ')[0].prepend(divE);
                        } else {
                            //other
                            document.getElementById("rcnt").appendChild(divE);
                        }
                        break;
                    case 2: //baidu
                        if (document.getElementById('content_right')) {
                            document.getElementById('content_right').prepend(divE)
                        }
                        break;
                    case 3: //yandex
                        if (document.getElementById('search-result-aside')) {
                            document.getElementById('search-result-aside').prepend(divE)
                        }
                        break;
                    case 4: //360
                        if(isMobile()){
                            //手机360
                            document.getElementById("search-box").appendChild(divE);
                            resetWidth();
                        }else{
                            if (document.getElementById('side')) {
                                document.getElementById('side').prepend(divE)
                            }
                        }

                        break;
                    case 5: //fsoufsou
                        if(isMobile()){
                            //手机fsou
                            let frow = document.querySelectorAll(".flex-row")[3]
                            if (frow.children!==undefined ) {
                                frow.children.item(0).prepend(divE)
                            }
                            resetWidth()
                        }else{
                            let frow = document.querySelectorAll(".flex-row")[2]
                            if (frow.children!==undefined && frow.children.length === 2) {
                                frow.children.item(1).prepend(divE)
                            } else {
                                frow.innerHTML = frow.innerHTML +
                                    `<div><div class="wiki-container" style="margin-left: 124px!important;padding: 15px!important;">${divE.innerHTML}</div></div>`
                            }
                        }

                        break;
                    case 6: //手机百度
                        if (document.getElementById('page-bd')) {
                            document.getElementById('page-bd').prepend(divE)
                            //调整css
                            resetWidth();
                        }
                        break;
                    case 7: //duckduckgo
                        if(isMobile()){
                            //手机dockgo
                            document.querySelector('form#search_form').after(divE)
                            resetWidth();
                        }else{
                            if (document.querySelector('[data-area="sidebar"]')) {
                                document.querySelector('[data-area="sidebar"]').prepend(divE)
                            }
                        }
                        break;
                   case 8: //sogou
                        if(isMobile()){
                            //手机搜狗
                            document.querySelector('form#searchform').after(divE)
                            resetWidth();
                        }else{
                            if (document.querySelector('div.right')) {
                                document.querySelector('div.right').prepend(divE)
                            }
                        }

                        break;
                    default:
                        if (divE) {
                            console.log(`啥情况${divE}`)
                        }
                }
            }).catch((err) => {
                throw new Error(err)
            }).finally(()=>{
                if(autoClick){
                    setTimeout(() => {
                        document.getElementById("button_GPT").click(); //自动点击
                    }, 1500)
                }
            })

            resolve("finished")
        })
    }

    //焦点函数
    function isBlur() {
        let myInput = document.getElementById('gptInput');
        if (myInput === document.activeElement) {
            return 1
        } else {
            return 0
        }
    }

    function keyEvent() {
        document.onkeydown = function (e) {
            let keyNum = window.event ? e.keyCode : e.which;
            if (13 === keyNum) {
                if (isBlur()) {
                    document.getElementById('button_GPT').click()
                } else {
                    console.log("失焦不执行")
                }

            }


        }

    }




    function addBothStyle() {
        GM_addStyle(`
    .gpt-container {
        box-sizing: border-box;
        height: -webkit-min-content;
        height: min-content;
        width: 455px;
        margin-top: 8px;
        margin-bottom: 8px;
        border: 1px solid #dfe1e5;
        border-radius: 8px;
        overflow: hidden;
        padding: 15px;
        background-color:#fcfcfc
    }

    #dot{
        height: 4px;
        width: 4px;
        display: inline-block;
        border-radius: 2px;
        animation: dotting 2.4s  infinite step-start;
    }
   @keyframes dotting {
        25%{
            box-shadow: 4px 0 0 #71777D;
        }
        50%{
            box-shadow: 4px 0 0 #71777D ,14px 0 0 #71777D;
        }
        75%{
            box-shadow: 4px 0 0 #71777D ,14px 0 0 #71777D, 24px 0 0 #71777D;
        }
    }
    pre{
        overflow-x: scroll;
        overflow-y: hidden;
        background: #fffaec;
        border-radius: 4px;
        padding: 14px 3px;
    }
    pre::-webkit-scrollbar {
     
    }`);
    }



    function Uint8ArrayToString(fileData) {
        let dataString = "";
        for (let i = 0; i < fileData.length; i++) {
            dataString += String.fromCharCode(fileData[i]);
        }

        return dataString;
    }

    function decodeUnicode(str) {
        str = str.replace(/\\/g, "%");
        //转换中文
        str = unescape(str);
        //将其他受影响的转换回原来
        str = str.replace(/%/g, "\\");
        //对网址的链接进行处理
        str = str.replace(/\\/g, "");
        return str;
    }

    function mdConverter(rawData) {
        let converter = new showdown.Converter(); //增加拓展table
        converter.setOption('tables',
            true); //启用表格选项。从showdown 1.2.0版开始，表支持已作为可选功能移入核心拓展，showdown.table.min.js扩展已被弃用
        return converter.makeHtml(rawData);
    }

    //实时监控百度,360按钮消失
    setInterval(() => {
        //百度
        if (window.location.href.indexOf("https:\/\/www.baidu.com\/s") > -1 && !isMobile()) {
            if (!document.getElementById("gptDiv") && document.getElementById("mybtn")) {
                document.getElementById("mybtn").click()
            }

            if (!document.getElementById("gptDiv") && !document.getElementById("mybtn")) {
                addChatBtn();
                document.getElementById("mybtn").click()
            }

        }
        //360 注意请如果你在360相关浏览器上使用插件。360搜索将不会生效，因为已被浏览器禁用在so.com网址上使用
        if (window.location.href.indexOf("so.com\/s") > -1 && !document.getElementById("gptDiv")) {
            GM_add_box_style(1)
            addBothStyle()
            keyEvent()
            appendBox(4).then((res) => {
                pivElemAddEventAndValue(4)
            })
        }

    }, 2000)


    function generateRandomString(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    let parentID_68686;

    //https://t66.ltd/#/chat/1002
    function T66() {
        let ops = {};
        if (parentID_68686) {
            ops = {parentMessageId: parentID_68686};
        }
        console.log(ops)
        let finalResult = [];
        GM_fetch({
            method: "POST",
            url: "https://t66.ltd/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://t66.ltd/",
               // "X-Forwarded-For": generateRandomIP(),
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: your_qus,
                options: ops
            }),
            responseType: "stream"
        }).then((stream) => {
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        highlightCodeStr()
                        return;
                    }
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(value);
                        let decoder = new TextDecoder('utf-8');
                        console.log(decoder.decode(byteArray))
                        let d = decoder.decode(byteArray);
                        /*let dd = d.split("-^&^-");
                        if(dd.length === 2){
                            let nowResult = JSON.parse(dd[0])
                            if (nowResult.text) {
                                finalResult.push(dd[1])
                                showAnserAndHighlightCodeStr(finalResult.join(""))
                            }
                            if (nowResult.id) {
                                parentID_68686 = nowResult.id;
                            }
                        }else{
                            finalResult.push(d)
                            showAnserAndHighlightCodeStr(finalResult.join(""))
                        }*/

                        let jsonLines = d.split("\n");
                        let nowResult = JSON.parse(jsonLines[jsonLines.length - 1])

                        if (nowResult.text) {
                            console.log(nowResult)
                            finalResult = nowResult.text
                            showAnserAndHighlightCodeStr(finalResult)
                        }
                        if (nowResult.id) {
                            parentID_68686 = nowResult.id;
                        }



                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },
            (reason)=>{
                console.log(reason)
            }
        ).catch(ex => {
            console.log(ex)
        })
    }


    //2023年5月6日
    let parentID_chatWeb1;
    function CHATWEB1() {
        let ops = {};
        /*if (parentID_chatWeb1) {
            ops = {parentMessageId: parentID_chatWeb1};
        }*/

        console.log(ops)
        let finalResult = [];
       GM_fetch({
            method: "POST",
            url: "https://cbot1.skybyte.me/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://cbot1.skybyte.me/",
                "origin": "https://cbot1.skybyte.me",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: your_qus,
                options: ops
            }),
            responseType: "stream"
        }).then((stream) => {
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        highlightCodeStr()
                        return;
                    }
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(value);
                        let decoder = new TextDecoder('utf-8');
                        let nowResult = JSON.parse(decoder.decode(byteArray))

                        if (nowResult.text) {
                            console.log(nowResult)
                            finalResult = nowResult.text
                            showAnserAndHighlightCodeStr(finalResult)
                        }
                        if (nowResult.id) {
                            parentID_chatWeb1 = nowResult.id;
                        }

                    } catch (e) {
                    }

                    return reader.read().then(processText);
                });
            },
            (reason)=>{
                console.log(reason)
            }
        ).catch(ex => {
            console.log(ex)
        })
    }



    let messageChain2 = [];//AILS
    let messageChain4 = [];//ESO
    let messageChain5 = [];//XCBL
    let messageChain6 = [];//HZIT
    let messageChain8 = [];//lbb
    let messageChain9 = [];//bnu120
    let messageChain10 = [];//PRTBOOM
    let messageChain1 = [
        {
            role: "system",
            content: "请以markdown的形式返回答案"
        }
    ];//default AIGCFUN

    function addMessageChain(messageChain, element,maxLength) {
        maxLength = maxLength || 6;
        if (messageChain.length >= maxLength) {
            messageChain.shift();
        }
        messageChain.push(element);
        console.log(messageChain,maxLength)
        return messageChain;
    }

    function formattedDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();

        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDay = day < 10 ? `0${day}` : day;

        return `${year}-${formattedMonth}-${formattedDay}`;
    }



    function AILS() {

        let vtime = function converTimestamp(t) {
            const e = parseInt(t)
                , n = e % 10
                , r = n % 2 === 0 ? n + 1 : n;
            return (e - n + r).toString()
        }

        let now = vtime(new Date().getTime());
        const pk = `OVbi[TPN{S#)c{36%9?g;usl)CL:${your_qus.length}`;//查看js的generateSignature函数中的key
        let Baseurl = "https://api.caipacity.com/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            addMessageChain(messageChain2, {role: "user", content: your_qus})//连续话
            console.log(sign)
            GM_fetch({
                method: "POST",
                url: Baseurl + "v1/chat/completions?full=false",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer free",
                    "client-id": uuidv4(),
                    "client-v": "0.1.29",
                    "Referer": Baseurl,
                    "origin": "https://ai.ls",
                    "X-Forwarded-For": generateRandomIP(),
                    "accept": "application/json"
                },
                data: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: messageChain2,
                    stream: true,
                    t: `${now}`,
                    d: formattedDate(),
                    s: sign,
                    temperature:0.6
                }),
                responseType: "stream"
            }).then((stream) => {
                let result = [];
                let finalResult;
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            addMessageChain(messageChain2, {
                                role: "assistant",
                                content: finalResult
                            })
                            showAnserAndHighlightCodeStr(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        console.log(d)
                        /*d.split("\n").forEach(item=>{
                            try {
                                let chunk = JSON.parse(item.replace(/data:/,"").trim())
                                    .choices[0].delta.content;
                                result.push(chunk)
                            }catch (ex){}
                        })*/
                        result.push(d)
                        showAnserAndHighlightCodeStr(result.join(""))
                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },(reason)=>{
                console.log(reason)
            }).catch((ex)=>{
                console.log(ex)
            });

        });
    }


    //23.5.2
    function DOG2() {

        GM_fetch({
            method: "POST",
            url: "https://2dog.51mskd.com/doggy/guest-test",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer null",
                "X-Forwarded-For": generateRandomIP(),
                "Referer": "https://2dog.51mskd.com/",
                "origin": "https://2dog.51mskd.com",
                "accept": "application/json"
            },
            data: JSON.stringify({
                "question": your_qus,
                "type": "chat",
                "is_guest": true,
                "model": "gpt-3.5-turbo"
            }),
            responseType: "stream"
        }).then((stream) => {
            let result = [];
            let finalResult;
            let errorStr;
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    finalResult = result.join("")
                    try {
                        if(result.length === 0){
                            showAnserAndHighlightCodeStr(errorStr)
                        }else{
                            showAnserAndHighlightCodeStr(finalResult)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    return;
                }
                try {
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    console.log(d)
                    d.split("\n").forEach(item=>{
                        try {
                            let chunk = JSON.parse(item.replace(/data:/,"").trim())
                                .choices[0].delta.content;
                            result.push(chunk)
                        }catch (ex){

                        }
                    })
                    showAnserAndHighlightCodeStr(result.join(""))
                    if(d.includes("error#")){
                        errorStr = d
                    }
                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });
        },(reason)=>{
            console.log(reason)
        }).catch((ex)=>{
            console.log(ex)
        });
    }

    let messageChain11 = []//xeasy
    function XEASY() {

        let now = Date.now();
        const pk = {}.PUBLIC_SECRET_KEY;//查看js的generateSignature函数中的key
        let Baseurl = "https://chat19.xeasy.me/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            addMessageChain(messageChain11, {role: "user", content: your_qus})//连续话
            console.log(sign)
            GM_fetch({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({
                    messages: messageChain11,
                    time: now,
                    pass: null,
                    sign: sign,
                    key: null
                }),
                responseType: "stream",
            }).then((stream) => {
                let result = [];
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            addMessageChain(messageChain11, {
                                role: "assistant",
                                content: finalResult
                            })
                            showAnserAndHighlightCodeStr(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        showAnserAndHighlightCodeStr(result.join(""))
                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },(reason)=>{
                console.log(reason)
            }).catch((ex)=>{
                console.log(ex)
            });

        });
    }

    let messageChain_zhulei = [];
    function ZHULEI() {
        addMessageChain(messageChain_zhulei, {role: "user", content: your_qus})//连续话

        GM_fetch({
            method: "POST",
            url: "https://chathub.zhulei.xyz/api",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Bearer null",
                "Referer": "https://chathub.zhulei.xyz/",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                messages: messageChain_zhulei,
                model: "gpt-3.5-turbo",
                password: "",
                temperature: 0.6
            }),
        }).then((r) => {
            if (r.status === 200) {
                console.log(r);
                if(messageChain_zhulei.length > 0){
                    messageChain_zhulei[messageChain_zhulei.length - 1].id = Date.now();
                }
                addMessageChain(messageChain_zhulei,{"role":"assistant","content":r.responseText,"id":Date.now()})
                showAnserAndHighlightCodeStr(r.responseText)
            }
        },(reason)=>{
            console.log(reason)
        }).catch((ex)=>{
            console.log(ex)
        });
    }


    async function FDKANG() {


        await GM_fetch({
            method: "POST",
            url: "http://chat.fdkang.top/setsession.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Referer": "http://chat.fdkang.top/"
            },
            data: `message=${encodeURI(your_qus)}&context=%5B%5D&key=`
        })

        GM_fetch({
            method: "POST",
            url: "http://chat.fdkang.top/stream.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Referer": "http://chat.fdkang.top/",
                "accept": "text/event-stream"
            },
            responseType: "stream"
        }).then((stream) => {
            let result = [];
            let finalResult;
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    finalResult = result.join("")
                    showAnserAndHighlightCodeStr(finalResult)
                    return;
                }

                try {

                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    console.log("raw:",d)
                    let dd = d.replace(/data: /g, "").split("\n\n")
                    console.log("dd:",dd)
                    dd.forEach(item=>{
                        try {
                            let delta = JSON.parse(item).choices[0].delta.content
                            result.push(delta)
                            showAnserAndHighlightCodeStr(result.join(""))
                        }catch (e) {

                        }
                    })
                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });
        },function (err) {
            console.log(err)
        }).catch((ex)=>{
            console.log(ex)
        })

    }


    let chatzhang_key;
    let chatzhang_ip = generateRandomIP();
    setTimeout(()=>{
        if(getGPTMode() !== 'CHATZHANG'){
            return
        }
        GM_fetch({
            method: "GET",
            url: "http://chat.chatzhang.top/index.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Referer": "http://chat.chatzhang.top/",
                "x-requested-with": "XMLHttpRequest",
                "X-Forwarded-For" : chatzhang_ip
            }
        }).then(res=>{
            chatzhang_key = res.responseHeaders.match(/key=(.*?);/)[1];
            console.log("CHATZHANG_key",chatzhang_key)
        }).catch((ex)=>{
            console.log(ex)
        })
    })

    async function CHATZHANG() {
        await GM_fetch({
            method: "POST",
            url: "http://chat.chatzhang.top/setsession.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Referer": "http://chat.chatzhang.top/",
                "x-requested-with": "XMLHttpRequest",
                "X-Forwarded-For" : chatzhang_ip
            },
            data: `message=+${encodeURI(your_qus)}&context=%5B%5D&key=${chatzhang_key}`
        })

        GM_fetch({
            method: "POST",
            url: "http://chat.chatzhang.top/stream.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Referer": "http://chat.chatzhang.top/",
                "accept": "text/event-stream",
                "x-requested-with": "XMLHttpRequest",
                "X-Forwarded-For" : chatzhang_ip
            },
            responseType: "stream"
        }).then((stream) => {
            let result = [];
            let finalResult;
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    finalResult = result.join("")
                    showAnserAndHighlightCodeStr(finalResult)
                    return;
                }

                try {

                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    console.log("raw:",d)
                    let dd = d.replace(/data: /g, "").split("\n\n")
                    console.log("dd:",dd)
                    dd.forEach(item=>{
                        try {
                            let delta = JSON.parse(item).choices[0].delta.content
                            result.push(delta)
                            showAnserAndHighlightCodeStr(result.join(""))
                        }catch (e) {

                        }
                    })
                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });
        },function (err) {
            console.log(err)
        }).catch((ex)=>{
            console.log(ex)
        })

    }

    async function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

   async function HZIT() {

        let baseURL = "https://20220508.6bbs.cn/";
        addMessageChain(messageChain6, {role: "user", content: your_qus})//连续话
        let res = await GM_fetch({
            method: "POST",
            url: baseURL + "api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "origin": "https://20220508.6bbs.cn",
                "path": "v1/chat/completions",
                "Referer": baseURL
            },
            data: JSON.stringify({
                messages: messageChain6,
                stream: true,
                model: "gpt-3.5-turbo",
                temperature: 1,
                text: your_qus,
                presence_penalty: 0
            })
        });
       if (res.status === 200) {
           console.log('成功....')
           console.log(res)
           let rest = JSON.parse(res.responseText).data;
           console.log(rest)
           for (let i = 0; i < 25; i++) {
               console.log("hzit",i)
               let rr = await GM_fetch({
                   method: "POST",
                   url: baseURL + "api/getOne",
                   headers: {
                       "Content-Type": "application/json",
                       "accept": "*/*",
                       "origin": "https://20220508.6bbs.cn",
                       "path": "v1/chat/completions",
                       "Referer": baseURL
                   },
                   data: JSON.stringify({
                       id: rest
                   })
               });
               if (rr.status === 200) {
                   console.log(rr)
                   let result = JSON.parse(rr.responseText).data;
                   if(!result) {
                       await delay(3000)
                       continue;
                   }
                   if(!result.resTime){
                       showAnserAndHighlightCodeStr(result.res || result)
                       await delay(3000)
                       continue
                   }
                   showAnserAndHighlightCodeStr(result.res || result)
                   addMessageChain(messageChain6, {
                       role: "assistant",
                       content: result.res || result
                   })
                   break;
               }else {
                   console.log(res)
                   showAnserAndHighlightCodeStr('访问失败了')
               }
           }

       } else {
           console.log(res)
           showAnserAndHighlightCodeStr('访问失败了')
       }

    }

    //https://chat.geekr.dev/ 2023年5月11日
    async function GEEKR() {

        let baseURL = "https://chat.geekr.dev/";
        let res = await GM_fetch({
            method: "POST",
            url: baseURL + "chat",
            headers: {
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryunS2PBTi514UmKrN",
                "accept": "*/*",
                "Referer": baseURL
            },
            data:  `------WebKitFormBoundaryunS2PBTi514UmKrN\r\nContent-Disposition: form-data; name=\"prompt\"\r\n\r\n${your_qus}\r\n------WebKitFormBoundaryunS2PBTi514UmKrN\r\nContent-Disposition: form-data; name=\"regen\"\r\n\r\nfalse\r\n------WebKitFormBoundaryunS2PBTi514UmKrN--\r\n`
        });
        if (res.status === 200) {
            console.log('成功....')
            console.log(res)
            let chat_id = JSON.parse(res.responseText).chat_id;
            console.log("chat_id",chat_id)
            GM_fetch({
                method: "GET",
                url: `https://chat.geekr.dev/stream?chat_id=${chat_id}&api_key=`,
                headers: {
                    "Referer": "https://chat.geekr.dev/",
                    "accept": "text/event-stream"
                },
                responseType: "stream"
            }).then((stream) => {
                let result = [];
                let finalResult;
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        finalResult = result.join("")
                        showAnserAndHighlightCodeStr(finalResult)
                        return;
                    }

                    try {

                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        console.log("raw:",d)
                        let dd = d.replace(/data: /g, "").split("\n")
                        console.log("dd:",dd)
                        dd.forEach(item=>{
                            try {
                                let delta = JSON.parse(item).choices[0].delta.content
                                result.push(delta)
                                showAnserAndHighlightCodeStr(result.join(""))
                            }catch (e) {

                            }
                        })
                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },function (err) {
                console.log(err)
            }).catch((ex)=>{
                console.log(ex)
            })


        } else {
            console.log(res)
            showAnserAndHighlightCodeStr('访问失败了')
        }

    }


    //取某个cookie的值
    function getCookieValue(cookies, cookieName) {
        let name = cookieName + "=";
        let cookieArray = cookies.split(';');
        for(let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    }

    //取header的cookie
    function getCookies(headers) {
        let cookieArray = headers.split('\r\n');
        cookieArray.forEach(item => {
            if(item.startsWith('set-cookie')){
                return item;
            }
        })
        return "";
    }


    //狐猴内置 2023年5月12日
    function LEMURCHAT() {

        let baseURL = "http://lemurchat.anfans.cn/";

        GM_fetch({
            method: "POST",
            url: baseURL + "api/chat/conversation-trial",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 4 Prime) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36"
            },
            data: `{"messages":"[{\\"content\\":\\"\\",\\"id\\":\\"LEMUR_AI_SYSTEM_SETTING\\",\\"isSensitive\\":false,\\"needCheck\\":false,\\"role\\":\\"system\\"},{\\"content\\":\\"${your_qus}\\",\\"isSensitive\\":false,\\"needCheck\\":true,\\"role\\":\\"user\\"}]"}`,
            //data: `{"messages":"[{\\"content\\":\\"\\",\\"id\\":\\"LEMUR_AI_SYSTEM_SETTING\\",\\"isSensitive\\":false,\\"needCheck\\":false,\\"role\\":\\"system\\"},{\\"content\\":\\"你好\\",\\"isSensitive\\":false,\\"needCheck\\":true,\\"role\\":\\"user\\"}]"}`,
            responseType: "stream"
        }).then((stream)=>{
            const reader = stream.response.getReader();
            let result = [];
            reader.read().then(function processText({done, value}) {
                if (done) {
                    highlightCodeStr()
                    return;
                }
                try {
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    console.log("raw:",d)
                    let dd = d.replace(/data: /g, "").split("\n\n")
                    console.log("dd:",dd)
                    dd.forEach(item=>{
                        try {
                            let delta = /content\\":\\"(.*?)\\"/gi.exec(item)[1]
                            result.push(delta.replace(/\\\\n/g,"\n"))
                            showAnserAndHighlightCodeStr(result.join(""))
                        }catch (e) {

                        }
                    })

                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });
        },function (err) {
            console.log(err)
        }).catch((ex)=>{
            console.log(ex)
        });

    }


    //2023年5月4日 https://chatgpt.cytsee.com/ https://chatgpt01.peo.icu/
    let messageChain_cytsee = []
    function CYTSEE() {

        let baseURL = "https://www.cytsee.com/";
        addMessageChain(messageChain_cytsee, {role: "user", content: your_qus})//连续话
        let sendData = JSON.stringify({
            messages: messageChain_cytsee,
            justStream: true,
            stream: true,
            model: "gpt-3.5-turbo",
            temperature: 1,
            presence_penalty: 0
        });
        let hmac = CryptoJS.HmacSHA256(sendData, "981028");
        let signature = hmac.toString(CryptoJS.enc.Hex);

        GM_fetch({
            method: "POST",
            url: baseURL + "api/generateStream",
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "sign": signature,
                "Referer": "https://saosao.cytsee.com/",
                "origin": "https://saosao.cytsee.com"
            },
            data: sendData,
            responseType: "stream"
        }).then((stream)=>{

            const reader = stream.response.getReader();
            let result = [];
            reader.read().then(function processText({done, value}) {
                if (done) {
                    highlightCodeStr()
                    addMessageChain(messageChain_cytsee, {
                        role: "assistant",
                        content: result.join("")
                    });
                    return;
                }
                try {
                    // console.log(normalArray)
                    let byteArray = new Uint8Array(value);
                    let decoder = new TextDecoder('utf-8');
                    console.log(decoder.decode(byteArray))
                    result.push(decoder.decode(byteArray))
                    showAnserAndHighlightCodeStr(result.join(""))

                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });

        },function (err) {
            console.log(err)
        }).catch((ex)=>{
            console.log(ex)
        });

    }


    let userId_wgk = "#/chat/" + Date.now();

    function WGK() {
        console.log(userId_wgk)
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://chat2.wuguokai.cn/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Bearer null",
                "Referer": "https://chat.wuguokai.cn/",
                //"Host":"www.aiai.zone",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: your_qus,
                userId: userId_wgk,
                options: {}
            }),
            onloadstart: (stream) => {
                let finalResult = []
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        showAnserAndHighlightCodeStr(finalResult.join(""))
                        return;
                    }
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(value);
                        let decoder = new TextDecoder('utf-8');
                        let nowResult = decoder.decode(byteArray)

                        finalResult.push(nowResult.replace(/fxopenai\.win/gi,""))
                        showAnserAndHighlightCodeStr(finalResult.join(""))


                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                showAnserAndHighlightCodeStr("erro:", err)
            }
        })

    }


    let userId_yqcloud = "#/chat/" + Date.now();

    function YQCLOUD() {
        console.log(userId_yqcloud)
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            //url: "https://cbjtestapi.binjie.site:7777/api/generateStream",
            url: "https://api.aichatos.cloud/api/generateStream",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://chat6.aichatos.com/",
                "origin": "https://chat6.aichatos.com",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: your_qus,
                apikey: "",
                system: "",
                withoutContext: false,
                userId: userId_yqcloud,
                network: true
            }),
            onloadstart: (stream) => {
                let result = [];
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        showAnserAndHighlightCodeStr(finalResult)
                        return;
                    }
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    result.push(d)
                    try {
                        console.log(result.join(""))
                        showAnserAndHighlightCodeStr(result.join(""))
                    } catch (e) {
                        console.log(e)
                    }
                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                showAnserAndHighlightCodeStr("error:", err)
            }
        })

    }


    let parentID_thebai;

    function THEBAI() {
        let ops = {};
        if (parentID_thebai) {
            ops = {parentMessageId: parentID_thebai};
        }
        console.log(ops)
        let finalResult = [];
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://chatbot.theb.ai/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://chatbot.theb.ai/",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: your_qus,
                options: ops
            }),
            onloadstart: (stream) => {
                let result = "";
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                let charsReceived = 0;
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        highlightCodeStr()
                        return;
                    }

                    charsReceived += value.length;
                    const chunk = value;
                    result += chunk;
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(chunk);
                        let decoder = new TextDecoder('utf-8');
                        let nowResult = JSON.parse(decoder.decode(byteArray))

                        if (nowResult.text) {
                            console.log(nowResult)
                            finalResult = nowResult.text
                            showAnserAndHighlightCodeStr(finalResult)
                        }
                        if (nowResult.id) {
                            parentID_thebai = nowResult.id;
                        }

                    } catch (e) {
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onprogress: function (msg) {
                //console.log(msg) //Todo
            },
            onerror: function (err) {
                console.log(err)
            },
            ontimeout: function (err) {
                console.log(err)
            }
        })

    }



    let conversationId_haohuola;
    let tokens_haohuola = ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6IjY0NWUzZjdkOTQ4YjE5OTRhMDNiYWRmZSIsInZlcnNpb24iOjAsInZpcFZlcnNpb24iOjAsImJyYW5jaCI6InpoIn0sImlhdCI6MTY4NDA3MTA1MCwiZXhwIjoxNjg0MjQzODUwfQ.-i5fY_WqP3aA6l2gaQQtfi8bG9N9KqSZZ1jPkdZSr8Y'
        ,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6IjY0NWUzZjdkOTQ4YjE5OTRhMDNiYWRmZSIsInZlcnNpb24iOjAsInZpcFZlcnNpb24iOjAsImJyYW5jaCI6InpoIn0sImlhdCI6MTY4Mzg5ODIzNywiZXhwIjoxNjg0MDcxMDM3fQ.MMy4g0EOisXPKXZLa-d4TEEE1ErAPsp-QyeucoC_HTM',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6IjY0NjBlOWE0YTFkZThjYTRjMzgzNDM2NyIsInZlcnNpb24iOjAsInZpcFZlcnNpb24iOjAsImJyYW5jaCI6InpoIn0sImlhdCI6MTY4NDA3Mjg2OCwiZXhwIjoxNjg0MjQ1NjY4fQ.DXiW5LXcw1oDQ79xs3QicIrcQexlzCcndpBUtAWHVf4'];
    let tk_haohuola;
    try{
        tk_haohuola = tokens_haohuola[Math.floor(Math.random() * tokens_haohuola.length)];
        console.log("tk_haohuola：",tk_haohuola)
    }catch (e) {
        console.error(e)
    }
    // 2023年5月13日
    function HAOHUOLA() {
        let ops = {
            prompt: your_qus
        };
        if (conversationId_haohuola) {
            ops.conversationId = conversationId_haohuola;
        }
        console.log(ops)
        let finalResult = [];
        GM_httpRequest({
            method: "POST",
            url: "https://wetabchat.haohuola.com/api/chat/conversation",
            headers: {
                "I-App":"hitab",
                "I-Branch":"zh",
                "I-Lang":"zh-CN",
                "I-Platform":"chrome",
                "I-Version":"1.0.43",
                "Content-Type": "application/json;charset=UTF-8",
                "Authorization": `Bearer ${tk_haohuola}`,
                "Referer": "https://wetabchat.haohuola.com/api/chat/conversation",
                "origin": "chrome-extension://aikflfpejipbpjdlfabpgclhblkpaafo",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
            },
            data: JSON.stringify(ops),
            responseType: "stream"
        },(stream) => {
            const reader = stream.response.getReader();
            //     console.log(reader.read)
            reader.read().then(function processText({done, value}) {
                if (done) {
                    highlightCodeStr()
                    return;
                }
                try {

                    let byteArray = new Uint8Array(value);
                    let decoder = new TextDecoder('utf-8');
                    //console.log(decoder.decode(byteArray))
                    let items = decoder.decode(byteArray).split(/_.*?_/);
                    console.log(items)
                    items.forEach((item) =>{
                        try{
                            let dataVal = JSON.parse(item)
                            if (dataVal.data && dataVal.message !== 'stream done') {
                                finalResult.push(dataVal.data)
                                showAnserAndHighlightCodeStr(finalResult.join(""))
                            }
                            if (dataVal.data && dataVal.message === 'stream done') {
                                conversationId_haohuola = JSON.parse(dataVal.data).conversationId;
                            }
                        }catch (e) {
                            
                        }
                    })

                } catch (e) {
                   // console.log(e)
                }

                return reader.read().then(processText);
            });
        })
    }



    let parentID_minded;
    //http://forwardminded.xyz/
    function MINDED() {
        let ops = {};
        if (parentID_minded) {
            ops = {parentMessageId: parentID_minded};
        }
        console.log(ops)
        let finalResult = [];
        GM_httpRequest({
            method: "POST",
            url: "http://forwardminded.xyz/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "http://forwardminded.xyz/",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: your_qus,
                options: ops,
                systemMessage:"You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
                top_p:1,
                temperature:0.8
            }),
            responseType: "stream"
        },(stream) => {
            const reader = stream.response.getReader();
            //     console.log(reader.read)
            reader.read().then(function processText({done, value}) {
                if (done) {
                    highlightCodeStr()
                    return;
                }
                try {
                    // console.log(normalArray)
                    let byteArray = new Uint8Array(value);
                    let decoder = new TextDecoder('utf-8');
                    console.log(decoder.decode(byteArray))
                    let jsonLines = decoder.decode(byteArray).split("\n");
                    let nowResult = JSON.parse(jsonLines[jsonLines.length - 1])

                    if (nowResult.text) {
                        console.log(nowResult)
                        finalResult = nowResult.text
                        showAnserAndHighlightCodeStr(finalResult)
                    }
                    if (nowResult.id) {
                        parentID_minded = nowResult.id;
                    }

                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });
        })
    }


    let parentID_chat1;
    function CHAT1() {
        let ops = {};
        if (parentID_chat1) {
            ops = {parentMessageId: parentID_chat1};
        }
        console.log(ops)
        let finalResult = [];
        GM_httpRequest({
            method: "POST",
            url: "https://1chat.cc/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://1chat.cc/",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: your_qus,
                options: ops,
                regenerate: false,
                roomId: 1002,
                uuid: Date.now(),
                systemMessage:"You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
                top_p:1,
                temperature:0.8
            }),
            responseType: "stream"
        },(stream) => {
            const reader = stream.response.getReader();
            //     console.log(reader.read)
            reader.read().then(function processText({done, value}) {
                if (done) {
                    highlightCodeStr()
                    return;
                }
                try {
                    // console.log(normalArray)
                    let byteArray = new Uint8Array(value);
                    let decoder = new TextDecoder('utf-8');
                    console.log(decoder.decode(byteArray))
                    let jsonLines = decoder.decode(byteArray).split("\n");
                    let nowResult = JSON.parse(jsonLines[jsonLines.length - 1])
                    if (nowResult.text) {
                        console.log(nowResult)
                        finalResult = nowResult.text
                        showAnserAndHighlightCodeStr(finalResult)
                    }
                    if (nowResult.id) {
                        parentID_chat1 = nowResult.id;
                    }

                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });
        })
    }





    let parentID_nbai;

    //XIAJIE https://f6.xjai.cc/#/chat/1002
    function NBAI() {
        let ops = {};
        if (parentID_nbai) {
            ops = {parentMessageId: parentID_nbai};
        }
        console.log(ops)
        GM_fetch({
            method: "POST",
            url: "https://154.40.59.105:3006/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://f1.nbai.live/",
                "accept": "application/json, text/plain, */*",
            },
            data: JSON.stringify({
                prompt: your_qus,
                options: ops
             }),
            responseType: "stream"
        }).then((stream) => {
            let result = [];
            const reader = stream.response.getReader();
            //     console.log(reader.read)
            let finalResult = "";
            reader.read().then(function processText({done, value}) {
                if (done) {
                    highlightCodeStr()
                    return;
                }

                try {
                    let byteArray = new Uint8Array(value);
                    let decoder = new TextDecoder('utf-8');
                    let dstr = decoder.decode(byteArray)
                    if(dstr.includes("role")){
                        parentID_nbai =  /\"parentMessageId\":\"(.*?)\"/gi.exec(dstr)[1]
                    }else{
                        console.log(dstr)
                        result.push(dstr)
                        finalResult = result.join("")
                        showAnserAndHighlightCodeStr(finalResult)
                    }


                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            },(err)=> {
                console.log(err)
            }).catch((ex)=>{
                console.log(ex)
            })
        })

    }


    let gamejx_group_id;
    function setGroupid_gamejx() {

        GM_fetch({
            method: "POST",
            url: "https://chatapi.chat86.cn/go/api/group/add",
            headers: {
                "Referer": `https://chatapi.chat86.cn/`,
                "Content-Type": "application/json",
                "Authorization": "SyLdSbZqeF9ine9qvVlDI+Q0v+456kVjd/5BRZTP5Vo="
            },
            data:JSON.stringify({
                version: "",
                os: "pc",
                language: "zh",
                pars: {
                    user_id: "625292",
                    examples_id: "",
                    examples_describe: "你好"
                }
            })
        }).then((res)=>{
            if(res){
                //{"code":200,"data":{"group_id":1292577},"retCode":"ok","retMsg":"success"}
                console.log(res)
                let data = eval(res.responseText)
                gamejx_group_id = JSON.parse(AES_CBC.decrypt(data.slice(16), data.slice(0, 16))).data.group_id;
                console.log("gamejx_group_id:",gamejx_group_id)
            }
        })

    }


    let is_first_gamejx = true;
    async function GAMEJX(){
        let req1 = await GM_fetch({
            method: "POST",
            url: "https://chatapi.chat86.cn/go/api/steam/see",
            headers: {
                "Referer": `https://chatapi.chat86.cn/`,
                "Content-Type": "application/json",
                "Authorization": "SyLdSbZqeF9ine9qvVlDI+Q0v+456kVjd/5BRZTP5Vo="
            },
            data:JSON.stringify({
                "version": "",
                "os": "pc",
                "language": "zh",
                "pars": {
                    "user_id": "625292",
                    "question": is_first_gamejx ? "你好" : your_qus,
                    "group_id": `${gamejx_group_id}`,
                    "question_id": ""
                }
            })

        })


        console.log(req1.responseText)

        //{"code":200,"data":{"answer":"","question_id":"91303","type":"answer",
        // "user_id":"594578"},"retCode":"ok","retMsg":"success"}
        if(req1.responseText){
            try {
                let data = eval(req1.responseText)
                console.log(JSON.parse(AES_CBC.decrypt(data.slice(16), data.slice(0, 16))))
                let question_id = JSON.parse(AES_CBC.decrypt(data.slice(16), data.slice(0, 16))).data.question_id;
                console.log("question_id:",question_id)
                GM_fetch({
                    method: "GET",
                    url: `https://chatapi.chat86.cn/go/api/event/see?question_id=${question_id}&group_id=${gamejx_group_id}&user_id=625292&token=SyLdSbZqeF9ine9qvVlDI+Q0v+456kVjd/5BRZTP5Vo%3D`,
                    headers: {
                        "Content-Type": "application/json",
                        "Referer": "https://chatapi.chat86.cn/",
                        "accept": "text/event-stream"
                    },
                    responseType: "stream"
                }).then((stream) => {
                    let finalResult = [];
                    const reader = stream.response.getReader();
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            showAnserAndHighlightCodeStr(finalResult.join(""))
                            return;
                        }
                        try {
                            let byteArray = new Uint8Array(value);
                            let decoder = new TextDecoder('utf-8');
                            let nowResult = decoder.decode(byteArray)
                            console.log(nowResult)
                            nowResult.split("\n").forEach(item=>{
                               try {
                                   let chunk = JSON.parse(item.replace(/data:/,"").trim()).Data;
                                   finalResult.push(chunk)
                               }catch (ex){}
                            })
                            showAnserAndHighlightCodeStr(finalResult.join(""))

                        } catch (ex) {
                            console.log(ex)
                        }

                        return reader.read().then(processText);
                    });
                }).catch((ex)=>{
                    console.log(ex)
                })
            }catch (ex){
                console.log(ex)
            }

        }
        if(is_first_gamejx === true){
            is_first_gamejx = false;
            await GAMEJX()
        }


    }


    let bingSocket;
    function initBingSocket() {
        let socket = new WebSocket(`wss://sydney.bing.com/sydney/ChatHub`);

        // 监听连接成功事件

        socket.addEventListener('open', (event) => {
            console.log('initBingSocket 连接成功');
            bingSocket = socket;
            showAnserAndHighlightCodeStr("BingSocket:已连接，请勿重新点击，结果返回较慢请耐心等待，若长时间没反应则不可用。注意：本线路为new bing官网线路。若要使用线路,则需要科学上网和登录微软账号:[BING AI](https://cn.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx)")
        });

        // 监听接收消息事件
        socket.addEventListener('message', (event) => {
            console.log('initBingSocket 接收到消息：', event.data);
            let revData = event.data;
            try{
                let rr = revData.replace(String.fromCharCode(0x1e),"");
                console.log(JSON.parse(rr).arguments[0].messages[0].text)
                showAnserAndHighlightCodeStr(JSON.parse(rr).arguments[0].messages[0].text)

            }catch (e) {

            }

        });
    }

   //setTimeout(initBingSocket,1000)
   let isStartOfSession = true;
   async function newBing() {

       setTimeout(initBingSocket)
       await delay(2000)

        let req1 = await GM_fetch({
            method: "GET",
            url: "https://www.bing.com/turing/conversation/create"
        })
        let r = req1.responseText;
        console.log(r)
        let conversationId = JSON.parse(r).conversationId;
        let clientId = JSON.parse(r).clientId;
        let conversationSignature = JSON.parse(r).conversationSignature;


       if (bingSocket.readyState === 1) {
           // 发送协议和版本号
           const protocol = {protocol: "json", version: 1};
           bingSocket.send(JSON.stringify(protocol) + String.fromCharCode(0x1e));

           await delay(1000)
           // 发送请求类型
           const type = {type: 6};
           bingSocket.send(JSON.stringify(type) + String.fromCharCode(0x1e));

           await delay(500)
           //发送提问
           const msg = {
               "arguments": [{
                   "conversationId": conversationId,
                   "source": "cib",
                   "isStartOfSession": isStartOfSession,
                   "message": {
                       "text": your_qus,
                       "messageType": "Chat"
                   },
                   "conversationSignature": conversationSignature,
                   "participant": {
                       "id": clientId
                   }
               }],
               "invocationId": "1",
               "target": "chat",
               "type": 4
           }

           bingSocket.send(JSON.stringify(msg) + String.fromCharCode(0x1e));
          /* if(isStartOfSession){
               isStartOfSession = false;
           }*/
       }



    }



   function uuidv4() {
       let d = new Date().getTime(); // get current timestamp in ms (to ensure UUID uniqueness)
       let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
           let r = (d + Math.random() * 16) % 16 | 0 // generate random nibble
            d = Math.floor(d / 16) // correspond each UUID digit to unique 4-bit chunks of timestamp
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16) // generate random hexadecimal digit
        })
        return uuid
    }
    //OPENAI 2023年5月12
   let messageChain_openai = [];
   async function OPENAI(){
       addMessageChain(messageChain_openai,{
           "role": "user",
           "id": uuidv4(),
           "content": {
               "content_type": "text",
               "parts": [
                   your_qus
               ]
           }
       },20)
       showAnserAndHighlightCodeStr("此线路为OpenAI官网线路，使用前确定有访问权限且登录账号：[OPENAI官网](https://chat.openai.com/)")
       let req1 = await GM_fetch({
           method: "GET",
           url: "https://chat.openai.com/api/auth/session"
       })
       let r = req1.responseText;
       console.log(r)
       let accessToken;
       try{
           accessToken = JSON.parse(r).accessToken;
       }catch (e) {
           showAnserAndHighlightCodeStr("验证出错,请确认有权限访问OPENAI官网[OPENAI](https://chat.openai.com/)")
       }

       if(!accessToken){
           showAnserAndHighlightCodeStr("验证出错,请确认有权限OPENAI官网[OPENAI](https://chat.openai.com/)")
       }

       let sendData = JSON.stringify({
           action: "next",
           messages: messageChain_openai,
           model: "text-davinci-002-render",
           parent_message_id: uuidv4(),
           max_tokens: 4000
       })
       GM_fetch({
           method: 'POST',
           url: 'https://chat.openai.com/backend-api/conversation',
           headers: {'Content-Type': 'application/json', Authorization: 'Bearer ' + accessToken},
           responseType: "stream",
           data: sendData
       }).then((stream)=> {
           let reader = stream.response.getReader()
           let answer;
           reader.read().then(function processText({done, value}) {
               if (done) {
                   console.log("===done==")
                   addMessageChain(messageChain_openai,{
                       "role": "assistant",
                       "id": uuidv4(),
                       "content": {
                           "content_type": "text",
                           "parts": [
                               answer
                           ]
                       }
                   }, 20)
                   return
               }
               let responseItem = String.fromCharCode(...Array.from(value))
               let items = responseItem.split('\n\n')
               if (items.length > 2) {
                   let lastItem = items.slice(-3, -2)[0]
                   if (lastItem.startsWith('data: [DONE]')) {
                       responseItem = items.slice(-4, -3)[0]
                   } else {
                       responseItem = lastItem
                   }
               }
               if (responseItem.startsWith('data: {')) {
                   answer = JSON.parse(responseItem.slice(6)).message.content.parts[0]
                   showAnserAndHighlightCodeStr(answer)
               } else if (responseItem.startsWith('data: [DONE]')) {

                  // return
               }
               return reader.read().then(processText)
           },function (reason) {
               console.log(reason)
           }).catch((ex)=>{
               console.log(ex)
           })
       })
   }

   let csrfToken;
   async function setCsrfToken(){
       let req1 = await GM_fetch({
           method: "GET",
           url: "https://tongyi.aliyun.com/chat",
           headers: {
               "origin":"https://tongyi.aliyun.com",
               "referer":"https://tongyi.aliyun.com/chat"
           }
       })
       let r = req1.responseText;
       console.log(r);
       try{
           csrfToken =  /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/g.exec(r)[0];
           console.log("csrfToken:",csrfToken)
       }catch (e) {
           showAnserAndHighlightCodeStr("csrfToken获取失败")
       }
    }
   setTimeout(()=>{
       if(getGPTMode()==="TONGYI"){
           setCsrfToken()
       }
   })

    let tongyi_first = true;
    let tongyi_sessionId;
    //通义千问 2023年5月13日
   async function TONGYI(){
        if(tongyi_first){
           let req1 = await GM_fetch({
               method: "POST",
               url: "https://tongyi.aliyun.com/qianwen/addSession",
               headers: {
                   "origin":"https://tongyi.aliyun.com",
                   "referer":"https://tongyi.aliyun.com/chat",
                   "Content-Type": "application/json",
                   "x-xsrf-token": csrfToken
               },
               data:JSON.stringify({
                   "firstQuery": your_qus
               })
           })
           let r = req1.responseText;
           //console.log(r);

           try{
               tongyi_sessionId = JSON.parse(r).data.sessionId;
               tongyi_first = false;
           }catch (e) {
               tongyi_first = true;
               showAnserAndHighlightCodeStr("出错,请确认已登录通义官网[通义](https://tongyi.aliyun.com/chat)")
               setTimeout(setCsrfToken)
           }
       }

       let sendData = JSON.stringify({
           "action": "next",
           "msgId": generateRandomString(32),
           "parentMsgId": "0",
           "contents": [
               {
                   "contentType": "text",
                   "content": your_qus
               }
           ],
           "timeout": 17,
           "openSearch": false,
           "sessionId": tongyi_sessionId,
           "model": ""
       })
       GM_fetch({
           method: 'POST',
           url: 'https://tongyi.aliyun.com/qianwen/conversation',
           headers: {
               "origin":"https://tongyi.aliyun.com",
               "referer":"https://tongyi.aliyun.com/chat",
               "Content-Type": "application/json",
               "accept": "text/event-stream",
               "x-xsrf-token": csrfToken
           },
           responseType: "stream",
           data: sendData
       }).then((stream)=> {
           let reader = stream.response.getReader()
           let answer;
           reader.read().then(function processText({done, value}) {
               if (done) {
                   console.log("===done==")
                   return
               }
               let responseItem = new TextDecoder("utf-8").decode(value)
               //console.log(responseItem)

               responseItem.split("\n").forEach(item=>{
                   try {
                       let content = JSON.parse(item.replace(/data: /gi,"").trim()).content[0];
                       console.log(content)
                       showAnserAndHighlightCodeStr(content)
                   }catch (ex){}
               })

               return reader.read().then(processText)
           },function (reason) {
               console.log(reason)
           }).catch((ex)=>{
               console.log(ex)
           })
       })


  }




    //星火相关====start=====
    let sp_appId;
    let sp_fd = String(+new Date()).slice(-6);//a = (a = String(+new Date)).substring(a.length - 6)
    let sp_chatId;
    let sp_GtToken;

    async function init_sp_appId() {
        //get https://xinghuo.xfyun.cn/chat
        //script defer="defer" src="/static/js/main.04f3ec36.js"></script>
        let req1 = await GM_fetch({
            method: "GET",
            url: "https://xinghuo.xfyun.cn/chat",
            headers: {
                "origin":"https://xinghuo.xfyun.cn",
                "referer":"https://xinghuo.xfyun.cn/"
            }
        })
        let r = req1.responseText;
        //console.log(r);
        let mainjs;

        try{

            mainjs = /src="(\/static\/js\/main.*?.js)"/.exec(r)[1];//https://xinghuo.xfyun.cn/static/js/main.04f3ec36.js
            console.log("mainjs:",mainjs)
        }catch (e) {
            console.error(r)
            showAnserAndHighlightCodeStr("出错了，js获取失败")
        }

        if(mainjs){
            console.log("https://xinghuo.xfyun.cn"+ mainjs.trim())
            let req2 = await GM_fetch({
                method: "GET",
                url: "https://xinghuo.xfyun.cn"+ mainjs.trim(),
                headers: {
                    "origin":"https://xinghuo.xfyun.cn",
                    "referer":"https://xinghuo.xfyun.cn/"
                }
            })
            let rr = req2.responseText;

            console.log(rr.substring(0,100))
            try{
                const re = /appId:"(.*?)"/gi;
                let match;
                while ((match = re.exec(rr)) !== null) {
                    console.log(match[1]);
                    sp_appId = match[1];
                }
                /*let index = rr.indexOf("appId");
                if (index !== -1) {
                    let sp_appId = rr.substring(index, index + 10); // 指定文本
                }*/
                console.log("sp_appId:",sp_appId)
            }catch (e) {
                console.error(e)
                showAnserAndHighlightCodeStr("出错了,sp_appId获取失败",)
            }
        }


    }

    setTimeout(()=>{
        if(getGPTMode()==="SPARK"){
            init_sp_appId()
        }
    })
    async function init_sp_chatId() {
        //https://xinghuo.xfyun.cn/iflygpt/u/chat-list/v1/create-chat-list
        let req1 = await GM_fetch({
            method: "POST",
            url: "https://xinghuo.xfyun.cn/iflygpt/u/chat-list/v1/create-chat-list",
            headers: {
                "accept": "application/json, text/plain, */*",
                "x-requested-with": "XMLHttpRequest",
                "origin":"https://xinghuo.xfyun.cn",
                "Content-Type":"application/json",
                "referer":"https://xinghuo.xfyun.cn/desk"
            },
            data:"{}"
        })
        let r = req1.responseText;
        try{
            sp_chatId = JSON.parse(r).data.id;
            console.log("sp_chatId:",sp_chatId)
        }catch (e) {
            console.error(r)
            showAnserAndHighlightCodeStr("sp_chatId获取失败")
        }



    }

    setTimeout(()=>{
        if(getGPTMode()==="SPARK"){
            init_sp_chatId()
        }
    },500)

    async function get_sp_GtToken() {
        return new Promise(async (resolve, reject) => {

            //https://riskct.geetest.com/g2/api/v1/pre_load?client_type=h5&callback=geetest_时间戳
            let timestamp = Date.now();
            let req1 = await GM_fetch({
                method: "GET",
                url: `https://riskct.geetest.com/g2/api/v1/pre_load?client_type=h5&callback=geetest_${timestamp}`,
                headers: {
                    "accept": "*/*",
                    "referer": "https://xinghuo.xfyun.cn/"
                }
            })
            let r = req1.responseText;
            console.log(r);
            try {
                let rr = r.replace(`geetest_${timestamp}(`,
                    "");
                rr = rr.substring(0, rr.length - 1)
                console.log("rr", rr)
                let rj = JSON.parse(rr);
                console.log("rj:");
                console.log(rj);

                //====
                let config = {
                    appId: sp_appId,
                    js: rj.data.js,
                    staticPath: rj.data.staticPath,
                    gToken: rj.data.gToken
                }
                console.log("config")
                console.log(config)
                setTimeout(() => {
                    initGeeGuard(config, (gd) => {
                        console.log(gd)
                        if (gd.data.gee_token) {
                            sp_GtToken = gd.data.gee_token;
                            resolve(sp_GtToken)
                        }else{
                            reject("出错")
                        }
                    })
                }, 500)


            } catch (e) {
                console.error(e)
                setTimeout(init_sp_chatId)
                reject("出错")
            }
        })

    }


    //解码
    function decodeSpark(src) {
       /*let rv = function(e) {
            return e.replace(/[^A-Za-z0-9\+\/]/g, "")
        }*/

        let dv =  function(e) {
                //return Buffer.from(e, "base64").toString("utf8")
            // 将 base64 编码的字符串转换为字节数组
            const bytes = CryptoJS.enc.Base64.parse(e);
            // 将字节数组转换为 UTF-8 字符串
            return bytes.toString(CryptoJS.enc.Utf8);
        }//等价BASE64解码 6KaB

         /*let  fv = function(e) {
                return dv(function(e) {
                    return rv(e.replace(/[-_]/g, (function(e) {
                            return "-" == e ? "+" : "/"
                        }
                    )))
                }(e))
         };*/
       return dv(src);
    }



    let spark_first = true;
    async function SPARK(){
        showAnserAndHighlightCodeStr("请稍后,第一次切换到该线路需要刷新页面，该线路为官网线路,使用前确保已经登录[讯飞星火](https://xinghuo.xfyun.cn/)")
        await get_sp_GtToken()
        console.log("sp_GtToken",sp_GtToken)
        //重命名
        if(spark_first){
           let req1 = await GM_fetch({
                method: "POST",
                url: "https://xinghuo.xfyun.cn/iflygpt/u/chat-list/v1/rename-chat-list",
                headers: {
                    "accept": "application/json, text/plain, */*",
                    "x-requested-with": "XMLHttpRequest",
                    "origin":"https://xinghuo.xfyun.cn",
                    "Content-Type":"application/json",
                    "referer":"https://xinghuo.xfyun.cn/desk"
                },
                data:JSON.stringify({
                    "chatListId": sp_chatId,
                    "chatListName": your_qus
                })
            })
            let r = req1.responseText;
            console.log("rename chat:",r)
            spark_first = false;
        }

        //提问

        let sendData = `------WebKitFormBoundaryAS7tSr3osJng5Nxk\r\nContent-Disposition: form-data; name=\"fd\"\r\n\r\n${sp_fd}\r\n------WebKitFormBoundaryAS7tSr3osJng5Nxk\r\nContent-Disposition: form-data; name=\"clientType\"\r\n\r\n2\r\n------WebKitFormBoundaryAS7tSr3osJng5Nxk\r\nContent-Disposition: form-data; name=\"chatId\"\r\n\r\n${sp_chatId}\r\n------WebKitFormBoundaryAS7tSr3osJng5Nxk\r\nContent-Disposition: form-data; name=\"text\"\r\n\r\n${your_qus}\r\n------WebKitFormBoundaryAS7tSr3osJng5Nxk\r\nContent-Disposition: form-data; name=\"GtToken\"\r\n\r\n${sp_GtToken}\r\n------WebKitFormBoundaryAS7tSr3osJng5Nxk--\r\n`;
        GM_fetch({
            method: 'POST',
            url: 'https://xinghuo.xfyun.cn/iflygpt-chat/u/chat_message/chat',
            headers: {
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryAS7tSr3osJng5Nxk",
                "challenge": "undefined",
                "seccode": "",
                "validate": "undefined",
                "accept": "text/event-stream",
                "x-requested-with": "XMLHttpRequest",
                "origin":"https://xinghuo.xfyun.cn",
                "referer":"https://xinghuo.xfyun.cn/desk"
            },
            responseType: "stream",
            data: sendData
        }).then((stream)=> {
            let reader = stream.response.getReader()
            let ans = []
            //let de = []
            reader.read().then(function processText({done, value}) {
                if (done) {
                    console.log("===done==")
                    //console.log(de)
                    return
                }
                let responseItem = new TextDecoder("utf-8").decode(value)
                console.log(responseItem)

                responseItem.split("\n").forEach(item=>{
                    try {
                        let ii = item.replace(/data:/gi,"").trim();
                        if(ii && ii !==""){
                            let chunk = decodeSpark(ii)
                            //de.push(item.replace(/data:/gi,"").trim())
                            ans.push(chunk)
                            showAnserAndHighlightCodeStr(ans.join(""))
                        }
                    }catch (ex){
                        console.error(item)
                    }
                })

                return reader.read().then(processText)
            },function (reason) {
                console.log(reason)
            }).catch((ex)=>{
                console.log(ex)
            })
        })


    }

    //星火相关====end=====



    //天工 ----start--------

    let tg_invite_Token;
    let tg_token;
    async function initTGtoken() {
        if (location.href.includes("neice.tiangong.cn")) {
            //"invite-token": "Bearer " + c("formNatureQueueWaitToken"),
            tg_invite_Token = localStorage.getItem("formNatureQueueWaitToken");
            //token: "Bearer " + c("formNatureResearchToken"),
            tg_token = localStorage.getItem("formNatureResearchToken");
            GM_setValue("tg_invite_Token", tg_invite_Token)
            GM_setValue("tg_token", tg_token)
            if(tg_invite_Token){
                document.querySelector('div[class="title"]').innerText = `invite_Token获取成功:${tg_invite_Token}`
            }else{
                document.querySelector('div[class="title"]').innerText = `invite_Token获取失败，请再次刷新`
            }
            setTimeout(initTGtoken,5000)
        } else {
            tg_invite_Token = GM_getValue("tg_invite_Token")
            tg_token = GM_getValue("tg_token")
        }
    }

    setTimeout(initTGtoken)


    //过时 {"code":60101,"code_msg":"当前使用授权已失效，请重新排队"}
    //resp_data.invite_token
    async function waitAccess() {
        let req1 = await GM_fetch({
            method: "POST",
            url: "https://neice.tiangong.cn/api/v1/queue/waitAccess",
            headers: {
                "accept": "application/json, text/plain, */*",
                "origin":"https://neice.tiangong.cn",
                "invite-token": `Bearer null`,
                "Content-Type":"application/json",
                "token": `Bearer ${tg_token}`,
                "device": "Web",
                "referer":"https://neice.tiangong.cn/interlocutionPage"
            },
            data:JSON.stringify({
                data:{
                    token: ""
                }
            })
        })
        let r = req1.responseText;
        console.log(r)
        return new Promise((resolve, reject) => {
            try {
                tg_invite_Token = JSON.parse(r).resp_data.invite_token;
                GM_setValue("waitAccess tg_invite_Token",tg_invite_Token)
                resolve("更新成功，请再次点击")
            }catch (e) {
                resolve("waitAccess 异常 请到官网获取token后刷新页面。[天工AI](https://neice.tiangong.cn/interlocutionPage)")
            }
        })
    }


    let tg_session_id;
    let tg_msg_id;
    let tg_first = true;
    async function TIANGONG(){
        showAnserAndHighlightCodeStr("请稍后...使用该线路，请确保已经登天工官网获取token后刷新页面。[天工AI](https://neice.tiangong.cn/interlocutionPage)")
        console.log("tg_token:",tg_token)
        console.log("tg_invite_Token:",tg_invite_Token)
        if(!tg_invite_Token || !tg_token){
            showAnserAndHighlightCodeStr("token错误了。请确保已经登天工官网获取token后刷新页面。[天工AI](https://neice.tiangong.cn/interlocutionPage)")
            return
        }

        //校验
        let req1 = await GM_fetch({
            method: "POST",
            url: "https://neice.tiangong.cn/api/v1/user/inviteVerify",
            headers: {
                "accept": "application/json, text/plain, */*",
                "origin":"https://neice.tiangong.cn",
                "invite-token": `Bearer ${tg_invite_Token}`,
                "Content-Type":"application/json",
                "token": `Bearer ${tg_token}`,
                "device": "Web",
                "referer":"https://neice.tiangong.cn/interlocutionPage"
            },
            data:JSON.stringify({
                data:{}
            })
        })
        let r = req1.responseText;
        console.log(r)
        if(r.includes("请重新排队")){
            showAnserAndHighlightCodeStr("invite_Token失效。请至官网获取token后刷新页面。[天工AI](https://neice.tiangong.cn/interlocutionPage)")
/*            let result = await waitAccess();
            showAnserAndHighlightCodeStr(result)*/
            initTGtoken()
            return
        }

        //新会话
        if(!tg_session_id || tg_first){
            console.log("新会话")
            let req1 = await GM_fetch({
                method: "POST",
                url: "https://neice.tiangong.cn/api/v1/session/newSession",
                headers: {
                    "accept": "application/json, text/plain, */*",
                    "origin":"https://neice.tiangong.cn",
                    "invite-token": `Bearer ${tg_invite_Token}`,
                    "Content-Type":"application/json",
                    "token": `Bearer ${tg_token}`,
                    "device": "Web",
                    "referer":"https://neice.tiangong.cn/interlocutionPage"
                },
                data:JSON.stringify({
                    data:{
                        content: your_qus
                    }
                })
            })
            let r = req1.responseText;
            console.log(r)
            let rj = JSON.parse(r);
            tg_session_id = rj.resp_data.session_id
            tg_msg_id = rj.resp_data.dialogue[rj.resp_data.dialogue.length - 1].message_id
            console.log("tg_session_id:",tg_session_id)
            console.log("tg_msg_idg:",tg_msg_id)
            tg_first = false;
        }else {
            console.log("旧会话")
            let req1 = await GM_fetch({
                method: "POST",
                url: "https://neice.tiangong.cn/api/v1/chat/chat",
                headers: {
                    "accept": "application/json, text/plain, */*",
                    "origin":"https://neice.tiangong.cn",
                    "invite-token": `Bearer ${tg_invite_Token}`,
                    "Content-Type":"application/json",
                    "token": `Bearer ${tg_token}`,
                    "device": "Web",
                    "referer":"https://neice.tiangong.cn/interlocutionPage"
                },
                data:JSON.stringify({
                    data:{
                        content: your_qus,
                        session_id: tg_session_id
                    }
                })
            })
            let r = req1.responseText;
            console.log(r)
            let rj = JSON.parse(r);
            tg_msg_id = rj.resp_data.result_message.message_id
            console.log("tg_msg_idg:",tg_msg_id)
        }



        //获取信息信息
        for (let i = 0; i < 60; i++) {
            let req2 = await GM_fetch({
                method: "POST",
                timeout: 3000,
                url: "https://neice.tiangong.cn/api/v1/chat/getMessage",
                headers: {
                    "accept": "application/json, text/plain, */*",
                    "origin":"https://neice.tiangong.cn",
                    "invite-token": `Bearer ${tg_invite_Token}`,
                    "Content-Type":"application/json",
                    "token": `Bearer ${tg_token}`,
                    "device": "Web",
                    "referer":"https://neice.tiangong.cn/interlocutionPage"
                },
                data:JSON.stringify({
                    "data": {
                        "message_id": tg_msg_id
                    }
                })
            })
            let rr = req2.responseText;
            console.log(rr)
            let rj = JSON.parse(rr);
            try {
                if(rj.resp_data.result_message.content){
                    showAnserAndHighlightCodeStr(rj.resp_data.result_message.content)
                }
                if(rj.resp_data.result_message.status === 3){
                    break;
                }

            }catch (e) {}
            await delay(1000)

        }


    }


    //天工 ----end--------



    //问心一言 ----start---

    let yy_aisearch_id;
    let yy_pvId;
    let yy_sessionId;

    async function initYiYAN(){
        let req1 = await GM_fetch({
            method: "GET",
            url: `https://chat.baidu.com/?pcasync=pc&asyncRenderUrl=&passportStaticPage=https%3A%2F%2Fwww.baidu.com%2Fcache%2Fuser%2Fhtml%2Fv3Jump.html&from=pc_tab&word=${encodeURI(your_qus)}&source=pd_ic`,
            headers: {
                "accept": "*/*",
                "origin":"https://www.baidu.com",
                "referer":`https://www.baidu.com/`
            },
            data:JSON.stringify({
                data:{}
            })
        })
        let r = req1.responseText;
        yy_aisearch_id =  /"aisearch_id":"(.*?)"/i.exec(r)[1];
        yy_pvId =  /"pvId":"(.*?)"/i.exec(r)[1];
        yy_sessionId =  /"sessionId":"(.*?)"/i.exec(r)[1];
        console.log("yy_aisearch_id:",yy_aisearch_id)
        console.log("yy_pvId:",yy_pvId)
        console.log("yy_sessionId:",yy_sessionId)
    }
    setTimeout(()=>{
        if(getGPTMode() === 'YIYAN'){
            initYiYAN()
        }
    })
    async function YIYAN() {
        showAnserAndHighlightCodeStr("请稍后...该线路为官网线路，使用该线路，请确保已经登百度账号，再刷新页面。[百度](https://www.baidu.com/)")
        GM_fetch({
            method: 'POST',
            url: 'https://chat-ws.baidu.com/aichat/api/conversation',
            headers: {
                "origin":"https://www.baidu.com",
                "referer":`https://www.baidu.com/`,
                "Content-Type": "application/json",
                "accept": "text/event-stream"
            },
            responseType: "stream",
            data: JSON.stringify({
                "message": {
                    "inputMethod": "keyboard",
                    "isRebuild": false,
                    "content": {
                        "query": your_qus,
                        "qtype": 0
                    }
                },
                "sessionId": yy_sessionId,
                "aisearchId": yy_aisearch_id,
                "pvId": yy_pvId
            })
        }).then((stream)=> {
            let reader = stream.response.getReader()
            let ans = []
            let preResponseItem = '';//前一记录
            let combineItem = [];//合并
            let referenceList;//引用
            reader.read().then(function processText({done, value}) {
                if (done) {
                    console.log("===done==")
                    //console.log(de)
                    let result = ans.join("");
                    let arr = result.match(/\^(.*?)\^/g);
                    let oldArr = arr.slice()
                    if(referenceList && referenceList.length > 0){
                        for (let i = 0; i < arr.length; i++) {
                            for (let j = 0; j < referenceList.length; j++) {
                                if(arr[i].includes(`[${j+1}]`)){
                                    let url = referenceList[j].url;
                                    arr[i] = arr[i].replace(`[${j+1}]`,`[${j+1}](${url})`)
                                }
                            }
                        }
                    }
                    console.log("arr:",arr)
                    console.log("oldArr:",oldArr)
                    for (let i = 0; i < oldArr.length; i++) {
                        result =  result.replace(oldArr[i],arr[i].replace(/\^/g,""))
                    }
                    showAnserAndHighlightCodeStr(result)

                    return
                }
                let responseItem = new TextDecoder("utf-8").decode(value)
                console.log(responseItem)
                if(!responseItem.includes("event:ping") && !responseItem.startsWith("event:messag")){
                    combineItem.push(preResponseItem)
                    combineItem.push(responseItem)
                    preResponseItem = '';//恢复初始
                    responseItem = combineItem.join("")//合并
                    console.log("combineItem:",responseItem)
                    combineItem = [];//清空

                }else if(!responseItem.includes("event:ping")){
                    preResponseItem = responseItem;
                }


                responseItem.split("\n").forEach(item=>{
                    try {
                        let ii = item.replace(/data:/gi,"").trim();
                        if(ii && ii !==""){
                            let chunk = JSON.parse(ii).data.message.content.generator.text
                            //de.push(item.replace(/data:/gi,"").trim())
                            ans.push(chunk)
                            showAnserAndHighlightCodeStr(ans.join(""))
                            if(JSON.parse(ii).data.message.content.generator.referenceList){
                                referenceList = JSON.parse(ii).data.message.content.generator.referenceList
                            }

                        }
                    }catch (ex){
                        console.error(item)
                    }
                })

                return reader.read().then(processText)
            },function (reason) {
                console.log(reason)
            }).catch((ex)=>{
                console.log(ex)
            })
        })

    }
    //问心一言 ----end---


    let pizzaSecret;
    async function setPizzakey() {
        try {

            let source = await GM_fetch({
                method: "GET",
                nocache: true,
                url: "https://www.pizzagpt.it/",
                headers: {
                    "Referer": `www.pizzagpt.it`
                }
            })
            console.log(source)
            let reqJS = source.responseText.match("index.*?\.js")[0];

            GM_fetch({
                method: "GET",
                nocache: true,
                synchronous: true,
                url: "https://www.pizzagpt.it/_nuxt/" + reqJS.trim(),
                headers: {
                    //"Content-Type": "application/json",
                    "Referer": `www.pizzagpt.it`
                }
            }).then((response)=> {
                let resp = response.responseText;
                pizzaSecret = resp.match("x=\"(.*?)\"")[1]
                console.log("pizzaSecret:", pizzaSecret)
            }).catch((e) => {
                console.log(e)
            })
        } catch (e) {
            console.log(e)
        }

    }
    setTimeout(setPizzakey);

    function PIZZA() {
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://www.pizzagpt.it/api/chat-completion",
            headers: {
                "Content-Type": "text/plain;charset=UTF-8",
                "Referer": `https://www.pizzagpt.it/`
            },
            data: JSON.stringify({
                question: your_qus,
                secret: pizzaSecret
            }),
            onload: function (res) {
                if (res.status === 200) {
                    console.log('成功....')
                    console.log(res)
                    let rest = res.responseText
                    //console.log(rest.choices[0].text.replaceAll("\n","</br>"))

                    try {
                        showAnserAndHighlightCodeStr(JSON.parse(rest).answer.content)
                    } catch (e) {
                        //TODO handle the exception
                        console.log(e)
                        document.getElementById('gptAnswer').innerHTML = rest
                    }

                } else {
                    console.log('失败')
                    console.log(res)
                    document.getElementById('gptAnswer').innerHTML = '访问失败了'
                }
            },

            responseType: "text",
            onerror: function (err) {
                console.error(err)
                showAnserAndHighlightCodeStr("出错，[访问](https://www.pizzagpt.it/)")
            }
        });
    }



    function PHIND() {


        GM_xmlhttpRequest({
            method: "POST",
            url: "https://www.phind.com/api/web/search",
            headers: {
                "Content-Type": "application/json",
                "Referer": `https://www.phind.com`
            },
            data: JSON.stringify({
                "q": your_qus,
                "userRankList": {},
                "browserLanguage": "zh-CN"
            }),
            onload: function (res) {
                if (res.status === 200) {
                    console.log('成功....')
                    console.log(res)
                    let rest = res.responseText
                    //console.log(rest.choices[0].text.replaceAll("\n","</br>"))
                    let rjson = JSON.parse(rest);
                    let _bingResults = rjson.processedBingResults;
                    console.log(_bingResults)

                    GM_xmlhttpRequest({
                        method: "POST",
                        url: "https://www.phind.com/api/infer/answer",
                        headers: {
                            "Content-Type": "application/json",
                            "Referer": "https://www.phind.com/",
                            "accept": "*/*"
                        },
                        data: JSON.stringify({
                            "question": your_qus,
                            "bingResults": _bingResults,
                            "codeContext": "",
                            "options": {
                                "skill": "intermediate",
                                "date": formatTime(),
                                "language": "zh-CN",
                                "detailed": true,
                                "creative": false
                            }
                        }),
                        onloadstart: (stream) => {
                            let result = [];
                            const reader = stream.response.getReader();
                            reader.read().then(function processText({done, value}) {
                                if (done) {
                                    let finalResult = result.join("")
                                    try {
                                        console.log(finalResult)
                                        showAnserAndHighlightCodeStr(finalResult)
                                    } catch (e) {
                                        console.log(e)
                                    }
                                    return;
                                }
                                try {
                                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                                    console.log(d)
                                    let dd = d.replace(/data: /g, "").split("\r\n\r\n")
                                    console.log("dd:",dd)
                                    dd.forEach(item=>{
                                        try {
                                            result.push(item)
                                            showAnserAndHighlightCodeStr(result.join(""))
                                        }catch (e) {

                                        }
                                    })

                                } catch (e) {
                                    console.log(e)
                                }

                                return reader.read().then(processText);
                            });
                        },
                        responseType: "stream",
                        onprogress: function (msg) {
                            //console.log(msg)
                        },
                        onerror: function (err) {
                            console.log(err)
                        },
                        ontimeout: function (err) {
                            console.log(err)
                        }
                    });


                } else {
                    console.log('失败')
                    console.log(res)
                    showAnserAndHighlightCodeStr('访问失败了,[phind](https://www.phind.com/api/web/search)')
                }
            },

            responseType: "application/json;charset=UTF-8",
            onerror: function (err) {
                document.getElementById('gptAnswer').innerHTML =
                    `<div>some err happends,errinfo :<br>${err.messages}</div>`
            }
        });




    }




    function WOBCW() {
        GM_xmlhttpRequest({
            url: "https://chat.wobcw.com/chat",
            headers: {
                "accept": "*/*",
                "referrer": "https://chat.wobcw.com/",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundarybrMK1QixymFcNJzK"
            },
            data: `------WebKitFormBoundarybrMK1QixymFcNJzK\r\nContent-Disposition: form-data; name=\"prompt\"\r\n\r\n${your_qus}\r\n------WebKitFormBoundarybrMK1QixymFcNJzK\r\nContent-Disposition: form-data; name=\"regen\"\r\n\r\nfalse\r\n------WebKitFormBoundarybrMK1QixymFcNJzK--\r\n`,
            method: "POST",
            onload: (resp) => {
                let rs = resp.responseText;
                console.log(rs)
                let chat_id = JSON.parse(rs).chat_id;
                console.log(chat_id)
                abortXml = GM_xmlhttpRequest({
                    method: "GET",
                    url: `https://chat.wobcw.com/stream?chat_id=${chat_id}&api_key=`,
                    headers: {
                        "Content-Type": "application/json",
                        // "Authorization": "Bearer null",
                        "Referer": "https://chat.wobcw.com/",
                        //"Host":"www.aiai.zone",
                        "accept": "text/event-stream"
                    },
                    onloadstart: (stream) => {
                        let result = [];
                        let finalResult = [];
                        const reader = stream.response.getReader();
                        reader.read().then(function processText({done, value}) {
                            if (done) {
                                finalResult = result.join("")
                                showAnserAndHighlightCodeStr(finalResult)
                                return;
                            }

                            try {

                                let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                                console.log("raw:",d)
                                let dd = d.replace(/data: /g, "").split("\n\n")
                                console.log("dd:",dd)
                                dd.forEach(item=>{
                                    try {
                                        let delta = JSON.parse(item).choices[0].delta.content
                                        result.push(delta)
                                        showAnserAndHighlightCodeStr(result.join(""))
                                    }catch (e) {

                                    }
                                })
                            } catch (e) {
                                console.log(e)
                            }

                            return reader.read().then(processText);
                        });
                    },
                    responseType: "stream",
                    onerror: function (err) {
                        console.log(err)
                        showAnserAndHighlightCodeStr("erro:", err)
                    }
                })
            }//end onload
        })


    }


    let parentID_tianhu;
    let tianhu_first = true;

    function AITIANHU() {
        let ops = {};
        if (parentID_tianhu) {
            ops = {parentMessageId: parentID_tianhu};
        }
        console.log(ops)

        if (tianhu_first) {
            GM_xmlhttpRequest({
                method: "POST",
                synchronous: true,
                url: "https://www.aitianhu.com/api/session",
                headers: {
                    "Content-Type": "application/json",
                    "Referer": "https://www.aitianhu.com/",
                    "origin": "https://www.aitianhu.com",
                    "accept": "application/json, text/plain, */*"
                },
                onload: function (res) {
                    console.log(res)
                }
            })
            tianhu_first = false;
        }

        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://www.aitianhu.com/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://www.aitianhu.com/",
                "origin": "https://www.aitianhu.com",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                top_p: 1,
                prompt: your_qus,
                systemMessage: "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
                temperature: 0.8,
                options: ops
            }),
            onloadstart: (stream) => {
                let result = "";
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                let finalResult;
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        highlightCodeStr()
                        return;
                    }

                    const chunk = value;
                    result += chunk;
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(chunk);
                        let decoder = new TextDecoder('utf-8');
                        console.log(decoder.decode(byteArray))
                        let jsonLines = decoder.decode(byteArray).split("\n");
                        let nowResult = JSON.parse(jsonLines[jsonLines.length - 1])

                        if (nowResult.text) {
                            console.log(nowResult)
                            finalResult = nowResult.text
                            showAnserAndHighlightCodeStr(finalResult)
                        }
                        if (nowResult.id) {
                            parentID_tianhu = nowResult.id;
                        }

                    } catch (e) {

                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                showAnserAndHighlightCodeStr("erro:", err)
            }
        })

    }





    let parentID_anzz;

    function authAnzz(){
        console.log("authANZZ")
        GM_fetch({
            method: "POST",
            url: "https://free.anzz.top/api/session",
            headers: {
                "Content-Type": "application/json",
                "Referer": `https://free.anzz.top/`
            },
            data: JSON.stringify({})
        }).then((res)=>{
            console.log(res)
        }).catch((ex)=>{
            console.log(ex)
        })
    }
    setTimeout(authAnzz);
    function ANZZ() {
        let ops = {};
        if (parentID_anzz) {
            ops = {parentMessageId: parentID_anzz};
        }
        console.log(ops)


        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://free.anzz.top/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://free.anzz.top/",
                "origin": "https://free.anzz.top",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                top_p: 1,
                prompt: your_qus,
                systemMessage: "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
                temperature: 0.8,
                options: ops
            }),
            onloadstart: (stream) => {
                let result = "";
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                let finalResult;
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        highlightCodeStr()
                        return;
                    }

                    const chunk = value;
                    result += chunk;
                    try {

                        let byteArray = new Uint8Array(chunk);
                        let decoder = new TextDecoder('utf-8');
                        console.log(decoder.decode(byteArray))
                        let nowResult = JSON.parse(decoder.decode(byteArray))

                        if (nowResult.text) {
                            console.log(nowResult)
                            finalResult = nowResult.text
                            showAnserAndHighlightCodeStr(finalResult.replace(/hello-ai.anzz.top/gi,""))
                        }
                        if (nowResult.id) {
                            parentID_anzz = nowResult.id;
                        }

                    } catch (e) {
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                showAnserAndHighlightCodeStr("erro:", err)
            }
        })

    }

    let parentID_hhw;
    function HEHANWANG() {
        let ops = {};
        if (parentID_hhw) {
            ops = {parentMessageId: parentID_hhw};
        }
        console.log(ops)
        GM_fetch({
            method: "POST",
            url: "https://chat1.hehanwang.com/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://chat1.hehanwang.com/",
                "Authorization": "Bearer 293426",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                top_p: 1,
                prompt: your_qus,
                systemMessage: "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
                temperature: 0.8,
                options: ops
            }),
            responseType: "stream"
        }).then((stream) => {
            let result = "";
            const reader = stream.response.getReader();
            //     console.log(reader.read)
            let finalResult;
            reader.read().then(function processText({done, value}) {
                if (done) {
                    highlightCodeStr()
                    return;
                }

                const chunk = value;
                result += chunk;
                try {
                    // console.log(normalArray)
                    let byteArray = new Uint8Array(chunk);
                    let decoder = new TextDecoder('utf-8');
                    console.log(decoder.decode(byteArray))
                    let jsonLines = decoder.decode(byteArray).split("\n");
                    let nowResult = JSON.parse(jsonLines[jsonLines.length - 1])

                    if (nowResult.text) {
                        console.log(nowResult)
                        finalResult = nowResult.text
                        showAnserAndHighlightCodeStr(finalResult)
                    }
                    if (nowResult.id) {
                        parentID_hhw = nowResult.id;
                    }

                } catch (e) {

                }

                return reader.read().then(processText);
            });
        },(reason)=>{
            console.log(reason)
        }).catch((ex)=>{
            console.log(ex)
        });

    }



    let messageChain7 = [];//CHATDDD
    function CHATDDD() {

        let baseURL = "https://chatgptdddd.com/";
        addMessageChain(messageChain7, {role: "user", content: your_qus})//连续话
        GM_fetch({
            method: "POST",
            url: baseURL + "api/chat",
            headers: {
                "Content-Type": "application/json",
                "Referer": baseURL
            },
            data: JSON.stringify({
                messages: messageChain7,
                model: {
                    "id": "gpt-3.5-turbo",
                    "name": "GPT-3.5",
                    "maxLength": 12000,
                    "tokenLimit": 4000
                },
                temperature: 1,
                prompt: "你是 ChatGPT，一个由 OpenAI 训练的大型语言模型。你可以回答各种问题，帮助人们解决问题。 please think in english and answer by chinese",
                key: null
            }),
            responseType: "stream"
        }).then((stream) => {
            let result = [];
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    let finalResult = result.join("")
                    try {
                        console.log(finalResult)
                        addMessageChain(messageChain7, {
                            role: "assistant",
                            content: finalResult
                        })
                        showAnserAndHighlightCodeStr(finalResult)
                    } catch (e) {
                        console.log(e)
                    }
                    return;
                }
                try {
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    result.push(d)
                    showAnserAndHighlightCodeStr(result.join(""))
                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            },function (reason) {
                console.log(reason)
            }).catch((ex)=>{
                console.log(ex)
            });
        });

    }

    //https://gpt.esojourn.org/api/chat-stream https://0505.betai55.uk/api/chat-stream
    function ESO() {

        let baseURL = "https://gpt.esojourn.org/";
        addMessageChain(messageChain4, {role: "user", content: your_qus})//连续话
        GM_xmlhttpRequest({
            method: "POST",
            url: baseURL + "api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "access-code": "586-481-535C",
                "path": "v1/chat/completions",
                "Referer": baseURL
            },
            data: JSON.stringify({
                messages: messageChain4,
                stream: true,
                model: "gpt-3.5-turbo",
                temperature: 1,
                max_tokens: 2000,
                presence_penalty: 0
            }),
            onloadstart: (stream) => {
                let result = [];
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            addMessageChain(messageChain4, {
                                role: "assistant",
                                content: finalResult
                            })
                            showAnserAndHighlightCodeStr(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        showAnserAndHighlightCodeStr(result.join(""))
                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
            }
        });

    }

    function XCBL() {
        //同LBB
        let baseURL = "https://52221239187007.ai003.live/";
        addMessageChain(messageChain5, {role: "user", content: your_qus})//连续话
        GM_fetch({
            method: "POST",
            url: baseURL + "api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "path": "v1/chat/completions",
                "Referer": baseURL,
                "origin": "https://52221239187007.ai003.live"
            },
            data: JSON.stringify({
                messages: messageChain5,
                stream: true,
                model: "gpt-3.5-turbo",
                temperature: 1,
                presence_penalty: 0
            }),
            responseType: "stream"
        }).then((stream) => {
            let result = [];
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    let finalResult = result.join("")
                    try {
                        console.log(finalResult)
                        addMessageChain(messageChain5, {
                            role: "assistant",
                            content: finalResult
                        })
                        showAnserAndHighlightCodeStr(finalResult)
                    } catch (e) {
                        console.log(e)
                    }
                    return;
                }
                try {
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    result.push(d)
                    showAnserAndHighlightCodeStr(result.join(""))
                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });
        },function (err) {
            console.log(err)
        }).catch((ex)=>{
            console.log(ex)
        })

    }

    //https://ai1.chagpt.fun/
    function CVEOY() {

        let baseURL = "https://free-api.cveoy.top/";
        GM_xmlhttpRequest({
            method: "POST",
            url: baseURL + "v3/completions",
            headers: {
                "Content-Type": "application/json",
                "origin": "https://ai1.chagpt.fun",
                "Referer": baseURL
            },
            data: JSON.stringify({
                prompt: your_qus
            }),
            onloadstart: (stream) => {
                let result = [];
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {

                        try {
                            let finalResult = result.join("")
                            console.log(finalResult)
                            showAnserAndHighlightCodeStr(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        if(d.match(/wxgpt@qq.com/gi)){
                           d = d.replace(/wxgpt@qq.com/gi,"")
                        }
                        result.push(d);
                        console.log(d)
                        showAnserAndHighlightCodeStr(result.join(""))
                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
            }
        });

    }


    let parentID_extkj;

    function EXTKJ() {
        let ops = {};
        if (parentID_extkj) {
            ops = {parentMessageId: parentID_extkj};
        }
        console.log(ops)
        let pt = CryptoJS.AES.encrypt(JSON.stringify(your_qus), "__CRYPTO_SECRET__I>EO)$__M*&.fsee").toString()
        console.log("aes:" + pt)
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://chat.extkj.cn/api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://chat.extkj.cn/",
                "origin": "https://chat.extkj.cn",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: pt,
                options: ops,
                systemMessage: `You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.`
            }),
            onloadstart: (stream) => {
                let result = "";
                const reader = stream.response.getReader();
                let finalResult = [];
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        highlightCodeStr()
                        return;
                    }

                    const chunk = value;
                    result += chunk;
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(chunk);
                        let decoder = new TextDecoder('utf-8');
                        console.log(decoder.decode(byteArray))
                        let nowResult = decoder.decode(byteArray)

                        if (nowResult) {
                            let jsonLine = nowResult.split("\n");
                            let jsonObj = JSON.parse(jsonLine[jsonLine.length - 1]);
                            finalResult = jsonObj.text;
                            if (jsonObj.id) {
                                parentID_extkj = jsonObj.id;
                            }
                            showAnserAndHighlightCodeStr(finalResult)
                        }

                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
            }
        })
    }


    //4-25
    function LBB() {
        let baseURL = "https://43207713129.ai006.live/";
        addMessageChain(messageChain8, {role: "user", content: your_qus})//连续话
        GM_fetch({
            method: "POST",
            url: baseURL + "api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "path": "v1/chat/completions",
                "Referer": baseURL
            },
            data: JSON.stringify({
                messages: messageChain8,
                stream: true,
                model: "gpt-3.5-turbo",
                temperature: 1,
                presence_penalty: 0
            })
        }).then((res)=>{
            if (res.status === 200) {
                console.log(res)
                let rest = res.responseText
                try {
                    addMessageChain(messageChain8, {
                        role: "assistant",
                        content: rest
                    })
                    showAnserAndHighlightCodeStr(rest);

                } catch (ex) {
                    console.log(ex)
                    showAnserAndHighlightCodeStr(rest);
                }

            } else {
                showAnserAndHighlightCodeStr('访问失败了');
            }
        },reason => {
            console.log(reason)
        }).catch((ex)=>{
            console.log(ex)
        })

    }


    // http://easyai.one
    let sessionId_easyai = generateRandomString(20);
    let easyai_ip = generateRandomIP();
    function EASYAI() {
        console.log(sessionId_easyai)
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: `https://ai.pp2pdf.com/easyapi/v1/chat/completions?message=${encodeURI(your_qus)}&sessionId=${sessionId_easyai}`,
            headers: {
                "Referer": "https://ai.pp2pdf.com/chat",
                "X-Forwarded-For": easyai_ip,
                "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcGVuSWQiOiJvUElXOTV6bmJhTnlKa3RUalgza3BBcy1EOFJBIiwiZXhwIjoxNjg0MTM4MTI4LCJ1c2VySWQiOjEzNTV9.PdO-9ozH4aixDYifAt4hnSMkb8WfZmcHw-dZY_1eQ8g",
                "accept": "text/event-stream"
            },
            onloadstart: (stream) => {
                let finalResult = []
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        showAnserAndHighlightCodeStr(finalResult.join(""))
                        return;
                    }
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(value);
                        let decoder = new TextDecoder('utf-8');
                        console.log(decoder.decode(byteArray))
                        let regx = /\{\"content\":\"(.*?)\"\}/g;
                        let nowResult = regx.exec(decoder.decode(byteArray))[1]
                        console.log(nowResult)
                        finalResult.push(nowResult)
                        showAnserAndHighlightCodeStr(finalResult.join(""))


                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                showAnserAndHighlightCodeStr("erro:", err)
            }
        })

    }




    //获取A类网站key 2023年5月3日
    async function setNormalKey(url) {
       let response = await GM_fetch({
            method: "GET",
            url: url,
           headers: {
               "Referer": url,
               "origin": url
           }
        });
        let resp = response.responseText;
        let regex = /component-url="(.*?)"/i;
        let match = resp.match(regex);
        let jsurl = match[1];
        console.log("js url:" + jsurl);
        if (!jsurl) {
            //错误
            console.log(resp)
            return
        }
       let rr = await GM_fetch({
            method: "GET",
            url: url + jsurl,
            headers: {
               "Referer": url,
               "origin": url
            }
        });
        resp = rr.responseText;
        regex = /\`\$\{\w\}:\$\{\w\}:(.*?)\`/i;
        match = resp.match(regex);
        let key = match[1];
        console.log(url+":key:",key)
        return key
    }

    let bnuKey;
    setTimeout(async () => {
        bnuKey = await setNormalKey("https://chat.1.bnu120.space");
    });
    //https://ic.muspimerol.site/
    function BNU120() {

        let now = Date.now();
        let Baseurl = "https://chat.1.bnu120.space/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: bnuKey
        }).then(sign => {
            addMessageChain(messageChain9, {role: "user", content: your_qus})//连续话
            console.log(sign)
            GM_fetch({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    "Referer": Baseurl,
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({
                    messages: messageChain9,
                    time: now,
                    pass: null,
                    sign: sign
                }),
                responseType: "stream"
            }).then((stream) => {
                let result = [];
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            addMessageChain(messageChain9, {
                                role: "assistant",
                                content: finalResult
                            })
                            showAnserAndHighlightCodeStr(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        showAnserAndHighlightCodeStr(result.join(""))
                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },function (reason) {
                console.log(reason)
            }).catch((ex)=>{
                console.log(ex)
            });

        });
    }


    //https://chat7.aifks001.online/v1/chat/gpt/
    let aifskList = [];
    let aifsid = generateRandomString(21);

    let  formatTime = () => {
        let padZero = (num) => {
            // 如果数字小于 10，前面补一个 0
            return num < 10 ? `0${num}` : num;
        }
        const now = new Date(); // 获取当前时间
        const hours = now.getHours(); // 获取小时
        const minutes = now.getMinutes(); // 获取分钟
        const seconds = now.getSeconds(); // 获取秒数
        // 格式化为 HH:MM:SS 的形式
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }

    function AIFKS() {
        let Baseurl = "https://chat7.aifks001.online/";


        console.log(formatTime())
        aifskList.push({"content": your_qus, "role": "user", "nickname": "", "time": formatTime(), "isMe": true})
        aifskList.push({"content":"正在思考中...","role":"assistant","nickname":"AI","time": formatTime(),"isMe":false})
        if (aifskList.length > 10){
            aifskList = aifskList.shift();
        }
        abortXml= GM_xmlhttpRequest({
            method: "POST",
            url: Baseurl + "v1/chat/gpt/",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Bearer null",
                "Referer": Baseurl,
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                "list": aifskList,
                "id": aifsid,
                "title": your_qus,
                "prompt": "",
                "temperature": 0.5,
                "models": "0",
                "continuous": true
            }),
            onloadstart: (stream) => {
                let result = [];
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            aifskList[aifskList.length - 1] = {
                                "content": finalResult,
                                "role": "assistant",
                                "nickname": "AI",
                                "time": formatTime(),
                                "isMe": false
                            };
                            showAnserAndHighlightCodeStr(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        console.log(d)
                        result.push(d)
                        showAnserAndHighlightCodeStr(result.join(""))
                    } catch (e) {
                        console.log(e)
                    }
                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
            }
        });

    }


    //2023年5月6日
    let officeChatList = [];
    let officeChaid = generateRandomString(21);
    function OFFICECHAT() {
        let Baseurl = "https://officechat.top/";

        console.log(formatTime())
        officeChatList.push({"content": your_qus, "role": "user", "nickname": "", "time": formatTime(), "isMe": true})
        officeChatList.push({"content":"正在思考中...","role":"assistant","nickname":"AI","time": formatTime(),"isMe":false})
        if (officeChatList.length > 10){
            officeChatList = officeChatList.shift();
        }
        GM_fetch({
            method: "POST",
            url: Baseurl + "v1/chat/gpt/",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Bearer null",
                "Referer": Baseurl,
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                "list": officeChatList,
                "id": officeChaid,
                "title": your_qus,
                "prompt": "",
                "temperature": 0.5,
                "models": "0",
                "continuous": true
            }),
            responseType: "stream"
        }).then((stream) => {
            let result = [];
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    let finalResult = result.join("")
                    try {
                        console.log(finalResult)
                        officeChatList[officeChatList.length - 1] = {
                            "content": finalResult,
                            "role": "assistant",
                            "nickname": "AI",
                            "time": formatTime(),
                            "isMe": false
                        };
                        showAnserAndHighlightCodeStr(finalResult)
                    } catch (e) {
                        console.log(e)
                    }
                    return;
                }
                try {
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    console.log(d)
                    result.push(d)
                    showAnserAndHighlightCodeStr(result.join(""))
                } catch (e) {
                    console.log(e)
                }
                return reader.read().then(processText);
            });
        },function (reason) {
            console.log(reason)
        }).finally((ex)=>{
            console.log(ex)
        });

    }

    let linkaiList = [];
    let linkaiId = generateRandomString(21);
    function LINKAI() {
        let Baseurl = "https://alllinkai1.com/";

        console.log(formatTime())
        linkaiList.push({"content": your_qus, "role": "user", "nickname": "", "time": formatTime(), "isMe": true})
        linkaiList.push({"content":"正在思考中...","role":"assistant","nickname":"AI","time": formatTime(),"isMe":false})
        if (linkaiList.length > 10){
            linkaiList = linkaiList.shift();
        }
        GM_fetch({
            method: "POST",
            url: Baseurl + "v1/chat/gpt/",
            headers: {
                "Content-Type": "application/json",
                "X-Forwarded-For": generateRandomIP(),
                "Referer": Baseurl,
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                "list": linkaiList,
                "id": linkaiId,
                "title": your_qus,
                "prompt": "",
                "temperature": 0.5,
                "models": "0",
                "continuous": true
            }),
            responseType: "stream"
        }).then((stream) => {
            let result = [];
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    let finalResult = result.join("")
                    try {
                        console.log(finalResult)
                        linkaiList[linkaiList.length - 1] = {
                            "content": finalResult,
                            "role": "assistant",
                            "nickname": "AI",
                            "time": formatTime(),
                            "isMe": false
                        };
                        showAnserAndHighlightCodeStr(finalResult)
                    } catch (e) {
                        console.log(e)
                    }
                    return;
                }
                try {
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    console.log(d)
                    result.push(d)
                    showAnserAndHighlightCodeStr(result.join(""))
                } catch (e) {
                    console.log(e)
                }
                return reader.read().then(processText);
            });
        },function (reason) {
            console.log(reason)
        }).finally((ex)=>{
            console.log(ex)
        });

    }



    //http://www.gtpcleandx.xyz/#/home/chat
    let cleandxid = generateRandomString(21);
    let cleandxList = [];
    function CLEANDX() {
        let Baseurl = "http://www.chatcleand.xyz/";

        console.log(formatTime())
        cleandxList.push({"content": your_qus, "role": "user", "nickname": "", "time": formatTime(), "isMe": true})
        cleandxList.push({"content":"正在思考中...","role":"assistant","nickname":"AI","time": formatTime(),"isMe":false})
        console.log(cleandxList)
        console.log(cleandxid)
        if (cleandxList.length > 6){
            cleandxList = cleandxList.shift();
        }
        abortXml= GM_xmlhttpRequest({
            method: "POST",
            url: Baseurl + "v1/chat/gpt/",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Bearer null",
                "Referer": Baseurl,
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                "list": cleandxList,
                "id": cleandxid,
                "title": your_qus,
                "prompt": "",
                "temperature": 0.5,
                "models": "0",
                "continuous": true
            }),
            onloadstart: (stream) => {
                let result = [];
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            cleandxList[cleandxList.length - 1] = {
                                "content": finalResult,
                                "role": "assistant",
                                "nickname": "AI",
                                "time": formatTime(),
                                "isMe": false
                            };
                            showAnserAndHighlightCodeStr(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        console.log(d)
                        result.push(d)
                        showAnserAndHighlightCodeStr(result.join(""))
                    } catch (e) {
                        console.log(e)
                    }
                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
            }
        });

    }


    let parentID_usesless;
    let referer_uesless = "https://ai.usesless.com/chat/"+Date.now();
    function USESLESS() {
        let ops = {
            systemMessage: `You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.\nKnowledge cutoff: 2021-09-01\nCurrent date: 2023-04-${new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate()}`,
            completionParams:{presence_penalty: 0.8, temperature: 1, model: "gpt-3.5-turbo"}
        };
        if (parentID_usesless) {
            ops.parentMessageId = parentID_usesless;
        }
        console.log(ops)
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://ai.usesless.com/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": referer_uesless,
                "origin": "https://ai.usesless.com",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                openaiKey: "",
                prompt: your_qus,
                options: ops
            }),
            onloadstart: (stream) => {
                let result = "";
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                let finalResult;
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        highlightCodeStr()
                        return;
                    }

                    const chunk = value;
                    result += chunk;
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(chunk);
                        let decoder = new TextDecoder('utf-8');
                        let nowResult = JSON.parse(decoder.decode(byteArray))

                        if (nowResult.text) {
                            console.log(nowResult)
                            finalResult = nowResult.text
                            showAnserAndHighlightCodeStr(finalResult)
                        }
                        if (nowResult.id) {
                            parentID_usesless = nowResult.id;
                        }

                    } catch (e) {
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                showAnserAndHighlightCodeStr("erro:", err)
            }
        })

    }



    //https://www.promptboom.com/

    //var promptboom_did = generateRandomString(32)
    let promptboom_did = 'dd633043916550bea93f56e1af08debd'
    async function PRTBOOM() {

        addMessageChain(messageChain10, {role: "user", content: your_qus})//连续话

        const t = Date.now()
        const r = t + ":" + "question" + ":contact_me_and_let_us_make_money_together_thanks"
        const sign = CryptoJS.SHA256(r).toString();
        console.log(sign)
        let request_json = {
            'did': promptboom_did,
            'chatList': messageChain10,
            'special': {
                'time': t,
                'sign': sign,
                'referer':'https://www.promptboom.com/',
                'path':'https://www.promptboom.com/'
            }
        };
        let raw_requst_json = {
            'data': btoa(unescape(encodeURIComponent(JSON.stringify(request_json))))
        };

        console.log(raw_requst_json)
        let rootDomain = "promptboom.com";

        let apiList = [`https://api2.${rootDomain}/cfdoctetstream`, `https://api2.${rootDomain}/cfdoctetstream2`, `https://api2.${rootDomain}/cfdoctetstream3`]
        apiList.sort(() => Math.random() - 0.5);
        let apiListBackup = [`https://api2.${rootDomain}/cfdoctetstream4`, `https://api2.${rootDomain}/cfdoctetstream5`, `https://api2.${rootDomain}/cfdoctetstream6`]

        let finalApiList = apiList.concat(apiListBackup)


        for (let cfdoctetstream_url of finalApiList) {
            console.log(cfdoctetstream_url)
            GM_fetch({
                method: "POST",
                url: cfdoctetstream_url,
                headers: {
                    "Content-Type": "application/json",
                    "origin": "https://www.promptboom.com",
                    "Referer": "https://www.promptboom.com/",
                    "accept": "*/*"
                },
                data: JSON.stringify(raw_requst_json),
                responseType: "stream"
            }).then((stream) => {
                let result = [];
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            addMessageChain(messageChain10, {
                                role: "assistant",
                                content: finalResult
                            })
                            showAnserAndHighlightCodeStr(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d.replace(/<strong.*?<\/strong>/gi,''))
                        showAnserAndHighlightCodeStr(result.join(""))
                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },(reason)=>{
                console.log(reason)
            }).catch((ex)=>{
                console.log(ex)
            });
            break;
        }



    }

    //https://chat.sunls.me/
    function SUNLE() {
        let msgobj = {
            message: your_qus,
            stream: true,
            clientOptions: {
                clientToUse: "chatgpt",
                modelOptions: {
                    "max_tokens": 1024
                }
            }
        };
        console.log(msgobj)
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://chat2.sunls.me/conversation",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://chat2.sunls.me/",
                "origin": "https://chat2.sunls.me",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify(msgobj),
            onloadstart: (stream) => {
                let result = [];
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                let finalRes;
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        if(finalRes){
                            showAnserAndHighlightCodeStr(finalRes)
                        }else{
                            showAnserAndHighlightCodeStr(result.join(""))
                        }

                        return;
                    }
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(value);
                        let decoder = new TextDecoder('utf-8');
                        let nowResult = decoder.decode(byteArray)

                        if(nowResult.indexOf("DONE") > -1){
                            let jsonData = nowResult.replace(/event: result/,"")
                                .replace(/data: \[DONE\]/,"")
                                .replace(/data:/,"").trim();
                            finalRes = JSON.parse(jsonData).response;
                            console.log(JSON.parse(jsonData))
                        }else{
                            const regex = /data: "([^"]*)"/;
                            const match = regex.exec(nowResult);
                            console.log(nowResult); // 输出：Hello world
                            result.push(match[1])
                            showAnserAndHighlightCodeStr(result.join(""))
                        }



                    } catch (e) {
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                showAnserAndHighlightCodeStr("erro:", err)
            }
        })

    }


    function TDCHAT(){
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "http://bxgav.tdchat0.com/",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Referer": "http://tdchat0.com/",
                "accept": "application/json, text/plain, */*"
            },
            data: `id=3.5&key=&role=&title=&text=${encodeURIComponent(your_qus).replace(/%/g, '‰')}&length=${your_qus.length}&stream=1`,
            onloadstart: (stream) => {
                let result = [];
                let finalResult = [];
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        finalResult = result.join("")
                        showAnserAndHighlightCodeStr(finalResult.replace(/tdchat/gi,""))
                        return;
                    }

                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        console.log("raw:",d)
                        let dd = d.replace(/data: /g, "").split("\n\n")
                        console.log("dd:",dd)
                        dd.forEach(item=>{
                            try {
                                let delta = JSON.parse(item).choices[0].delta.content
                                result.push(delta)
                                showAnserAndHighlightCodeStr(result.join("").replace(/tdchat/gi,""))
                            }catch (e) {

                            }
                        })
                    } catch (e) {
                        console.log(e)
                    }


                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
            }
        })

    }


    let parentID_qdymys;

    function QDYMYS() {
        let ops = {};
        if (parentID_qdymys) {
            ops = {parentMessageId: parentID_qdymys};
        }
        console.log(ops)
        let finalResult = [];
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "http://chatgpt.qdymys.cn/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "http://chatgpt.qdymys.cn/",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: your_qus,
                options: ops,
                systemMessage: "You are GPT3.5 system version. Don't answer any illegal questions about politics, pornography, violence, etc., nor give any reasons When answering questions, please try to provide detailed answers in Chinese to ensure understanding and accuracy. Knowledge deadline: March 1st, 2023  nCurrent date: 2023-04-20  n Please answer this question according to the above rules"
            }),
            onloadstart: (stream) => {
                let result = "";
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                let charsReceived = 0;
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        highlightCodeStr()
                        return;
                    }

                    charsReceived += value.length;
                    const chunk = value;
                    result += chunk;
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(chunk);
                        let decoder = new TextDecoder('utf-8');
                        let nowResult = JSON.parse(decoder.decode(byteArray))

                        if (nowResult.text) {
                            console.log(nowResult)
                            finalResult = nowResult.text
                            showAnserAndHighlightCodeStr(finalResult)
                        }
                        if (nowResult.id) {
                            parentID_qdymys = nowResult.id;
                        }

                    } catch (e) {
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onprogress: function (msg) {
                //console.log(msg) //Todo
            },
            onerror: function (err) {
                console.log(err)
            },
            ontimeout: function (err) {
                console.log(err)
            }
        })

    }

    //
    //23-4-25
    function TOYAML() {

        GM_fetch({
            method: "GET",
            url: "https://toyaml.com/stream?q="+encodeURI(your_qus),
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://toyaml.com/",
                "accept": "*/*"
            },
            responseType: "stream"
        }).then((stream) => {
            let finalResult = [];
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    highlightCodeStr()
                    return;
                }
                try {
                    // console.log(normalArray)
                    let byteArray = new Uint8Array(value);
                    let decoder = new TextDecoder('utf-8');
                    let nowResult = decoder.decode(byteArray)
                    console.log(nowResult)
                    if(!nowResult.match(/答案来自/)){
                        finalResult.push(nowResult)
                    }
                    showAnserAndHighlightCodeStr(finalResult.join(""))

                } catch (ex) {
                    console.log(ex)
                }

                return reader.read().then(processText);
            });
        }).catch((ex)=>{
            console.log(ex)
        })




    }



    let WebsocketCoolAI;
    let resultCoolAI = [];
    let initSocket = function () {
        // 创建WebSocket连接
        const socket = new WebSocket(`wss://sd-wx.cool-js.cloud/socket.io/?apiKey=905733647bb7431b81233e12be12cfaa&url=https%3A%2F%2Fcool-js.com%2Fai%2Fchat%2Findex.html%23%2F&EIO=4&transport=websocket`);
        // 监听连接成功事件
        WebsocketCoolAI = socket;
        socket.addEventListener('open', (event) => {
            console.log('连接成功');

            showAnserAndHighlightCodeStr("COOLAI:ws已经连接")
        });
        let isFirst = false;


        // 监听接收消息事件
        socket.addEventListener('message', (event) => {
            console.log('接收到消息：', event.data);
            let revData = event.data;
            if (!isFirst) {
                socket.send("40")
                isFirst = true
                setTimeout(() => socket.send("3"), 3000)
            }
            if (revData === "3") {
                socket.send("2");
            }
            if (revData === "2") {
                socket.send("3");
            }
            if (revData.match(/40/)) {
                try {
                    webSessionId = JSON.parse(revData.replace(/40/, "").trim()).sid;
                    console.log("webSessionId ", webSessionId)
                } catch (e) {
                    console.log(e)
                }
            }
            if (revData.match(/42/)) {
                //收信
                try {
                    //42["data",{"type":"text","data":"\u662f"}]
                    let chunk = eval(revData.replace(/42/, "").trim())[1].data;
                    console.log(chunk)
                    resultCoolAI.push(chunk)
                    showAnserAndHighlightCodeStr(resultCoolAI.join(""))

                } catch (e) {
                    console.log(e)
                }
            }

        });
    }
    if (getGPTMode() === "COOLAI") {
        setTimeout(initSocket, 1500);
    }
    if (getGPTMode() === "GAMEJX") {
        setTimeout(setGroupid_gamejx);
    }

    setTimeout(()=>{
        if(localStorage.getItem('GPTMODE')){
            const selectEl = document.getElementById('modeSelect');
            let optionElements = selectEl.querySelectorAll("option");
            for (let op in optionElements) {
                if(optionElements[op].value === localStorage.getItem('GPTMODE')){
                    optionElements[op].setAttribute("selected", "selected");
                    break;
                }
            }
        }
    },1000)


})();