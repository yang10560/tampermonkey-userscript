// ==UserScript==
// @name         chatGPT tools Plus（修改版）
// @namespace    http://tampermonkey.net/
// @version      1.3.3
// @description  Google、必应、百度、Yandex、360搜索、谷歌镜像、Fsou侧边栏Chat搜索，即刻体验AI，无需翻墙，无需注册，无需等待！
// @author       夜雨
// @match        https://cn.bing.com/*
// @match        https://www.bing.com/*
// @match      https://chat.openai.com/chat
// @match      https://www.google.com/*
// @match      https://www.so.com/s*
// @match      http*://www.baidu.com/s*
// @match      https://www.baidu.com*
// @match      https://m.baidu.com/*
// @match      http*://yandex.ru/search*
// @match      http*://yandex.com/search*
// @match      https://search.ecnu.cf/search*
// @match      https://search.aust.cf/search*
// @match      https://search.*.cf/search*
// @match      https://fsoufsou.com/search*
// @match      https://www.google.com.hk/*
// @include    /^https:\/\/www\.baidu\.com\/s\?wd.*$/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @grant       GM_openInTab
// @grant      GM_registerMenuCommand
// @grant      GM_setValue
// @grant      GM_getValue
// @run-at     document-end
// @require    https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js
// @require    https://cdn.staticfile.org/jquery-cookie/1.4.1/jquery.cookie.min.js
// @require    https://cdn.jsdelivr.net/npm/marked@4.2.3/marked.min.js
// @require    https://cdnjs.cloudflare.com/ajax/libs/markdown-it/13.0.1/markdown-it.min.js
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
// @connect    freechatgpt.xgp.one
// @connect    gptkey.oss-cn-hangzhou.aliyuncs.com
// @connect    luntianxia.uk
// @connect    chat.51buygpt.com
// @license    MIT
// @website    https://blog.yeyusmile.top/gpt.html
// @require    https://cdn.jsdelivr.net/npm/showdown@2.1.0/dist/showdown.min.js
// @require    https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js
// @require    https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js


// ==/UserScript==

