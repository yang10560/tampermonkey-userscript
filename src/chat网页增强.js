// ==UserScript==
// @name         Chat网页增强
// @namespace    http://blog.yeyusmile.top/
// @version      2.8
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
// @connect    chat.68686.ltd
// @connect    ai.ls
// @connect    chat.ohtoai.com
// @connect    mirrorchat.extkj.cn
// @connect    free.anzz.top
// @connect   supremes.pro
// @connect   chat.bnu120.space
// @connect   chat7.aifks001.online
// @license    MIT
// @require    https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @website    https://blog.yeyusmile.top/gpt.html
// @run-at     document-end

// ==/UserScript==

(function () {
    'use strict';
    console.log("AI增强")
    var JSVer = "v2.8"

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
    var messageChain4 = []//OHTOAI

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
        let pk = "92zu73NsjFjd";//查看js的generateSignature函数中的key
        if(defualtAPIPUBKEY){
            pk = defualtAPIPUBKEY;
        }
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
                    simulateBotResponse("...")
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
                            fillBotResponse(finalResult)
                            return;
                        }
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        fillBotResponse(result.join(""))
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
                    simulateBotResponse("...")
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
                            fillBotResponse(finalResult)
                            return;
                        }
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        fillBotResponse(result.join(""))
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
                    simulateBotResponse("...")
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
                            fillBotResponse(finalResult)
                            return;
                        }
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        fillBotResponse(result.join(""))
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
                simulateBotResponse("...")
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
                            fillBotResponse(result.join(""))
                        }


                        return;
                    }

                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        let delta = JSON.parse(d.replace(/data: /, "")).choices[0].delta.content
                        console.log(d)
                        result.push(delta)
                        fillBotResponse(result.join(""))
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
                    simulateBotResponse("...")
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
                            fillBotResponse(finalResult)
                            return;
                        }
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        fillBotResponse(result.join(""))
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
                simulateBotResponse("请稍后...")
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
                        simulateBotResponse("请稍后...")
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
                simulateBotResponse("请稍后...")
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

    var parentID_68686;

    function LTD68686(question) {
        let your_qus = question;//你的问题
        handleUserInput(null)
        let ops = {};
        if (parentID_68686) {
            ops = {parentMessageId: parentID_68686};
        }
        console.log(ops)
        let finalResult = [];
         GM_xmlhttpRequest({
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
                simulateBotResponse("请稍后...")
                const reader = stream.response.getReader();
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
                            parentID_68686 = nowResult.id;
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

    var parentID_anzz;
    function ANZZ(question) {
        let your_qus = question;//你的问题
        handleUserInput(null)
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
                simulateBotResponse("请稍后...")
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

                        let byteArray = new Uint8Array(chunk);
                        let decoder = new TextDecoder('utf-8');
                        console.log(decoder.decode(byteArray))
                        let nowResult = JSON.parse(decoder.decode(byteArray))

                        if (nowResult.text) {
                            console.log(nowResult)
                            finalResult = nowResult.text
                            fillBotResponse(finalResult)
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
                simulateBotResponse("erro:", err)
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


    function OHTOAI(question) {
        let your_qus = question;//你的问题
        handleUserInput(null)
        let baseURL = "https://chat.ohtoai.com/";
        addMessageChain(messageChain4, {role: "user", content: your_qus})//连续话
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
                messages: messageChain4,
                stream: true,
                model: "gpt-3.5-turbo",
                temperature: 1,
                max_tokens: 2000,
                presence_penalty: 0
            }),
            onloadstart: (stream) => {
                let result = [];
                simulateBotResponse("请稍后...")
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
                            fillBotResponse(finalResult)
                            saveHistory(your_qus, finalResult);
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        result.push(d)
                        fillBotResponse(result.join(""))
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
    function EXTKJ(question){
        let your_qus = question;//你的问题
        handleUserInput(null)
        let ops = {};
        if (parentID_extkj) {
            ops = {parentMessageId: parentID_extkj};
        }
        console.log(ops)
        let pt = CryptoJS.AES.encrypt(JSON.stringify(your_qus), "__CRYPTO_SECRET__").toString()
        console.log("aes:" + pt)
        GM_xmlhttpRequest({
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
                systemMessage: "You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.\nKnowledge cutoff: 2021-09-01\nCurrent date: 2023-04-" + new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate()
            }),
            onloadstart: (stream) => {
                let result = "";
                const reader = stream.response.getReader();
                let finalResult = [];
                simulateBotResponse("请稍后...")
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        fillBotResponse(finalResult)
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
                            fillBotResponse(finalResult)
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
    var messageChain8 = [];
    function SUPREMES(question) {
        let your_qus = question;//你的问题
        handleUserInput(null)
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
                    simulateBotResponse("请稍后...")
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
                                fillBotResponse(finalResult)
                                saveHistory(your_qus, finalResult);
                            } catch (e) {
                                console.log(e)
                            }
                            return;
                        }
                        try {
                            let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                            result.push(d)
                            fillBotResponse(result.join(""))
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
    var messageChain9 = [];
    function BNU120(question) {
        let your_qus = question;//你的问题
        handleUserInput(null)
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
                    simulateBotResponse("请稍后...")
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
                                fillBotResponse(finalResult)
                                saveHistory(your_qus, finalResult);
                            } catch (e) {
                                console.log(e)
                            }
                            return;
                        }
                        try {
                            let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                            result.push(d)
                            fillBotResponse(result.join(""))
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
        handleUserInput(null)
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
                simulateBotResponse("请稍后...")
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
                            fillBotResponse(finalResult)
                            saveHistory(your_qus, finalResult);
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        console.log(d)
                        result.push(d)
                        fillBotResponse(result.join(""))
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
                case "ltxuk":
                    ltxuk(qus);
                    break;
                case "ails":
                    AILS(qus);
                    break;
                case "tdchat":
                    TDCHAT(qus);
                    break;
                case "xeasy":
                    chat6Xeasy(qus);
                    break;
                case "wgk":
                    WGK(qus);
                    break;
                case "aidutu":
                    AIDUTU(qus);
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
                case "OHTOAI":
                    OHTOAI(qus);
                    break;
                case "EXTKJ":
                    EXTKJ(qus);
                    break;
                case "SUPREMES":
                    SUPREMES(qus);
                    break;
                case "BNU120":
                    BNU120(qus);
                    break;
                case "AIFKS":
                    AIFKS(qus);
                    break;
                default:
                    kill(qus);
            }

        });

        document.getElementById("modeSelect").innerHTML =`<option selected value="Defalut">默认</option>
 <option value="ltxuk">ltxuk</option>
 <option value="ails">ails</option>
 <option value="tdchat">tdchat</option>
 <option value="xeasy">xeasy</option>
 <option value="wgk">wgk</option>
 <option value="WOBCW">WOBCW</option>
 <option value="LTD68686">LTD68686</option>
 <option value="ANZZ">ANZZ</option>
 <option value="OHTOAI">OHTOAI</option>
 <option value="EXTKJ">EXTKJ</option>
 <option value="SUPREMES">SUPREMES</option>
 <option value="BNU120">BNU120</option>
 <option value="AIFKS">AIFKS</option>
 <option value="aidutu">aidutu</option>`;

        document.getElementById('modeSelect').addEventListener('change', () => {
            const selectEl = document.getElementById('modeSelect');
            const selectedValue = selectEl.options[selectEl.selectedIndex].value;
            localStorage.setItem('mymode', selectedValue);
        });

        if(localStorage.getItem('mymode')){
            const selectEl = document.getElementById('modeSelect');
            let optionElements = selectEl.querySelectorAll("option");
            for (let op in optionElements) {
                if(optionElements[op].value == localStorage.getItem('mymode')){
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