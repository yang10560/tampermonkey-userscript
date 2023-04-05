// ==UserScript==
// @name         Chat网页增强
// @namespace    http://blog.yeyusmile.top/
// @version      1.7
// @description  网页增强
// @author       夜雨
// @match        http*://blog.yeyusmile.top/gpt.html*
// @match        http://127.0.0.1:8088/chatxc/AI1.html*
// @grant       GM_xmlhttpRequest
// @connect    chatai.to
// @connect    luntianxia.uk
// @connect    api.tdchat0.com
// @connect    chat6.xeasy.me
// @connect    ai.ls
// @license    MIT
// @require    https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @website    https://blog.yeyusmile.top/gpt.html
// @run-at     document-end

// ==/UserScript==

(function () {
    'use strict';
    console.log("AI增强")
    var JSVer = "v1.7"

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
//enc-end
    var messageChain0 = []
    var messageChain1 = []
    var messageChain2 = []
    var messageChain3 = []

    function addMessageChain(messageChain,element) {
        if (messageChain.length >= 5) {
            messageChain.shift();
        }
        messageChain.push(element);
        console.log(messageChain)
    }


    function kill(question) {
        let aikey = localStorage.getItem("myAIkey") ? localStorage.getItem("myAIkey") : "";
        console.log("aikey:"+aikey)
        let your_qus = question;//你的问题
        let now = Date.now();
        const pk = "7CCjWG8L3h3v";//查看js的generateSignature函数中的key
        let Baseurl = "https://chatai.to/";
        addMessageChain(messageChain0,{role: "user", content: your_qus})//连续话
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            handleUserInput(3)
            console.log(sign)
            GM_xmlhttpRequest({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    //"Host":"www.aiai.zone",
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
                    const reader = stream.response.getReader();
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            let finalResult = result.join("")
                            try {
                                saveHistory(your_qus, finalResult)
                                addMessageChain(messageChain0,{
                                    role: "assistant",
                                    content: finalResult
                                })//连续对话
                            } catch (e) {
                                //TODO handle the exception
                            }
                            simulateBotResponse(finalResult)
                            hideWait()
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
            });

        });
    }

    //LTX.uk
    function ltxuk(question) {

        let your_qus = question;//你的问题
        let now = Date.now();
        const pk = {}.pkey;//查看js的generateSignature函数中的key
        let Baseurl = "https://luntianxia.uk/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            addMessageChain(messageChain1,{role: "user", content: your_qus})//连续话
            handleUserInput(3)
            console.log(sign)
            GM_xmlhttpRequest({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    //"Host":"www.aiai.zone",
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({

                    messages: messageChain1,
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
                                saveHistory(your_qus, finalResult);
                                addMessageChain(messageChain1,{
                                    role: "assistant",
                                    content: finalResult
                                })//连续对话
                            } catch (e) {
                                //TODO handle the exception
                            }
                            simulateBotResponse(finalResult)
                            hideWait()
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
            });

        });
    }


    function AILS(question) {

        let your_qus = question;//你的问题
        let now = Date.now();
        const pk = `Na3dx_(?qx32l}ep?#:8:mo44;7W\\2W.:nxm:${your_qus.length}`;//查看js的generateSignature函数中的key
        let Baseurl = "https://ai.ls/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            addMessageChain(messageChain2,{role: "user", content: your_qus})//连续话
            handleUserInput(3)
            console.log(sign)
            GM_xmlhttpRequest({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    //"Host":"www.aiai.zone",
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
                                saveHistory(your_qus, finalResult);
                                addMessageChain(messageChain2,{
                                    role: "assistant",
                                    content: finalResult
                                })
                            } catch (e) {
                                //TODO handle the exception
                            }
                            simulateBotResponse(finalResult)
                            hideWait()
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
            });

        });
    }

    function TDCHAT(question){
       let your_qus = question;//你的问题
       handleUserInput(3)
       GM_xmlhttpRequest({
            method: "POST",
            url: "https://api.tdchat0.com/",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                // "Authorization": "Bearer null",
                "Referer": "http://hzcy5.tdchat6.com/",
                //"Host":"www.aiai.zone",
                "accept": "application/json, text/plain, */*"
            },
            data: `id=3.5&key=&role=&title=&text=${encodeURIComponent(question).replace(/%/g,'‰')}&length=${question.length}&stream=1`,
            onloadstart: (stream) => {
                let result = [];
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            saveHistory(your_qus, finalResult);
                        } catch (e) {
                           console.error(e)
                        }finally {
                            simulateBotResponse(finalResult)
                            hideWait()
                        }


                        return;
                    }

                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        let delta= JSON.parse(d.replace(/data: /,"")).choices[0].delta.content
                        console.log(d)
                        result.push(delta)
                    }catch (e) {
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


    function chat6Xeasy(question) {

        let your_qus = question;//你的问题
        let now = Date.now();
        const pk = {}.pkey;//查看js的generateSignature函数中的key
        let Baseurl = "https://chat6.xeasy.me/"
        generateSignatureWithPkey({
            t: now,
            m: your_qus || "",
            pkey: pk
        }).then(sign => {
            addMessageChain(messageChain3,{role: "user", content: your_qus})//连续话
            handleUserInput(3)
            console.log(sign)
            GM_xmlhttpRequest({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Bearer null",
                    "Referer": Baseurl,
                    //"Host":"www.aiai.zone",
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({

                    messages: messageChain3,
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
                                saveHistory(your_qus, finalResult);
                                addMessageChain(messageChain3,{
                                    role: "assistant",
                                    content: finalResult
                                })
                            } catch (e) {
                                //TODO handle the exception
                            }
                            simulateBotResponse(finalResult)
                            hideWait()
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
            });

        });
    }


    //初始化
    setTimeout(() => {
        let chatBtn = document.createElement("button");
        chatBtn.innerText = "插件接口"
        chatBtn.setAttribute("id", "chatX")
        chatBtn.addEventListener("click", () => {
            showWait();
            kill(inputField.value.trim());
        });

        let chatBtn1 = document.createElement("button");
        chatBtn1.innerText = "插件接口1"
        chatBtn1.setAttribute("id", "ltxuk")
        chatBtn1.addEventListener("click", () => {
            showWait();
            ltxuk(inputField.value.trim());
        });

        let chatBtn2 = document.createElement("button");
        chatBtn2.innerText = "插件接口2"
        chatBtn2.setAttribute("id", "ails")
        chatBtn2.addEventListener("click", () => {
            showWait();
            AILS(inputField.value.trim());
        });

        let chatBtn3 = document.createElement("button");
        chatBtn3.innerText = "插件接口3"
        chatBtn3.setAttribute("id", "tdchat")
        chatBtn3.addEventListener("click", () => {
            showWait();
            TDCHAT(inputField.value.trim());
        });

        let chatBtn4 = document.createElement("button");
        chatBtn4.innerText = "插件接口4"
        chatBtn4.setAttribute("id", "xeasy")
        chatBtn4.addEventListener("click", () => {
            showWait();
            chat6Xeasy(inputField.value.trim());
        });

        document.getElementById("input-container").append(chatBtn);
        document.getElementById("input-container").append(chatBtn1);
        document.getElementById("input-container").append(chatBtn2);
        document.getElementById("input-container").append(chatBtn3);
        document.getElementById("input-container").append(chatBtn4);
        document.getElementById("chat-header").append(" -JS版本:" + JSVer)
    }, 1500)


    // Your code here...
})();