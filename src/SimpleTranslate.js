// ==UserScript==
// @name         中英互译
// @namespace    http://yeyu1024.xyz
// @version      1.0.0
// @description  中英互译.ect
// @description:en translate.ect
// @author       夜雨
// @match        *://*/*
// @run-at       document-end
// @icon         https://www.google.com/s2/favicons?sz=64&domain=weibo.com
// @require      https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js
// @grant        GM_addStyle
// @grant       GM_xmlhttpRequest
// @connect      api-edge.cognitive.microsofttranslator.com
// @connect      edge.microsoft.com
// @license      MIT

// ==/UserScript==


(function () {
    'use strict';

    let authCode;

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
            background: #70ac5d !important;
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
            border: 1px soli #62b651 !important;
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
    <img src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E"/>
   </div>
   <div class="translate-main-body">
    <div class="translate-main-header">
     <img width="18" src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E"/>
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
       <a id="sourceText" href="javascript:void(0)">
        <span>原文</span>
       </a>
      </li>
     </ul>
    </div>
    
   </div>
  </div>`))


    //add functions

    //废弃
    function translate(text, node) {
        if (!authCode) {
            console.error("no authCode")
            return
        }
        GM_fetch({
            method: "POST",
            url: "https://api-edge.cognitive.microsofttranslator.com/translate?from=&to=zh-Hans&api-version=3.0&includeSentenceLength=true",
            headers: {
                "authorization": `Bearer ${authCode}`,
                "Content-Type": "application/json",
            },
            data: JSON.stringify([{"Text": text}]),
            responseType: "text",
        }).then(function (res) {
            if (res.status === 200) {
                try {
                    console.log('成功....')
                    console.log(res)
                    let yiwen = JSON.parse(res.responseText)[0].translations[0].text;
                    /*node.innerText = text + "=>" + yiwen*/
                    const sp = document.createElement("span")
                    sp.setAttribute("class", "translate-span")
                    sp.innerText = yiwen
                    node.append(sp)
                } catch (ex) {
                    console.error("JSON 未知错误!", ex)
                }

            } else {
                console.error('访问失败了', res)
            }
        }, function (reason) {
            console.error(`出错了:${reason.status},${reason.statusText}`)
        });

    }
    function translatePlus(text, node) {
        if (!authCode) {
            console.error("no authCode")
            return
        }
        GM_fetch({
            method: "POST",
            url: "https://api-edge.cognitive.microsofttranslator.com/translate?from=&to=zh-Hans&api-version=3.0&includeSentenceLength=true",
            headers: {
                "authorization": `Bearer ${authCode}`,
                "Content-Type": "application/json",
            },
            data: JSON.stringify([{"Text": text}]),
            responseType: "text",
        }).then(function (res) {
            if (res.status === 200) {
                try {
                    console.log('成功....')
                    console.log(res)
                    let yiwen = JSON.parse(res.responseText)[0].translations[0].text;
                    /*node.innerText = text + "=>" + yiwen*/
                    const outersp = document.createElement("span")
                    outersp.innerText = text + " "
                    const sp = document.createElement("span")
                    sp.setAttribute("class", "translate-span")
                    sp.innerText = yiwen
                    outersp.append(sp)
                    node.replaceWith(outersp);
                } catch (ex) {
                    console.error(" 未知错误!", ex, node)
                }

            } else {
                console.error('访问失败了', res)
            }
        }, function (reason) {
            console.error(`出错了:${reason.status},${reason.statusText}`)
        });

    }

    //废弃
    function traverse(node) {
        if (!node) return;
        // 如果节点名称为pre，则跳过
        if (/^(pre|script|code)$/i.test(node.nodeName)) {
            return;
        }

        if (/translate-main/i.test(node.className)) {
            return;
        }

        // 如果节点没有子节点，则打印节点内容
        if (node.children.length === 0) {
            if (node.innerText) {
                translate(node.innerText, node)
                console.log(node.innerText);
            }
        } else {
            // 如果有子节点，则递归遍历子节点
            for (let i = 0; i < node.children.length; i++) {
                traverse(node.children[i]);
            }
        }
    }

    function traversePlus(node) {
        if (!node) return;
        // 排除标签则跳过
        if (/^(pre|script|code)$/i.test(node.nodeName)) {
            return;
        }
        //排除类名
        if (/translate-main/i.test(node.className)) {
            return;
        }

        // 如果节点没有子节点，则打印节点内容
        if (node.childNodes.length === 0) {
            if (node.textContent ) {
                if(node.textContent.trim()){
                    translatePlus(node.textContent.trim(), node)
                }

            }
        } else {
            // 如果有子节点，则递归遍历子节点
            for (let i = 0; i < node.childNodes.length; i++) {
                traversePlus(node.childNodes[i]);
            }
        }
    }


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
    let translatemainDom = document.querySelector(".translate-main")
    let translatemainFold = document.querySelector(".translate-main-fold")
    let translatearrow = document.querySelector(".translate-arrow")

    console.log(translatemainDom);
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
        traversePlus(root)
    })
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


})();

