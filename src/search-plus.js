// ==UserScript==
// @name         chatGPT tools Plus（修改版）
// @namespace    http://tampermonkey.net/
// @version       1.6.0
// @description  Google、必应、百度、Yandex、360搜索、谷歌镜像、Fsou、duckduckgo侧边栏Chat搜索，即刻体验AI，无需翻墙，无需注册，无需等待！
// @author       夜雨
// @match        https://cn.bing.com/*
// @match        https://www.bing.com/*
// @match      https://chat.openai.com/chat
// @match      https://www.google.com/*
// @match      https://duckduckgo.com/*
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
// @connect    gptkey.oss-cn-hangzhou.aliyuncs.com
// @connect    luntianxia.uk
// @connect    chat.51buygpt.com
// @connect    chat.extkj.cn
// @connect    mirrorchat.extkj.cn
// @connect    api.tdchat0.com
// @connect    chat6.xeasy.me
// @connect   chat.wuguokai.cn
// @connect   ai5.wuguokai.top
// @connect   chat.aidutu.cn
// @connect   aichat.leiluan.cc
// @connect   chat.gptservice.xyz
// @connect   gpt66.cn
// @connect   ai.ls
// @connect   chatgpt.letsearches.com
// @connect   gpt.wobcw.com
// @connect   chat.68686.ltd
// @connect   www.aitianhu.com
// @connect   free.anzz.top
// @connect   chat.ohtoai.com
// @connect   freeopenai.xyz
// @connect   supremes.pro
// @connect   chat.bnu120.space
// @connect   chat7.aifks001.online
// @connect   ai.usesless.com
// @connect   www.ftcl.store
// @connect   chat.sunls.me
// @connect   chat.wobcw.com
// @license    MIT
// @website    https://blog.yeyusmile.top/gpt.html
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


    //(prefers-color-scheme: light)
    $("head").append($(
        '<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/github-markdown-css/5.2.0/github-markdown.css" media="(prefers-color-scheme: dark)">'
    ));
    $("head").append($(
        '<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/highlight.js/11.7.0/styles/base16/default-dark.min.css">'
    ));
    $("head").append($(
        '<link href="https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.4/katex.css" rel="stylesheet">'
    ));


    try {
        //禁用console 未转义警告
        hljs.configure({
            ignoreUnescapedHTML: true
        })
        const menu_updateChat_id = GM_registerMenuCommand("更新Chat", function (event) {
            GM_openInTab("https://greasyfork.org/zh-CN/scripts/459997")
        }, "updateChat");
        const menu_groupNum_id = GM_registerMenuCommand("交流群", function (event) {
            alert("交流群4：745163513\n交流群3:177193765\n交流群2:734403992\n交流群1:710808464\n交流总群：249733992")
        }, "groupNum");

        const menu_pubkey_id = GM_registerMenuCommand("更新key", function (event) {
            alert("正在更新...")
            setPubkey();
        }, "PUBKEY");
    } catch (e) {
        console.log(e)
    }


    //动态pubkey
    function setPubkey() {
        let GPTMODE = localStorage.getItem("GPTMODE")
        if (GPTMODE && GPTMODE == "CHATGPT") {
            //https://gptkey.oss-cn-hangzhou.aliyuncs.com/key.txt
            GM_xmlhttpRequest({
                method: "GET",
                nocache: true,
                synchronous: true,
                url: "http://gpt66.cn/gongxkey.html",
                headers: {
                    //"Content-Type": "application/json",
                    "Referer": `http://gpt66.cn/`
                },
                onload: function (response) {
                    let resp = response.responseText;
                    const regex = /data-key="([^"]+)"/g;
                    const keys = [];
                    let match;
                    while (match = regex.exec(resp)) {
                        keys.push(match[1]);
                    }

                    if (keys.length == 0) {
                        localStorage.removeItem("openAIkey")
                        document.getElementById("gptAnswer").innerText = "openAI key获取失败"
                        return
                    }
                    //localStorage.setItem("openAIkey", pubkey)
                    let ht = ""
                    keys.forEach(key => {
                        ht += `<a href='javascript:(function(){ localStorage.setItem("openAIkey","${key}");alert("更新成功：${key}")})();'>${key}</a><br>`
                    })
                    document.getElementById("gptAnswer").innerHTML = ht;
                    //document.getElementById("gptAnswer").innerText = "openAI key获取成功,请复制其中一个并点按钮添加:\n"+keys.join(",")
                    localStorage.removeItem("openAIkey")
                },
                onerror: (e) => {
                    localStorage.removeItem("openAIkey")
                    document.getElementById("gptAnswer").innerText = "openAI key获取失败"
                }
            });

           setTimeout(()=>{
               GM_xmlhttpRequest({
                   method: "GET",
                   nocache: true,
                   synchronous: true,
                   url: "https://freeopenai.xyz/api.txt",
                   headers: {
                       //"Content-Type": "application/json",
                       "Referer": `http://freeopenai.xyz/`
                   },
                   onload: function (response) {
                       let resp = response.responseText;
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
                       document.getElementById("gptAnswer").innerHTML = document.getElementById("gptAnswer").innerHTML + ht;
                       //document.getElementById("gptAnswer").innerText = "openAI key获取成功,请复制其中一个并点按钮添加:\n"+keys.join(",")
                       localStorage.removeItem("openAIkey")
                   },
                   onerror: (e) => {
                       localStorage.removeItem("openAIkey")
                   }
               });
           },2000)

            return
        }

        //default:
        let generateRandomIP = () => {
            const ip = [];
            for (let i = 0; i < 4; i++) {
                ip.push(Math.floor(Math.random() * 256));
            }
            console.log(ip.join('.'))
            return ip.join('.');
        }

        GM_xmlhttpRequest({
            method: "GET",
            url: "https://api.aigcfun.com/fc/key",
            headers: {
                "Content-Type": "application/json",
                "Referer": `https://aigcfun.com/`,
                "X-Forwarded-For": generateRandomIP()
            },
            onload: function (response) {
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

    function katexTohtml(rawHtml) {
        console.log("========katexTohtml start=======")
        let renderedHtml = rawHtml.replace(/<em>/g, "").replace(/<\/em>/g, "").replace(/\$\$(.*?)\$\$/g, (_, tex) => {
            //debugger
            return katex.renderToString(tex, {displayMode: false, throwOnError: false});
        });
        renderedHtml = renderedHtml.replace(/\$(.*?)\$/g, (_, tex) => {
            //debugger
            return katex.renderToString(tex, {displayMode: false, throwOnError: false});
        });
        console.log("========katexTohtml end=======")
        return renderedHtml;
    }

    //显示答案并高亮代码函数
    function showAnserAndHighlightCodeStr(codeStr) {
        try {
            document.getElementById('gptAnswer').innerHTML = `${katexTohtml(mdConverter(codeStr.replace(/\\n+/g, "\n")))}`
        } catch (e) {
            document.getElementById('gptAnswer').innerHTML = `${mdConverter(codeStr.replace(/\\n+/g, "\n"))}`
        }
        for (let i = 0; i <= document.getElementsByTagName("code").length - 1; i++) {
            document.getElementsByTagName("code")[i].setAttribute("class",
                "hljs");
            hljs.highlightAll()
        }
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
    var webSessionId
    var convoId
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

    //duckduckgo.com
    if (window.location.href.indexOf("duckduckgo.com\/\?q") > -1) {
        GM_add_box_style(1)
        addBothStyle()
        keyEvent()
        appendBox(7).then((res) => {
            pivElemAddEventAndValue(7)
        })
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

        return s.join("");
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


                            if (nowResult != "DONE") {//not done
                                finalResult = nowResult
                                showAnserAndHighlightCodeStr(finalResult)
                            } else {
                                console.log(nowResult)
                                showAnserAndHighlightCodeStr(finalResult)
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
        } else if (GPTMODE && GPTMODE == "ANZZ") {
            console.log("当前模式ANZZ")
            ANZZ();
            //end if
            return;
        } else if (GPTMODE && GPTMODE == "THEBAI") {
            console.log("当前模式THEBAI")
            THEBAI()
            //end if
            return;
        } else if (GPTMODE && GPTMODE == "YQCLOUD") {
            console.log("当前模式YQCLOUD")
            YQCLOUD()
            //end if
            return;
        } else if (GPTMODE && GPTMODE == "AIDUTU") {
            console.log("当前模式AIDUTU")

            AIDUTU();

            //end if
            return;
        } else if (GPTMODE && GPTMODE == "LTXUK") {
            console.log("当前模式LTXUK")
            LTXUK();
            //end if
            return;
        } else if (GPTMODE && GPTMODE == "AITIANHU") {
            console.log("当前模式AITIANHU")
            AITIANHU()
            //end if
            return;
        } else if (GPTMODE && GPTMODE == "TDCHAT") {
            console.log("当前模式TDCHAT")
           TDCHAT()
            //end if
            return;
        } else if (GPTMODE && GPTMODE == "XEASY") {
            console.log("当前模式XEASY")
            XEASY();

            //end if
            return;
        } else if (GPTMODE && GPTMODE == "WGK") {
            console.log("当前模式WGK")

            WGK();

            //end if
            return;
        } else if (GPTMODE && GPTMODE == "LTD68686") {

            console.log("LTD68686")
            LTD68686()

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "AILS") {

            console.log("AILS")
            AILS()

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "LERSEARCH") {
            console.log("LERSEARCH")
            LERSEARCH()

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "COOLAI") {
            console.log("COOLAI")
            try {
                resultCoolAI = [];
                WebsocketCoolAI.send(`42["ask",{"userId":"cool","content":"${your_qus}"}]`)
            } catch (e) {
                initSocket()
            }

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "MYDOG") {
            console.log("MYDOG")
            MYDOG();

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "WOBCW") {
            console.log("WOBCW")
           // WOBCW();
            WGK();

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "OHTOAI") {
            console.log("OHTOAI")
            OHTOAI();

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "EXTKJ") {
            console.log("EXTKJ")
            EXTKJ();

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "SUPREMES") {
            console.log("SUPREMES")
            SUPREMES();

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "BNU120") {
            console.log("BNU120")
            BNU120();

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "AIFKS") {
            console.log("AIFKS")
            AIFKS();

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "USESLESS") {
            console.log("USESLESS")
            USESLESS();

            return;
            //end if
        } else if (GPTMODE && GPTMODE == "FTCL") {
            console.log("FTCL")
            FTCL();

            return;
            //end if
        }else if (GPTMODE && GPTMODE == "SUNLE") {
            console.log("SUNLE")
            SUNLE();

            return;
            //end if
        }


        console.log("defualt:")
        const now = Date.now();
        console.log(now);

        generateSignature({
            t: now,
            m: your_qus || ""
        }).then(sign => {
            console.log(sign)
            addMessageChain(messageChain1, {role: "user", content: your_qus})//连续话
            abortXml = GM_xmlhttpRequest({
                method: "POST",
                url: "https://api.aigcfun.com/api/v1/text?key=" + getPubkey(),
                //url: "https://chatforai.cc/api/generate",
                headers: {
                    "Content-Type": "application/json",
                    "Referer": `https://aigcfun.com/`
                },
                data: JSON.stringify({
                    messages: messageChain1,
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
                            showAnserAndHighlightCodeStr(rest);
                            addMessageChain(messageChain1, {
                                role: "assistant",
                                content: rest
                            })
                        } catch (e) {
                            //TODO handle the exception
                            document.getElementById('gptAnswer').innerHTML = `${rest}`
                        }

                        highlightCodeStr()
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
    <p id="gptStatus">&nbsp&nbsp
   <select id="modeSelect">
      <option value="Default">默认线路</option>
      <option value="CHATGPT">CHATGPT</option>
      <option value="ANZZ">ANZZ</option>
      <option value="THEBAI">THEBAI</option>
      <option value="YQCLOUD">YQCLOUD</option>
      <option value="AIDUTU">AIDUTU</option>
      <option value="LTXUK">LTXUK</option>
      <option value="AITIANHU">AITIANHU</option>
      <option value="TDCHAT">TDCHAT</option>
      <option value="XEASY">XEASY</option>
      <option value="WGK">WGK</option>
      <option value="LTD68686">LTD68686</option>
      <option value="AILS">AILS</option>
      <option value="LERSEARCH">LERSEARCH</option>
      <option value="COOLAI">COOLAI</option>
      <option value="MYDOG">MYDOG</option>
      <option value="WOBCW">WOBCW</option>
      <option value="EXTKJ">EXTKJ</option>
      <option value="OHTOAI">OHTOAI</option>
      <option value="SUPREMES">SUPREMES</option>
      <option value="BNU120">BNU120</option>
      <option value="AIFKS">AIFKS</option>
      <option value="USESLESS">USESLESS</option>
      <option value="FTCL">FTCL</option>
      <option value="SUNLE">SUNLE</option>
    </select> 部分线路需要科学上网</p>
	<p id="warn" style="color: green;"  >&nbsp &nbsp 只针对默认和CHATGPT线路:<a id="updatePubkey" style="color: red;" href="javascript:void(0)">更新KEY</a></p>
	<p id="website">&nbsp&nbsp <a target="_blank" style="color: #a749e4;" href="https://blog.yeyusmile.top/gpt.html?random=${Math.random()}&from=js">网页版</a>=><a target="_blank" style="color: #ffbb00;" href="https://chat.openai.com/chat">CHATGPT</a>=><a target="_blank" style="color: #a515d4;" href="https://yiyan.baidu.com/">文心</a>=><a target="_blank" style="color: #c14ad4;" href="https://tongyi.aliyun.com/">通义</a>=><a target="_blank" style="color: #0bbbac;" href="https://www.bing.com/search?q=Bing+AI&showconv=1">BingAI</a>=><a target="_blank" style="color: yellowgreen;" href="https://bard.google.com/">Bard</a></p>
   <article id="gptAnswer" class="markdown-body"><div id="gptAnswer_inner">版本: 1.6.0已启动,部分需要魔法。当前线路: ${localStorage.getItem("GPTMODE") ? localStorage.getItem("GPTMODE") : "Default"}<div></article>
    </div><p></p>`
            resolve(divE)
        })
    }

    async function pivElemAddEventAndValue(append_case) {
        var search_content

        try {
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
        document.getElementById('updatePubkey').addEventListener('click', () => {
            document.getElementById("gptAnswer").innerText = "正在更新，请稍后..."
            setPubkey()
        })

        document.getElementById('modeSelect').addEventListener('change', () => {
            const selectEl = document.getElementById('modeSelect');
            const selectedValue = selectEl.options[selectEl.selectedIndex].value;
            localStorage.setItem('GPTMODE', selectedValue);

            if (selectedValue === 'COOLAI') {
                initSocket();
            }
            document.getElementById('gptAnswer').innerHTML = `切换成功，当前模式:${selectedValue}模式`;
        });


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
                    case 7: //duckduckgo
                        if (document.querySelector('.results--sidebar div')) {
                            document.querySelector('.results--sidebar div').prepend(divE)
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
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    var parentID_68686;

    function LTD68686() {
        let ops = {};
        if (parentID_68686) {
            ops = {parentMessageId: parentID_68686};
        }
        console.log(ops)
        let finalResult = [];
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://chat.68686.ltd/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://chat.68686.ltd/",
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
                            parentID_68686 = nowResult.id;
                        }

                    } catch (e) {
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


    var messageChain2 = [];//AILS
    var messageChain4 = [];//LTXUK
    var messageChain5 = [];//XEASY
    var messageChain6 = [];//MYDOG
    var messageChain7 = [];//OHTOAI
    var messageChain8 = [];//SUPREMES
    var messageChain9 = [];//bnu120
    var messageChain10 = [];//ftcl
    var messageChain3 = [];//LETSEARCH
    var messageChain1 = [
        {
            role: "system",
            content: "请以markdown的形式返回答案"
        }
    ];//default AIGCFUN

    function addMessageChain(messageChain, element) {
        if (messageChain.length >= 6) {
            messageChain.shift();
        }
        messageChain.push(element);
        console.log(messageChain)
    }

    function AILS() {

        let now = Date.now();
        const pk = `Na3dx_(?qx32l}ep?#:8:mo44;7W\\2W.:nxm:${your_qus.length}`;//查看js的generateSignature函数中的key
        let Baseurl = "https://ai.ls/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            addMessageChain(messageChain2, {role: "user", content: your_qus})//连续话
            console.log(sign)
            GM_xmlhttpRequest({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({

                    messages: messageChain2,
                    time: now,
                    pass: null,
                    sign: sign,
                    key: ""
                }),
                onloadstart: (stream) => {
                    let result = [];
                    const reader = stream.response.getReader();
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            let finalResult = result.join("")
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
                            result.push(d)
                            showAnserAndHighlightCodeStr(result.join(""))
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

        });
    }


    function LERSEARCH() {

        let baseURL = "https://chatgpt.letsearches.com/";
        addMessageChain(messageChain3, {role: "user", content: your_qus})//连续话
        GM_xmlhttpRequest({
            method: "POST",
            url: baseURL + "api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "access-code": "",
                "path": "v1/chat/completions",
                "Referer": baseURL
            },
            data: JSON.stringify({
                messages: messageChain3,
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
                            addMessageChain(messageChain3, {
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

    }



    function WGK() {

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


    var userId_yqcloud = "#/chat/" + Date.now();

    function YQCLOUD() {
        console.log(userId_yqcloud)
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://cbjtestapi.binjie.site:7777/api/generateStream",
            headers: {
                "Content-Type": "application/json",
                "Referer": "http://choiajsd.aichatos.com/",
                "origin": "choiajsd.aichatos.com",
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


    var parentID_thebai;

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

    var parentID_aidutu;

    function AIDUTU() {
        let _iam = generateRandomString(8)
        let ops = {};
        if (parentID_aidutu) {
            ops = {parentMessageId: parentID_aidutu};
        }
        console.log(ops)
        GM_xmlhttpRequest({
            url: "https://chat.aidutu.cn/api/cg/chatgpt/user/info?v=1.5",
            headers: {
                "accept": "*/*",
                "referrer": "https://chat.aidutu.cn/",
                "x-iam:": _iam,
                "content-type": "application/json"
            },
            data: JSON.stringify({
                q: your_qus,
                iam: _iam
            }),
            method: "POST",
            onload: (resp) => {
                let rs = resp.responseText;
                console.log(rs)
                let xtoken = JSON.parse(rs).data.token;
                console.log(xtoken)
                abortXml = GM_xmlhttpRequest({
                    method: "POST",
                    url: "https://chat.aidutu.cn/api/chat-process",
                    headers: {
                        "Content-Type": "application/json",
                        "Referer": "https://chat.aidutu.cn/",
                        "accept": "application/json, text/plain, */*",
                        "x-token": xtoken
                    },
                    data: JSON.stringify({
                        prompt: your_qus,
                        temperature: 0.8,
                        top_p: 1,
                        options: ops,
                        systemMessage: "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown."
                    }),
                    onloadstart: (stream) => {
                        let result = "";
                        const reader = stream.response.getReader();
                        //     console.log(reader.read)
                        let finalResult = "";
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
                                let nowResult = JSON.parse(decoder.decode(byteArray))
                                console.log(nowResult)
                                if (nowResult.text) {
                                    console.log(nowResult)
                                    finalResult = nowResult.text
                                    showAnserAndHighlightCodeStr(finalResult)
                                }
                                if (nowResult.id) {
                                    parentID_aidutu = nowResult.id;
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

            }//end onload

        })
    }


    function LTXUK() {
        let now = Date.now()
        const pk = {}.PUBLIC_SECRET_KEY;
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            console.log(sign)
            addMessageChain(messageChain4, {role: "user", content: your_qus})//连续话
            abortXml = GM_xmlhttpRequest({
                method: "POST",
                url: "https://luntianxia.uk/api/generate",
                headers: {
                    "Content-Type": "application/json",
                    "Referer": `https://luntianxia.uk/`
                },
                data: JSON.stringify({
                    messages: messageChain4,
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
                            log(rest)
                            showAnserAndHighlightCodeStr(rest)
                            addMessageChain(messageChain4, {
                                role: "assistant",
                                content: rest
                            })
                        } catch (e) {
                            //TODO handle the exception
                            console.log(e)
                            document.getElementById('gptAnswer').innerHTML = `${rest}`
                        }

                        highlightCodeStr()
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

    function XEASY() {
        let now = Date.now()
        const pk = {}.PUBLIC_SECRET_KEY;
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            console.log(sign)
            addMessageChain(messageChain5, {role: "user", content: your_qus})//连续话
            abortXml = GM_xmlhttpRequest({
                method: "POST",
                url: "https://chat6.xeasy.me/api/generate",
                headers: {
                    "Content-Type": "application/json",
                    "Referer": `https://chat6.xeasy.me/`
                },
                data: JSON.stringify({
                    messages: messageChain5,
                    time: now,
                    pass: null,
                    sign: sign
                    //key: "",
                    //usage: Math.floor(Math.random() * 8) + 1
                }),
                onloadstart: (stream) => {
                    let result = [];
                    const reader = stream.response.getReader();
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            let finalResult = result.join("")
                            console.log(finalResult)
                            showAnserAndHighlightCodeStr(finalResult)
                            addMessageChain(messageChain5, {
                                role: "assistant",
                                content: finalResult
                            })
                            return;
                        }
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        try {
                            showAnserAndHighlightCodeStr(result.join(""))
                        } catch (e) {
                            log(e)
                        }

                        return reader.read().then(processText);
                    });
                },
                responseType: "stream",

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

    function MYDOG() {

        let now = Date.now();
        const pk = {}.pkey;//查看js的generateSignature函数中的key
        let Baseurl = "https://a.mydog.buzz/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            addMessageChain(messageChain6, {role: "user", content: your_qus})//连续话
            console.log(sign)
            GM_xmlhttpRequest({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({
                    messages: messageChain6,
                    time: now,
                    continuous: true,
                    code: "",
                    sign: sign,
                    customKey: ""
                }),
                onloadstart: (stream) => {
                    let result = [];
                    const reader = stream.response.getReader();
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            let finalResult = result.join("")
                            try {
                                console.log(finalResult)
                                addMessageChain(messageChain6, {
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

        });
    }


    var parentID_wobcw;

    function WOBCW() {
        let ops = {};
        if (parentID_wobcw) {
            ops = {parentMessageId: parentID_wobcw};
        }
        console.log(ops)
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://gpt.wobcw.com/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://gpt.wobcw.com/",
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
                        let nowResult = JSON.parse(decoder.decode(byteArray))

                        if (nowResult.text) {
                            console.log(nowResult)
                            finalResult = nowResult.text
                            showAnserAndHighlightCodeStr(finalResult)
                        }
                        if (nowResult.id) {
                            parentID_wobcw = nowResult.id;
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


    var parentID_tianhu;
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
                        var jsonLines = decoder.decode(byteArray).split("\n");
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


    var parentID_anzz;

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
                            showAnserAndHighlightCodeStr(finalResult)
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


    function OHTOAI() {

        let baseURL = "https://chat.ohtoai.com/";
        addMessageChain(messageChain7, {role: "user", content: your_qus})//连续话
        GM_xmlhttpRequest({
            method: "POST",
            url: baseURL + "api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "access-code": "",
                "path": "v1/chat/completions",
                "Referer": baseURL
            },
            data: JSON.stringify({
                messages: messageChain7,
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

    }

    var parentID_extkj;

    function EXTKJ() {
        let ops = {};
        if (parentID_extkj) {
            ops = {parentMessageId: parentID_extkj};
        }
        console.log(ops)
        let pt = CryptoJS.AES.encrypt(JSON.stringify(your_qus), "__CRYPTO_SECRET__").toString()
        console.log("aes:" + pt)
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            url: "https://mirrorchat.extkj.cn/api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://mirrorchat.extkj.cn/",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: pt,
                options: ops,
                systemMessage: `You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.\nKnowledge cutoff: 2021-09-01\nCurrent date: 2023-04-${new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate()}`
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

    //https://supremes.pro/
    function SUPREMES() {

        let now = Date.now();
        let Baseurl = "https://supremes.pro/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: {}.PUBLIC_SECRET_KEY
        }).then(sign => {
            addMessageChain(messageChain8, {role: "user", content: your_qus})//连续话
            console.log(sign)
            GM_xmlhttpRequest({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({

                    messages: messageChain8,
                    time: now,
                    pass: null,
                    sign: sign,
                    key: ""
                }),
                onloadstart: (stream) => {
                    let result = [];
                    const reader = stream.response.getReader();
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            let finalResult = result.join("")
                            try {
                                console.log(finalResult)
                                addMessageChain(messageChain8, {
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

        });
    }

    //https://chat.bnu120.space/
    function BNU120() {

        let now = Date.now();
        let Baseurl = "https://chat.bnu120.space/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: {}.PUBLIC_SECRET_KEY
        }).then(sign => {
            addMessageChain(messageChain9, {role: "user", content: your_qus})//连续话
            console.log(sign)
            GM_xmlhttpRequest({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({

                    messages: messageChain9,
                    time: now,
                    pass: null,
                    sign: sign,
                    key: ""
                }),
                onloadstart: (stream) => {
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

        });
    }


    //https://chat7.aifks001.online/v1/chat/gpt/
    var aifskList = [];
    var aifsid = generateRandomString(21);

    function AIFKS() {
        let Baseurl = "https://chat7.aifks001.online/";
        let padZero = (num) => {
            // 如果数字小于 10，前面补一个 0
            return num < 10 ? `0${num}` : num;
        }
        let formatTime = () => {
            const now = new Date(); // 获取当前时间
            const hours = now.getHours(); // 获取小时
            const minutes = now.getMinutes(); // 获取分钟
            const seconds = now.getSeconds(); // 获取秒数
            // 格式化为 HH:MM:SS 的形式
            return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        }
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


    var parentID_usesless;
    var referer_uesless = "https://ai.usesless.com/chat/"+Date.now();
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


    function FTCL() {

        let now = Date.now();
        let Baseurl = "https://www.ftcl.store/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: {}.PUBLIC_SECRET_KEY
        }).then(sign => {
            addMessageChain(messageChain10, {role: "user", content: your_qus})//连续话
            console.log(sign)
            GM_xmlhttpRequest({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({

                    messages: messageChain10,
                    time: now,
                    pass: null,
                    sign: sign,
                    key: ""
                }),
                onloadstart: (stream) => {
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
                            result.push(d)
                            showAnserAndHighlightCodeStr(result.join(""))
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

        });
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
            url: "https://chat.sunls.me/conversation",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://chat.sunls.me/",
                "origin": "https://chat.sunls.me",
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
            url: "https://api.tdchat0.com/",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                // "Authorization": "Bearer null",
                "Referer": "http://hzcy5.tdchat6.com/",
                //"Host":"www.aiai.zone",
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
            }
        })

    }

    var WebsocketCoolAI;
    var resultCoolAI = [];
    var initSocket = function () {
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
            if (revData == "3") {
                socket.send("2");
            }
            if (revData == "2") {
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
    if (localStorage.getItem("GPTMODE") == "COOLAI") {
        setTimeout(initSocket, 1500);
    }


})();