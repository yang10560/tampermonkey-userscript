// ==UserScript==
// @name         Chat网页增强
// @namespace    http://blog.yeyusmile.top/
// @version      4.23
// @description  网页增强，网址已经更新 https://yeyu1024.xyz/gpt.html
// @author       夜雨
// @match        http*://blog.yeyusmile.top/gpt.html*
// @match        *://yeyu1024.xyz/gpt.html*
// @grant       GM_xmlhttpRequest
// @grant      GM_getResourceText
// @connect    chatai.to
// @connect    luntianxia.uk
// @connect    api.tdchat0.com
// @connect    bxgav.tdchat0.com
// @connect    xeasy.me
// @connect    api.aigcfun.com
// @connect    ai5.wuguokai.top
// @connect    chat.aidutu.cn
// @connect    gpt.wobcw.com
// @connect    chat.68686.ltd
// @connect    ai.ls
// @connect    chat.ohtoai.com
// @connect    mirrorchat.extkj.cn
// @connect    free.anzz.top
// @connect   supremes.pro
// @connect   chat.bnu120.space
// @connect   chat7.aifks001.online
// @connect   sunls.me
// @connect   theb.ai
// @connect   www.ftcl.store
// @connect   chat.wobcw.com
// @connect   chatgpt.qdymys.cn
// @connect   chat.bushiai.com
// @connect   www.pizzagpt.it
// @connect   www.phind.com
// @connect   easyai.one
// @connect   chat2.wuguokai.cn
// @connect   www.gtpcleandx.xyz
// @connect   gpt.esojourn.org
// @connect   free-api.cveoy.top
// @connect   chatcleand.xyz
// @connect   154.40.59.105
// @connect   gptplus.one
// @connect   xcbl.cc
// @connect   hz-it-dev.com
// @connect   toyaml.com
// @connect   38.47.97.76
// @connect   lbb.ai
// @connect   api.aichatos.cloud
// @connect   gamejx.cn
// @connect   ai001.live
// @connect   ai003.live
// @connect   promptboom.com
// @connect   caipacity.com
// @connect   6bbs.cn
// @license    MIT
// @require    https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @website    https://yeyu1024.xyz/gpt.html
// @run-at     document-end

// ==/UserScript==