(function () {
    'use strict';
    // grant       GM_getResourceText
    // resource markdownCss https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.css
    // resource highlightCss https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css
    //  GM_addStyle(GM_getResourceText("markdownCss"));
    // GM_addStyle(GM_getResourceText("highlightCss"));


    //(prefers-color-scheme: light)
    $("head").append($(
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.css" media="(prefers-color-scheme: light)">'
    ));
    $("head").append($(
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">'
    ));


    const menu_updateChat_id = GM_registerMenuCommand("更新Chat", function (event) {
        GM_openInTab("https://greasyfork.org/zh-CN/scripts/459997")
    }, "updateChat");
    const menu_groupNum_id = GM_registerMenuCommand("交流群", function (event) {
        alert("交流群:710808464")
    }, "groupNum");

    const menu_pubkey_id = GM_registerMenuCommand("更新公钥", function (event) {
        alert("正在更新...")
        setPubkey();
    }, "PUBKEY");

    //动态pubkey
    function setPubkey() {
        let GPTMODE = localStorage.getItem("GPTMODE")
        if (GPTMODE && GPTMODE == "CHATGPT") {
            //https://gptkey.oss-cn-hangzhou.aliyuncs.com/key.txt
            GM_xmlhttpRequest({
                method: "GET",
                url: "https://gptkey.oss-cn-hangzhou.aliyuncs.com/key.txt",
                headers: {
                    //"Content-Type": "application/json",
                    //"Referer": `https://aigcfun.com/`
                },
                onload: function (response) {
                    let resp = response.responseText;
                    let pubkey = resp;
                    if (!pubkey) {
                        localStorage.removeItem("openAIkey")
                        document.getElementById("gptAnswer").innerText = "openAI key获取失败"
                        return
                    }
                    //localStorage.setItem("openAIkey", pubkey)
                    document.getElementById("gptAnswer").innerText = "openAI key获取成功,请复制然后刷新页面手动更新:" + pubkey
                    localStorage.removeItem("openAIkey")
                },
                onerror: (e) => {
                    localStorage.removeItem("openAIkey")
                    document.getElementById("gptAnswer").innerText = "openAI key获取失败"
                    return
                }
            });

            return
        }

        GM_xmlhttpRequest({
            method: "GET",
            url: "https://api.aigcfun.com/fc/key",
            headers: {
                "Content-Type": "application/json",
                "Referer": `https://aigcfun.com/`
            },
            onload: function (response) {
                let resp = response.responseText;
                let pubkey = JSON.parse(resp).data;
                if (!pubkey) {
                    document.getElementById("gptAnswer").innerText = "pubkey失败"
                    return
                }
                console.log("pubkey:" + pubkey);
                //GM_setValue("pubkey", pubkey)
                localStorage.setItem("pubkey", pubkey)
                document.getElementById("gptAnswer").innerText = "pubkey更新成功:" + pubkey
            }
        });
    }

    function getPubkey() {
        //return GM_getValue("pubkey");
        return localStorage.getItem("pubkey");
    }


    //setPubkey()
    //console.log("GET KEY:" + getPubkey())


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
        var userAgentInfo = navigator.userAgent.toLowerCase();
        var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var mobile_flag = false;
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

    //顶级配置

    var your_qus
    var abortXml
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
    if (window.location.href.indexOf("www.google.com") > -1 || window.location.href.match(regx)) {
        GM_add_box_style(1)
        addBothStyle()
        keyEvent()
        appendBox(1).then((res) => {
            pivElemAddEventAndValue(1)
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
            pivElemAddEventAndValue(4)
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

    //顶级函数
    function uuid() { //uuid 产生
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }

    function GM_add_box_style(case_web) {
        switch (case_web) {
            case 0: //bing
                GM_addStyle(`
    #gptAnswer{
   margin: 15px;
   border-top: solid;
    border-bottom: solid;
    }
    #gptInput{
    width:74%;
    border-radius: 4px;
    }
    #gptInputBox{
        display: flex;
    justify-content: space-around;
    }

    #button_GPT:hover{
    background:#ffffffcc;
    }
    #gptDiv{
     border-radius: 8px;
    padding: 10px;
    margin-bottom: 9px;
    width:452px;
    translate:-20px;
    background:#ffffffcc;
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    }
    #button_GPT{
    }
    #button_GPT{
    background: transparent;
    border-radius: 4px;

    }
    #gptCueBox{
        translate: 3px;
    }

	 p{white-space: pre-line}


    `)
                break;
            case 1: //google
                GM_addStyle(`
    #gptAnswer{
   margin: 15px;
   border-top: solid;
    border-bottom: solid;
    }
    #gptInput{
    border-radius: 4px;
    width: 68%;
    }
    #button_GPT:hover{
    background:#dcdcdccc;
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
    }
    #button_GPT{
    background: transparent;
    border-radius: 3px;
     font-size: 14px;
    }
    #gptStatus{
        margin-left: 7px;
        }


 p{white-space: pre-line}


    `)
                break; //baidu
            case 2:
                GM_addStyle(`
    #gptAnswer{
   margin: 15px;
   border-top: solid;
    border-bottom: solid;
    }
    #gptInput{
    border-radius: 4px;
    width: 68%;
    }
    #button_GPT:hover{
    background:#4e6ef2;
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
    }
    #button_GPT{
    background: #4460d4;
    border-radius: 3px;
    font-size: 14px;
    }
    #gptStatus{
        margin-left: 7px;
        }

    p{white-space: pre-line}

    `)
                break;
            default:
                alert("参数没设定")
        }

    }

    function do_it() {
        let finalResult
        let normalArray
        let nowResult
        document.getElementById('gptAnswer').innerHTML = `<div>加载中<span id="dot"></span></div>`;

        //CHATGPT模式
        let GPTMODE = localStorage.getItem("GPTMODE")
        if (GPTMODE && GPTMODE == "CHATGPT") {
            console.log("当前模式CHATGPT")
            if (!localStorage.getItem("openAIkey")) {
                let manualInput = confirm("openAIkey不存在 请更新,或者使用你自己的key");
                if (manualInput) {
                    let aikey = prompt("请输入您的openAIkey", "");
                    if (aikey) localStorage.setItem("openAIkey", aikey)
                }

                return
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
                            return;
                        }

                        charsReceived += value.length;
                        const chunk = value;
                        result += chunk;
                        normalArray = chunk

                        try {
                            // console.log(normalArray)
                            /*old*
                             let byteArray = new Uint8Array(chunk);
                             let decoder = new TextDecoder('utf-8');
                             let nowResult = decoder.decode(byteArray).match(/(?<=\[).*(?=\])/g)[0];
                             // nowResult = String.fromCharCode.apply(null, normalArray).match(/(?<=\[).*(?=\])/g)[0]
                             console.log(decoder.decode(byteArray))
                              // console.log(mdConverter(decodeUnicode(nowResult.replace(/\\n+/g,"<换行>"))))

                              if (nowResult !== "DONE") {
                                  finalResult = nowResult
                                  document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                              }else{
                                 console.log(nowResult)
                                 document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                                 for (let i = 0; i <= document.getElementsByTagName("code").length -1; i++) {
                                     document.getElementsByTagName("code")[i].setAttribute("class",
                                         "hljs");
                                     hljs.highlightAll()
                                 }
                              }
                              */
                            let byteArray = new Uint8Array(chunk);
                            let decoder = new TextDecoder('utf-8');
                            const matchResults = decoder.decode(byteArray).match(/"parts":\s*\["(.+?)"\]/g);
                            let nowResult = matchResults[matchResults.length - 1];
                            nowResult = /\[\"(.*?)\"\]/g.exec(nowResult)[1];

                            console.log(nowResult)


                            if (nowResult != "DONE") {//not done
                                finalResult = nowResult
                                document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                            } else {
                                console.log(nowResult)
                                document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                                for (let i = 0; i <= document.getElementsByTagName("code").length - 1; i++) {
                                    document.getElementsByTagName("code")[i].setAttribute("class",
                                        "hljs");
                                    hljs.highlightAll()
                                }
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


            return;
        } else if (GPTMODE && GPTMODE == "AIAIZONE") {
            console.log("当前模式AIAIZONE")
            abortXml = GM_xmlhttpRequest({
                method: "POST",
                url: "https://www.aiai.zone/api/chat-process",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": "https://www.aiai.zone/",
                    "Host": "www.aiai.zone",
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({
                    prompt: your_qus,
                    options: {},
                    systemMessage: "You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.\nKnowledge cutoff: 2021-09-01\nCurrent date: 2023-03-31"
                }),
                onloadstart: (stream) => {
                    let result = "";
                    const reader = stream.response.getReader();
                    //     console.log(reader.read)
                    let charsReceived = 0;
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            return;
                        }

                        charsReceived += value.length;
                        const chunk = value;
                        result += chunk;
                        normalArray = chunk
                        try {
                            // console.log(normalArray)
                            let byteArray = new Uint8Array(chunk);
                            let decoder = new TextDecoder('utf-8');
                            let nowResult = JSON.parse(decoder.decode(byteArray))

                            if (!nowResult.text) {
                                //finalResult = nowResult.text
                                //document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                            } else {
                                console.log(nowResult)
                                finalResult = finalResult = nowResult.text
                                document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                                for (let i = 0; i <= document.getElementsByTagName("code").length - 1; i++) {
                                    document.getElementsByTagName("code")[i].setAttribute("class",
                                        "hljs");
                                    hljs.highlightAll()
                                }
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

            return;
        } else if (GPTMODE && GPTMODE == "THEBAI") {
            console.log("当前模式THEBAI")
            abortXml = GM_xmlhttpRequest({
                method: "POST",
                url: "https://chatbot.theb.ai/api/chat-process",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": "https://chatbot.theb.ai/",
                    //"Host":"www.aiai.zone",
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({
                    prompt: your_qus,
                    options: {}
                }),
                onloadstart: (stream) => {
                    let result = "";
                    const reader = stream.response.getReader();
                    //     console.log(reader.read)
                    let charsReceived = 0;
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            return;
                        }

                        charsReceived += value.length;
                        const chunk = value;
                        result += chunk;
                        normalArray = chunk
                        try {
                            // console.log(normalArray)
                            let byteArray = new Uint8Array(chunk);
                            let decoder = new TextDecoder('utf-8');
                            let nowResult = JSON.parse(decoder.decode(byteArray))

                            if (!nowResult.text) {
                                //finalResult = nowResult.text
                                //document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                            } else {
                                console.log(nowResult)
                                finalResult = finalResult = nowResult.text
                                document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                                for (let i = 0; i <= document.getElementsByTagName("code").length - 1; i++) {
                                    document.getElementsByTagName("code")[i].setAttribute("class",
                                        "hljs");
                                    hljs.highlightAll()
                                }
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
            //end if
            return;
        } else if (GPTMODE && GPTMODE == "YQCLOUD") {
            console.log("当前模式YQCLOUD")
            abortXml = GM_xmlhttpRequest({
                method: "POST",
                url: "https://cbjtestapi.binjie.site:7777/api/generateStream",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": "https://chat8.yqcloud.top/",
                    //"Host":"www.aiai.zone",
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({

                    prompt: your_qus,
                    userId: "#/chat/" + Date.now(),
                    network: true

                }),
                onloadstart: (stream) => {
                    let result = [];
                    const reader = stream.response.getReader();
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            finalResult = result.join("")
                            document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                            for (let i = 0; i <= document.getElementsByTagName("code").length - 1; i++) {
                                document.getElementsByTagName("code")[i].setAttribute("class",
                                    "hljs");
                                hljs.highlightAll()
                            }
                            return;
                        }
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
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
            //end if
            return;
        } else if (GPTMODE && GPTMODE == "AIBOE") {
            console.log("当前模式AIBOE")
            abortXml = GM_xmlhttpRequest({
                method: "POST",
                url: "https://ai.bo-e.com/backend-api/conversation",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer null",
                    "Referer": "https://ai.bo-e.com",
                    // "Host":"gpt008.com",
                    "accept": "text/event-stream"
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
                onloadstart: (stream) => {
                    let result = "";
                    const reader = stream.response.getReader();
                    //     console.log(reader.read)
                    let charsReceived = 0;
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            return;
                        }

                        charsReceived += value.length;
                        const chunk = value;
                        result += chunk;
                        normalArray = chunk
                        try {
                            // console.log(normalArray)
                            let byteArray = new Uint8Array(chunk);
                            let decoder = new TextDecoder('utf-8');
                            const matchResults = decoder.decode(byteArray).match(/"parts":\s*\["(.+?)"\]/g);
                            let nowResult = matchResults[matchResults.length - 1];
                            nowResult = /\[\"(.*?)\"\]/g.exec(nowResult)[1];

                            console.log(nowResult)


                            if (nowResult != "DONE") {//not done
                                finalResult = nowResult
                                document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                            } else {
                                console.log(nowResult)
                                document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                                for (let i = 0; i <= document.getElementsByTagName("code").length - 1; i++) {
                                    document.getElementsByTagName("code")[i].setAttribute("class",
                                        "hljs");
                                    hljs.highlightAll()
                                }
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

            //end if
            return;
        } else if (GPTMODE && GPTMODE == "LTXUK") {
            console.log("当前模式LTXUK")
            let now = Date.now()
            const pk = {}.PUBLIC_SECRET_KEY;
            generateSignatureWithPkey({
                t: now,
                m: your_qus || "",
                pkey: pk
            }).then(sign => {
                console.log(sign)
                abortXml = GM_xmlhttpRequest({
                    method: "POST",
                    url: "https://luntianxia.uk/api/generate",
                    headers: {
                        "Content-Type": "application/json",
                        "Referer": `https://luntianxia.uk/`
                    },
                    data: JSON.stringify({
                        messages: [{
                            role: "user",
                            content: your_qus
                        }],
                        time: now,
                        pass: null,
                        sign: sign
                        //key: "",
                        //usage: Math.floor(Math.random() * 8) + 1
                    }),


                    onload: function (res) {
                        if (res.status === 200) {
                            console.log('成功....')
                            console.log(res.response)
                            let rest = res.response
                            //console.log(rest.choices[0].text.replaceAll("\n","</br>"))

                            try {
                                log(mdConverter(rest.replaceAll(/\\n+/g, "\n")))
                                document.getElementById('gptAnswer').innerHTML =
                                    `${mdConverter(rest.replaceAll(/\\n+/g, "\n"))}`
                            } catch (e) {
                                //TODO handle the exception
                                document.getElementById('gptAnswer').innerHTML = `${rest}`
                            }

                            for (let i = 0; i <= document.getElementsByTagName("code").length -
                            1; i++) {
                                document.getElementsByTagName("code")[i].setAttribute("class",
                                    "language-javascript hljs");
                                hljs.highlightAll() //奇怪，为什么不行
                            }
                        } else {
                            console.log('失败')
                            console.log(res)
                            document.getElementById('gptAnswer').innerHTML = '访问失败了'
                        }
                    },

                    responseType: "application/json;charset=UTF-8",

                    onprogress: function (msg) {
                        //console.log(msg) //Todo
                    },
                    onerror: function (err) {
                        document.getElementById('gptAnswer').innerHTML =
                            `<div>some err happends,errinfo :<br>${err.messages}</div>`
                    },
                    ontimeout: function (err) {
                        document.getElementById('gptAnswer').innerHTML =
                            `<div>Opps!TimeOut,Please try again,errinfo:<br>${err.messages}</div>`
                    }
                });
            });


            //end if
            return;
        } else if (GPTMODE && GPTMODE == "51GPT") {
            console.log("当前模式51GPT")
            abortXml = GM_xmlhttpRequest({
                method: "POST",
                url: "https://chat.51buygpt.com/message.php",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    // "Authorization": "Bearer null",
                    "Referer": "https://chat.51buygpt.com/",
                    "Host": "www.aiai.zone",
                    "accept": "application/json, text/plain, */*"
                },
                data: `message=${encodeURI(your_qus)}&context=%5B%5D`,
                onloadstart: (stream) => {
                    let result = "";
                    const reader = stream.response.getReader();
                    //     console.log(reader.read)
                    let charsReceived = 0;
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            return;
                        }

                        charsReceived += value.length;
                        const chunk = value;
                        result += chunk;
                        normalArray = chunk
                        try {
                            // console.log(normalArray)
                            let byteArray = new Uint8Array(chunk);
                            let decoder = new TextDecoder('utf-8');
                            let nowResult = JSON.parse(decoder.decode(byteArray))

                            if (!nowResult.raw_message) {
                                //finalResult = nowResult.text
                                //document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                            } else {
                                console.log(nowResult)
                                finalResult = finalResult = nowResult.raw_message
                                document.getElementById('gptAnswer').innerHTML = `${mdConverter(finalResult.replace(/\\n+/g, "\n"))}`
                                for (let i = 0; i <= document.getElementsByTagName("code").length - 1; i++) {
                                    document.getElementsByTagName("code")[i].setAttribute("class",
                                        "hljs");
                                    hljs.highlightAll()
                                }
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
            //end if
            return;
        }


        const now = Date.now();
        console.log(now);

        generateSignature({
            t: now,
            m: your_qus || ""
        }).then(sign => {
            console.log(sign)
            abortXml = GM_xmlhttpRequest({
                method: "POST",
                url: "https://api.aigcfun.com/api/v1/text?key=" + getPubkey(),
                //url: "https://chatforai.cc/api/generate",
                headers: {
                    "Content-Type": "application/json",
                    "Referer": `https://aigcfun.com/`
                },
                data: JSON.stringify({
                    messages: [
                        {
                            role: "system",
                            content: "请以markdown的形式返回答案"
                        },
                        {
                            role: "user",
                            content: your_qus
                        }
                    ],
                    tokensLength: your_qus.length + 10,
                    model: "gpt-3.5-turbo"

                }),
                //	data: JSON.stringify({
                //	prompt: "Human:"+your_qus+"\nAI:",
                //		tokensLength: your_qus.length
                //	}),

                onload: function (res) {
                    if (res.status === 200) {
                        console.log('成功....')
                        console.log(res.response)
                        let rest = JSON.parse(res.response).choices[0].text
                        console.log(rest)

                        try {
                            log(mdConverter(rest.replaceAll(/\\n+/g, "\n")))
                            document.getElementById('gptAnswer').innerHTML =
                                `${mdConverter(rest.replaceAll(/\\n+/g, "\n"))}`
                        } catch (e) {
                            //TODO handle the exception
                            document.getElementById('gptAnswer').innerHTML = `${rest}`
                        }

                        for (let i = 0; i <= document.getElementsByTagName("code").length -
                        1; i++) {
                            document.getElementsByTagName("code")[i].setAttribute("class",
                                "hljs");
                            hljs.highlightAll()
                        }
                    } else {
                        console.log('失败')
                        console.log(res)
                        document.getElementById('gptAnswer').innerHTML = '访问失败了'
                    }
                },

                responseType: "application/json;charset=UTF-8",

                onprogress: function (msg) {
                    //console.log(msg) //Todo
                },
                onerror: function (err) {
                    document.getElementById('gptAnswer').innerHTML =
                        `<div>some err happends,errinfo :<br>${err.messages}</div>`
                },
                ontimeout: function (err) {
                    document.getElementById('gptAnswer').innerHTML =
                        `<div>Opps!TimeOut,Please try again,errinfo:<br>${err.messages}</div>`
                }
            });
        });

    }


    function creatBox() {
        return new Promise((resolve) => {
            var divE = document.createElement('div');
            var divId = document.createAttribute("id"); //创建属性
            divId.value = 'gptDiv'; //设置属性值
            divE.setAttributeNode(divId); //给div添加属性
            var pE = document.createElement('p');
            var pClass = document.createAttribute('class');
            pClass.value = 'textClass';
            pE.setAttributeNode(pClass)
            var pText = document.createTextNode("chatGPT tools Plus 已启动");
            pE.appendChild(pText);
            divE.appendChild(pE);
            divE.innerHTML = `
    <div id="gptInputBox">
    <input id="gptInput" type=text><button class="s_btn" id="button_GPT" >chat一下</button>
    </div>
    <div id=gptCueBox>
    <p id="gptStatus">&nbsp 本插件完全免费，请勿点击链接购买，后果自负。<a id="changMode" style="color: red;" href="javascript:void(0)">切换模式</a></p>
	<p id="warn" style="color: green;"  >&nbsp &nbsp 提示上限、错误等，请点击这里手动更新。<a id="updatePubkey" style="color: red;" href="javascript:void(0)">更新秘钥</a></p>
	<p id="website">&nbsp =========<a target="_blank" style="color: red;" href="https://blog.yeyusmile.top/gpt.html?random=${Math.random()}&from=js">网页版</a>=========</p>
   <article id="gptAnswer" class="markdown-body"><div id="gptAnswer_inner">版本:1.3.3已启动,部分需要魔法。当前模式: ${localStorage.getItem("GPTMODE") ? localStorage.getItem("GPTMODE") : "默认模式"}<div></article>
    </div><p></p>`
            resolve(divE)
        })
    }

    async function pivElemAddEventAndValue(append_case) {
        var search_content

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
            search_content = document.querySelector(
                "#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input:nth-child(3)"
            ).value
        }
        if (append_case === 0) {
            search_content = document.getElementsByClassName('b_searchbox')[0].value
        }
        document.getElementById("gptInput").value = search_content
        document.getElementById('button_GPT').addEventListener('click', () => {
            your_qus = document.getElementById("gptInput").value
            do_it()

        })
        document.getElementById('updatePubkey').addEventListener('click', () => {
            document.getElementById("gptAnswer").innerText = "正在更新，请稍后..."
            setPubkey()
        })

        document.getElementById('changMode').addEventListener('click', () => {
            document.getElementById("gptAnswer").innerText = "正在切换模式..."
            let chatList = ["Default", "CHATGPT", "AIAIZONE", "THEBAI", "YQCLOUD", "AIBOE", "LTXUK", "51GPT"]
            let GPTMODE = localStorage.getItem("GPTMODE")
            if (GPTMODE) {
                let idx = 0;//Default
                for (let i = 0; i < chatList.length; i++) {
                    if (chatList[i] == GPTMODE) {
                        idx = (i + 1 >= chatList.length) ? 0 : i + 1;
                    }
                }

                localStorage.setItem("GPTMODE", chatList[idx])
                document.getElementById("gptAnswer").innerText = `切换成功，当前模式:${chatList[idx]}`

            } else {
                //不存在默认CHATGPT
                localStorage.setItem("GPTMODE", "CHATGPT")
                document.getElementById("gptAnswer").innerText = "切换成功，当前模式:CHATGPT模式"
            }
        })


    }

    async function appendBox(append_case) {
        return new Promise((resolve, reject) => {
            creatBox().then((divE) => {
                switch (append_case) {
                    case 0: //bing
                        if (divE) {
                            document.getElementById('b_context').prepend(divE)
                        }
                        break;
                    case 1: //google
                        if (document.getElementsByClassName('TQc1id ')[0]) {
                            document.getElementsByClassName('TQc1id ')[0].prepend(divE);
                        } else {
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
                        if (document.getElementById('side')) {
                            document.getElementById('side').prepend(divE)
                        }
                        break;
                    case 5: //fsoufsou
                        let frow = document.querySelectorAll(".flex-row")[2]
                        if (frow.children.length == 2) {
                            frow.children.item(1).prepend(divE)
                        } else {
                            frow.innerHTML = frow.innerHTML +
                                `<div><div class="wiki-container" style="margin-left: 124px;">${divE.innerHTML}</div></div>`
                        }

                        break;
                    case 6: //手机百度
                        if (document.getElementById('page-bd')) {
                            document.getElementById('page-bd').prepend(divE)
                            //调整css
                            try {
                                document.querySelector("#gptDiv").style.setProperty("width",
                                    "100%")
                                document.querySelector("#gptInput").setAttribute("class",
                                    "se-input adjust-input")
                            } catch (e) {
                                //TODO handle the exception
                            }
                            setTimeout(() => {
                                document.getElementById("button_GPT").click(); //自动点击
                            }, 1500)
                        }
                        break;
                    default:
                        if (divE) {
                            console.log(`啥情况${divE}`)
                        }
                }
            }).catch((err) => {
                throw new Error(err)
            })

            resolve("finished")
        })
    }

    //焦点函数
    function isBlur() {
        var myInput = document.getElementById('gptInput');
        if (myInput == document.activeElement) {
            return 1
        } else {
            return 0
        }
    }

    function keyEvent() {
        document.onkeydown = function (e) {
            var keyNum = window.event ? e.keyCode : e.which;
            if (13 == keyNum) {
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
 }
    `)
    }


    function creatBox_and_addEventlis(append_case) {
        var divE = document.createElement('div');
        var divId = document.createAttribute("id"); //创建属性
        divId.value = 'gptDiv'; //设置属性值
        divE.setAttributeNode(divId); //给div添加属性
        var pE = document.createElement('p');
        var pClass = document.createAttribute('class');
        pClass.value = 'textClass';
        pE.setAttributeNode(pClass)
        var pText = document.createTextNode("chatGPT tools Plus 已启动");
        pE.appendChild(pText);
        divE.appendChild(pE);
        switch (append_case) {
            case 0:
                if (divE) {
                    document.getElementById('b_context').prepend(divE)
                }
                break;
            case 1:
                if (document.getElementsByClassName('TQc1id ')[0]) {
                    document.getElementsByClassName('TQc1id ')[0].prepend(divE);
                } else {
                    document.getElementById("rcnt").appendChild(divE);
                }
                break;
            case 2:
                if (document.getElementById('content_right')) {
                    document.getElementById('content_right').prepend(divE)
                }
                break;
            default:
                if (divE) {
                    document.getElementById('b_context').prepend(divE)
                }
        }
        document.getElementById('gptDiv').innerHTML =
            `<div id="gptInputBox"><input id="gptInput"type=text><button id="button_GPT">chat一下</button></div><div id=gptCueBox><p id="gptStatus">&nbsp openAI已就绪，请输入你的问题</p><div id="gptAnswer">chatGPT tools Plus 免费版已启动</div></div><p></p>`
        var search_content
        if (append_case === 2) {
            search_content = document.getElementById('kw').value
        }
        if (append_case === 1) {
            search_content = document.querySelector(
                "#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input:nth-child(3)")
                .value
        }
        if (append_case === 0) {
            search_content = document.getElementsByClassName('b_searchbox')[0].value
        }
        document.getElementById("gptInput").value = search_content
        document.getElementById('button_GPT').addEventListener('click', () => {
            your_qus = document.getElementById("gptInput").value
            do_it()

        })
    }

    function log(a) {
        console.log(a)
    }

    function Uint8ArrayToString(fileData) {
        var dataString = "";
        for (var i = 0; i < fileData.length; i++) {
            dataString += String.fromCharCode(fileData[i]);
        }

        return dataString
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
        var converter = new showdown.Converter(); //增加拓展table
        converter.setOption('tables',
            true); //启用表格选项。从showdown 1.2.0版开始，表支持已作为可选功能移入核心拓展，showdown.table.min.js扩展已被弃用
        var view = converter.makeHtml(rawData);
        return view;
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


})();