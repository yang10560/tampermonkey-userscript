// ==UserScript==
// @name         Chat网页增强
// @namespace    http://blog.yeyusmile.top/
// @version      2.2
// @description  网页增强
// @author       夜雨
// @match        http*://blog.yeyusmile.top/gpt.html*
// @match        http://127.0.0.1:8088/chatxc/AI1.html*
// @grant       GM_xmlhttpRequest
// @connect    chatai.to
// @connect    luntianxia.uk
// @connect    api.tdchat0.com
// @connect    chat6.xeasy.me
// @connect    api.aigcfun.com
// @connect    ai5.wuguokai.top
// @connect    chat.aidutu.cn
// @connect    gpt.wobcw.com
// @connect    ai.ls
// @license    MIT
// @require    https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @website    https://blog.yeyusmile.top/gpt.html
// @run-at     document-end

// ==/UserScript==

(function () {
    'use strict';
    console.log("AI增强")
    var JSVer = "v2.2"

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

    function addMessageChain(messageChain, element) {
        if (messageChain.length >= 5) {
            messageChain.shift();
        }
        messageChain.push(element);
        console.log(messageChain)
    }


    function kill(question) {
        let aikey = localStorage.getItem("myAIkey") ? localStorage.getItem("myAIkey") : "";
        console.log("aikey:" + aikey)
        let your_qus = question;//你的问题
        let now = Date.now();
        const pk = "7CCjWG8L3h3v";//查看js的generateSignature函数中的key
        let Baseurl = "https://chatai.to/";
        addMessageChain(messageChain0, {role: "user", content: your_qus})//连续话
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
                    const reader = stream.response.getReader();
                    reader.read().then(function processText({done, value}) {
                        if (done) {
                            let finalResult = result.join("")
                            try {
                                saveHistory(your_qus, finalResult)
                                addMessageChain(messageChain0, {
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
            addMessageChain(messageChain1, {role: "user", content: your_qus})//连续话
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
                                addMessageChain(messageChain1, {
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
            addMessageChain(messageChain2, {role: "user", content: your_qus})//连续话
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
                                addMessageChain(messageChain2, {
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

    function TDCHAT(question) {
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
            data: `id=3.5&key=&role=&title=&text=${encodeURIComponent(question).replace(/%/g, '‰')}&length=${question.length}&stream=1`,
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
                        } finally {
                            simulateBotResponse(finalResult)
                            hideWait()
                        }


                        return;
                    }

                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        let delta = JSON.parse(d.replace(/data: /, "")).choices[0].delta.content
                        console.log(d)
                        result.push(delta)
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
            addMessageChain(messageChain3, {role: "user", content: your_qus})//连续话
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
                                addMessageChain(messageChain3, {
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

    var userId_wgk = "#/chat/" + Date.now();
    function WGK(question) {
        let your_qus = question;//你的问题
        console.log(userId_wgk)
        handleUserInput(null)
        GM_xmlhttpRequest({
            method: "POST",
            url: "https://ai5.wuguokai.top/api/chat-process",
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
                simulateBotResponse(("请稍后..."))
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {

                        try {
                            console.log(finalResult.join(""))
                            saveHistory(your_qus, finalResult.join(""));
                        } catch (e) {
                            console.error(e)
                        } finally {
                            fillBotResponse(finalResult.join(""))
                        }
                        return;
                    }
                    try {
                        // console.log(normalArray)
                        let byteArray = new Uint8Array(value);
                        let decoder = new TextDecoder('utf-8');
                        let nowResult = decoder.decode(byteArray)
                        finalResult.push(nowResult)
                        fillBotResponse(finalResult.join(""))
                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                fillBotResponse("erro:",err)
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
        handleUserInput(null)
        let _iam = generateRandomString(8)
        let ops = {};
        if(parentID_aidutu){
            ops = {parentMessageId: parentID_aidutu};
        }
        console.log(ops)
        GM_xmlhttpRequest({
            url: "https://chat.aidutu.cn/api/cg/chatgpt/user/info?v=1.3",
            headers: {
                "accept": "*/*",
                "referrer": "https://aichat.leiluan.cc/",
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
                GM_xmlhttpRequest({
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
                        simulateBotResponse(("请稍后..."))
                        const reader = stream.response.getReader();
                        //     console.log(reader.read)
                        let finalResult = "";
                        reader.read().then(function processText({done, value}) {
                            if (done) {
                                saveHistory(your_qus, finalResult);
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
                                    fillBotResponse(finalResult)
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

    var parentID_wobcw;
    function WOBCW(question) {
        let your_qus = question;//你的问题
        handleUserInput(null)
        let ops = {};
        if (parentID_wobcw) {
            ops = {parentMessageId: parentID_wobcw};
        }
        console.log(ops)
         GM_xmlhttpRequest({
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
                simulateBotResponse(("请稍后..."))
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                let finalResult;
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        saveHistory(your_qus, finalResult);
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
                            fillBotResponse(finalResult)
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

    //初始化
    setTimeout(() => {
        let chatBtn = document.createElement("button");
        chatBtn.innerText = "插件接口0"
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

        let chatBtn5 = document.createElement("button");
        chatBtn5.innerText = "更新key"
        chatBtn5.setAttribute("id", "aigckey")
        chatBtn5.addEventListener("click", () => {
            getAIgcKey();
        });

        let chatBtn6 = document.createElement("button");
        chatBtn6.innerText = "插件接口5"
        chatBtn6.setAttribute("id", "wgk")
        chatBtn6.addEventListener("click", () => {
            WGK(inputField.value.trim())
        });

        let chatBtn7 = document.createElement("button");
        chatBtn7.innerText = "插件接口6"
        chatBtn7.setAttribute("id", "aidutu")
        chatBtn7.addEventListener("click", () => {
            AIDUTU(inputField.value.trim())
        });

        let chatBtn8 = document.createElement("button");
        chatBtn8.innerText = "插件接口7"
        chatBtn8.setAttribute("id", "WOBCW")
        chatBtn8.addEventListener("click", () => {
            console.log("WOBCW")
            WOBCW(inputField.value.trim())
        });


        document.getElementById("input-container").append(chatBtn);
        document.getElementById("input-container").append(chatBtn1);
        document.getElementById("input-container").append(chatBtn2);
        document.getElementById("input-container").append(chatBtn3);
        document.getElementById("input-container").append(chatBtn4);
        document.getElementById("input-container").append(chatBtn5);
        document.getElementById("input-container").append(chatBtn6);
        document.getElementById("input-container").append(chatBtn7);
        document.getElementById("input-container").append(chatBtn8);
        document.getElementById("chat-header").append(" -JS版本:" + JSVer)
    }, 1500)


    // Your code here...
})();