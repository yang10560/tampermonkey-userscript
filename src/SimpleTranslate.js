// ==UserScript==
// @name         网页中英双显互译
// @name:en      Translation between Chinese and English
// @namespace    http://yeyu1024.xyz
// @version      1.1.1
// @description  中英互转，双语显示。为用户提供了快速准确的中英文翻译服务。无论是在工作中处理文件、学习外语、还是在日常生活中与国际友人交流，这个脚本都能够帮助用户轻松应对语言障碍。通过简单的操作，用户只需点击就会立即把网页翻译，节省了用户手动查词或使用在线翻译工具的时间，提高工作效率。
// @description:en Translation between Chinese and English on web pages.
// @author       夜雨
// @match        *://*/*
// @exclude      *://*.baidu.com/*
// @exclude      *://localhost:*/*
// @exclude      *://127.0.0.1:*/*
// @run-at       document-end
// @icon         https://www.google.com/s2/favicons?sz=64&domain=translate.google.com
// @require      https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.js
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @connect      api-edge.cognitive.microsofttranslator.com
// @connect      edge.microsoft.com
// @website      https://greasyfork.org/zh-CN/scripts/469073
// @license      MIT

// ==/UserScript==


(async function () {
    'use strict';

    let authCode;

    let isDoubleShow = true //是否双显 true/false
    let isHighlight = true //是否译文高亮 true/false
    let englishAutoTranslate = false //英文自动翻译 true/false
    let highlightColor = '#00FF00' //高亮颜色
    let selectTolang = 'zh-Hans' // 选词翻译目标语言 zh-Hans / en
    let selectMode = false //右键选词模式开关 默认关
    let leftSelectMode = false //左键选词模式开关 默认关
    let excludeSites = ['www.qq.com', 'yeyu1024.xyz'] //排除不运行的网站 exclude web host
    let noTranslateWords = ['SpringBoot', 'ChatGPT', 'YouTube', 'Twitter'] //仅当单个词不会被翻译,是组合或句子时失效

    try {
        $("head").append($(
            '<link id="toastr-css" href="https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.css" rel="stylesheet">'
        ));
    }catch (e) {
    }

    //注册菜单
    setTimeout(() => {
        GM_registerMenuCommand("更新脚本", function (event) {
            GM_openInTab("https://greasyfork.org/zh-CN/scripts/469073")
        }, "updateTranslateJS");

        GM_registerMenuCommand("英语自动翻译", function (event) {
            if (englishAutoTranslate) {
                englishAutoTranslate = false;
                GM_setValue("englishAutoTranslate", false)
                Toast.error('英语自动翻译已关闭! 请重新刷新页面.')
            } else {
                englishAutoTranslate = true;
                GM_setValue("englishAutoTranslate", true)
                Toast.success('英语自动翻译已打开! 请重新刷新页面.')
            }
        }, "englishAutoTranslate");

        GM_registerMenuCommand("排除/放行该站", function (event) {
            if (excludeSites.includes(location.host)) {
                console.log('网站已经存在,现已经放行')
                excludeSites = excludeSites.filter(function (element) {
                    return element !== location.host; // 返回不等于要删除元素的元素
                });
                console.log(excludeSites);
                Toast.success('网站已经存在,现已经放行')
            } else {
                console.log('网站不存在, 现已经排除')
                excludeSites.push(location.host)
                Toast.success('网站不存在, 现已经排除')
            }
            GM_setValue("excludeSites", JSON.stringify(excludeSites))
            console.log(excludeSites)
        }, "excludeWeb");

        GM_registerMenuCommand("鼠标右击选词开关", function (event) {
            if (selectMode) {
                console.log('鼠标右击选词翻译已经关闭',selectMode)
                selectMode = false;
                //移除事件
                document.removeEventListener('mousemove',handleMousemove);
                document.removeEventListener('mouseout', handleMouseout);
                document.removeEventListener('contextmenu', handleContextmenu);//右击事件

                Toast.success('鼠标右击选词翻译已经关闭')

            } else {
                console.log('鼠标右击选词翻译已经开启',selectMode)
                selectMode = true;
                //增加事件
                document.addEventListener('mousemove',handleMousemove);
                document.addEventListener('mouseout', handleMouseout);
                document.addEventListener('contextmenu', handleContextmenu);//右击事件
                Toast.success('鼠标右击选词翻译已经开启')
            }

        }, "selectMode");

        GM_registerMenuCommand("鼠标选词开关", function (event) {
            leftSelect()
        }, "leftSelectMode");

        GM_registerMenuCommand("选词翻译目标语言", function (event) {
            if (selectTolang === 'zh-Hans') {
                selectTolang = 'en';
                console.log('当前目标语言为英语')
                Toast.success('当前目标语言为英语')

            } else {
                selectTolang = 'zh-Hans';
                console.log('当前目标语言为中文')
                Toast.success('当前目标语言为中文')
            }
        }, "selectTolang");



    })

    //载入配置
    async function loadConfig() {
        isDoubleShow = await GM_getValue("isDoubleShow", true)
        isHighlight = await GM_getValue("isHighlight", true)
        englishAutoTranslate = await GM_getValue("englishAutoTranslate", false)

        console.warn("isDoubleShow", isDoubleShow)
        console.warn("isHighlight", isHighlight)
        console.warn("englishAutoTranslate", englishAutoTranslate)

        const excludeSitesConfig = await GM_getValue("excludeSites")
        if (excludeSitesConfig) {
            try {
                excludeSites = JSON.parse(excludeSitesConfig)
            } catch (e) {
                console.error('json出错:', e, excludeSitesConfig)
            }
        }
        console.warn('excludeSites', excludeSites)


        //toastr配置
        toastr.options = {
            // "closeButton": false,
            // "debug": false,
            // "newestOnTop": false,
            // "progressBar": false,
            "positionClass": "toast-top-right", // 提示框位置，这里填类名
            // "preventDuplicates": false,
            // "onclick": null,
            "showDuration": "300",              // 提示框渐显所用时间
            "hideDuration": "300",              // 提示框隐藏渐隐时间
            "timeOut": "3000",                  // 提示框持续时间
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    }

    try {
        await loadConfig()
    } catch (e) {
        console.error("load config error:", e)
    }

    function handleMouseout(event) {
        const target = event.target;
        if (target.classList.contains('translate-main')) {
           return
        }
        target.style.border = '';
        //console.error('mouseout' + target);
    }
    function handleMousemove(event) {
        const target = event.target;
        if (target.classList.contains('translate-main')) {
           return
        }

        target.style.border = '1px solid red';
        //console.log('mousemove' + target);
    }

    function handleContextmenu(event) {
        event.preventDefault(); // 阻止默认右键菜单的显示
        const target = event.target;
        console.warn('contextmenu' + target);
        target.style.border = '';
        //翻译
        translateTo(selectTolang, target)

    }

    async function handleMouseUp(event) {
        const selectText = window.getSelection().toString()
        console.error(event.target)
        if (/(qs_searchBoxOuter|qs_searchBox|qs_selectedText)/.test(event.target.id)) {
            return;
        } else {
            document.querySelectorAll('#qs_searchBoxOuter').forEach(item => {
                item.remove();
            })
        }

        if (!selectText) return;

        console.warn(selectText)
        const mouseX = event.pageX;
        const mouseY = event.pageY;

        console.log('鼠标位置：', mouseX, mouseY);

        $("body").append($(`
            <div id="qs_searchBoxOuter">
                <a id="qs_searchBox" style="display: block; left:${mouseX - 10}px; top: ${mouseY}px;">
                    <div id="qs_selectedText">${selectText}</div>
                </a>
            </div>`))
        const old_isDoubleShow = isDoubleShow;
        isDoubleShow = false;
        translateTo(selectTolang, document.getElementById("qs_searchBoxOuter"))
        setTimeout(()=>{
            isDoubleShow = old_isDoubleShow;
        },2000)
        console.log('鼠标松开了');
    }


    function leftSelect(){
        if (leftSelectMode) {
            console.log('鼠标选词翻译已经关闭',leftSelectMode)
            leftSelectMode = false;
            document.removeEventListener('mouseup', handleMouseUp);

            Toast.success('鼠标选词翻译已经关闭')

        } else {
            console.log('鼠标选词翻译已经开启',leftSelectMode)
            leftSelectMode = true;
            document.addEventListener('mouseup', handleMouseUp);

            Toast.success('鼠标选词翻译已经开启')
        }
    }



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

    if (excludeSites.includes(location.host)) {
        throw new Error('当前网站不允许运行,已经停止!')
    }




    setInterval(() => {
        if (!document.getElementById("toastr-css")) {
            $("head").append($(
                '<link id="toastr-css" href="https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.css" rel="stylesheet">'
            ));
        }
    }, 5000)



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
        z-index: 99999 !important;
    }
    .translate-main-fold{
            position: absolute !important;
            right: 0 !important;
            padding: 14px 7px !important;
            text-align: center !important;
            background: #cddceb !important;
            border-radius: 50%;
            border-top-right-radius: 4px !important;
            border-bottom-right-radius: 4px !important;
            font-size: 14px !important;
            /*line-height: 24px !important;*/
            font-weight: 600 !important;
            cursor: pointer !important;
            opacity: 0.35 !important;
            transition: opacity 0.35s ease !important;
        }
    .translate-main-fold:hover{
        opacity: 1 !important;
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
    .translate-main ul{
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        
    .translate-main li{
            margin-top:6px !important;
            white-space: normal !important;
            display: block;
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
         display: none !important;
     }
     
     .translate-src.hide {
         display: none !important;
     }
     
     .translate-span.light-color {
         color: ${highlightColor} !important;
     }
     
     /*选词css*/
     #qs_searchBox {
                background-color: #fff;
                color: #444;
                text-align: center;
                padding: 12px 12px 0 12px;
                max-width: 300px;
                position: absolute;
               /* height: 28px;*/
                border-radius: 6px;
                border: none;
                outline: 0;
                text-decoration: none;
                box-shadow: 0 0 0 1px rgba(0,0,0,.05),0 2px 3px 0 rgba(0,0,0,.1);
                margin-top: 8px;
                display: none;
                cursor: pointer;
                font-weight: 600;
                z-index: 30009
            }

            #qs_searchBox:hover {
                box-shadow: 0 0 0 1px rgba(0,0,0,.05),0 2px 4px 1px rgba(0,0,0,.14)
            }

            #qs_selectedText {
                /* padding-right:12px; */
                /*overflow: hidden;*/
                text-overflow: ellipsis;
                white-space: normal;
                max-width: 258px;
            }
     
        `)

    //add box
    $("body").append($(`<div class="translate-main">
   <div class="translate-main-fold">
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="green" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
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
      <li style="display: flex; justify-content: center ">
       <a id="doubleShow" href="javascript:void(0)">
        <span>双显</span>
       </a>
       <a id="highlightTranslateText" href="javascript:void(0)">
        <span>高亮</span>
       </a>
      </li>
      <li>
       <a id="leftSelectMode" href="javascript:void(0)">
        <span>选词翻译</span>
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


    function hasChinese(sentence) {
        if (!sentence) return false;
        const pattern = /[\u4E00-\u9FA5]/;
        return pattern.test(sentence);
    }

    function hasEnglish(sentence) {
        if (!sentence) return false;
        const pattern = /[a-zA-Z]/;
        return pattern.test(sentence);
    }


    //还原网页
    function clearSpan(lang) {
        document.querySelectorAll(".translate-span").forEach(item => {
            if (!isDoubleShow) {
                if (!item.className.includes(`lang-${lang}`)) {
                    item.remove()
                }
            } else {
                item.remove()
            }
        })

        document.querySelectorAll(".translate-src").forEach(item => {
            if (!isDoubleShow) {
                if (!item.className.includes(`lang-${lang}`)) {
                    const textNode = document.createTextNode(item.textContent);
                    item.replaceWith(textNode)
                }
            } else {
                const textNode = document.createTextNode(item.textContent);
                item.replaceWith(textNode)
            }

        })
    }

    //渲染页面
    function renderPage(res, text, node, lang) {
        try {
            let yiwen = JSON.parse(res.responseText)[0].translations[0].text;
            if (yiwen === text) return
            /*node.innerText = text + "=>" + yiwen*/
            const outersp = document.createElement("span")
            outersp.innerText = text + " " //src text
            const sp = document.createElement("span")
            sp.setAttribute("class",
                isDoubleShow && isHighlight ? `translate-span light-color lang-${lang}` : `translate-span lang-${lang}`)
            sp.innerText = yiwen

            if (!isDoubleShow) {
                //单
                const srcSpan = document.createElement("span")
                srcSpan.setAttribute("class", `translate-src hide lang-${lang}`)
                srcSpan.innerText = text //src text
                outersp.innerText = '' // clear src text
                outersp.append(srcSpan)
                outersp.append(sp)
            } else {
                //双
                outersp.append(sp)
            }
            node.replaceWith(outersp);

        } catch (ex) {
            console.error(" 未知错误!", ex, node)
        }
    }

    //微软翻译
    function translateMicrosoft(text, node, lang) {
        if (!authCode || !text) {
            console.error("no authCode or text:", authCode, text)
            return
        }
        if (noTranslateWords.includes(text)) {
            return;
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
                renderPage(res, text, node, lang)
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
        if (/^(pre|script|code|#comment|iframe)$/i.test(node.nodeName)) {
            return;
        }
        //排除类名
        if (/(translate-main|bbCodeCode|mathjax-tex|gpt-container|translate-span|highlight|translate-src)/i.test(node.className)) {
            return;
        }

        // console.error("nodeType:", node.nodeType)

        if (lang === 'en' && !hasChinese(node.textContent)) {
            //不含中文
            return;
        }

        if (lang === 'zh-Hans' && !hasEnglish(node.textContent)) {
            //不含英文
            return;
        }


        // 如果节点没有子节点，则打印节点内容
        if (node.childNodes.length === 0) {
            if (node.textContent) {
                //if(node.textContent.includes("checkCurrentAuth")) debugger
                const srcText = node.textContent.trim();
                if (srcText) {
                    //排除纯数字
                    if (/^\d+$/.test(srcText)) {
                        return;
                    }
                    //排除长度大于1中只有一个英文
                    if (lang === 'zh-Hans' && srcText.length > 1) {
                        // debugger
                        if (/^[a-zA-Z]$/.test(srcText.replace(/[^a-zA-Z]/g, '').trim())) {
                            return;
                        }
                    }

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

    //翻译
    async function translateTo(lang, rootNode) {
        clearSpan(lang)
        await auth()
        console.log(`translate to....${lang}`)
        const root = document.body;
        traversePlus(rootNode || root, lang)
    }

    //add event
    console.log("=========中英双显互译=======");
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
        translateTo("zh-Hans")
    })

    //中转英
    document.querySelector("#zh2en").addEventListener("click", async (event) => {
        event.stopPropagation()
        translateTo("en")
    })

    //原文
    const sourceText = document.querySelector("#sourceText")
    sourceText.addEventListener("click", (event) => {
        event.stopPropagation()
        if (sourceText.querySelector("span").innerText === '原文') {
            document.querySelectorAll(".translate-span").forEach((node) => {
                node.classList.add("hide") //hide dest text
            });

            document.querySelectorAll(".translate-src").forEach((node) => {
                node.classList.remove("hide")//show src text
            });

            sourceText.querySelector("span").innerText = '译文'
        } else {
            document.querySelectorAll(".translate-span").forEach((node) => {
                node.classList.remove("hide") //show dest text
            });

            document.querySelectorAll(".translate-src").forEach((node) => {
                node.classList.add("hide") //hide src text
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
        GM_setValue("isDoubleShow", isDoubleShow)

    })

    //高亮
    const hlBtn = document.querySelector("#highlightTranslateText")
    hlBtn.addEventListener("click", (event) => {
        event.stopPropagation()
        if (isHighlight) {
            isHighlight = false;
            Toast.error("高亮已关")
        } else {
            isHighlight = true;
            Toast.success("高亮已开")
        }
        GM_setValue("isDoubleShow", isHighlight)

    })

    //选词
    const leftSelectModeBtn = document.querySelector("#leftSelectMode")
    leftSelectModeBtn.addEventListener("click", (event) => {
        event.stopPropagation()
        leftSelect()
    })



    // 判断是不是中文网页
    function isChinesePage() {
        const lang = document.documentElement.lang
        const mainLang = document.characterSet.toLowerCase()
        const pageTitle = document.title
        return lang.substring(0, 2) === 'zh' || mainLang.substring(0, 2) === 'gb' || /[\u4E00-\u9FFF]/.test(pageTitle);
    }

    //英语自动翻译
    setTimeout(async () => {
        if (englishAutoTranslate && !isChinesePage()) {
            console.log('自动翻译')
            Toast.success('检测到英文, 正在自动翻译. 若你的网络过慢可能会出现未翻译完整，请手动翻译。关闭自动翻译请到菜单!', '', {timeOut: 10000})
            translateTo('zh-Hans')

        }
    },2000)



})();