(function () {
    'use strict';
    console.log("======AI增强=====")
    var JSVer = "v4.23"
    //已更新域名，请到：https://yeyu1024.xyz/gpt.html中使用


    function GM_simulateBotResponse(str) {
        simulateBotResponse(str)
    }
    function GM_fillBotResponse(str) {
        fillBotResponse(str)
    }
    function GM_saveHistory(your_qus, ans) {
        saveHistory(your_qus,ans)
    }
    function GM_simulateBotResponseAndSave(your_qus, ans) {
        simulateBotResponse(ans)
        saveHistory(your_qus,ans)
    }

    function GM_fillBotResponseAndSave(your_qus, ans) {
        fillBotResponse(ans)
        saveHistory(your_qus,ans)
    }

    function GM_handleUserInput(InputType){
        handleUserInput(InputType)
    }


    //封装GM_xmlhttpRequest ---start---
    async function GM_fetch(details) {
        return new Promise((resolve, reject) =>{
            switch (details.responseType){
                case "stream":
                    details.onloadstart = (res)=>{
                        resolve(res)
                    };
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
    //封装GM_xmlhttpRequest ---end---



    //enc-start
    async function digestMessage(r) {
        const hash = CryptoJS.SHA256(r);
        return hash.toString(CryptoJS.enc.Hex);
    }

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
    var messageChain0 = []//chatai
    var messageChain1 = [] //eso
    var messageChain2 = []//ails
    var messageChain3 = []//XCBL
    var messageChain6 = []//HZIT


    function addMessageChain(messageChain, element) {
        if (messageChain.length >= 5) {
            messageChain.shift();
        }
        messageChain.push(element);
        console.log(messageChain)
    }

    var  formatTime = () => {
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


    //通用秘钥获取
    function getKeyFromURL(url,callback) {
        console.log(`getKeyFromURL:${url}`)
        GM_xmlhttpRequest({
            method: "GET",
            url: url + "/?" + Math.random(),
            onload: function(response) {
                let resp = response.responseText;
                let regex = /component-url="(.*?)"/i;
                let match = resp.match(regex);
                let jsurl = match[1];
                console.log("js url:" + jsurl);
                if (!jsurl) {
                    //错误
                    console.log("秘钥地址获取失败")
                    return
                }
                GM_xmlhttpRequest({
                    method: "GET",
                    url: url + jsurl + "?" + Math.random(),
                    onload: function(response) {
                        let resp = response.responseText;
                        let regex = /\`\$\{e\}:\$\{r\}:(.*?)\`/;
                        let match = resp.match(regex);
                        let mykey = match[1];
                        if (!mykey) {
                            console.log("秘钥获取失败")
                            return
                        }
                        console.log(mykey);
                        try{
                            callback(mykey);
                        }catch (e) {
                            console.log(e)
                        }

                    }
                });
            }
        });
    }





    function setChataiKey() {

        GM_fetch({
            method: "GET",
            url: "https://chatai.to/?" + Math.random()
        }).then((response)=> {
            let resp = response.responseText;
            let regex = /component-url="(.*?)"/i;
            let match = resp.match(regex);
            let jsurl = match[1];
            console.log("js url:" + jsurl);
            if (jsurl) {
                GM_fetch({
                    method: "GET",
                    url: "https://chatai.to" + jsurl + "?" + Math.random()
                }).then((response)=> {
                    let resp = response.responseText;
                    let regex = /\`\$\{e\}:\$\{r\}:(.*?)\`/;
                    let match = resp.match(regex);
                    console.log("chataikey:",match[1]);
                    chataiKey = match[1];
                })
            }

        })

    }
    setTimeout(setChataiKey)
    var chataiKey;
    function kill(question) {
        let aikey = localStorage.getItem("myAIkey") ? localStorage.getItem("myAIkey") : "";
        console.log("aikey:" + aikey)
        let your_qus = question;//你的问题
        let now = Date.now();
        let pk = chataiKey || "FjyXA27v77";//查看js的generateSignature函数中的key FjyXA27v77
        let Baseurl = "https://chatai.to/";
        console.log(pk)
        addMessageChain(messageChain0, {role: "user", content: your_qus})//连续话
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            GM_handleUserInput(3)
            console.log(sign)
            GM_xmlhttpRequest({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    "X-Forwarded-For": generateRandomIP(),
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({
                    messages: messageChain0,
                    time: now,
                    pass: null,
                    sign: sign,
                    key: aikey
                }),
                onloadstart: (stream) => {
                    let result = [];
                    GM_simulateBotResponse("...")
                    const reader = stream.response.getReader();
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            let finalResult = result.join("")
                            try {
                                GM_saveHistory(your_qus, finalResult)
                                addMessageChain(messageChain0, {
                                    role: "assistant",
                                    content: finalResult
                                })//连续对话
                            } catch (e) {
                                //TODO handle the exception
                            }
                            GM_fillBotResponse(finalResult)
                            return;
                        }
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        GM_fillBotResponse(result.join(""))
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
            });

        });
    }


    var pizzaSecret;
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

    function PIZZA(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        GM_xmlhttpRequest({
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
                    console.log(res.response)
                    let rest = res.response
                    //console.log(rest.choices[0].text.replaceAll("\n","</br>"))

                    try {
                        GM_simulateBotResponseAndSave(your_qus, JSON.parse(rest).answer.content)

                    } catch (e) {
                        console.log(e)

                    }

                } else {
                    console.log('失败')
                    console.log(res)

                }
            },

            responseType: "application/json;charset=UTF-8",
            onerror: function (err) {
                GM_simulateBotResponse(`<div>some err happends,errinfo :<br>${err.messages}</div>`)
            }
        });
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
    function AILS(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
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
                url: Baseurl + "v1/chat/completions",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer free",
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
                GM_simulateBotResponse("...")
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
                            GM_fillBotResponseAndSave(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        d.split("\n").forEach(item=>{
                            try {
                                let chunk = JSON.parse(item.replace(/data:/,"").trim())
                                    .choices[0].delta.content;
                                result.push(chunk)
                            }catch (ex){}
                        })
                        GM_fillBotResponse(result.join(""))
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


    var messageChain11 = []//xeasy
    function XEASY(question) {
        let your_qus = question
        GM_handleUserInput(null)
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
                GM_simulateBotResponse("...")
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
                            GM_fillBotResponseAndSave(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        GM_fillBotResponse(result.join(""))
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


    function TDCHAT(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(3)
        GM_xmlhttpRequest({
            method: "POST",
            //http://5p2ag.tdchat0.com/
            url: "http://bxgav.tdchat0.com/",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                // "Authorization": "Bearer null",
                "Referer": "http://tdchat0.com/",
                //"Host":"www.aiai.zone",
                "accept": "application/json, text/plain, */*"
            },
            data: `id=3.5&key=&role=&title=&text=${encodeURIComponent(question).replace(/%/g, '‰')}&length=${question.length}&stream=1`,
            onloadstart: (stream) => {
                let result = [];
                GM_simulateBotResponse("...")
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            GM_saveHistory(your_qus, finalResult);
                        } catch (e) {
                            console.error(e)
                        } finally {
                            GM_fillBotResponse(result.join(""))
                        }


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
                               GM_fillBotResponse(result.join(""))
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


    var parentID_qdymys;

    function QDYMYS(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let ops = {};
        if (parentID_qdymys) {
            ops = {parentMessageId: parentID_qdymys};
        }
        console.log(ops)
        let finalResult = [];
        GM_xmlhttpRequest({
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
                GM_simulateBotResponse("...")
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        GM_saveHistory(your_qus, finalResult);
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
                            GM_fillBotResponse(finalResult)
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


    function PHIND(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        GM_xmlhttpRequest({
            method: "POST",
            url: "https://www.phind.com/api/bing/search",
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
                    console.log(res.response)
                    let rest = res.response
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
                            GM_simulateBotResponse("...")
                            const reader = stream.response.getReader();
                            reader.read().then(function processText({done, value}) {
                                if (done) {
                                    let finalResult = result.join("")
                                    try {
                                        console.log(finalResult)
                                        GM_fillBotResponseAndSave(your_qus, finalResult)
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
                                            GM_fillBotResponse(result.join(""))
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
                    });


                } else {
                    console.log('失败')
                    console.log(res)
                    document.getElementById('gptAnswer').innerHTML = '访问失败了'
                }
            },

            responseType: "application/json;charset=UTF-8",
            onerror: function (err) {
                document.getElementById('gptAnswer').innerHTML =
                    `<div>some err happends,errinfo :<br>${err.messages}</div>`
            }
        });




    }


    var userId_wgk = "#/chat/" + Date.now();
    function WGK(question) {
        let your_qus = question;//你的问题
        console.log(userId_wgk)
        GM_handleUserInput(null)
        GM_xmlhttpRequest({
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
                GM_simulateBotResponse("请稍后...")
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {

                        try {
                            console.log(finalResult.join(""))
                            GM_saveHistory(your_qus, finalResult.join(""));
                        } catch (e) {
                            console.error(e)
                        } finally {
                            GM_fillBotResponse(finalResult.join(""))
                        }
                        return;
                    }
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(value);
                        let decoder = new TextDecoder('utf-8');
                        let nowResult = decoder.decode(byteArray)
                        finalResult.push(nowResult.replace(/fxopenai\.win/gi,""))
                        GM_fillBotResponse(finalResult.join(""))
                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                GM_fillBotResponse("erro:",err)
            }
        })

    }

    function generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    var parentID_aidutu;
    function AIDUTU(question){
        let your_qus = question;//你的问题
        console.log(parentID_aidutu)
        GM_handleUserInput(null)
        let _iam = generateRandomString(8)
        let ops = {};
        if(parentID_aidutu){
            ops = {parentMessageId: parentID_aidutu};
        }
        console.log(ops)
        GM_xmlhttpRequest({
            url: "https://chat.aidutu.cn/api/cg/chatgpt/user/info?v=1.5",
            headers: {
                "accept": "*/*",
                "referrer": "https://chat.aidutu.cn/",
                "x-iam": _iam,
                "Cookie": `_UHAO={"uid":"160941","school":"","time":1681704243,"ts":"2","name":"chat_q2Ac","head":"\/res\/head\/2ciyuan\/24.jpg","term":"201801","sign":"714653d141dac0e7709f31003b8df858"}; _UIP=0e98d94e599ef74c29fb40cb35971810`,
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
                GM_xmlhttpRequest({
                    method: "POST",
                    url: "https://chat.aidutu.cn/api/chat-process",
                    headers: {
                        "Content-Type": "application/json",
                        "Referer": "https://chat.aidutu.cn/",
                        "Cookie": `_UHAO={"uid":"160941","school":"","time":1681704243,"ts":"2","name":"chat_q2Ac","head":"\/res\/head\/2ciyuan\/24.jpg","term":"201801","sign":"714653d141dac0e7709f31003b8df858"}; _UIP=0e98d94e599ef74c29fb40cb35971810`,
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
                        GM_simulateBotResponse("请稍后...")
                        const reader = stream.response.getReader();
                        //     console.log(reader.read)
                        let finalResult = "";
                        reader.read().then(function processText({done, value}) {
                            if (done) {
                                GM_saveHistory(your_qus, finalResult);
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
                                    GM_fillBotResponse(finalResult)
                                }
                                if(nowResult.id){
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


    function WOBCW(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)

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
                 GM_xmlhttpRequest({
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
                        GM_simulateBotResponse("请稍后...")
                        const reader = stream.response.getReader();
                        reader.read().then(function processText({done, value}) {
                            if (done) {
                                finalResult = result.join("")
                                GM_saveHistory(your_qus, finalResult);
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
                                        GM_fillBotResponse(result.join(""))
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
                        GM_fillBotResponse("erro:", err)
                    }
                })
            }//end onload
        })




    }

    var parentID_68686;

    function LTD68686(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let ops = {};
        if (parentID_68686) {
            ops = {parentMessageId: parentID_68686};
        }
        console.log(ops)
        let finalResult = [];
         GM_fetch({
            method: "POST",
            url: "http://38.47.97.76/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "http://38.47.97.76/",
                "X-Forwarded-For": generateRandomIP(),
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: your_qus,
                options: ops
            }),
            responseType: "stream"
        }).then((stream) => {
             GM_simulateBotResponse("请稍后...")
             const reader = stream.response.getReader();
             reader.read().then(function processText({done, value}) {
                 if (done) {
                     GM_saveHistory(your_qus, finalResult);
                     return;
                 }
                 try {

                     let byteArray = new Uint8Array(value);
                     let decoder = new TextDecoder('utf-8');
                     console.log(decoder.decode(byteArray))
                     let d = decoder.decode(byteArray);
                     let dd = d.split("-^&^-");
                     if(dd.length === 2){
                         let nowResult = JSON.parse(dd[0])
                         if (nowResult.text) {
                             finalResult.push(dd[1])
                             GM_fillBotResponse(finalResult.join(""))
                         }
                         if (nowResult.id) {
                             parentID_68686 = nowResult.id;
                         }
                     }else{
                         finalResult.push(d)
                         GM_fillBotResponse(finalResult.join(""))
                     }


                 } catch (ex) {
                     console.log(ex)
                 }

                 return reader.read().then(processText);
             });
         }).catch(ex=>{
             console.log(ex)
         })

    }

    var parentID_anzz;
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
    function ANZZ(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let ops = {};
        if (parentID_anzz) {
            ops = {parentMessageId: parentID_anzz};
        }
        console.log(ops)
         GM_xmlhttpRequest({
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
                GM_simulateBotResponse("请稍后...")
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                let finalResult;
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        GM_saveHistory(your_qus, finalResult);
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
                            GM_fillBotResponse(finalResult)
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
                GM_simulateBotResponse("erro:", err)
            }
        })

    }

    function TOYAML(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
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
            GM_simulateBotResponse("=====")
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
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
                    GM_fillBotResponse(finalResult.join(""))

                } catch (ex) {
                    console.log(ex)
                }

                return reader.read().then(processText);
            });
        }).catch((ex)=>{
            console.log(ex)
        })




    }




    var generateRandomIP = () => {
        const ip = [];
        for (let i = 0; i < 4; i++) {
            ip.push(Math.floor(Math.random() * 256));
        }
        console.log(ip.join('.'))
        return ip.join('.');
    }

    function getAIgcKey() {
        alert("此功能是更新接口2的key")


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
                let gckey = JSON.parse(resp).data;
                if (!gckey) {
                    alert("更新失败")
                    localStorage.removeItem("useKeyTime")
                    return
                }
                console.log("gckey:" + gckey);
                localStorage.setItem("useKeyTime", 0)
                localStorage.setItem("aigcfunkey", gckey)
                alert("更新成功：" + gckey)
            }
        });
    }


    var parentID_hhw;
    function HEHANWANG() {
        let ops = {};
        if (parentID_hhw) {
            ops = {parentMessageId: parentID_hhw};
        }
        console.log(ops)
        GM_fetch({
            method: "POST",
            url: "https://chat.hehanwang.com/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://chat.hehanwang.com/",
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
                    var jsonLines = decoder.decode(byteArray).split("\n");
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


    var parentID_extkj;
    function EXTKJ(question){
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let ops = {};
        if (parentID_extkj) {
            ops = {parentMessageId: parentID_extkj};
        }
        console.log(ops)
        let pt = CryptoJS.AES.encrypt(JSON.stringify(your_qus), "__CRYPTO_SECRET__I>EO)$__M*&.fsee").toString()
        console.log("aes:" + pt)
        GM_xmlhttpRequest({
            method: "POST",
            url: "https://chat.extkj.cn/api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://chat.extkj.cn/",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                prompt: pt,
                options: ops,
                systemMessage: "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown."
            }),
            onloadstart: (stream) => {
                let result = "";
                const reader = stream.response.getReader();
                let finalResult = [];
                GM_simulateBotResponse("请稍后...")
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        GM_fillBotResponse(finalResult)
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
                            if(jsonObj.id){
                                parentID_extkj = jsonObj.id;
                            }
                            GM_fillBotResponse(finalResult)
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

    //4-25失效
    function SUPREMES(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
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
                    GM_simulateBotResponse("请稍后...")
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
                                GM_fillBotResponseAndSave(your_qus, finalResult);
                            } catch (e) {
                                console.log(e)
                            }
                            return;
                        }
                        try {
                            let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                            result.push(d)
                            GM_fillBotResponse(result.join(""))
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

    var parentID_nbai;

    function NBAI(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let ops = {};
        if (parentID_nbai) {
            ops = {parentMessageId: parentID_nbai};
        }
        console.log(ops)
        GM_xmlhttpRequest({
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
            onloadstart: (stream) => {
                let result = [];
                GM_simulateBotResponse("请稍后...")
                const reader = stream.response.getReader();
                let finalResult = "";
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        GM_saveHistory(your_qus, finalResult);
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
                            GM_fillBotResponse(finalResult)
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


    //https://chat.bnu120.space/
    var messageChain9 = [];
    function BNU120(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let now = Date.now();
        let Baseurl = "https://chat.bnu120.space/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: "sksksk"
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
                    GM_simulateBotResponse("请稍后...")
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
                                GM_fillBotResponseAndSave(your_qus, finalResult);
                            } catch (e) {
                                console.log(e)
                            }
                            return;
                        }
                        try {
                            let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                            result.push(d)
                            GM_fillBotResponse(result.join(""))
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

    function AIFKS(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
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
        GM_xmlhttpRequest({
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
                GM_simulateBotResponse("请稍后...")
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
                            GM_fillBotResponseAndSave(your_qus, finalResult);
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        console.log(d)
                        result.push(d)
                        GM_fillBotResponse(result.join(""))
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





    //https://chat.sunls.me/
    function SUNLE(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
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
         GM_xmlhttpRequest({
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
                GM_simulateBotResponse("请稍后")
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        if(finalRes){
                            GM_fillBotResponseAndSave(your_qus,finalRes)
                        }else{
                            GM_fillBotResponseAndSave(your_qus,result.join(""))
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
                           GM_fillBotResponse(result.join(""))
                        }



                    } catch (e) {
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                GM_simulateBotResponse("erro:", err)
            }
        })

    }


    // http://easyai.one
    var sessionId_easyai = generateRandomString(20);
    var easyai_ip = generateRandomIP();
    function EASYAI(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        console.log(sessionId_easyai)
         GM_xmlhttpRequest({
            method: "POST",
            url: `http://easyai.one/easyapi/v1/chat/completions?message=${encodeURI(your_qus)}&sessionId=${sessionId_easyai}`,
            headers: {
                "Referer": "http://easyai.one/chat",
                "X-Forwarded-For": easyai_ip,
                "accept": "text/event-stream"
            },
            onloadstart: (stream) => {
                let finalResult = []
                GM_simulateBotResponse("请稍后...")
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        GM_fillBotResponseAndSave(your_qus, finalResult.join(""));
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
                        GM_fillBotResponse(finalResult.join(""))


                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                GM_simulateBotResponse("erro:", err)
            }
        })

    }


    //http://www.gtpcleandx.xyz/#/home/chat
    var cleandxid = generateRandomString(21);
    var cleandxList = [];
    function CLEANDX(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)

        let Baseurl = "http://www.chatcleand.xyz/";
        console.log(formatTime())
        cleandxList.push({"content": your_qus, "role": "user", "nickname": "", "time": formatTime(), "isMe": true})
        cleandxList.push({"content":"正在思考中...","role":"assistant","nickname":"AI","time": formatTime(),"isMe":false})
        console.log(cleandxList)
        console.log(cleandxid)
        if (cleandxList.length > 6){
            cleandxList = cleandxList.shift();
        }
        GM_xmlhttpRequest({
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
                GM_simulateBotResponse("请稍后...")
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
                            GM_fillBotResponseAndSave(your_qus, finalResult);
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        console.log(d)
                        result.push(d)
                        GM_fillBotResponse(result.join(""))
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

    //https://gpt.esojourn.org/api/chat-stream
    function ESO(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let baseURL = "https://gpt.esojourn.org/";
        addMessageChain(messageChain1, {role: "user", content: your_qus})//连续话
        GM_xmlhttpRequest({
            method: "POST",
            url: baseURL + "api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "access-code": "586-481-525B",
                "path": "v1/chat/completions",
                "Referer": baseURL
            },
            data: JSON.stringify({
                messages: messageChain1,
                stream: true,
                model: "gpt-3.5-turbo",
                temperature: 1,
                max_tokens: 2000,
                presence_penalty: 0
            }),
            onloadstart: (stream) => {
                let result = [];
                GM_simulateBotResponse("请稍后...")
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            addMessageChain(messageChain1, {
                                role: "assistant",
                                content: finalResult
                            })
                            GM_fillBotResponseAndSave(your_qus, finalResult);
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        GM_fillBotResponse(result.join(""))
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

    function XCBL(question) {
        //同LBB
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let baseURL = "https://52221239187007.ai003.live/";
        addMessageChain(messageChain3, {role: "user", content: your_qus})//连续话
        GM_xmlhttpRequest({
            method: "POST",
            url: baseURL + "api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "path": "v1/chat/completions",
                "Referer": baseURL,
                "orgin":"https://52221239187007.ai003.live"
            },
            data: JSON.stringify({
                messages: messageChain3,
                stream: true,
                model: "gpt-3.5-turbo",
                temperature: 1,
                presence_penalty: 0
            }),
            onloadstart: (stream) => {
                let result = [];
                GM_simulateBotResponse("请稍后...")
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
                            GM_fillBotResponseAndSave(your_qus, finalResult);
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        GM_fillBotResponse(result.join(""))
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


    //var promptboom_did = generateRandomString(32)
    var promptboom_did = 'dd633043916550bea93f56e1af08debd'
    var messageChain10 = []
    async function PRTBOOM(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        addMessageChain(messageChain10, {role: "user", content: your_qus})//连续话

        const t = Date.now()
        const r = t + ":" + "question" + ":please_do_not_hack_me_you_are_so_talented_you_can_contact_me_and_let_us_make_money_together"
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
                GM_simulateBotResponse("请稍后...")
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
                            GM_fillBotResponseAndSave(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d.replace(/<strong.*?<\/strong>/gi,''))
                        GM_fillBotResponse(result.join(""))
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


    //https://ai1.chagpt.fun/
    function CVEOY(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
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
                GM_simulateBotResponse("请稍后...")
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {

                        try {
                            let finalResult = result.join("")
                            console.log(finalResult)
                            GM_fillBotResponseAndSave(your_qus, finalResult);
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
                        GM_fillBotResponse(result.join(""))
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


    async function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function HZIT(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let baseURL = "https://20220507.6bbs.cn/";
        addMessageChain(messageChain6, {role: "user", content: your_qus})//连续话
        let res = await GM_fetch({
            method: "POST",
            url: baseURL + "api/chat-stream",
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "origin": "https://20220507.6bbs.cn",
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
            GM_simulateBotResponse("...")
            console.log('成功....')
            console.log(res.response)
            let rest = JSON.parse(res.response).data;
            console.log(rest)
            for (let i = 0; i < 25; i++) {
                console.log("hzit",i)
                let rr = await GM_fetch({
                    method: "POST",
                    url: baseURL + "api/getOne",
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "*/*",
                        "origin": "https://20220507.6bbs.cn",
                        "path": "v1/chat/completions",
                        "Referer": baseURL
                    },
                    data: JSON.stringify({
                        id: rest
                    })
                });
                if (rr.status === 200) {
                    console.log(rr)
                    let result = JSON.parse(rr.response).data;
                    if(!result) {
                        await delay(3000)
                        continue;
                    }
                    if(!result.resTime){
                        GM_fillBotResponse(result.res || result)
                        await delay(3000)
                        continue
                    }
                    GM_fillBotResponseAndSave(your_qus, result.res || result)
                    addMessageChain(messageChain6, {
                        role: "assistant",
                        content: result.res || result
                    })
                    break;
                }else {
                    console.log(res)
                    GM_fillBotResponse('访问失败了')
                }
            }

        } else {
            console.log(res)
            GM_simulateBotResponse('访问失败了')
        }

    }


    //4-25
    var messageChain8 = []; //lbb

    function LBB(question) {
        XCBL(question);//同
        return;
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let baseURL = "https://132122401530.ai001.live/";
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
                console.log(res.response)
                let rest = res.response
                try {
                    addMessageChain(messageChain8, {
                        role: "assistant",
                        content: rest
                    })
                    GM_simulateBotResponseAndSave(your_qus, rest);

                } catch (ex) {
                    console.log(ex)
                    GM_simulateBotResponse(rest);
                }

            } else {
                GM_simulateBotResponse('访问失败了');
            }
        },reason => {
            console.log(reason)
        }).catch((ex)=>{
            console.log(ex)
        })

    }



    var userId_yqcloud = "#/chat/" + Date.now();

    function YQCLOUD(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        console.log(userId_yqcloud)
        GM_fetch({
            method: "POST",
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
            responseType: "stream"
        }).then((stream) => {
            let result = [];
            GM_simulateBotResponse("...")
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    let finalResult = result.join("")
                    GM_fillBotResponseAndSave(your_qus, finalResult);
                    return;
                }
                let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                result.push(d)
                try {
                    console.log(result.join(""))
                    GM_fillBotResponse(result.join(""))
                } catch (e) {
                    console.log(e)
                }
                return reader.read().then(processText);
            })
        }, (reason)=> {
                console.log(reason)
                GM_fillBotResponse("error:", reason);
            }
        ).catch((ex)=>{
            console.log(ex)
        })

    }


    var gamejx_group_id;
    function setGroupid_gamejx() {
        GM_fetch({
            method: "POST",
            url: "https://chat.gamejx.cn/go/api/group/add",
            headers: {
                "Referer": `https://chat.gamejx.cn/`,
                "Content-Type": "application/json",
                "Authorization": "YlYiuXaoawWHulNEjDxKOxg6OWmUOHa2Nf9lOR12iL0="
            },
            data:JSON.stringify({
                version: "",
                os: "pc",
                language: "zh",
                pars: {
                    user_id: "594578",
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

    setTimeout(setGroupid_gamejx)

    let is_first_gamejx = true;
    async function GAMEJX(question){
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let req1 = await GM_fetch({
            method: "POST",
            url: "https://chat.gamejx.cn/go/api/steam/see",
            headers: {
                "Referer": `https://chat.gamejx.cn/`,
                "Content-Type": "application/json",
                "Authorization": "YlYiuXaoawWHulNEjDxKOxg6OWmUOHa2Nf9lOR12iL0="
            },
            data:JSON.stringify({
                "version": "",
                "os": "pc",
                "language": "zh",
                "pars": {
                    "user_id": "594578",
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
                    url: `https://chat.gamejx.cn/go/api/event/see?question_id=${question_id}&group_id=${gamejx_group_id}&user_id=594578&token=YlYiuXaoawWHulNEjDxKOxg6OWmUOHa2Nf9lOR12iL0%3D`,
                    headers: {
                        "Content-Type": "application/json",
                        "Referer": "https://chat.gamejx.cn/",
                        "accept": "text/event-stream"
                    },
                    responseType: "stream"
                }).then((stream) => {
                    let finalResult = [];
                    GM_simulateBotResponse("...")
                    const reader = stream.response.getReader();
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            GM_fillBotResponseAndSave(finalResult.join(""))
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
                            GM_fillBotResponse(finalResult.join(""))

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

    var parentID_thebai;

    function THEBAI(question) {
        let your_qus = question;
        GM_handleUserInput(null)
        let ops = {};
        if (parentID_thebai) {
            ops = {parentMessageId: parentID_thebai};
        }
        console.log(ops)

        GM_xmlhttpRequest({
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
                let finalResult = [];
                GM_simulateBotResponse("...")
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        GM_fillBotResponseAndSave(your_qus,finalResult)
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
                            GM_fillBotResponse(finalResult)
                        }
                        if (nowResult.id) {
                            parentID_thebai = nowResult.id;
                        }

                    } catch (ex) {
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

    }

    //初始化
    setTimeout(() => {

        let aigckeybtn = document.createElement("button");
        aigckeybtn.innerText = "更新key"
        aigckeybtn.setAttribute("id", "aigckey")
        aigckeybtn.addEventListener("click", () => {
            getAIgcKey();
        });

        let aiJKbtn = document.createElement("button");
        aiJKbtn.innerText = "插件接口"
        aiJKbtn.setAttribute("id", "aiJKbtn")
        aiJKbtn.addEventListener("click", () => {
            // 获取 <select> 元素
            const selectElement = document.getElementById("modeSelect");
            // 获取选中项的索引
            const selectedIndex = selectElement.selectedIndex;
            // 获取所有选项的列表
            const options = selectElement.options;
            // 获取选中项对应的 <option> 元素的 value 属性
            const apimode = options[selectedIndex].value;

            let qus = inputField.value.trim();
            switch (apimode){
                case "PIZZA":
                    PIZZA(qus);
                    break;
                case "PHIND":
                    PHIND(qus);
                    break;
                case "ails":
                    AILS(qus);
                    break;
                case "tdchat":
                    TDCHAT(qus);
                    break;
                case "QDYMYS":
                    QDYMYS(qus);
                    break;
                case "wgk":
                    WGK(qus);
                    break;
                case "XCBL":
                    XCBL(qus);
                    break;
                case "WOBCW":
                    WOBCW(qus);
                    break;
                case "LTD68686":
                    LTD68686(qus);
                    break;
                 case "ANZZ":
                     ANZZ(qus);
                    break;
                case "HEHANWANG":
                    HEHANWANG(qus);
                    break;
                case "EXTKJ":
                    EXTKJ(qus);
                    break;
                case "LBB":
                    LBB(qus);
                    break;
                case "NBAI":
                    NBAI(qus);
                    break;
                case "AIFKS":
                    AIFKS(qus);
                    break;
               case "SUNLE":
                   SUNLE(qus);
                    break;
                case "EASYAI":
                    EASYAI(qus);
                    break;
                case "CLEANDX":
                    console.log("CLEANDX")
                    CLEANDX(qus);
                    break;
                case "ESO":
                    console.log("ESO")
                    ESO(qus);
                    break;
                case "CVEOY":
                    console.log("CVEOY")
                    CVEOY(qus);
                    break;
                case "HZIT":
                    console.log("HZIT")
                    HZIT(qus);
                    break;
                case "TOYAML":
                    console.log("TOYAML")
                    TOYAML(qus);
                    break;
                case "YQCLOUD":
                    console.log("YQCLOUD")
                    YQCLOUD(qus);
                    break;
                case "GAMEJX":
                    console.log("GAMEJX")
                    GAMEJX(qus);
                    break;
                case "PRTBOOM":
                    console.log("PRTBOOM")
                    PRTBOOM(qus);
                    break;
               case "XEASY":
                    console.log("XEASY")
                    XEASY(qus);
                    break;
               case "THEBAI":
                    console.log("THEBAI")
                   THEBAI(qus);
                    break;
                default:
                    kill(qus);
            }

        });

        document.getElementById("modeSelect").innerHTML = `<option selected value="Defalut">默认</option>
 <option value="PIZZA">PIZZA</option>
 <option value="YQCLOUD">YQCLOUD</option>
 <option value="GAMEJX">GAMEJX</option>
 <option value="THEBAI">THEBAI</option>
 <option value="PHIND">PHIND</option>
 <option value="ails">ails</option>
 <option value="tdchat">tdchat</option>
 <option value="QDYMYS">QDYMYS</option>
 <option value="wgk">wgk</option>
 <option value="WOBCW">WOBCW</option>
 <option value="LTD68686">LTD68686</option>
 <option value="ANZZ">ANZZ</option>
 <option value="HEHANWANG">HEHANWANG</option>
 <option value="EXTKJ">EXTKJ</option>
 <option value="LBB">LBB</option>
 <option value="NBAI">NBAI</option>
 <option value="AIFKS">AIFKS</option>
 <option value="PRTBOOM">PRTBOOM</option>
 <option value="SUNLE">SUNLE</option>
 <option value="EASYAI">EASYAI</option>
 <option value="XCBL">XCBL</option>
 <option value="CLEANDX">CLEANDX</option>
  <option value="ESO">ESO</option>
  <option value="CVEOY">CVEOY</option>
  <option value="HZIT">HZIT</option>
  <option value="TOYAML">TOYAML</option>
  <option value="XEASY">XEASY</option>
`;

        document.getElementById('modeSelect').addEventListener('change', () => {
            const selectEl = document.getElementById('modeSelect');
            const selectedValue = selectEl.options[selectEl.selectedIndex].value;
            localStorage.setItem('mymode', selectedValue);
        });

        if(localStorage.getItem('mymode')){
            const selectEl = document.getElementById('modeSelect');
            let optionElements = selectEl.querySelectorAll("option");
            for (let op in optionElements) {
                if(optionElements[op].value === localStorage.getItem('mymode')){
                    optionElements[op].setAttribute("selected", "selected");
                    break;
                }
            }
        }


        document.getElementById("input-container").append(aigckeybtn);
        document.getElementById("input-container").append(aiJKbtn);


        document.getElementById("chat-header").append(" -JS版本:" + JSVer)
    }, 1500)


    // Your code here...
})();