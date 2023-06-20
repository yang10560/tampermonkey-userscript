// ==UserScript==
// @name         网页中英双显互译
// @name:en      Translation between Chinese and English
// @namespace    http://yeyu1024.xyz
// @version      1.0.0
// @description  中英互转。双语显示
// @description:en Translation between Chinese and English on web pages.
// @author       夜雨
// @match        *://*/*
// @exclude      *://*.baidu.com/*
// @run-at       document-end
// @icon         https://www.google.com/s2/favicons?sz=64&domain=translate.google.com
// @require      https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.js
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @connect      api-edge.cognitive.microsofttranslator.com
// @connect      edge.microsoft.com
// @license      MIT

// ==/UserScript==


(function () {
    'use strict';

    let authCode;

    let isDoubleShow = true //是否双显

    setInterval(() => {
        if (!document.getElementById("toastr-css")) {
            $("head").append($(
                '<link id="toastr-css" href="https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.css" rel="stylesheet">'
            ));
        }
    }, 5000)

    //toastr 封装  ----start----
    const Toast = {

        warn: function (msg, title, options) {
            try {
                toastr.warning(msg, title, options)
            } catch (e) {
            }
        },
        info: function (msg, title, options) {
            try {
                toastr.info(msg, title, options)
            } catch (e) {
            }
        },
        success: function (msg, title, options) {
            try {
                toastr.success(msg, title, options)
            } catch (e) {
            }
        },
        error: function (msg, title, options) {
            try {
                toastr.error(msg, title, options)
            } catch (e) {
            }
        },
    };

    //toastr 封装  ----end----

    async function GM_fetch(details) {
        return new Promise((resolve, reject) => {
            switch (details.responseType) {
                case "stream":
                    details.onloadstart = (res) => {
                        resolve(res)
                    }
                    break;
                default:
                    details.onload = (res) => {
                        resolve(res)
                    };
            }

            details.onerror = (res) => {
                reject(res)
            };
            details.ontimeout = (res) => {
                reject(res)
            };
            details.onabort = (res) => {
                reject(res)
            };
            GM_xmlhttpRequest(details)

        });
    }


    //add css
    GM_addStyle(`
    .translate-main{
        position: fixed !important;
        top: 60% !important;
        right: 0 !important;
        height: 200px !important;
        margin-top: -100px !important;
    }
    .translate-main-fold{
            position: absolute !important;
            right: 0 !important;
            padding: 14px 7px !important;
            text-align: center !important;
            background: #cddceb !important;
            border-top-left-radius: 4px !important;
            border-bottom-left-radius: 4px !important;
            font-size: 14px !important;
            /*line-height: 24px !important;*/
            font-weight: 600 !important;
            cursor: pointer !important;
        }
    .translate-main-body{
            position: absolute !important;
            right: -200px !important;
            width: 160px !important;
            /* height: 178px !important; */
            padding: 12px 10px !important;
            transition: .5s all !important;
            border-radius: 4px !important;
            background: #f4f7fa !important;
        }
    .translate-main.unfold .translate-main-body{
            right: 0 !important;
        }
    .translate-main-header{
            padding-bottom: 10px !important;
            padding-left: 6px !important;
            border-bottom: 1px dashed #d1d4cc !important;
            color: #70ca5d !important;
            font-size: 14px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
        }
    .translate-arrow{
            font-size: 18px !important;
            font-weight: 600 !important;
            cursor: pointer !important;
        }
    .translate-main li{
            margin-top:6px !important;
        }
    .translate-main li a{
            display:block !important;
            color:#697466 !important;
            font-size:14px !important;
            text-decoration:none !important;
            text-align:center !important;
            padding:6px 12px 4px !important;
        }
    .translate-main li a:hover{
            border-radius :4px !important;
            background:#eaebe9 !important;
            color:#62b651 !important;
      }
    .translate-span {
         display: inline;
     }
     
     .translate-span.hide {
         display: none;
     }
        `)

    //add box
    $("body").append($(`<div class="translate-main">
   <div class="translate-main-fold">
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
   </div>
   <div class="translate-main-body">
    <div class="translate-main-header">
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
     <span>中英互译</span>
     <span class="translate-arrow">&gt;</span>
    </div>
    <div class="translate-main-body">
     <ul>
      <li>
       <a id="en2zh" href="javascript:void(0)">
        <span>英转中</span>
       </a>
      </li>
      <li>
       <a id="zh2en" href="javascript:void(0)">
        <span>中转英</span>
       </a>
      </li>
      <li>
       <a id="doubleShow" href="javascript:void(0)">
        <span>双显开关</span>
       </a>
      </li>
      <li>
       <a id="sourceText" href="javascript:void(0)">
        <span>原文</span>
       </a>
      </li>
     </ul>
    </div>
    
   </div>
  </div>`))


    //add functions


    //渲染页面
    function renderPage(res, text, node) {
        try {
            let yiwen = JSON.parse(res.responseText)[0].translations[0].text;
            if(yiwen === text) return
            /*node.innerText = text + "=>" + yiwen*/
            const outersp = document.createElement("span")
            outersp.innerText = text + " "
            const sp = document.createElement("span")
            sp.setAttribute("class", "translate-span")
            sp.innerText = yiwen
            outersp.append(sp)
            //TODO 单显原文
            node.replaceWith(isDoubleShow ? outersp : sp);
        } catch (ex) {
            console.error(" 未知错误!", ex, node)
        }
    }

    //微软翻译
    function translateMicrosoft(text, node, lang) {
        if (!authCode) {
            console.error("no authCode")
            return
        }
        GM_fetch({
            method: "POST",
            url: `https://api-edge.cognitive.microsofttranslator.com/translate?from=&to=${lang}&api-version=3.0&includeSentenceLength=true`,
            headers: {
                "authorization": `Bearer ${authCode}`,
                "Content-Type": "application/json",
            },
            data: JSON.stringify([{"Text": text}]),
            responseType: "text",
        }).then(function (res) {
            if (res.status === 200) {
                renderPage(res, text, node)
            } else {
                console.error('访问失败了', res)
            }
        }, function (reason) {
            console.error(`出错了`, reason)
        });

    }


    //遍历
    function traversePlus(node, lang) {
        if (!node) return;
        // 排除标签则跳过
        if (/^(pre|script|code)$/i.test(node.nodeName)) {
            return;
        }
        //排除类名
        if (/(translate-main|bbCodeCode|mathjax-tex|gpt-container)/i.test(node.className)) {
            return;
        }

        // 如果节点没有子节点，则打印节点内容
        if (node.childNodes.length === 0) {
            if (node.textContent) {
                if (node.textContent.trim()) {
                    translateMicrosoft(node.textContent.trim(), node, lang)
                }

            }
        } else {
            // 如果有子节点，则递归遍历子节点
            for (let i = 0; i < node.childNodes.length; i++) {
                traversePlus(node.childNodes[i], lang);
            }
        }
    }


    //鉴权
    async function auth() {
        let res = await GM_fetch({
            method: "GET",
            url: "https://edge.microsoft.com/translate/auth",
            responseType: "text",
        })
        if (res.status === 200) {
            authCode = res.responseText
        } else {
            console.error('访问失败了', res)
        }
    }


    //add event
    console.log("中英互译");
    const translatemainDom = document.querySelector(".translate-main")
    const translatearrow = document.querySelector(".translate-arrow")

    //展开
    translatemainDom.addEventListener("click", () => {
        console.log("--1-")
        translatemainDom.classList.add("unfold")
    })

    //收起
    translatearrow.addEventListener("click", (event) => {
        event.stopPropagation()
        // console.log("--2-")
        translatemainDom.classList.remove("unfold")
    })

    //英转中
    document.querySelector("#en2zh").addEventListener("click", async (event) => {
        event.stopPropagation()
        await auth()
        console.log("translate....")
        const root = document.body;
        traversePlus(root,"zh-Hans")
    })

    //中转英
    document.querySelector("#zh2en").addEventListener("click", async (event) => {
        event.stopPropagation()
        await auth()
        console.log("translate....")
        const root = document.body;
        traversePlus(root,"en")
    })

    //原文
    const sourceText = document.querySelector("#sourceText")
    sourceText.addEventListener("click", (event) => {
        event.stopPropagation()
        if (sourceText.querySelector("span").innerText === '原文') {
            document.querySelectorAll(".translate-span").forEach((node) => {
                node.classList.add("hide")
            });
            sourceText.querySelector("span").innerText = '译文'
        } else {
            document.querySelectorAll(".translate-span").forEach((node) => {
                node.classList.remove("hide")
            });
            sourceText.querySelector("span").innerText = '原文'
        }

    })


    //双显
    const doubleShow = document.querySelector("#doubleShow")
    doubleShow.addEventListener("click", (event) => {
        event.stopPropagation()
        if (isDoubleShow) {
            isDoubleShow = false;
            Toast.error("双显已关")
        } else {
            isDoubleShow = true;
            Toast.success("双显已开")
        }

    })

    //attach
    //translatemainDom.attachShadow({ mode: 'open' })

})();

