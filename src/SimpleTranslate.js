// ==UserScript==
// @name         网页中英双显互译
// @name:en      Translation between Chinese and English
// @namespace    http://yeyu1024.xyz
// @version      1.2.2
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
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @resource toastCss  https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.css
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        GM_setClipboard
// @grant        GM_registerMenuCommand
// @grant        GM_getResourceText
// @connect      api-edge.cognitive.microsofttranslator.com
// @connect      edge.microsoft.com
// @connect      fanyi-api.baidu.com
// @connect      translate.googleapis.com
// @website      https://greasyfork.org/zh-CN/scripts/469073
// @license      MIT

// ==/UserScript==


(async function () {
    'use strict';

    let authCode;
    const APIConst = {
        Baidu: 'baidu',
        Microsoft: 'microsoft',
        Google: 'google',
        BaiduAPI: {
            name: "baidu",
            ChineseLang: 'zh',
            EnglishLang: 'en',
            //appid 百度API有月额度(100w字符/月)限制，建议申请自己的秘钥，详见：https://fanyi-api.baidu.com/
            appid: '20230622001720783',  //appid 申请可见
            secret: 'dQVha4zSH26nMDLpfoVC'// secret 申请可见
        },
        MicrosoftAPI: {
            name: "microsoft",
            ChineseLang: 'zh-Hans',
            EnglishLang: 'en'
        },
        //google需要科学上网
        GoogleAPI: {
            name: "google",
            ChineseLang: 'zh-CN',
            EnglishLang: 'en'
        }

    }
    let currentAPI = APIConst.MicrosoftAPI //默认微软
    let isDoubleShow = true //是否双显 true/false
    let isHighlight = true //是否译文高亮 true/false
    let englishAutoTranslate = false //英文自动翻译 true/false
    let highlightColor = '#00FF00' //高亮颜色
    let selectTolang = currentAPI.ChineseLang // 选词翻译目标语言
    let selectMode = false //右键选词模式开关 true/false 默认关
    let leftSelectMode = false //左键选词模式开关 true/false 默认关
    let excludeSites = ['www.qq.com', 'yeyu1024.xyz'] //排除不运行的网站 exclude web host
    let noTranslateWords = ['SpringBoot', 'ChatGPT', 'YouTube', 'Twitter'] //仅当单个词不会被翻译,是组合或句子时失效

    let switchIndex = 0;

    let enableCache = true; //是否启用缓存 true/false 默认启用
    let maxCacheCount = 1500; //最大缓存数量

    function isEqual(obj1, obj2) {
        if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
            return obj1 === obj2;
        }

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key of keys1) {
            if (!isEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

    function addToArray(arr, obj, maxLength) {
        maxLength = maxLength || maxCacheCount;
        if (arr.length >= maxLength) {
            arr.shift();
        }

        let flag = true;
        for (let i = 0; i < arr.length; i++) {
            if (isEqual(arr[i], obj)) {
                flag = false;
                break;
            }
        }

        if (flag) {
            arr.push(obj);
        }
        return arr;
    }

    function combineArray(arr1, arr2) {
        for (let i = 0; i < arr2.length; i++) {
            addToArray(arr1, arr2[i])
        }
        return arr1;
    }

    function jsonToObject(jsonStr) {
        try {
            const obj = JSON.parse(jsonStr);
            return obj;
        } catch (error) {
            console.error('Invalid JSON string:', error);
            return [];
        }
    }

    function objectToJson(obj) {
        try {
            const jsonStr = JSON.stringify(obj);
            return jsonStr;
        } catch (error) {
            console.error('Error converting object to JSON:', error);
            return [];
        }
    }

    let cacheChanged = true;
    let tempCache;
    function readCache(key) {
        if(cacheChanged){
            const value = localStorage.getItem(key);
            const ret = (value !== null ? jsonToObject(value) : [])
            tempCache = ret;
            return ret;
        }else {
            return tempCache || [];
        }
    }
    function storeCache(key, store_arr) {
        cacheChanged = true;
        const old_cache = readCache(key)
        const new_cache = combineArray(old_cache, store_arr)
        localStorage.setItem(key, objectToJson(new_cache))
    }


    function translateFromCache(text, node, lang, key) {
        //异步
        return new Promise((resolve, reject) =>{
            if (!text) {
                //console.error("no text:", text)
                // return true;
                resolve("no text:")
                return
            }
            if (noTranslateWords.includes(text)) {
                // return true;
                resolve("do not TranslateWords")
                return
            }

            let shouldBreak = false;
            let rj = false;//reject
            try {
                const cache = readCache(key) //[{},{}...]
                if (cache) {
                    for (let i = 0; i < cache.length; i++) {
                        if (lang === currentAPI.ChineseLang) {
                            //en to zh
                            if (cache[i].english === text) {
                                setTimeout(()=>{
                                    renderPage({cacheResult: cache[i].chinese}, text, node, lang)
                                })
                                console.warn("en to zh cache: ", text)
                                shouldBreak = true;
                                break;
                                //return true;
                            }
                        } else if (lang === currentAPI.EnglishLang) {
                            //zh to en
                            if (cache[i].chinese === text) {
                                console.warn("zh to en cache: ", text)
                                setTimeout(()=>{
                                    renderPage({cacheResult: cache[i].english}, text, node, lang)
                                })
                                shouldBreak = true;
                                break;
                                //return true;
                            }
                        } else {
                            //return false;
                            shouldBreak = true;
                            rj = true;
                            break;
                        }
                    }
                }
            } catch (e) {
                console.error("translateFromCache ex", e)
                //return false;
                reject("translateFromCache ex")
                return;
            }
            if(shouldBreak){
                if(rj){
                    //中断被拒绝
                    reject('语言异常')
                }else {
                    //中断未被拒绝
                    resolve('成功缓存')
                }
            }else {
                //不中断
                reject('无缓存')
            }
            // return false;
        })
    }

    function addToastCss() {
        try {
            GM_addStyle(GM_getResourceText("toastCss"))
        } catch (e) {

        }
    }

    addToastCss()

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
                console.log('鼠标右击选词翻译已经关闭', selectMode)
                selectMode = false;
                //移除事件
                document.removeEventListener('mousemove', handleMousemove);
                document.removeEventListener('mouseout', handleMouseout);
                document.removeEventListener('contextmenu', handleContextmenu);//右击事件

                Toast.success('鼠标右击选词翻译已经关闭')

            } else {
                console.log('鼠标右击选词翻译已经开启', selectMode)
                selectMode = true;
                //增加事件
                document.addEventListener('mousemove', handleMousemove);
                document.addEventListener('mouseout', handleMouseout);
                document.addEventListener('contextmenu', handleContextmenu);//右击事件
                Toast.success('鼠标右击选词翻译已经开启')
            }

        }, "selectMode");

        GM_registerMenuCommand("鼠标选词开关", function (event) {
            leftSelect()
        }, "leftSelectMode");

        GM_registerMenuCommand("选词翻译目标语言", function (event) {
            if (selectTolang === currentAPI.ChineseLang) {
                selectTolang = currentAPI.EnglishLang;
                console.log('当前目标语言为英语')
                Toast.success('当前目标语言为英语')
            } else {
                selectTolang = currentAPI.ChineseLang;
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

        try {
            switchIndex = await GM_getValue("switchIndex", 0) - 1
            console.warn("switchIndex", switchIndex)
            switchAPI()
        } catch (ex) {
            switchIndex = 0;
            console.error("switchIndex ex:", switchIndex, ex)
        }

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

    async function handleMouseUpOrTouchend(event) {
        event.stopPropagation()

        //copyTranslatedText
        if (/copyTranslatedText/.test(event.target.id)) {
            GM_setClipboard(document.querySelector('#qs_selectedText').innerText, "text");
            console.log('复制成功')
            Toast.success("复制成功!")
            return
        }

        const selectText = window.getSelection().toString()
        //console.error(event.target)
        if (/(qs_searchBoxOuter|qs_searchBox|qs_selectedText)/.test(event.target.id)) {
            return;
        } else {
            document.querySelectorAll('#qs_searchBoxOuter').forEach(item => {
                item.remove();
            })
        }

        if (!selectText) return;

        console.warn(selectText)
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        if (event.changedTouches && event.changedTouches.length > 0) {
            mouseX = event.changedTouches[0].pageX
            mouseY = event.changedTouches[0].pageY
        }

        console.log('鼠标位置：', mouseX, mouseY);

        $("body").append($(`
                <div id="qs_searchBoxOuter">
                    <a id="qs_searchBox" style="display: block; left:${mouseX - 10}px; top: ${mouseY}px;">
                        <div id="qs_selectedText">${selectText}</div>
                        <hr>
                        <div id="qs_searchIconOuter"><span id="qs_searchIconInner"><svg id="copyTranslatedText" width="24" height="24" data-v-13fede38="" t="1679666016648" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6241" class="icon"><path data-v-13fede38="" d="M661.333333 234.666667A64 64 0 0 1 725.333333 298.666667v597.333333a64 64 0 0 1-64 64h-469.333333A64 64 0 0 1 128 896V298.666667a64 64 0 0 1 64-64z m-21.333333 85.333333H213.333333v554.666667h426.666667v-554.666667z m191.829333-256a64 64 0 0 1 63.744 57.856l0.256 6.144v575.701333a42.666667 42.666667 0 0 1-85.034666 4.992l-0.298667-4.992V149.333333H384a42.666667 42.666667 0 0 1-42.368-37.674666L341.333333 106.666667a42.666667 42.666667 0 0 1 37.674667-42.368L384 64h447.829333z" fill="#909399" p-id="6242"></path></svg></span></div>
                    </a>
                </div>
                
        `))
        const old_isDoubleShow = isDoubleShow;
        isDoubleShow = false;
        translateTo(selectTolang, document.getElementById("qs_searchBoxOuter"), true)
        setTimeout(() => {
            isDoubleShow = old_isDoubleShow;
        }, 2000)
        console.log('鼠标松开了');
    }


    function leftSelect() {
        if (leftSelectMode) {
            console.log('鼠标选词翻译已经关闭', leftSelectMode)
            leftSelectMode = false;
            document.removeEventListener('mouseup', handleMouseUpOrTouchend);
            document.removeEventListener('touchcancel', handleMouseUpOrTouchend);
            Toast.success('选词翻译已经关闭')

        } else {
            console.log('鼠标选词翻译已经开启', leftSelectMode)
            leftSelectMode = true;
            document.addEventListener('mouseup', handleMouseUpOrTouchend);
            document.addEventListener('touchcancel', handleMouseUpOrTouchend);
            Toast.success('选词翻译已经开启')
        }
    }


    function switchAPI() {
        switchIndex++;
        try {
            switch (switchIndex) {
                case 1:
                    currentAPI = APIConst.BaiduAPI
                    Toast.success('已经切换百度翻译')
                    break
                case 2:
                    currentAPI = APIConst.GoogleAPI
                    Toast.success('已经切换谷歌翻译')
                    break
                default:
                    currentAPI = APIConst.MicrosoftAPI
                    Toast.success('已经切换微软翻译')
                    switchIndex = 0
            }
        } catch (e) {
        }
        selectTolang = currentAPI.ChineseLang //重置
        //持久化
        GM_setValue("switchIndex", switchIndex)
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
            

            #qs_searchIconInner {
                display: inline-flex;
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
      <li style="display: flex; justify-content: center ">
       <a id="leftSelectMode" href="javascript:void(0)">
        <span>选词</span>
       </a>
       <a id="switchAPI" href="javascript:void(0)">
        <span>切换</span>
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
        if (!res) return;
        try {
            let yiwen;
            if (res && res.cacheResult) {
                //缓存
                yiwen = res.cacheResult
            } else if (currentAPI.name === APIConst.Baidu) {
                yiwen = JSON.parse(res.responseText).trans_result[0].dst;
            } else if (currentAPI.name === APIConst.Microsoft) {
                yiwen = JSON.parse(res.responseText)[0].translations[0].text;
            } else if (currentAPI.name === APIConst.Google) {
                yiwen = JSON.parse(res.responseText)[0][0][0];
            } else {
                //default
                yiwen = JSON.parse(res.responseText)[0].translations[0].text;
            }

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

            if (enableCache && res && !res.cacheResult) {
                //缓存数据
                if (lang === currentAPI.ChineseLang) {
                    //en to zh
                    const arr = [{english: text, chinese: yiwen}]
                    storeCache(`${currentAPI.name}wordCache`, arr)
                } else if (lang === currentAPI.EnglishLang) {
                    //zh to en
                    const arr = [{english: yiwen, chinese: text}]
                    storeCache(`${currentAPI.name}wordCache`, arr)
                }
            }

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

    //百度api翻译
    function translateBaiduApi(text, node, lang) {
        if (!text) {
            console.error("no text:", text)
            return
        }
        if (noTranslateWords.includes(text)) {
            return;
        }
        const salt = `${Date.now()}`;
        const sign = CryptoJS.MD5(`${APIConst.BaiduAPI.appid}${text}${salt}${APIConst.BaiduAPI.secret}`).toString();
        const params = new URLSearchParams();
        let sendData = {
            q: text,
            from: "auto",
            to: lang,
            appid: `${APIConst.BaiduAPI.appid}`,
            salt: `${salt}`,
            sign: sign
        }
        for (const key in sendData) {
            params.append(key, sendData[key]);
        }
        const encodedData = params.toString();

        GM_fetch({
            method: "POST",
            url: `https://fanyi-api.baidu.com/api/trans/vip/translate`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: encodedData,
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

    //Google翻译
    function translateGoogle(text, node, lang) {
        if (!text) {
            console.error("no text:", text)
            return
        }
        if (noTranslateWords.includes(text)) {
            return;
        }
        let from;
        if (lang === currentAPI.ChineseLang) {
            from = currentAPI.EnglishLang;
        } else {
            from = currentAPI.ChineseLang;
        }

        GM_fetch({
            method: "GET",
            url: `https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=${from}&tl=${lang}&q=${encodeURIComponent(text)}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
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
        if (/(translate-main|bbCodeCode|mathjax-tex|gpt-container|translate-span|highlight|translate-src|toast-)/i.test(node.className)) {
            return;
        }

        //shadowRoot
        if (node.shadowRoot) {
            traversePlus(node.shadowRoot, lang)
        }


        // console.error("nodeType:", node.nodeType)

        if (lang === currentAPI.EnglishLang && !hasChinese(node.textContent)) {
            //不含中文
            return;
        }

        if (lang === currentAPI.ChineseLang && !hasEnglish(node.textContent)) {
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
                    if (lang === currentAPI.ChineseLang && srcText.length > 1) {
                        // debugger
                        if (/^[a-zA-Z]$/.test(srcText.replace(/[^a-zA-Z]/g, '').trim())) {
                            return;
                        }
                    }


                    //取缓存  renderPage(res, text, node, lang)


                    const txt = node.textContent.trim();

                    if (enableCache) {
                        translateFromCache(txt, node, lang, `${currentAPI.name}wordCache`)
                            .then(function (success) {
                                //缓存成功
                            },function (reason){
                               //缓存失败

                                //API分流
                                if (currentAPI.name === APIConst.Baidu) {
                                    translateBaiduApi(txt, node, lang)
                                } else if (currentAPI.name === APIConst.Microsoft) {
                                    translateMicrosoft(txt, node, lang)
                                } else if (currentAPI.name === APIConst.Google) {
                                    translateGoogle(txt, node, lang)
                                } else {
                                    //default microsoft
                                    translateMicrosoft(txt, node, lang)
                                }
                            });
                        //return;
                    }



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
    async function translateTo(lang, rootNode, noclear) {
        if (!noclear) {
            clearSpan(lang)
        }
        //微软鉴权
        if (currentAPI.name === APIConst.Microsoft) {
            await auth()
        }
        console.log(`translate to....${lang} : ${currentAPI.name}`)
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
        try {
            Toast.info(`正在翻译。。。。当前API:${currentAPI.name}`)
        } catch (e) {
        }
        translateTo(currentAPI.ChineseLang)
    })

    //中转英
    document.querySelector("#zh2en").addEventListener("click", async (event) => {
        event.stopPropagation()
        try {
            Toast.info(`正在翻译。。。。当前API:${currentAPI.name}`)
        } catch (e) {
        }
        translateTo(currentAPI.EnglishLang)
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

    //切换api
    const switchAPIBtn = document.querySelector("#switchAPI")
    switchAPIBtn.addEventListener("click", (event) => {
        event.stopPropagation()
        switchAPI()
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
            translateTo(currentAPI.ChineseLang)

        }
    }, 2000)


})();

