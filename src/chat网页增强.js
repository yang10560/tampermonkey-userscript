// ==UserScript==
// @name         Chat网页增强
// @namespace    http://blog.yeyusmile.top/
// @version      4.83
// @description  网页增强，使你在网页中可以用GPT, 网址已经更新 https://yeyu1024.xyz/gpt.html
// @author       夜雨
// @match        *://yeyu1024.xyz/gpt.html*
// @match        *://yeyu1024.xyz/gptlight.html*
// @grant      GM_xmlhttpRequest
// @grant      GM_getResourceText
// @grant      GM_openInTab
// @grant      GM_registerMenuCommand
// @icon64     data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAZlBMVEUAAAD///+hoaFoaGhsbGy7u7vd3d2+vr76+vra2tr29va2trYrKyvg4ODs7OxXV1dgYGCtra0xMTGXl5fExMQ6OjqOjo7R0dEVFRWnp6dSUlIiIiIcHBwLCwt4eHhycnKEhIRHR0f14+hfAAADN0lEQVRYhe1WyZajMAyEsMQshgABEwIJ+f+fbC02W0yHnjnNvNYFDFbZKpUlO86v/e/Wpve/8M4TFckwSvI/cx8z11g2/tw9vZKrEIKe159GUkvwipPxVb4eQQzvYV12XX3Y/x6BT5LqUZkgWixEHF/9/hAAeozz0I8nOtzoccDfg8CbaZQrYkOGYUaEFO2RDUTT4MZefjkMpVcQo5/Wr2DSi9/bhlYPhukvZqf41l3hiiFv8xJR2CslIT+XXfc+YapojY60kG1ZA0rknj+lL4YtnGCQ4lbESSczf5R6Ugc5ee4AoL9KAwbwYXDWXJTXhaDhf2L3R44rxzkbgFgHn55Y0JJjzyeONpYLDn4CCPn7A46VaggjwIB6eEltAOConCUAcZVDXBKIHHgbp9IZ4KW0AZj8LAHaQEzaY0lmHk60AXiQ8XYFEDoVrRpXOmSfdQFfbMe7MuTOJMLU6IJqkh7PuTMVrhosAJCp2xrApA6Lk+p4VllMQjsAcNNkpzeQlKkPHhQb0VkAEgO8TSMaVqhMH/EyW57W2R7moNoBCjwDPg1QzM07QAk7o+wUrIcNwAVZ1ktAROE7gBMaEq4kaW8NgHlQOsrULiUoHjGT40PIqngHOIGYzRK22ggJz3TpbrCt7AMU9gPZwc4y5slJC7FO4woAxmcLgMMi0dF1ymSOtnMEYFDczxqtdJRM6HlAbhSvARIqHG+G5BJGqONoK2opooIMLQFaYMvWs0EJruNRV1b8vy+wqDtbEj2caAcQg5NWdIQL6IJPjIGg1gDKhLINARyxed4DpgLFq+vvKoRiEszGWmlCy0OmcyrqSxKr/eaUzFvDGnDWCX2d5zQmNdJsO4xoz8XeyqcpIdRexZ0BBOYl2r2wyHfwB2WFO0zBjS/Zv2Vc8Pey3l3kor0iR65Q+61Vr6GmttNSOtxRf+jgvfnW3eFa4CZ+3fb1k1q1uC0D3GmKC2s5zkxKvieqWbKQPvFpfbRnNF+pYn/+3ny6m0zW+9eYDIMxlQsbvKuO3zfrV5fWKMc4GLu6G+m2KY/fNNnu6/vu2drTv7fFjVuOP3dHy5MolJEqrKfvoPXp57vpr/3r9gUxwiW4OiuC3wAAAABJRU5ErkJggg==
// @connect    chatai.to
// @connect    luntianxia.uk
// @connect    pp2pdf.com
// @connect    tdchat0.com
// @connect    zw7.lol
// @connect    xeasy.me
// @connect    api.aigcfun.com
// @connect    ai5.wuguokai.top
// @connect    chat.aidutu.cn
// @connect    xjai.cc
// @connect    wobcw.com
// @connect    aifree.site
// @connect    t66.ltd
// @connect    t-chat.cn
// @connect    ai.ls
// @connect    chat.ohtoai.com
// @connect   extkj.cn
// @connect    free.anzz.top
// @connect   supremes.pro
// @connect   bnu120.space
// @connect   free-chat.asia
// @connect   chat7.aifks001.online
// @connect   sunls.me
// @connect   theb.ai
// @connect   www.ftcl.store
// @connect   chatgpt.qdymys.cn
// @connect   chat.bushiai.com
// @connect   www.pizzagpt.it
// @connect   www.phind.com
// @connect   easyai.one
// @connect   chat2.wuguokai.cn
// @connect   a0.chat
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
// @connect   anfans.cn
// @connect   6bbs.cn
// @connect   ai-yuxin.space
// @connect   cytsee.com
// @connect   yeyu1024.xyz
// @connect   gptgo.ai
// @connect   mixerbox.com
// @connect   muspimerol.site
// @connect   frechat.xyz
// @compatible   Chrome
// @compatible   Firefox
// @license    MIT
// @require    https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @website    https://yeyu1024.xyz/gpt.html
// @run-at     document-end

// ==/UserScript==

(function () {
    'use strict';
    console.log("======AI增强=====")

    const JSVer = "v4.83"
    //已更新域名，请到：https://yeyu1024.xyz/gpt.html中使用

    try {
        GM_registerMenuCommand("更新脚本", function (event) {
            GM_openInTab("https://greasyfork.org/zh-CN/scripts/463138")
        }, "updateScript");
    }catch (e) { }

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

    //toastr 封装  ----start----
    const Toast = {

        warn: function(msg, title, options) {
            try {
                toastr.warning(msg, title, options)
            }catch (e) {}
        },
        info: function(msg, title, options) {
            try {
                toastr.info(msg, title, options)
            }catch (e) {}
        },
        success: function(msg, title, options) {
            try {
                toastr.success(msg, title, options)
            }catch (e) {}
        },
        error: function(msg, title, options) {
            try {
                toastr.error(msg, title, options)
            }catch (e) {}
        },
    };
    //toastr 封装  ----end----



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


    function uuidv4() {
        let d = new Date().getTime(); // get current timestamp in ms (to ensure UUID uniqueness)
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0 // generate random nibble
            d = Math.floor(d / 16) // correspond each UUID digit to unique 4-bit chunks of timestamp
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16) // generate random hexadecimal digit
        })
        return uuid
    }

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




    let pizzaSecret;


    function PIZZA(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        GM_xmlhttpRequest({
            method: "POST",
            url: "https://www.pizzagpt.it/api/chatx-completion",
            headers: {
                "content-type": "application/json",
                "Referer": `https://www.pizzagpt.it/`,
                "origin": `https://www.pizzagpt.it`,
                "x-secret": pizzaSecret
            },
            data: JSON.stringify({
                question: your_qus
            }),
            onload: function (res) {
                if (res.status === 200) {
                    console.log('成功....')
                    console.log(res)
                    let rest = res.responseText
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
                Toast.error(`some err happends,errinfo : ${err.messages}`)
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

    let ails_clientv;
    let ails_signKey = 'WI,2rU#_r:r~aF4aJ36[.Z(/8Rv93Rf';
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
        const pk = `${ails_signKey}:${your_qus.length}`;//查看js的generateSignature函数中的key
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
                    "client-v": ails_clientv,
                    "Referer": Baseurl,
                    "from-url": "https://ai.ls/?chat=1",
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
                            GM_fillBotResponseAndSave(your_qus,finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        /*d.split("\n").forEach(item=>{
                            try {
                                let chunk = JSON.parse(item.replace(/data:/,"").trim())
                                    .choices[0].delta.content;
                                result.push(chunk)
                            }catch (ex){}
                        })*/
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
            url: "http://7shi.zw7.lol/chat.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                // "Authorization": "Bearer null",
                "Referer": "http://7shi.zw7.lol/",
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
                   GM_simulateBotResponse('访问失败了,[phind](https://www.phind.com/api/web/search)')
                }
            },

            responseType: "application/json;charset=UTF-8",
            onerror: function (err) {
                document.getElementById('gptAnswer').innerHTML =
                    `<div>some err happends,errinfo :<br>${err.messages}</div>`
            }
        });




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
            url: "https://chat1.wobcw.com/chat",
            headers: {
                "accept": "*/*",
                "referrer": "https://chat1.wobcw.com/",
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
                    url: `https://chat1.wobcw.com/stream?chat_id=${chat_id}&api_key=`,
                    headers: {
                        "Content-Type": "application/json",
                        // "Authorization": "Bearer null",
                        "Referer": "https://chat1.wobcw.com/",
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
                        Toast.error("未知错误!" + err.message)
                    }
                })
            }//end onload
        })




    }





    var parentID_anzz;
    function authAnzz(){
        console.log("authANZZ")
        GM_fetch({
            method: "POST",
            url: "https://free.anzz.top/zh",
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
            url: "https://free.anzz.top/api/chat",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://free.anzz.top/",
                "origin": "https://free.anzz.top",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                "uuid": uuidv4(),
                "model": {
                    "id": "gpt-3.5-turbo-0613",
                    "name": "GPT-3.5",
                    "maxLength": 12000,
                    "tokenLimit": 16000
                },
                "messages": [
                    {
                        "role": "user",
                        "content": your_qus
                    }
                ],
                "key": "",
                "prompt": "你是Hello-AI, 一个基于gpt-3.5-turbo接口的ChatGPT应用。你会仔细遵循用户的指示，使用Markdown格式进行回应。请对回应的重点或核心内容进行加粗",
                "temperature": 0.8,
                "deviceId":  uuidv4()
            }),
            onloadstart: (stream) => {
                let result = [];
                GM_simulateBotResponse("请稍后...")
                const reader = stream.response.getReader();
                //     console.log(reader.read)
                let finalResult;
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        GM_saveHistory(your_qus, result.join("").replace(/[anzz.top]/gi,"")
                            .replace(/hello-ai/gi,"")
                            .replace(/xxxily/gi,""));
                        return;
                    }

                    try {

                        let byteArray = new Uint8Array(value);
                        let decoder = new TextDecoder('utf-8');
                        let d = decoder.decode(byteArray);

                        result.push(d)

                        GM_fillBotResponse(result.join("").replace(/[anzz.top]/gi,"")
                            .replace(/hello-ai/gi,"")
                            .replace(/xxxily/gi,""))

                        // let dd = d.split("\n");
                        // console.log(dd[dd.length - 1])
                        // let nowResult = JSON.parse(dd[dd.length - 1])
                        //
                        // if (nowResult.text) {
                        //     console.log(nowResult)
                        //     finalResult = nowResult.text
                        //     GM_fillBotResponse(finalResult.replace(/hello-ai.anzz.top/gi,"")
                        //         .replace(/hello-ai/gi,"")
                        //         .replace(/xxxily/gi,""))
                        // }
                        // if (nowResult.id) {
                        //     parentID_anzz = nowResult.id;
                        // }

                    } catch (e) {
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                Toast.error("未知错误!" + err.message)
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
        Toast.info("此功能是普通接口的key")


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
                    Toast.error("更新失败")
                    localStorage.removeItem("useKeyTime")
                    return
                }
                console.log("gckey:" + gckey);
                localStorage.setItem("useKeyTime", 0)
                localStorage.setItem("aigcfunkey", gckey)
                Toast.success("更新成功：" + gckey)
            }
        });
    }





    let bnuKey;
    let bnuList;
    let bnuInt = 0;
    let messageChain9 = []
    function BNU120(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let now = Date.now();
        let Baseurl = bnuList[bnuInt].url
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
                    "Content-Type": "text/plain;charset=UTF-8",
                    "Referer": Baseurl,
                    "accept":  "*/*"
                },
                data: JSON.stringify({
                    model: "gpt-3.5-turbo-1106",
                    messages: messageChain9,
                    time: now,
                    pass: null,
                    sign: sign
                }),
                responseType: "stream"
            }).then((stream) => {
                GM_simulateBotResponse("...")
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
                            GM_fillBotResponseAndSave(your_qus,finalResult)
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
            },function (reason) {
                console.log(reason)
            }).catch((ex)=>{
                console.log(ex)
            });

        });
    }


    let messageChain_anseapp = [];
    async function ANSEAPP(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let baseURL = "https://forward.free-chat.asia/";
        addMessageChain(messageChain_anseapp, {role: "user", content: your_qus})//连续话
        GM_fetch({
            method: "POST",
            url: baseURL + "v1/chat/completions",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer undefined`,
                "Referer": 'https://anse.free-chat.asia/'
            },
            data: JSON.stringify({
                "model": "gpt-3.5-turbo-16k",
                "messages": messageChain_anseapp,
                "temperature": 0.7,
                "max_tokens": 4096,
                "stream": true
            }),
            responseType: "stream"
        }).then((stream) => {
            let result = [];
            let finalResult = [];
            GM_simulateBotResponse("...")
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    finalResult = result.join("")
                    addMessageChain(messageChain_anseapp,
                        {role: "assistant", content: finalResult.replace(/muspimerol/gi, "")}
                    )//连续话
                    GM_fillBotResponseAndSave(your_qus,finalResult.replace(/muspimerol/gi, ""))
                    return;
                }

                try {
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    console.log("raw:", d)
                    let dd = d.replace(/data: /g, "").split("\n\n")
                    console.log("dd:", dd)
                    dd.forEach(item => {
                        try {
                            let delta = JSON.parse(item).choices[0].delta.content
                            result.push(delta)
                            GM_fillBotResponse(result.join("").replace(/muspimerol/gi, ""))
                        } catch (e) {

                        }
                    })
                } catch (e) {
                    console.log(e)
                }


                return reader.read().then(processText);
            });
        },function (err) {
            console.error(err)
            Toast.error("未知错误!" + err.message)
        })

    }






    //https://chat7.aifks001.online/v1/chat/gpt/
    var aifskList = [];
    var aifsid = generateRandomString(21);

    //失效
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








    // http://easyai.one
    var sessionId_easyai = generateRandomString(20);
    var easyai_ip = generateRandomIP();
    function EASYAI(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        console.log(sessionId_easyai)
         GM_xmlhttpRequest({
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
                Toast.error("未知错误!" + err.message)
            }
        })

    }



    let cleandxid = generateRandomString(21);
    let cleandxList = [];
    function CLEANDX(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)

        let Baseurl = "https://c3.a0.chat/";
        console.log(formatTime())
        cleandxList.push({"content": your_qus, "role": "user", "nickname": "我", "time": `${formattedDate()} ${formatTime()}`, "isMe": true})
        cleandxList.push({"content":"正在思考中...","role":"assistant","nickname":"小助手","time": `${formattedDate()} ${formatTime()}`,"isMe":false})
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
                "X-Forwarded-For": generateRandomIP(),
                "Referer": Baseurl,
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                "list": cleandxList,
                "id": cleandxid,
                "title": your_qus,
                "prompt": "",
                "temperature": 0.5,
                "time": `${formattedDate()} ${formatTime()}`,
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
                                "nickname": "小助手",
                                "time": `${formattedDate()} ${formatTime()}`,
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
    let promptboom_did = 'dd633043916550bea93f56e1af08debd'
    let promptboom_token = ''
    let promptboom_url = ''
    let promptboom_version = '1.0'
    let messageChain10 = []
    async function PRTBOOM(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        addMessageChain(messageChain10, {role: "user", content: your_qus})//连续话

        const t = Date.now()
        const r = t + ":" + "question:" + promptboom_token
        const sign = CryptoJS.SHA256(r).toString();
        console.log(sign)
        let request_json = {
            'did': promptboom_did ? promptboom_did : 'dd633043916550bea93f56e1af08debd',
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

        GM_fetch({
            method: "POST",
            url: promptboom_url ? promptboom_url : 'https://api2.promptboom.com/cfdoctetstream',
            headers: {
                "Content-Type": "application/json",
                "version": promptboom_version,
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
                        GM_fillBotResponseAndSave(your_qus, finalResult)
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

        /*let rootDomain = "promptboom.com";

        let apiList = [`https://api2.${rootDomain}/cfdoctetstream`, `https://api2.${rootDomain}/cfdoctetstream2`, `https://api2.${rootDomain}/cfdoctetstream3`]
        apiList.sort(() => Math.random() - 0.5);
        let apiListBackup = [`https://api2.${rootDomain}/cfdoctetstream4`, `https://api2.${rootDomain}/cfdoctetstream5`, `https://api2.${rootDomain}/cfdoctetstream6`]

        let finalApiList = apiList.concat(apiListBackup)


        for (let cfdoctetstream_url of finalApiList) {
            console.log(cfdoctetstream_url)

            break;
        }*/



    }


    async function ChatGO(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let response = await GM_fetch({
            method: "GET",
            url: `https://gptgo.ai/action_get_token.php?q=${encodeURIComponent(your_qus)}&hlgpt=default`,
            headers: {
                "Referer": "https://gptgo.ai/?hl=zh",
                "origin": "https://gptgo.ai/",
            }
        });
        let resp = response.responseText;
        if(!resp){
            return ;
        }
        let tk = JSON.parse(resp).token;
        console.log("tk:",tk)
        GM_fetch({
            method: "GET",
            url: `https://gptgo.ai/action_ai_gpt.php?token=${tk}`,
            headers: {
                "Referer": "https://gptgo.ai/?hl=zh",
                "origin": "https://gptgo.ai/",
                "accept": "text/event-stream"
            },
            responseType:"stream"
        }).then((stream)=>{
            let result = []
            GM_simulateBotResponse("...")
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    GM_saveHistory(your_qus,result.join(""))
                    return;
                }
                try {
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    console.warn(d)
                    d.split("\n").forEach(item=>{
                        try {
                            let chunk = JSON.parse(item.replace(/data:/,"").trim())
                                .choices[0].delta.content;
                            result.push(chunk)
                        }catch (ex){

                        }
                    })
                    GM_fillBotResponse(result.join(""))

                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });
        },reason => {
            console.log(reason)
        }).catch((ex)=>{
            console.log(ex)
        })


    }


    async function MixerBox(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        GM_fetch({
            method: "POST",
            url: `https://chatai.mixerbox.com/api/chat/stream`,
            headers: {
                "Referer": "https://chatai.mixerbox.com/chat",
                "origin": "https://chatai.mixerbox.com",
                "accept": "*/*",
                "content-type": "application/json",
                "user-agent": "Mozilla/5.0 (Android 12; Mobile; rv:107.0) Gecko/107.0 Firefox/107.0"
            },
            data:JSON.stringify({
                "prompt": [
                    {
                        "role": "user",
                        "content": your_qus
                    }
                ],
                "lang": "zh",
                "model": "gpt-3.5-turbo",
                "plugins": [],
                "pluginSets": [],
                "getRecommendQuestions": true,
                "isSummarize": false,
                "webVersion": "1.4.5",
                "userAgent": "Mozilla/5.0 (Android 12; Mobile; rv:107.0) Gecko/107.0 Firefox/107.0",
                "isExtension": false
            }),
            responseType:"stream"
        }).then((stream)=>{
            let result = []
            GM_simulateBotResponse("...")
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    GM_saveHistory(your_qus,result.join("").
                    replace(/\[space\]/gi," ").replace(/\[NEWLINE\]/gi,"\n"))
                    return;
                }
                try {
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    console.warn(d)
                    d.split("\n").forEach(item=>{
                        try {
                            if(item.startsWith("data")){
                                result.push(item.replace(/data:/gi,""))
                            }
                        }catch (ex){

                        }
                    })
                    GM_fillBotResponse(result.join("").
                    replace(/\[space\]/gi," ").replace(/\[NEWLINE\]/gi,"\n"))

                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });
        },reason => {
            console.log(reason)
        }).catch((ex)=>{
            console.log(ex)
        })


    }


    let parentID_thebai;

    function XJAI(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let ops = {};
        if (parentID_thebai) {
            ops = {parentMessageId: parentID_thebai};
        }
        console.log(ops)
        GM_xmlhttpRequest({
            method: "POST",
            url: "http://w3.xjai.cc/api/chat-process",
            headers: {
                "Content-Type": "application/json",
                "Referer": "http://w3.xjai.cc/",
                "accept": "application/json, text/plain, */*"
            },
            data: JSON.stringify({
                "prompt": your_qus,
                "options": ops,
                "systemMessage": "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
                "temperature": 0.8,
                "top_p": 1
            }),
            onloadstart: (stream) => {
                GM_simulateBotResponse("...")
                const reader = stream.response.getReader();
                let result = []
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        GM_saveHistory(your_qus, result.join("").replace(/x-code.fun/gi,"")
                            .replace(/bilibili/gi,"")
                            .replace(/xjai/gi,"")
                        )
                        return;
                    }
                    try {
                        let byteArray = new Uint8Array(value);
                        let decoder = new TextDecoder('utf-8');
                        let d = decoder.decode(byteArray);
                        try {
                            let jsonObj = JSON.parse(d.trim())
                            if (jsonObj.id) {
                                parentID_thebai = jsonObj.id;
                            }
                        }catch (e) {  }
                        console.log(d)
                        result.push(d)
                        GM_fillBotResponse(result.join("").replace(/x-code.fun/gi,"")
                            .replace(/bilibili/gi,"").replace(/xjai/gi,""))


                    } catch (e) {
                        console.error(e)
                    }

                    return reader.read().then(processText);
                });
            },
            responseType: "stream",
            onerror: function (err) {
                console.log(err)
                Toast.error("未知错误!")
            }
        })
    }


    //https://s.aifree.site/
    let messageChain_aifree = []
    function AIFREE(question) {
        let your_qus = question;//你的问题
        GM_handleUserInput(null)
        let now = Date.now();
        let Baseurl = `https://s.aifree.site/`
        generateSignatureWithPkey({
            t:now,
            m: your_qus || "",
            pkey: {}.PUBLIC_SECRET_KEY || ""
        }).then(sign => {
            addMessageChain(messageChain_aifree, {role: "user", content: your_qus})//连续话
            console.log(sign)
            GM_fetch({
                method: "POST",
                url: Baseurl + "api/generate",
                headers: {
                    "Content-Type": "application/json",
                    "Referer": Baseurl,
                    "X-Forwarded-For": generateRandomIP(),
                    "accept": "application/json, text/plain, */*"
                },
                data: JSON.stringify({
                    messages: messageChain_aifree,
                    time: now,
                    pass: null,
                    sign: sign
                }),
                responseType: "stream"
            }).then((stream) => {
                let result = [];
                GM_simulateBotResponse("...")
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {
                        let finalResult = result.join("")
                        try {
                            console.log(finalResult)
                            addMessageChain(messageChain_aifree, {
                                role: "assistant",
                                content: finalResult
                            })
                            GM_fillBotResponseAndSave(your_qus,finalResult)

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
            },function (reason) {
                console.log(reason)
                Toast.error("未知错误!" + reason.message)

            }).catch((ex)=>{
                console.log(ex)
                Toast.error("未知错误!" + ex.message)
            });

        });
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
                console.log(res)
                let rest = res.responseText
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
                Toast.error('访问失败了');
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



    //狐猴内置 2023年5月12日
    function LEMURCHAT(question) {
        let your_qus = question;
        GM_handleUserInput(null)
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
            GM_simulateBotResponse("...")
            reader.read().then(function processText({done, value}) {
                if (done) {
                    GM_fillBotResponseAndSave(your_qus,result.join(""))
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
                            GM_fillBotResponse(result.join(""))
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





    setTimeout(async () => {
        let rr = await GM_fetch({
            method: "GET",
            url: `https://yeyu1024.xyz/chat/haohula.json?r=${Math.random()}`
        });
        if (rr.status === 200) {
            console.log(rr)
            let result = JSON.parse(rr.responseText);

            //AILS
            ails_clientv = result.ails.clientv
            ails_signKey = result.ails.signKey
            console.log("ails_clientv:",ails_clientv)
            console.log("ails_signKey:",ails_signKey)


            //ptrboom
            promptboom_did = result.ptrboom.did
            promptboom_token = result.ptrboom.token
            promptboom_url = result.ptrboom.url
            promptboom_version = result.ptrboom.version
            console.log("promptboom_did:",promptboom_did)
            console.log("promptboom_url:",promptboom_url)
            console.log("promptboom_version:",promptboom_version)


            //bnuList
            bnuInt = result.bnu.bnuInt
            bnuKey = result.bnu.bnukey
            bnuList = result.bnu.list
            console.log("bnuInt:",bnuInt)
            console.log("bnuKey:",bnuKey)

            //pizaa
            pizzaSecret = result.pizza.secret
            console.log("pizzaSecret:",pizzaSecret)


        } else {
            console.error(rr)
        }

    })

    function isTokenExpired(token) {
        if(!token) return true
        try {
            const tokenData = JSON.parse(atob(token.split('.')[1]));

            if (!tokenData.exp) {
                return false;
            }

            const expirationTime = tokenData.exp * 1000; // Convert expiration time to milliseconds
            const currentTime = new Date().getTime();

            if (currentTime > expirationTime) {
                return true;
            } else {
                return false;
            }
        }catch (e) {
            return false
        }

        return true;
    }


    let message_yuxin = []
    let yuxin_newid = generateRandomString(21)
    function YUXIN(question) {

        let your_qus = question;
        GM_handleUserInput(null)
        message_yuxin.push({
            "role": "user",
            "content": your_qus
        })

        GM_httpRequest({
            method: "POST",
            url: "https://www.ai-yuxin.space/fastapi/api/chat",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Referer": `https://www.ai-yuxin.space/chat/new?id=${yuxin_newid}`,
                "origin": "https://www.ai-yuxin.space"
            },
            data: JSON.stringify({
                "user_id": 0,
                "token": 0,
                "msg": message_yuxin,
                "model": "gpt-3.5-turbo"
            }),
            responseType: "stream"
        },(stream) => {
            let result = []
            const reader = stream.response.getReader();
            GM_simulateBotResponse("。。。")
            reader.read().then(function processText({done, value}) {
                if (done) {
                    message_yuxin.push({
                        "role": "assistant",
                        "content": result.join("")
                    })
                    GM_fillBotResponseAndSave(your_qus, result.join(""))
                    return;
                }
                try {

                    let byteArray = new Uint8Array(value);
                    let decoder = new TextDecoder('utf-8');
                    console.log(decoder.decode(byteArray))
                    let items = decoder.decode(byteArray).split("data:");
                    console.log(items)
                    items.forEach((item) =>{
                        try{
                            let dataVal = JSON.parse(item)
                            if (dataVal.choices[0].delta.content) {
                                result.push(dataVal.choices[0].delta.content)
                            }
                        }catch (e) {

                        }
                    })
                    GM_fillBotResponse(result.join(""))

                } catch (e) {
                    // console.log(e)
                }

                return reader.read().then(processText);
            });
        })
    }




    //初始化
    setTimeout(() => {

        // let aigckeybtn = document.createElement("button");
        // aigckeybtn.innerText = "更新key"
        // aigckeybtn.setAttribute("id", "aigckey")
        // aigckeybtn.addEventListener("click", () => {
        //     getAIgcKey();
        // });

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
                case "XCBL":
                    XCBL(qus);
                    break;
                case "WOBCW":
                    WOBCW(qus);
                    break;
                 case "ANZZ":
                     ANZZ(qus);
                    break;
                case "BNU120":
                    BNU120(qus);
                    break;
               case "ANSEAPP":
                   ANSEAPP(qus);
                    break;
                case "LBB":
                    LBB(qus);
                    break;
                case "EASYAI":
                    EASYAI(qus);
                    break;
                case "CLEANDX":
                    console.log("CLEANDX")
                    CLEANDX(qus);
                    break;
                case "CVEOY":
                    console.log("CVEOY")
                    CVEOY(qus);
                    break;
                case "TOYAML":
                    console.log("TOYAML")
                    TOYAML(qus);
                    break;
                case "YQCLOUD":
                    console.log("YQCLOUD")
                    YQCLOUD(qus);
                    break;
                case "PRTBOOM":
                    console.log("PRTBOOM")
                    PRTBOOM(qus);
                    break;
               case "LEMURCHAT":
                    console.log("LEMURCHAT")
                   LEMURCHAT(qus);
                    break;
               case "YUXIN":
                    console.log("YUXIN")
                   YUXIN(qus);
                    break;
             case "ChatGO":
                    console.log("ChatGO")
                    ChatGO(qus);
                    break;
             case "MixerBox":
                    console.log("MixerBox")
                    MixerBox(qus);
                    break;
           case "XJAI":
                    console.log("MixerBox")
                    XJAI(qus);
                    break;
            case "AIFREE":
                    console.log("AIFREE")
                    AIFREE(qus);
                    break;
             default:
                    YQCLOUD(qus);
            }

        });

        document.getElementById("modeSelect").innerHTML = `<option selected value="Defalut">默认</option>
 <option value="PIZZA">PIZZA</option>
 <option value="XJAI">XJAI</option>
 <option value="AIFREE">AIFREE</option>
 <option value="YQCLOUD">YQCLOUD</option>
 <option value="PHIND">PHIND</option>
 <option value="ails">ails</option>
 <option value="tdchat">tdchat</option>
 <option value="LEMURCHAT">Lemur[停用]</option>
 <option value="ANSEAPP">ANSEAPP</option>
 <option value="BNU120">BNU120</option>
 <option value="YUXIN">YUXIN</option>
 <option value="ChatGO">ChatGO</option>
 <option value="MixerBox">MixerBox</option>
 <option value="QDYMYS">QDYMYS</option>
 <option value="WOBCW">WOBCW</option>
 <option value="ANZZ">ANZZ</option>
 <option value="LBB">LBB</option>
 <option value="PRTBOOM">PRTBOOM</option>
 <option value="EASYAI">EASYAI</option>
 <option value="XCBL">XCBL</option>
 <option value="CLEANDX">CLEANDX</option>
  <option value="CVEOY">CVEOY</option>
  <option value="TOYAML">TOYAML</option>
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


        //document.getElementById("input-container").append(aigckeybtn);
        document.getElementById("input-container").append(aiJKbtn);


        document.getElementById("chat-header").append(" -JS版本:" + JSVer)
    }, 1500)


    Toast.success(`插件已经成功加载,不能用时及时更新脚本,当前版本: ${JSVer}`);
})();