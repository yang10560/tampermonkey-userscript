// ==UserScript==
// @name         chatGPT tools Plus（修改版）
// @namespace    http://tampermonkey.net/
// @version      3.7.4
// @description  Google、必应、百度、Yandex、360搜索、谷歌镜像、搜狗、b站、F搜、duckduckgo、CSDN侧边栏Chat搜索，集成国内一言，星火，天工，混元，通义AI，ChatGLM，360智脑,miniMax，DeepSeek、Gemini。即刻体验AI，无需翻墙，无需注册，无需等待！
// @description:en  Google, Bing, Baidu, Yandex, 360 Search, Google Mirror, Sogou, B Station, F Search, DuckDuckgo, CSDN sidebar CHAT search, integrate domestic words, star fire, sky work, righteous AI, Chatglm, 360 wisdom, 360 wisdom brain. Experience AI immediately, no need to turn over the wall, no registration, no need to wait!
// @description:zh-TW     Google、必應、百度、Yandex、360搜索、谷歌鏡像、搜狗、b站、F搜、duckduckgo、CSDN側邊欄Chat搜索，集成國內一言，星火，天工，通義AI，ChatGLM，360智腦。即刻體驗AI，無需翻墻，無需註冊，無需等待！
// @author       夜雨
// @match      https://cn.bing.com/*
// @match      https://www.bing.com/*
// @match      *://*.bing.com/*
// @match      https://chat.openai.com/chat
// @match      https://www.google.com/*
// @match      https://duckduckgo.com/*
// @match      https://www.so.com/s*
// @match      *://m.so.com/s*
// @match      *://www.baidu.com/s*
// @match      https://www.baidu.com/*
// @match      https://m.baidu.com/*
// @match      *://baidu.com/s*
// @match      *://yandex.ru/search*
// @match      *://yandex.com/search*
// @match      https://search.ecnu.cf/search*
// @match      https://search.aust.cf/search*
// @match      https://search.*.cf/search*
// @match      https://*.cf:*/*
// @match      *://gooo.azurewebsites.net/*
// @match      https://fsoufsou.com/search*
// @match      https://www.google.com.hk/*
// @match      *://www.sogou.com/*
// @match      *://m.sogou.com/*
// @match      *://chat.scnet.cn/*
// @match      *://wap.sogou.com/*
// @match      *://www.bilibili.com/video/*
// @match      *://blog.csdn.net/*/article/details/*
// @match      *://chatglm.cn/*
// @icon64      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAZlBMVEUAAAD///+hoaFoaGhsbGy7u7vd3d2+vr76+vra2tr29va2trYrKyvg4ODs7OxXV1dgYGCtra0xMTGXl5fExMQ6OjqOjo7R0dEVFRWnp6dSUlIiIiIcHBwLCwt4eHhycnKEhIRHR0f14+hfAAADN0lEQVRYhe1WyZajMAyEsMQshgABEwIJ+f+fbC02W0yHnjnNvNYFDFbZKpUlO86v/e/Wpve/8M4TFckwSvI/cx8z11g2/tw9vZKrEIKe159GUkvwipPxVb4eQQzvYV12XX3Y/x6BT5LqUZkgWixEHF/9/hAAeozz0I8nOtzoccDfg8CbaZQrYkOGYUaEFO2RDUTT4MZefjkMpVcQo5/Wr2DSi9/bhlYPhukvZqf41l3hiiFv8xJR2CslIT+XXfc+YapojY60kG1ZA0rknj+lL4YtnGCQ4lbESSczf5R6Ugc5ee4AoL9KAwbwYXDWXJTXhaDhf2L3R44rxzkbgFgHn55Y0JJjzyeONpYLDn4CCPn7A46VaggjwIB6eEltAOConCUAcZVDXBKIHHgbp9IZ4KW0AZj8LAHaQEzaY0lmHk60AXiQ8XYFEDoVrRpXOmSfdQFfbMe7MuTOJMLU6IJqkh7PuTMVrhosAJCp2xrApA6Lk+p4VllMQjsAcNNkpzeQlKkPHhQb0VkAEgO8TSMaVqhMH/EyW57W2R7moNoBCjwDPg1QzM07QAk7o+wUrIcNwAVZ1ktAROE7gBMaEq4kaW8NgHlQOsrULiUoHjGT40PIqngHOIGYzRK22ggJz3TpbrCt7AMU9gPZwc4y5slJC7FO4woAxmcLgMMi0dF1ymSOtnMEYFDczxqtdJRM6HlAbhSvARIqHG+G5BJGqONoK2opooIMLQFaYMvWs0EJruNRV1b8vy+wqDtbEj2caAcQg5NWdIQL6IJPjIGg1gDKhLINARyxed4DpgLFq+vvKoRiEszGWmlCy0OmcyrqSxKr/eaUzFvDGnDWCX2d5zQmNdJsO4xoz8XeyqcpIdRexZ0BBOYl2r2wyHfwB2WFO0zBjS/Zv2Vc8Pey3l3kor0iR65Q+61Vr6GmttNSOtxRf+jgvfnW3eFa4CZ+3fb1k1q1uC0D3GmKC2s5zkxKvieqWbKQPvFpfbRnNF+pYn/+3ny6m0zW+9eYDIMxlQsbvKuO3zfrV5fWKMc4GLu6G+m2KY/fNNnu6/vu2drTv7fFjVuOP3dHy5MolJEqrKfvoPXp57vpr/3r9gUxwiW4OiuC3wAAAABJRU5ErkJggg==
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @grant       GM_openInTab
// @grant      GM_registerMenuCommand
// @grant      GM_setValue
// @grant      GM_getValue
// @grant      GM_getResourceText
// @grant      GM_setClipboard
// @grant      GM_info
// @run-at     document-end
// @require    https://bowercdn.net/c/jquery-3.4.0/dist/jquery.min.js
// @require    https://s4.zstatic.net/ajax/libs/showdown/2.1.0/showdown.min.js
// @require    https://s4.zstatic.net/ajax/libs/highlight.js/11.7.0/highlight.min.js
// @require    https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @require    https://s4.zstatic.net/ajax/libs/KaTeX/0.16.6/katex.min.js
// @require    https://s4.zstatic.net/ajax/libs/marked/13.0.2/marked.min.js
// @resource katexCss  https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.6/katex.css
// @connect    hunyuan.tencent.com
// @connect    yuanbao.tencent.com
// @connect    ai.ls
// @connect    qianwen.biz.aliyun.com
// @connect    chatgpt.com
// @connect    openai.com
// @connect    jennyapi.site
// @connect    binjie.fun
// @connect    free-api.cveoy.top
// @connect    caipacity.com
// @connect    api.minimax.chat
// @connect    baidu.com
// @connect    bing.com
// @connect    generativelanguage.googleapis.com
// @connect    tongyi.aliyun.com
// @connect    qianwen.aliyun.com
// @connect    xinghuo.xfyun.cn
// @connect    geetest.com
// @connect    chatglm.cn
// @connect    open.bigmodel.cn
// @connect    chat.360.cn
// @connect    api.deepseek.com
// @connect    api.moonshot.cn
// @connect    dashscope.aliyuncs.com
// @connect    api.groq.com
// @connect    api.together.xyz
// @connect    api.mistral.ai
// @connect    api.perplexity.ai
// @connect    api.siliconflow.cn
// @connect    api.lingyiwanwu.com
// @connect    api.stepfun.com
// @connect    spark-api-open.xf-yun.com
// @connect    api.cohere.com
// @connect    api.baichuan-ai.com
// @connect    qianfan.baidubce.com
// @connect    ark.cn-beijing.volces.com
// @connect    api.sensenova.cn
// @connect    api.kunlun.com
// @connect    api.tiangong.cn
// @connect    api.internlm.org
// @connect    api.zhipuai.cn
// @connect    api.minimaxi.com
// @connect    api.deepwords.cn
// @connect    abab.ai
// @connect    api.anthropic.com
// @connect    api.xiaomimimo.com
// @connect    dashscope.aliyuncs.com
// @compatible   Chrome
// @compatible   Firefox
// @license    MIT
// @website    https://yeyu2048.xyz/gpt.html

// @downloadURL https://update.greasyfork.org/scripts/459997/chatGPT%20tools%20Plus%EF%BC%88%E4%BF%AE%E6%94%B9%E7%89%88%EF%BC%89.user.js
// @updateURL https://update.greasyfork.org/scripts/459997/chatGPT%20tools%20Plus%EF%BC%88%E4%BF%AE%E6%94%B9%E7%89%88%EF%BC%89.meta.js
// ==/UserScript==

// import {
//     GM_registerMenuCommand,GM_openInTab,GM_xmlhttpRequest,GM_setValue,GM_getValue,
//     GM_setClipboard,GM_addStyle
// }  from "../jslib/tampermonkey";
(function () {
    'use strict';


    const JSver = '3.7.4';


    function getGPTMode() {
        return localStorage.getItem("GPTMODE");
    }

    const GPT_MODE_NAMES = {
        'Default': '默认接口(元宝)',
        'OPENAI': 'OPENAI-统一接口',
        'Anthropic': 'Anthropic-统一接口',
        'SPARK': '讯飞星火',
        'Hunyuan': '腾讯元宝',
        'DeepSeekYuanBao': '腾讯Deepseek(联网)',
        'ZhipuAI': '智谱AI',
        'Zhinao360': '360智脑',
        'miniMax': 'miniMax',
        'YQCLOUD': 'YQCLOUD',
        'AILS': 'AILS',
        'CVEOY': 'CVEOY',
    };

    function getGPTModeName() {
        const mode = getGPTMode();
        if (mode && mode.startsWith(CUSTOM_ROUTE_PREFIX)) {
            const route = getCustomRouteById(mode);
            return route ? `⭐ ${route.name}` : '自定义线路';
        }
        return GPT_MODE_NAMES[mode] || '默认接口(元宝)';
    }

    let darkTheme = localStorage.getItem("darkTheme")
    console.log(darkTheme)

    //katex Css
    try {
        GM_addStyle(GM_getResourceText("katexCss"))
    }catch (e) {}

    //(prefers-color-scheme: light)
    function addHeadCss() {
        if(!document.getElementById("github-markdown-link")){
            const cssUrl = !darkTheme
                ? 'https://cdn.bootcdn.net/ajax/libs/github-markdown-css/5.2.0/github-markdown-dark.min.css'
                : 'https://cdn.bootcdn.net/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css';
            $("head").append($(`<link id="github-markdown-link" rel="stylesheet" href="${cssUrl}">`));
        }
        if(!document.getElementById("highlight-link")){
            const hlUrl = !darkTheme
                ? 'https://cdn.bootcdn.net/ajax/libs/highlight.js/11.7.0/styles/monokai-sublime.min.css'
                : 'https://cdn.bootcdn.net/ajax/libs/highlight.js/11.7.0/styles/atom-one-light.min.css';
            $("head").append($(`<link id="highlight-link" rel="stylesheet" href="${hlUrl}">`));
        }
        //spark-js
        if(!document.getElementById("spark-js")){
            $("head").append($('<script id="spark-js" src="https://static.geetest.com/g5/gd.js"></script>'));
        }
    }
    setTimeout(addHeadCss)
    // 使用 MutationObserver 替代 setInterval，仅在 DOM 变化时检查
    const _headObserver = new MutationObserver(() => { addHeadCss(); });
    _headObserver.observe(document.head, { childList: true });
    addHeadCss();




    try {
        console.log(
            `%c【chatGPT tools Plus】${JSver} 已加载`,
            'color: yellow;font-size: large;font-weight: bold;background-color: darkblue;'
        );
        const menu_updateChat_id = GM_registerMenuCommand("更新脚本", function (event) {
            GM_openInTab("https://greasyfork.org/zh-CN/scripts/459997")
        }, "updateChat");
        const menu_groupNum_id = GM_registerMenuCommand("交流群", function (event) {
            Toast.info("交流总群：249733992",
                "QQ交流群", {timeOut: 15000} )
        }, "groupNum");


        //禁用console 未转义警告
        hljs.configure({
            ignoreUnescapedHTML: true
        })

    } catch (ex) {
        console.error(ex)
    }

    //自定义Toast通知  ----start----
    GM_addStyle(`
    #sp-toast-container {
        position: fixed;
        top: 16px;
        right: 16px;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        gap: 8px;
        pointer-events: none;
    }
    .sp-toast {
        pointer-events: auto;
        min-width: 240px;
        max-width: 380px;
        padding: 12px 16px;
        border-radius: 10px;
        color: #fff;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
        box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        display: flex;
        align-items: flex-start;
        gap: 10px;
        opacity: 0;
        transform: translateX(100%);
        transition: opacity 0.3s ease, transform 0.3s ease;
        line-height: 1.5;
    }
    .sp-toast.sp-show {
        opacity: 1;
        transform: translateX(0);
    }
    .sp-toast.sp-hide {
        opacity: 0;
        transform: translateX(100%);
    }
    .sp-toast-icon {
        flex-shrink: 0;
        font-size: 16px;
        line-height: 1.4;
    }
    .sp-toast-body {
        flex: 1;
        min-width: 0;
    }
    .sp-toast-title {
        font-weight: 600;
        margin-bottom: 2px;
    }
    .sp-toast-msg {
        word-break: break-all;
    }
    .sp-toast-close {
        flex-shrink: 0;
        cursor: pointer;
        opacity: 0.7;
        font-size: 18px;
        line-height: 1;
        padding: 0 2px;
        transition: opacity 0.2s;
    }
    .sp-toast-close:hover {
        opacity: 1;
    }
    .sp-toast-success { background: linear-gradient(135deg, #43a047, #388e3c); }
    .sp-toast-error   { background: linear-gradient(135deg, #e53935, #c62828); }
    .sp-toast-info    { background: linear-gradient(135deg, #1e88e5, #1565c0); }
    .sp-toast-warning { background: linear-gradient(135deg, #fb8c00, #ef6c00); }
    `);

    const Toast = {
        _container: null,
        _getContainer: function() {
            if (!this._container) {
                this._container = document.createElement('div');
                this._container.id = 'sp-toast-container';
                document.body.appendChild(this._container);
            }
            return this._container;
        },
        _show: function(type, icon, msg, title, options) {
            try {
                const container = this._getContainer();
                const timeOut = (options && options.timeOut) || 3000;

                const el = document.createElement('div');
                el.className = 'sp-toast sp-toast-' + type;

                let bodyHtml = '';
                if (title) {
                    bodyHtml += '<div class="sp-toast-title">' + title + '</div>';
                }
                bodyHtml += '<div class="sp-toast-msg">' + msg + '</div>';

                el.innerHTML = '<span class="sp-toast-icon">' + icon + '</span>'
                    + '<div class="sp-toast-body">' + bodyHtml + '</div>'
                    + '<span class="sp-toast-close">×</span>';

                el.querySelector('.sp-toast-close').addEventListener('click', () => {
                    Toast._remove(el);
                });

                container.appendChild(el);
                el.offsetHeight; // reflow
                el.classList.add('sp-show');

                var timer = setTimeout(function() { Toast._remove(el); }, timeOut);
                el._timer = timer;
            } catch (e) { console.error(e); }
        },
        _remove: function(el) {
            if (el._timer) clearTimeout(el._timer);
            el.classList.remove('sp-show');
            el.classList.add('sp-hide');
            setTimeout(function() { el.remove(); }, 300);
        },
        success: function(msg, title, options) {
            this._show('success', '✅', msg, title, options);
        },
        error: function(msg, title, options) {
            this._show('error', '❌', msg, title, options);
        },
        info: function(msg, title, options) {
            this._show('info', 'ℹ️', msg, title, options);
        },
        warn: function(msg, title, options) {
            this._show('warning', '⚠️', msg, title, options);
        }
    };
    //自定义Toast通知  ----end----

    //封装GM_xmlhttpRequest ---start---
    async function GM_fetch(details) {
        return new Promise((resolve, reject) =>{
            switch (details.responseType){
                case "stream":
                    details.onloadstart = (res)=>{
                        resolve(res)
                    }
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

            //中断支持
            if(details.responseType === "stream"){
                abortXml = GM_xmlhttpRequest(details)
            }else{
                GM_xmlhttpRequest(details)
            }

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
        //中断支持
        if(details.responseType === "stream"){
            abortXml = GM_xmlhttpRequest(details)
        }else{
            GM_xmlhttpRequest(details)
        }
    }

    //封装GM_xmlhttpRequest ---end---


    //is TM
    function isTM(){
        try{
            if(/Tampermonkey/gi.test(GM_info.scriptHandler)){
                return true;
            }else{
                return false;
            }
        }catch (e) {
            return false;
        }
    }

    //获取chrome版本
    function getChromeVersion() {
        try {
            const brands = navigator.userAgentData.brands
            for (let i = 0; i < brands.length; i++) {
                if(/Chromium/gi.test(brand[i].brand )){
                    return Number(brand[i].version)
                }
            }
        }catch (e) {
            return 0
        }
        return 0
    }

    const generateRandomIP = () => {
        const ip = [];
        for (let i = 0; i < 4; i++) {
            ip.push(Math.floor(Math.random() * 256));
        }
        console.log(ip.join('.'))
        return ip.join('.');
    }


    //各线路API配置项定义
    const API_CONFIG_SCHEMA = {
        'ZhipuAI': [
            { key: 'ZhipuapiKey', label: 'API Key', placeholder: '请输入智谱API Key' }
        ],
        'OPENAI': [
            { key: 'openai_base_url', label: 'Base URL', placeholder: 'https://api.openai.com' },
            { key: 'openai_api_key', label: 'API Key', placeholder: '请输入API Key' },
            { key: 'openai_model', label: '模型', placeholder: 'gpt-5.5' },
            { key: 'openai_web_search', label: '联网搜索', type: 'toggle', placeholder: '' }
        ],
        'miniMax': [
            { key: 'minimax_group_id', label: 'Group ID', placeholder: '请输入minimax_group_id' },
            { key: 'minimax_api_key', label: 'API Key', placeholder: '请输入minimax_api_key' }
        ],
        'Anthropic': [
            { key: 'anthropic_base_url', label: 'Base URL', placeholder: 'https://api.anthropic.com' },
            { key: 'anthropic_api_key', label: 'API Key', placeholder: '请输入Anthropic API Key' },
            { key: 'anthropic_model', label: '模型', placeholder: 'claude-sonnet-4-20250514' }
        ]
    };

    //渲染API配置面板
    function renderApiConfigPanel() {
        const panel = document.getElementById('apiConfigPanel');
        if (!panel) return;
        const GPTMODE = getGPTMode();

        // 自定义线路：显示配置 + 删除按钮
        if (GPTMODE && GPTMODE.startsWith(CUSTOM_ROUTE_PREFIX)) {
            const route = getCustomRouteById(GPTMODE);
            if (!route) {
                panel.innerHTML = '';
                panel.style.display = 'none';
                return;
            }
            const fields = route.type === 'OPENAI' ? [
                { key: 'base_url', label: 'Base URL', value: route.base_url },
                { key: 'api_key', label: 'API Key', value: route.api_key },
                { key: 'model', label: '模型', value: route.model }
            ] : [
                { key: 'base_url', label: 'Base URL', value: route.base_url },
                { key: 'api_key', label: 'API Key', value: route.api_key },
                { key: 'model', label: '模型', value: route.model }
            ];
            panel.style.display = 'block';
            let html = `<div style="font-size:12px;color:#4e6ef2;font-weight:600;margin-bottom:6px;">⭐ ${route.name} <span style="color:#999;font-weight:400;">(${route.type})</span></div>`;
            fields.forEach(f => {
                html += `<div class="api-config-row">
                    <span class="api-config-label">${f.label}</span>
                    <input class="api-config-input" data-route-key="${f.key}" type="text" value="${f.value || ''}">
                </div>`;
            });
            if (route.type === 'OPENAI') {
                const checked = localStorage.getItem('openai_web_search') === 'true';
                html += `<div class="api-config-row">
                    <span class="api-config-label">联网搜索</span>
                    <label class="api-config-toggle">
                        <input type="checkbox" data-key="openai_web_search" ${checked ? 'checked' : ''}>
                        <span class="api-config-toggle-slider"></span>
                    </label>
                </div>`;
            }
            html += `<div class="api-config-save-row">
                <button id="deleteCustomRouteBtn" class="api-config-delete-btn">🗑️ 删除线路</button>
            </div>`;
            html += '<div class="api-config-hint">修改后自动保存 ✓</div>';
            panel.innerHTML = html;
            // 自动保存编辑
            panel.querySelectorAll('.api-config-input').forEach(input => {
                input.addEventListener('input', function () {
                    const key = this.dataset.routeKey;
                    let val = this.value.trim();
                    if (key === 'base_url') val = val.replace(/\/+$/, '');
                    route[key] = val;
                    setCustomRoutes(getCustomRoutes().map(r => r.id === route.id ? route : r));
                    // 同步到 localStorage 供当前会话立即生效
                    loadCustomRouteConfig(route);
                });
            });
            // 绑定toggle开关事件
            panel.querySelectorAll('input[type="checkbox"][data-key]').forEach(cb => {
                cb.addEventListener('change', function () {
                    localStorage.setItem(this.dataset.key, this.checked ? 'true' : 'false');
                });
            });
            // 删除按钮
            document.getElementById('deleteCustomRouteBtn').addEventListener('click', () => {
                if (confirm(`确认删除线路"${route.name}"吗？`)) deleteCustomRoute(route.id);
            });
            return;
        }

        const schema = API_CONFIG_SCHEMA[GPTMODE];

        if (!schema) {
            panel.innerHTML = '';
            panel.style.display = 'none';
            return;
        }

        panel.style.display = 'block';
        let html = '';
        schema.forEach(item => {
            if (item.type === 'toggle') {
                const checked = localStorage.getItem(item.key) === 'true';
                html += `<div class="api-config-row">
                    <span class="api-config-label">${item.label}</span>
                    <label class="api-config-toggle">
                        <input type="checkbox" data-key="${item.key}" ${checked ? 'checked' : ''}>
                        <span class="api-config-toggle-slider"></span>
                    </label>
                </div>`;
            } else {
                const val = localStorage.getItem(item.key) || '';
                html += `<div class="api-config-row">
                    <span class="api-config-label">${item.label}</span>
                    <input class="api-config-input" data-key="${item.key}" type="text" placeholder="${item.placeholder}" value="${val}">
                </div>`;
            }
        });
        // OPENAI/Anthropic模式下提示添加@connect
        if (GPTMODE === 'OPENAI' || GPTMODE === 'Anthropic') {
            html += `<div class="api-config-warn">
                ⚠️ 若使用第三方接口，请在脚本头部添加：<code>// @connect &nbsp;你的域名</code><br>
                例如：<code>// @connect api.deepseek.com</code>
                方法二：<code>到tampermonkey脚本管理器-高级-安全-@connect模式-禁用-保存</code>
            </div>`;
            html += `<div class="api-config-save-row"><button id="saveCustomRouteBtn" class="api-config-save-btn">📌 保存为线路</button></div>`;
        }
        html += '<div class="api-config-hint">修改后自动保存 ✓</div>';
        panel.innerHTML = html;

        //绑定自动保存事件
        panel.querySelectorAll('.api-config-input').forEach(input => {
            input.addEventListener('input', function () {
                const key = this.dataset.key;
                let val = this.value.trim();
                if (key === 'openai_base_url' || key === 'anthropic_base_url') {
                    val = val.replace(/\/+$/, '');
                }
                if (val) {
                    localStorage.setItem(key, val);
                } else {
                    localStorage.removeItem(key);
                }
                //同步全局变量
                if (key === 'ZhipuapiKey') zhipu_apiKey = val;
                if (key === 'minimax_group_id') minimax_group_id = val;
                if (key === 'minimax_api_key') minimax_api_key = val;
            });
        });
        //绑定toggle开关事件
        panel.querySelectorAll('input[type="checkbox"][data-key]').forEach(cb => {
            cb.addEventListener('change', function () {
                localStorage.setItem(this.dataset.key, this.checked ? 'true' : 'false');
            });
        });

        //绑定保存线路按钮
        const saveBtn = document.getElementById('saveCustomRouteBtn');
        if (saveBtn) saveBtn.addEventListener('click', saveCustomRoute);
    }

    // ===== 自定义线路管理 =====
    const CUSTOM_ROUTE_PREFIX = 'custom_';
    const CUSTOM_ROUTES_KEY = 'custom_routes';

    function getCustomRoutes() {
        try { return JSON.parse(localStorage.getItem(CUSTOM_ROUTES_KEY)) || []; }
        catch { return []; }
    }
    function setCustomRoutes(routes) {
        localStorage.setItem(CUSTOM_ROUTES_KEY, JSON.stringify(routes));
    }
    function getCustomRouteById(id) {
        return getCustomRoutes().find(r => r.id === id);
    }
    function loadCustomRouteConfig(route) {
        if (route.type === 'OPENAI') {
            localStorage.setItem('openai_base_url', route.base_url);
            localStorage.setItem('openai_api_key', route.api_key);
            if (route.model) localStorage.setItem('openai_model', route.model);
        } else if (route.type === 'Anthropic') {
            localStorage.setItem('anthropic_base_url', route.base_url);
            localStorage.setItem('anthropic_api_key', route.api_key);
            if (route.model) localStorage.setItem('anthropic_model', route.model);
        }
    }
    function saveCustomRoute() {
        const GPTMODE = getGPTMode();
        if (GPTMODE !== 'OPENAI' && GPTMODE !== 'Anthropic') {
            Toast.error('仅支持在 OPENAI 或 Anthropic 线路下保存');
            return;
        }
        const name = prompt('请输入线路名称：', GPTMODE === 'OPENAI' ? '我的OpenAI线路' : '我的Anthropic线路');
        if (!name || !name.trim()) return;
        const route = {
            id: CUSTOM_ROUTE_PREFIX + Date.now(),
            name: name.trim(),
            type: GPTMODE,
            base_url: localStorage.getItem(GPTMODE === 'OPENAI' ? 'openai_base_url' : 'anthropic_base_url') || '',
            api_key: localStorage.getItem(GPTMODE === 'OPENAI' ? 'openai_api_key' : 'anthropic_api_key') || '',
            model: localStorage.getItem(GPTMODE === 'OPENAI' ? 'openai_model' : 'anthropic_model') || ''
        };
        if (!route.api_key) {
            Toast.error('请先填写 API Key 再保存');
            return;
        }
        const routes = getCustomRoutes();
        routes.push(route);
        setCustomRoutes(routes);
        refreshModeSelectOptions();
        Toast.success(`线路"${route.name}"保存成功`);
    }
    function deleteCustomRoute(id) {
        const routes = getCustomRoutes().filter(r => r.id !== id);
        setCustomRoutes(routes);
        const selectEl = document.getElementById('modeSelect');
        if (selectEl && selectEl.value === id) {
            selectEl.value = 'OPENAI';
            localStorage.setItem('GPTMODE', 'OPENAI');
            renderApiConfigPanel();
        }
        refreshModeSelectOptions();
        Toast.success('线路已删除');
    }
    // 将自定义线路注入到下拉框（插入在 Anthropic 之后）
    function refreshModeSelectOptions() {
        const selectEl = document.getElementById('modeSelect');
        if (!selectEl) return;
        // 移除旧的自定义选项
        selectEl.querySelectorAll('option[data-custom]').forEach(o => o.remove());
        const routes = getCustomRoutes();
        // 在 Anthropic option 之后插入
        const anthropicOpt = selectEl.querySelector('option[value="Anthropic"]');
        routes.forEach(r => {
            const opt = document.createElement('option');
            opt.value = r.id;
            opt.textContent = `⭐ ${r.name}`;
            opt.setAttribute('data-custom', '1');
            if (anthropicOpt) anthropicOpt.after(opt);
            else selectEl.appendChild(opt);
        });
    }

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

    //start


    function addChatBtn() {

        let mybtn =
            `<span class="bg s_btn_wr"><input type="button" id="mybtn" value="加载chat" class="bg s_btn"></span>`;
        $(".bg.s_btn_wr").after(mybtn)
        document.getElementById("mybtn").addEventListener("click", function () {
            console.log("reloadPage")
            if (window.location.href.indexOf("baidu.com\/s") > -1) {
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
        let userAgentInfo = navigator.userAgent.toLowerCase();
        let mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod","Mobile"];
        let mobile_flag = false;
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

    const katex_options = {displayMode: false, throwOnError: false}
    function toRawText(exp){
        //处理html标签
        try {
            exp =  exp.replace(/\&amp;/gi, "&").replace(/<br>/g,"\n").replace(/<br \/>/g,"\n")
                .replace(/\&gt;/g,">").replace(/\&lt;/g,"<")
            // 处理矩阵
            exp = exp.replace(/\\begin\{bmatrix\}(.*?)\\end\{bmatrix\}/g, (_, tex) => {
                //debugger
                return `\\begin\{bmatrix\}${tex.replace(/\\/g,"\\\\")}\\end\{bmatrix\}`;
            })
            exp = exp.replace(/\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}/g, (_, tex) => {
                //debugger
                return `\\begin\{pmatrix\}${tex.replace(/\\/g,"\\\\")}\\end\{pmatrix\}`;
            })
        }catch (e) { }

        return exp;
    }
    function katexTohtml(rawHtml) {
        // console.log("========katexTohtml start=======")
        let renderedHtml = rawHtml;
        try {
            renderedHtml = rawHtml.replace(/<em>/g, "").replace(/<\/em>/g, "").replace(/\$\$(.*?)\$\$/g, (_, tex) => {
                //debugger
                return katex.renderToString(toRawText(tex), katex_options);
            });
            renderedHtml = renderedHtml.replace(/\$(.*?)\$/g, (_, tex) => {
                //debugger
                return katex.renderToString(toRawText(tex), katex_options);
            });
        }catch (ex) {
            console.error(ex)
        }

        // console.log("========katexTohtml end=======")
        //console.log(renderedHtml)

        return renderedHtml;
    }



    let rawAns = undefined;
    let isShowRaw = false;
    //显示答案并高亮代码函数
    function showAnserAndHighlightCodeStr(codeStr) {
        if(!codeStr) return
        rawAns = codeStr;//记录原文
        try {
            document.getElementById('gptAnswer').innerHTML = mdConverter(codeStr)
        } catch (ex) {
            console.error(ex)
        }
        highlightCodeStr()//高亮
        //添加代码复制按钮 start
        let preList =  document.querySelectorAll("#gptAnswer pre")
        preList.forEach((pre)=>{
            try{
                if(!pre.querySelector(".btn-pre-copy")){
                    //<span class=\"btn-pre-copy\" onclick='preCopy(this)'>复制代码</span>
                    let copyBtn = document.createElement("span");
                    copyBtn.setAttribute("class","btn-pre-copy");
                    copyBtn.addEventListener("click",(event)=>{
                        let _this = event.target
                        console.log(_this)
                        let pre = _this.parentNode;
                        console.log(pre.innerText)
                        _this.innerText = '';
                        GM_setClipboard(pre.innerText, "text");
                        _this.innerText = '复制成功'
                        Toast.success("复制成功!")
                        setTimeout(() =>{
                            _this.innerText = '复制代码'
                        },2000)
                    })
                    copyBtn.innerText = '复制代码'
                    pre.insertBefore(copyBtn, pre.firstChild)
                }
            }catch (e) {
                console.log(e)
            }
        })
        //添加代码复制按钮 end
    }

    //高亮代码函数
    function highlightCodeStr() {
        let gptAnswerDiv = document.querySelector("#gptAnswer");
        gptAnswerDiv.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
        });
    }

    //顶级配置
    let webSessionId
    let autoClick = localStorage.getItem("autoClick")
    let autoTips = localStorage.getItem("autoTips")? localStorage.getItem("autoTips") :'on';
    let isFullScreen = false;
    let your_qus;
    let abortXml;
    let regx = /search.*?\.cf/g;

    // 站点初始化配置表：{ match, mobileMatch?, appendCase, inputCase, mobileInputCase?, delay?, autoHide? }
    const SITE_CONFIGS = [
        { match: h => h.includes("bing.com"), appendCase: 0, inputCase: 0, styleCase: 0 },
        { match: h => h.includes("google.com") || h.match(regx), appendCase: 1, inputCase: 1, mobileInputCase: 11 },
        { match: h => h.includes("baidu.com/s") && !isMobile(), appendCase: 2, inputCase: 2, styleCase: 2 },
        { match: h => h.includes("m.baidu.com") || (h.includes("baidu.com") && isMobile()), appendCase: 6, inputCase: 2, styleCase: 2 },
        { match: h => h.includes("yandex.ru/search") || h.includes("yandex.com/search"), appendCase: 3, inputCase: 3 },
        { match: h => h.includes("so.com/s"), appendCase: 4, inputCase: 4, mobileInputCase: 9 },
        { match: h => h.includes("fsoufsou.com/search"), appendCase: 5, inputCase: 5, delay: 3000 },
        { match: h => h.includes("duckduckgo.com/?q"), appendCase: 7, inputCase: 7 },
        { match: h => h.includes("sogou.com"), appendCase: 8, inputCase: 8, mobileInputCase: 10 },
        { match: h => h.includes("bilibili.com"), appendCase: 9, inputCase: null },
        { match: h => h.includes("blog.csdn.net"), appendCase: 10, inputCase: null, autoHide: true },
    ];

    function initSite(cfg) {
        const run = () => {
            GM_add_box_style(cfg.styleCase !== undefined ? cfg.styleCase : 1);
            addBothStyle();
            keyEvent();
            appendBox(cfg.appendCase).then(() => {
                const ic = (isMobile() && cfg.mobileInputCase !== undefined) ? cfg.mobileInputCase : cfg.inputCase;
                pivElemAddEventAndValue(ic);
                if (cfg.autoHide) {
                    document.getElementById('hideGptDiv').click();
                }
            });
        };
        if (cfg.delay) {
            setTimeout(run, cfg.delay);
        } else {
            run();
        }
    }

    const currentUrl = window.location.href;
    for (const cfg of SITE_CONFIGS) {
        if (cfg.match(currentUrl)) {
            initSite(cfg);
            break;
        }
    }

    //顶级函数
    function uuid() { //uuid 产生
        let s = [];
        let hexDigits = "0123456789abcdef";
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        return s.join("");
    }

    function GM_add_box_style(case_web) {
        case_web = 2;
        switch (case_web) {
            case 2:
                GM_addStyle(`
    #gptAnswer{
       margin: 12px 0;
       border: none;
       border-top: 1px solid rgba(0,0,0,0.06);
       padding: 12px 8px;
       line-height: 1.75;
       font-size: 14px;
       color: #333;
       max-height: 60vh;
       overflow-y: auto;
    }
    #gptAnswer::-webkit-scrollbar {
       width: 5px;
    }
    #gptAnswer::-webkit-scrollbar-thumb {
       background: rgba(0,0,0,0.12);
       border-radius: 10px;
    }
    #gptAnswer::-webkit-scrollbar-track {
       background: transparent;
    }
    #gptInput{
        border-radius: 24px;
        flex: 1;
        padding: 0 16px;
        height: 42px;
        border: none;
        background-color: transparent;
        font-size: 14px;
        font-weight: 400;
        color: #1a1a1a;
        outline: none;
        font-family: inherit;
    }
    #gptInput::placeholder{
        color: #aab;
        font-size: 13px;
    }
    #button_GPT:hover{
        cursor: pointer;
        opacity: 0.85;
    }
    #gptDiv{
        width: 452px;
        flex: 1;
        display: flex;
        flex-direction: column;
        height: fit-content;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    }
    #gptInputBox{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 24px;
        border: 1.5px solid #e0e3e8;
        background: #f7f8fa;
        padding: 0 6px 0 0;
        margin: 0;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    #gptInputBox:focus-within{
        border-color: #4e6ef2;
        box-shadow: 0 0 0 3px rgba(78,110,242,0.1);
        background: #fff;
    }
    #button_GPT{
        border: none;
        background: linear-gradient(135deg, #4e6ef2, #3b5bdb);
        color: #fff;
        font-size: 13px;
        padding: 8px 18px;
        border-radius: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: all 0.2s;
        white-space: nowrap;
    }
    #button_GPT svg path{
        fill: #fff;
    }
    #gptStatus{
        margin: 8px 0 0 0;
        font-size: 13px;
        color: #666;
    }
    #modeSelect {
        border: 1.5px solid #e0e3e8;
        border-radius: 8px;
        padding: 6px 10px;
        text-align: center;
        color: #4e6ef2;
        background: #fff;
        font-size: 13px;
        font-weight: 500;
        -webkit-appearance: none;
        cursor: pointer;
        outline: none;
        transition: border-color 0.2s;
    }
    #modeSelect:hover{
        border-color: #4e6ef2;
    }
    #modeSelect:focus{
        border-color: #4e6ef2;
        box-shadow: 0 0 0 3px rgba(78,110,242,0.08);
    }

    #modeSelect::-webkit-scrollbar {
      width: 6px;
    }
    #modeSelect::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 3px;
    }
    #modeSelect::-webkit-scrollbar-thumb:hover {
      background-color: #aaa;
    }
    #modeSelect::-webkit-scrollbar-track {
      background-color: #f5f5f5;
      border-radius: 3px;
    }

    .chatSetting{
        display: block;
        text-align: right;
        margin: 10px 0 2px;
    }
    .chatHide{
         display: none;
    }

    #chatSetting{
       text-decoration: none !important;
       display: inline-flex;
       align-items: center;
       gap: 4px;
       color: #909399;
       font-size: 13px;
       padding: 4px 8px;
       border-radius: 6px;
       transition: all 0.2s;
    }
    #chatSetting:hover{
       cursor: pointer;
       text-decoration: none !important;
       background: rgba(78,110,242,0.06);
       color: #4e6ef2;
    }
    #chatSetting svg{
        transition: transform 0.3s;
    }
    #chatSetting:hover svg{
        transform: rotate(60deg);
    }

    gptDiv p{
        white-space: pre-line;
    }

    pre .btn-pre-copy{
        text-align: right;
        display: block;
        font-size: 12px;
        color: #4e6ef2;
        padding: 2px 8px;
        opacity: 0;
        transition: opacity 0.2s;
    }
    pre:hover .btn-pre-copy{
        opacity: 1;
    }
    pre .btn-pre-copy:hover{
        cursor: pointer;
        color: #3b5bdb;
    }

    .fullScreen{
        z-index: 999 !important;
        position: fixed  !important;
        top: 0  !important;
        left: 0  !important;
        right: 0  !important;
        width: 100%  !important;
        height: 100%  !important;
        bottom: 0  !important;
        overflow-y: scroll !important;
        background: #fff;
        padding: 20px;
    }

    .bgtransparent{
        background-color: transparent !important;
    }

    .floating-button {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: linear-gradient(135deg, #4e6ef2, #3b5bdb);
      color: #fff;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(78,110,242,0.35);
      z-index: 9999 !important;
      transition: transform 0.2s, box-shadow 0.2s;
      font-size: 13px;
      cursor: pointer;
    }
    .floating-button:hover{
      transform: scale(1.08);
      box-shadow: 0 6px 20px rgba(78,110,242,0.45);
    }

    .floating-button a {
      text-decoration: none;
      color: inherit;
      z-index: 9999 !important;
    }

    /* fix bilibili高级弹幕背景问题 */
    #bilibili-player pre {
      background-color: transparent !important;
       overflow-x: hidden; !important;
       overflow-y: hidden; !important;
    }

    `)
                break;
            default:
                Toast.error("参数没设定")
        }

    }

    // AI线路调度表：模式名 -> 启动函数
    const GPT_MODE_HANDLERS = {
        'YQCLOUD':       () => YQCLOUD(),
        'AILS':          () => AILS(),
        'CVEOY':         () => CVEOY(),
        'OPENAI':        () => OPENAI(),
        'SPARK':         () => SPARK(),
        'Hunyuan':       () => Hunyuan(''),
        'DeepSeekYuanBao':() => Hunyuan('deepseek'),
        'ZhipuAI':       () => ZhipuAI(),
        'Zhinao360':     () => Zhinao360(),
        'miniMax':       () => miniMax(),
        'Anthropic':     () => Anthropic(),
    };

    function do_it() {
        isShowRaw = false;
        rawAns = undefined;

        document.getElementById('gptAnswer').innerHTML = `<div style="display:flex;align-items:center;gap:8px;color:#999;font-size:14px;padding:8px 0;"><div class="gpt-loading-spinner"></div>加载中<span id="dot"></span></div>`;

        let GPTMODE = getGPTMode();
        // 自定义线路：加载配置后转发到对应类型处理器
        if (GPTMODE && GPTMODE.startsWith(CUSTOM_ROUTE_PREFIX)) {
            const route = getCustomRouteById(GPTMODE);
            if (route) {
                console.log("自定义线路:", route.name, "->", route.type);
                loadCustomRouteConfig(route);
                if (route.type === 'OPENAI') { OPENAI(); return; }
                if (route.type === 'Anthropic') { Anthropic(); return; }
            }
        }
        if (GPTMODE && GPT_MODE_HANDLERS[GPTMODE]) {
            console.log("当前模式:", GPTMODE);
            GPT_MODE_HANDLERS[GPTMODE]();
            return;
        }

        console.log("默认线路:");
        Hunyuan('');
    }



    function creatBox() {
        return new Promise((resolve) => {
            let divE = document.createElement('div');
            let divId = document.createAttribute("id"); //创建属性
            divId.value = 'gptDiv'; //设置属性值
            divE.setAttributeNode(divId); //给div添加属性
            let pE = document.createElement('p');
            let pClass = document.createAttribute('class');
            pClass.value = 'textClass';
            pE.setAttributeNode(pClass)
            let pText = document.createTextNode("");
            pE.appendChild(pText);
            divE.appendChild(pE);
            divE.classList.add("gpt-container");
            divE.classList.add("markdown-body");
            divE.innerHTML = `
    <div id="gptInputBox">
        <input autocomplete="off" placeholder="输入问题，按回车搜索..." id="gptInput" list="suggestions" type="text">
        <button id="button_GPT">
            <svg width="14" height="14" focusable="false" viewBox="0 0 24 24">
                <path fill="#fff" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path>
                <path fill="#fff" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path>
                <path fill="#fff" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path>
                <path fill="#fff" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path>
            </svg>
            搜索
        </button>
        <datalist id="suggestions"></datalist>
    </div>
    <div class="chatSetting">
        <a id="chatSetting" href="javascript:void(0)">
            <svg fill="currentColor" width="15" height="15" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
                <circle cx="12" cy="12" r="3.5" fill="currentColor"></circle>
            </svg>
            设置
        </a>
    </div>
    <div id="gptCueBox">
        <div id="settingsPanel" class="chatHide">
            <!-- 线路选择 -->
            <div class="sp-section">
                <div class="sp-section-title">🌐 AI 线路</div>
                <div id="gptStatus">
                    <select id="modeSelect">
                        <option value="Default">默认接口(元宝)</option>
                        <option value="OPENAI">OPENAI-统一接口</option>
                        <option value="Anthropic">Anthropic-统一接口</option>
                        <option value="SPARK">讯飞星火</option>
                        <option value="Hunyuan">腾讯元宝</option>
                        <option value="DeepSeekYuanBao">腾讯Deepseek(联网)</option>
                        <option value="ZhipuAI">智谱AI</option>
                        <option value="Zhinao360">360智脑</option>
                        <option value="miniMax">miniMax</option>
                        <option value="YQCLOUD">YQCLOUD</option>
                        <option value="AILS">AILS</option>
                        <option value="CVEOY">CVEOY</option>
                    </select>
                    <span class="sp-hint">部分线路需科学上网</span>
                </div>
                <div id="warn">
                    <a id="updatePubkey" href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg>
                        更新KEY
                    </a>
                    <span class="sp-hint">适用于智谱 / miniMax / OPENAI / Anthropic</span>
                </div>
                <div id="apiConfigPanel"></div>
            </div>
            <!-- 功能开关 -->
            <div class="sp-section">
                <div class="sp-section-title">⚙️ 功能设置</div>
                <div class="sp-row" id="autoClickP">
                    <a id="autoClick" href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 4H5v16h14V8h-4V4ZM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992Zm9 8.508a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5ZM7.527 17a4.5 4.5 0 0 1 8.945 0H7.527Z"></path></svg>
                        自动点击
                    </a>
                    <span class="sp-status" id="autoClickStatus">${localStorage.getItem("autoClick") ? "已开启" : "已关闭"}</span>
                </div>
                <div class="sp-row" id="darkThemeP">
                    <a id="darkTheme" href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.997c-5.523 0-10-4.478-10-10c0-5.523 4.477-10 10-10s10 4.477 10 10c0 5.522-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0-2v-12a6 6 0 0 1 0 12Z"></path></svg>
                        暗黑模式
                    </a>
                    <span class="sp-status" id="darkThemeStatus">${darkTheme ? "已关闭" : "已开启"}</span>
                </div>
                <div class="sp-row" id="autoTipsP">
                    <a id="autoTips" href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M12,2c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9S16.97,2,12,2z M12,18c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7S15.86,18,12,18z" fill="currentColor"></path>
                            <circle cx="12" cy="12" r="5" fill="#ffd700"></circle>
                        </svg>
                        搜索建议
                    </a>
                    <span class="sp-status" id="autoTipsStatus">${autoTips === 'on' ? "已开启" : "已关闭"}</span>
                </div>
            </div>
            <!-- 快捷入口 -->
            <div class="sp-section" id="website">
                <div class="sp-section-title">🔗 AI 官网</div>
                <div class="sp-links">
                    <a target="_blank" href="https://claude.ai/">Claude</a>
                    <a target="_blank" href="https://gemini.google.com/">Gemini</a>
                    <a target="_blank" href="https://chatgpt.com">OpenAI</a>
                    <a target="_blank" href="https://chat.deepseek.com/">DeepSeek</a>
                    <a target="_blank" href="https://yiyan.baidu.com/">文心</a>
                    <a target="_blank" href="https://www.qianwen.com/">千问</a>
                    <a target="_blank" href="https://yuanbao.tencent.com/">元宝</a>
                    <a target="_blank" href="https://www.doubao.com/chat/">豆包</a>
                    <a target="_blank" href="https://www.kimi.com/">Kimi</a>
                    <a target="_blank" href="https://chatglm.cn/">GLM</a>
                </div>
                <div class="sp-footer-links">
                    <a target="_blank" href="https://greasyfork.org/scripts/459997">🔄 更新脚本</a>
                    <a href="https://q1.qlogo.cn/g?b=qq&nk=2471543762&s=640">❤️ 用爱发电</a>
                </div>
            </div>
        </div>
        <article id="gptAnswer" class="markdown-body">
            <div id="gptAnswer_inner">
                <div style="text-align:center;padding:10px 0;color:#999;font-size:13px;">
                    <div style="font-size:16px;margin-bottom:6px;">🤖</div>
                    <div>版本 ${JSver} </div>
                    <div style="margin-top:4px;">当前线路: <strong style="color:#4e6ef2;">${getGPTModeName()}</strong> · 自动点击: ${localStorage.getItem("autoClick") || "关闭"}</div>
                    <div style="margin-top:4px;font-size:12px;color:#bbb;">更换AI接口请点击上方「设置」</div>
                </div>
            </div>
        </article>
    </div>
    <span class="speak" style="display:flex;gap:2px;justify-content:flex-end;padding:6px 4px 0;flex-wrap:wrap;">
        <a id="speakAnser" href="javascript:void(0)">
            <svg width="14" height="14" viewBox="0 0 17 16">
                <path d="M9 16.5v-9l6 4.5-6 4.5z" fill="currentColor"></path>
            </svg>朗读
        </a>
        <a id="copyAns" href="javascript:void(0)">
            <svg width="12" height="12" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M661.333333 234.666667A64 64 0 0 1 725.333333 298.666667v597.333333a64 64 0 0 1-64 64h-469.333333A64 64 0 0 1 128 896V298.666667a64 64 0 0 1 64-64z m-21.333333 85.333333H213.333333v554.666667h426.666667v-554.666667z m191.829333-256a64 64 0 0 1 63.744 57.856l0.256 6.144v575.701333a42.666667 42.666667 0 0 1-85.034666 4.992l-0.298667-4.992V149.333333H384a42.666667 42.666667 0 0 1-42.368-37.674666L341.333333 106.666667a42.666667 42.666667 0 0 1 37.674667-42.368L384 64h447.829333z" fill="currentColor"></path>
            </svg>复制
        </a>
        <a id="rawAns" href="javascript:void(0)">
            <svg width="13" height="13" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="4" fill="none"></circle>
            </svg>原文
        </a>
        <a id="stopAns" href="javascript:void(0)">
            <svg width="13" height="13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm6.7 15.3c-.2.2-.5.2-.7 0L12 12.7l-6.1 4.6c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l6.1-4.6-6.1-4.6c-.2-.2-.2-.5 0-.7s.5-.2.7 0L12 11.3l6.1-4.6c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-6.1 4.6 6.1 4.6c.2.2.2.5 0 .7z"></path>
            </svg>中断
        </a>
        <a id="fullScreen" href="javascript:void(0)">
            <svg width="13" height="13" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="14" rx="2" ry="2" stroke="currentColor" fill="currentColor" opacity="0.7"/>
                <line x1="3" y1="8" x2="21" y2="8" stroke="#fff" stroke-width="2"/>
                <line x1="3" y1="16" x2="21" y2="16" stroke="#fff" stroke-width="2"/>
            </svg>全屏
        </a>
        <a id="hideGptDiv" href="javascript:void(0)">
            <svg width="13" height="13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.7"></circle>
                <circle cx="12" cy="12" r="5" fill="#fff"></circle>
            </svg>隐藏
        </a>
    </span>`;
            resolve(divE)
        })
    }

    let isSpeaking = false;
    async function pivElemAddEventAndValue(append_case) {
        let search_content

        try {
            if (append_case === 11) {//手机google
                search_content = document.querySelector("#tsf textarea").value
            }
            if (append_case === 10) {//手机sogou
                search_content = document.querySelector("input#keyword").value
            }
            if (append_case === 9) {//手机360
                search_content = document.querySelector("input#q").value
            }
            if (append_case === 8) {
                search_content = document.querySelector("input#upquery").value
            }
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

        document.getElementById("gptInput").value = search_content || ''
        document.getElementById('button_GPT').addEventListener('click', () => {
            your_qus = document.getElementById("gptInput").value

            //字体设置
            if(your_qus.startsWith("/font-size:")){
                let fontSize = your_qus.substring("/font-size:".length)
                document.querySelector("#gptDiv").style.fontSize = fontSize;
                localStorage.setItem("gpt_font_size",fontSize)
                Toast.success(`字体设置成功:${fontSize}`)
                return
            }

            //禁用历史记录
            if(your_qus.startsWith("/history_disable:")){
                let dis = your_qus.substring("/history_disable:".length)
                history_disable = (dis === 'true' ? true : false);
                localStorage.setItem("history_disable", dis)
                Toast.success(`禁用历史记录设置成功:${history_disable}`)
                return
            }

            do_it()

        })

        //搜索建议
        document.getElementById('gptInput').addEventListener('keyup', () => {
            console.log("autoTips:",autoTips)
            if(autoTips !== 'on') return

            let current;
            let word = document.getElementById('gptInput').value;
            if(!word) return;
            if(current){
                current.abort();
            }
            console.log(word)
            current = GM_xmlhttpRequest({
                method: "GET",
                url: "https://www.baidu.com/sugrec?&prod=pc&wd="+encodeURIComponent(word),
                responseType: "text",
                onload:(r) => {
                    //console.log(r)
                    if (r.status === 200) {
                        //console.log(r);
                        let dataList = JSON.parse(r.responseText).g;
                        const su = document.querySelector('#suggestions');
                        su.innerHTML = '';
                        dataList && dataList.forEach(v => {
                            const optionElement = document.createElement('option');
                            optionElement.value = v.q;
                            optionElement.innerText = v.q;
                            su.appendChild(optionElement);
                        });
                    }

                }
            });
        })

        document.getElementById('updatePubkey').addEventListener('click', () => {
            const panel = document.getElementById('apiConfigPanel');
            if (panel.style.display === 'none' || !panel.innerHTML) {
                renderApiConfigPanel();
                Toast.info("请在下方直接编辑配置")
            } else {
                panel.style.display = 'none';
                panel.innerHTML = '';
            }
        })

        document.getElementById('autoClick').addEventListener('click', () => {
            if(autoClick){
                localStorage.removeItem("autoClick")
                autoClick = undefined;
                document.getElementById('autoClickStatus').textContent = '已关闭';
                document.getElementById('autoClickStatus').classList.remove('sp-on');
                Toast.error("自动点击已经关闭")
            }else{
                localStorage.setItem("autoClick", "开启")
                autoClick = "开启";
                document.getElementById('autoClickStatus').textContent = '已开启';
                document.getElementById('autoClickStatus').classList.add('sp-on');
                Toast.success("自动点击已经开启")
            }
        })

        document.getElementById('autoTips').addEventListener('click', () => {
            if(autoTips === 'on'){
                localStorage.setItem("autoTips", "off")
                autoTips = "off";
                document.getElementById('autoTipsStatus').textContent = '已关闭';
                document.getElementById('autoTipsStatus').classList.remove('sp-on');
                Toast.error("自动提示已关")
            }else{
                localStorage.setItem("autoTips", "on")
                autoTips = "on";
                document.getElementById('autoTipsStatus').textContent = '已开启';
                document.getElementById('autoTipsStatus').classList.add('sp-on');
                Toast.success("自动提示已开启")
            }
        })

        document.getElementById('darkTheme').addEventListener('click', () => {
            try{
                document.getElementById("github-markdown-link").remove()
                document.getElementById("highlight-link").remove()
            }catch (e) { console.error(e) }

            if(darkTheme){
                localStorage.removeItem("darkTheme")
                darkTheme = undefined;
                document.getElementById('darkThemeStatus').textContent = '已开启';
                document.getElementById('darkThemeStatus').classList.add('sp-on');
                Toast.success("暗黑已经开启")
            }else{
                localStorage.setItem("darkTheme", "关闭")
                darkTheme = "关闭";
                document.getElementById('darkThemeStatus').textContent = '已关闭';
                document.getElementById('darkThemeStatus').classList.remove('sp-on');
                Toast.error("暗黑已经关闭")
            }
        })
        //朗读（浏览器内置 SpeechSynthesis）
        document.getElementById('speakAnser').addEventListener('click', () => {
            const synth = window.speechSynthesis;
            if (!synth) {
                Toast.error('当前浏览器不支持语音朗读');
                return;
            }
            // 正在播放则暂停/恢复
            if (synth.speaking) {
                if (synth.paused) {
                    synth.resume();
                    Toast.success('继续播放');
                } else {
                    synth.pause();
                    Toast.success('已暂停播放');
                }
                return;
            }
            const ans = document.querySelector("#gptAnswer");
            if (!ans || !ans.innerText.trim()) {
                Toast.warn('没有可朗读的内容');
                return;
            }
            const speakText = ans.innerText.trim();
            // 检测是否包含中文
            const hasChinese = /[一-鿿]/.test(speakText);
            const utter = new SpeechSynthesisUtterance(speakText);
            utter.rate = 1;
            utter.pitch = 1;
            // 根据内容语言选择合适的语音
            const voices = synth.getVoices();
            if (hasChinese) {
                const zhVoice = voices.find(v => /zh|cmn|chinese/i.test(v.lang));
                if (zhVoice) utter.voice = zhVoice;
                utter.lang = 'zh-CN';
            } else {
                const enVoice = voices.find(v => /^en-/i.test(v.lang));
                if (enVoice) utter.voice = enVoice;
                utter.lang = 'en-US';
            }
            isSpeaking = true;
            Toast.success('开始朗读...');
            utter.onend = () => {
                isSpeaking = false;
                Toast.success('朗读完毕');
            };
            utter.onerror = () => {
                isSpeaking = false;
            };
            synth.speak(utter);
        })

        //原文切换
        document.getElementById('rawAns').addEventListener('click', (ev) => {
            let ans = document.querySelector("#gptAnswer");
            if(!rawAns) {
                Toast.error("原文无内容")
                return
            };
            if(!isShowRaw){
                ans.innerText = rawAns;
                isShowRaw = true;
                Toast.success("已为你显示原文")
            }else{
                showAnserAndHighlightCodeStr(rawAns)
                isShowRaw = false;
                Toast.success("已为你显示非原文")
            }

        })

        //中断回答
        document.getElementById('stopAns').addEventListener('click', (ev) => {
            try{
                if(abortXml){
                    abortXml.abort();
                    abortXml = undefined;
                }else {
                    Toast.error("无法中断!")
                }
            }catch(ex){
                console.error("中断失败：",ex)
                Toast.error("中断失败!")
            }
        })

        //全屏
        document.getElementById('fullScreen').addEventListener('click', (ev) => {
            try{
                if(!isFullScreen){
                    document.getElementById("gptDiv").classList.add("fullScreen")
                    isFullScreen = true;
                }else {
                    document.getElementById("gptDiv").classList.remove("fullScreen")
                    isFullScreen = false;
                }

            }catch(ex){
                console.error("ex：",ex)
                Toast.error("未知异常!")
            }
        })
        //隐藏
        document.getElementById('hideGptDiv').addEventListener('click', (ev) => {
            try{
                $("body").append(`<div class="floating-button"><a href="javascript:void(0)">显示</a></div>`)
                $(".floating-button a").click(function() {
                    $("#gptDiv").show();
                    $(".floating-button").remove()
                });
                $("#gptDiv").hide();
            }catch(ex){
                console.error("ex：",ex)
                Toast.error("未知异常!")
            }
        })

        //复制答案
        document.getElementById('copyAns').addEventListener('click', (ev) => {
            let ans = document.querySelector("#gptAnswer");
            if(isShowRaw){
                GM_setClipboard(rawAns, "text");
            }else{
                let cps = document.querySelectorAll(".btn-pre-copy");
                for (let cp of cps){
                    cp.innerText = ''
                }
                GM_setClipboard(ans.innerText, "text");

                for (let cp of cps){
                    cp.innerText = '复制代码'
                }
            }
            Toast.success("复制成功!")
        })

        document.getElementById('modeSelect').addEventListener('change', () => {
            const selectEl = document.getElementById('modeSelect');
            const selectedValue = selectEl.options[selectEl.selectedIndex].value;
            localStorage.setItem('GPTMODE', selectedValue);
            renderApiConfigPanel();
            let displayName = GPT_MODE_NAMES[selectedValue];
            if (!displayName) {
                const cr = getCustomRouteById(selectedValue);
                displayName = cr ? cr.name : selectedValue;
            }
            Toast.success(`切换成功，当前线路:${displayName}`)
        });

        let chatSetting = false;
        const settingsPanel = document.getElementById('settingsPanel');
        document.getElementById('chatSetting').addEventListener('click', () => {
            chatSetting = !chatSetting;
            settingsPanel.classList.toggle('chatHide', !chatSetting);
            // 更新齿轮图标旋转状态
            document.getElementById('chatSetting').classList.toggle('sp-active', chatSetting);
            if (chatSetting) {
                renderApiConfigPanel();
            }
        })

    }

    async function appendBox(append_case) {
        return new Promise((resolve, reject) => {
            creatBox().then((divE) => {
                let resetWidth = (width)=>{
                    try {
                        if(width){
                            document.querySelector("#gptDiv").style.setProperty("width",width);
                            return
                        }
                        document.querySelector("#gptDiv").style.setProperty("width",
                            "100%")
                        /*document.querySelector("#gptInput").setAttribute("class",
                            "se-input adjust-input")*/
                    } catch (e) {
                        console.error(e)
                    }
                }

                switch (append_case) {
                    case 0: //bing
                        if (divE) {
                            if(isMobile()){
                                //手机bing
                                document.getElementById('b_results').prepend(divE)
                                resetWidth();
                            }else{
                                document.getElementById('b_context').prepend(divE)
                            }
                        }
                        break;
                    case 1: //google
                        if(isMobile()){
                            //手机google
                            document.querySelector("div#msc").after(divE);
                            resetWidth();
                        }else if (document.getElementsByClassName('TQc1id ')[0]) {
                            document.getElementsByClassName('TQc1id ')[0].prepend(divE);
                        } else {
                            //other
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
                        if(isMobile()){
                            //手机360
                            document.getElementById("search-box").appendChild(divE);
                            resetWidth();
                        }else{
                            if (document.getElementById('side')) {
                                document.getElementById('side').prepend(divE)
                            }
                        }

                        break;
                    case 5: //fsoufsou
                        if(isMobile()){
                            //手机fsou
                            let frow = document.querySelectorAll(".flex-row")[3]
                            if (frow.children!==undefined ) {
                                frow.children.item(0).prepend(divE)
                            }
                            resetWidth()
                        }else{
                            let frow = document.querySelectorAll(".flex-row")[2]
                            if (frow.children!==undefined && frow.children.length === 2) {
                                frow.children.item(1).prepend(divE)
                            } else {
                                frow.innerHTML = frow.innerHTML +
                                    `<div><div class="wiki-container" style="margin-left: 124px!important;padding: 15px!important;">${divE.innerHTML}</div></div>`
                            }
                        }

                        break;
                    case 6: //手机百度
                        if (document.getElementById('page-bd')) {
                            document.getElementById('page-bd').prepend(divE)
                            //调整css
                            resetWidth();
                        }
                        break;
                    case 7: //duckduckgo
                        if(isMobile()){
                            //手机dockgo
                            document.querySelector('form#search_form').after(divE)
                            resetWidth();
                        }else{
                            if (document.querySelector('[data-area="sidebar"]')) {
                                document.querySelector('[data-area="sidebar"]').prepend(divE)
                            }
                        }
                        break;
                    case 8: //sogou
                        if(isMobile()){
                            //手机搜狗
                            document.querySelector('form#searchform').after(divE)
                            resetWidth();
                        }else{
                            if (document.querySelector('div.right')) {
                                document.querySelector('div.right').prepend(divE)
                            }
                        }

                        break;
                    case 9: //bilibili
                        if (document.querySelector('div#danmukuBox')) {
                            document.querySelector('div#danmukuBox').children.item(0).prepend(divE)
                            resetWidth();
                        }

                        break;

                    case 10: //csdn
                        let asideDiv = document.querySelector("aside.blog_container_aside div")
                        if (asideDiv) {
                            asideDiv.after(divE)
                            let t = asideDiv.offsetTop + asideDiv.offsetHeight + 5;
                            const screenHeight = window.screen.height;
                            document.querySelector("#gptDiv").setAttribute("style",
                                `position: fixed;top: ${t}px;left: 0px;z-index: 9999;width:410px;`)

                            //滚动条
                            document.querySelector("#gptAnswer").setAttribute("style",
                                `height: ${screenHeight/5}px;overflow-y:scroll`)


                        }

                        break;
                    default:
                        if (divE) {
                            console.log(`啥情况${divE}`)
                        }
                }
            }).catch((err) => {
                throw new Error(err)
            }).finally(()=>{
                if(autoClick){
                    setTimeout(() => {
                        document.getElementById("button_GPT").click(); //自动点击
                    }, 1500)
                }
            })

            resolve("finished")
        })
    }

    //焦点函数
    function isBlur() {
        let myInput = document.getElementById('gptInput');
        if (myInput === document.activeElement) {
            return 1
        } else {
            return 0
        }
    }

    function keyEvent() {
        document.onkeydown = function (e) {
            let keyNum = window.event ? e.keyCode : e.which;
            if (13 === keyNum) {
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
    .gpt-container {
        box-sizing: border-box;
        height: -webkit-min-content;
        height: min-content;
        width: 455px;
        margin-top: 12px;
        margin-bottom: 12px;
        border: 1px solid rgba(0,0,0,0.06);
        border-radius: 16px;
        overflow: hidden;
        padding: 18px;
        background: #fff;
        box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
        transition: box-shadow 0.3s;
    }
    .gpt-container:hover{
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    #dot{
        height: 4px;
        width: 4px;
        display: inline-block;
        border-radius: 2px;
        animation: dotting 2.4s infinite step-start;
    }
    @keyframes dotting {
        25%{
            box-shadow: 4px 0 0 #4e6ef2;
        }
        50%{
            box-shadow: 4px 0 0 #4e6ef2, 14px 0 0 #4e6ef2;
        }
        75%{
            box-shadow: 4px 0 0 #4e6ef2, 14px 0 0 #4e6ef2, 24px 0 0 #4e6ef2;
        }
    }
    pre{
        overflow-x: auto;
        overflow-y: hidden;
        background: #f6f8fa;
        border-radius: 10px;
        padding: 14px 16px;
        margin: 8px 0;
        border: 1px solid rgba(0,0,0,0.04);
        font-size: 13px;
        line-height: 1.6;
    }
    pre::-webkit-scrollbar {
        height: 5px;
    }
    pre::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.12);
        border-radius: 10px;
    }

    #gptAnswer p{
        margin: 6px 0;
    }
    #gptAnswer h1, #gptAnswer h2, #gptAnswer h3, #gptAnswer h4{
        margin: 12px 0 6px;
        color: #1a1a1a;
    }
    #gptAnswer ul, #gptAnswer ol{
        padding-left: 20px;
    }
    #gptAnswer li{
        margin: 4px 0;
    }
    #gptAnswer code{
        background: #f0f2f5;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 13px;
        color: #d63384;
    }
    #gptAnswer pre code{
        background: transparent;
        padding: 0;
        color: inherit;
    }
    #gptAnswer blockquote{
        border-left: 3px solid #4e6ef2;
        padding: 8px 12px;
        margin: 8px 0;
        background: #f0f4ff;
        border-radius: 0 8px 8px 0;
        color: #555;
    }
    #gptAnswer table{
        border-collapse: collapse;
        width: 100%;
        margin: 8px 0;
        font-size: 13px;
    }
    #gptAnswer th, #gptAnswer td{
        border: 1px solid #e8e8e8;
        padding: 8px 12px;
        text-align: left;
    }
    #gptAnswer th{
        background: #f6f8fa;
        font-weight: 600;
    }
    #gptAnswer a{
        color: #4e6ef2;
        text-decoration: none;
    }
    #gptAnswer a:hover{
        text-decoration: underline;
    }
    #gptAnswer img{
        max-width: 100%;
        border-radius: 8px;
    }

    .speak a{
        display: inline-flex;
        align-items: center;
        gap: 3px;
        color: #909399;
        font-size: 12.5px;
        padding: 4px 8px;
        border-radius: 6px;
        transition: all 0.2s;
    }
    .speak a:hover{
        background: rgba(78,110,242,0.06);
        color: #4e6ef2;
    }
    .speak a:hover svg path,
    .speak a:hover svg circle{
        fill: #4e6ef2;
    }

    .gpt-loading-spinner{
        width: 16px;
        height: 16px;
        border: 2px solid #e8e8e8;
        border-top: 2px solid #4e6ef2;
        border-radius: 50%;
        animation: gpt-spin 0.8s linear infinite;
    }
    @keyframes gpt-spin{
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    /* ===== 设置面板 ===== */
    #settingsPanel{
        margin-top: 10px;
        border: 1px solid #ebedf0;
        border-radius: 12px;
        overflow: hidden;
        background: #fafbfc;
        animation: sp-slide 0.25s ease;
    }
    @keyframes sp-slide{
        from { opacity: 0; transform: translateY(-8px); }
        to   { opacity: 1; transform: translateY(0); }
    }
    .sp-section{
        padding: 10px 14px;
        border-bottom: 1px solid #f0f0f0;
    }
    .sp-section:last-child{
        border-bottom: none;
    }
    .sp-section-title{
        font-size: 11px;
        font-weight: 600;
        color: #999;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
    }
    /* 线路选择 */
    #gptStatus{
        margin: 0;
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
    }
    .sp-hint{
        color: #bbb;
        font-size: 11.5px;
    }
    /* 功能开关行 */
    .sp-row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;
    }
    .sp-row a{
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: #333;
        font-size: 13px;
        padding: 5px 10px;
        border-radius: 8px;
        transition: all 0.2s;
        text-decoration: none;
    }
    .sp-row a:hover{
        background: rgba(78,110,242,0.06);
        color: #4e6ef2;
    }
    .sp-status{
        font-size: 11.5px;
        padding: 2px 10px;
        border-radius: 20px;
        background: #f0f0f0;
        color: #999;
        font-weight: 500;
        transition: all 0.2s;
    }
    .sp-status.sp-on{
        background: #e8f5e9;
        color: #43a047;
    }
    /* API配置面板 */
    #apiConfigPanel{
        margin-top: 8px;
        padding: 10px 12px;
        background: #fff;
        border-radius: 8px;
        border: 1px solid #e8e8e8;
    }
    .api-config-row{
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }
    .api-config-row:last-child{
        margin-bottom: 0;
    }
    .api-config-label{
        font-size: 12px;
        color: #666;
        min-width: 70px;
        flex-shrink: 0;
    }
    .api-config-input{
        flex: 1;
        height: 28px;
        padding: 0 8px;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        font-size: 12px;
        color: #333;
        background: #fafbfc;
        outline: none;
        transition: border-color 0.2s;
    }
    .api-config-input:focus{
        border-color: #4e6ef2;
        background: #fff;
    }
    .api-config-input::placeholder{
        color: #ccc;
    }
    .api-config-hint{
        font-size: 11px;
        color: #4e6ef2;
        margin-top: 6px;
        text-align: right;
    }
    .api-config-toggle{
        position: relative;
        display: inline-block;
        width: 36px;
        height: 20px;
        flex-shrink: 0;
    }
    .api-config-toggle input{
        opacity: 0;
        width: 0;
        height: 0;
    }
    .api-config-toggle-slider{
        position: absolute;
        cursor: pointer;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: #ccc;
        transition: 0.3s;
        border-radius: 20px;
    }
    .api-config-toggle-slider:before{
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        left: 3px;
        bottom: 3px;
        background-color: #fff;
        transition: 0.3s;
        border-radius: 50%;
    }
    .api-config-toggle input:checked + .api-config-toggle-slider{
        background-color: #4e6ef2;
    }
    .api-config-toggle input:checked + .api-config-toggle-slider:before{
        transform: translateX(16px);
    }
    .api-config-warn{
        margin-top: 8px;
        padding: 8px 10px;
        background: #fff8e1;
        border: 1px solid #ffe082;
        border-radius: 6px;
        font-size: 11.5px;
        color: #8d6e00;
        line-height: 1.6;
    }
    .api-config-warn code{
        background: rgba(0,0,0,0.06);
        padding: 1px 5px;
        border-radius: 3px;
        font-size: 11px;
        color: #c76c00;
    }
    /* 保存为线路按钮 */
    .api-config-save-row{
        margin-top: 8px;
        text-align: right;
    }
    .api-config-save-btn{
        padding: 5px 14px;
        border: 1px solid #4e6ef2;
        border-radius: 6px;
        background: linear-gradient(135deg, #4e6ef2, #6c8cff);
        color: #fff;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s;
    }
    .api-config-save-btn:hover{
        box-shadow: 0 2px 8px rgba(78,110,242,0.35);
        transform: translateY(-1px);
    }
    .api-config-delete-btn{
        padding: 5px 14px;
        border: 1px solid #e53935;
        border-radius: 6px;
        background: #fff;
        color: #e53935;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s;
    }
    .api-config-delete-btn:hover{
        background: #e53935;
        color: #fff;
    }
    /* 自定义线路选项 */
    option[data-custom]{
        color: #4e6ef2;
        font-weight: 600;
    }
    /* 更新KEY行 */
    #warn{
        margin: 6px 0 0;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    #warn a{
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: #4e6ef2;
        font-size: 13px;
        padding: 4px 10px;
        border-radius: 8px;
        transition: all 0.2s;
    }
    #warn a:hover{
        background: rgba(78,110,242,0.06);
    }
    /* 网站链接 */
    .sp-links{
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }
    .sp-links a{
        display: inline-block;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        text-decoration: none;
        border: 1px solid #e8e8e8;
        background: #fff;
        color: #555;
        transition: all 0.2s;
    }
    .sp-links a:hover{
        border-color: #4e6ef2;
        color: #4e6ef2;
        background: #f0f4ff;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(78,110,242,0.1);
    }
    .sp-footer-links{
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px dashed #e8e8e8;
    }
    .sp-footer-links a{
        display: inline-block;
        padding: 3px 10px;
        border-radius: 6px;
        font-size: 12px;
        text-decoration: none;
        color: #888;
        transition: all 0.2s;
    }
    .sp-footer-links a:hover{
        color: #4e6ef2;
        background: rgba(78,110,242,0.04);
    }
    /* 齿轮旋转 */
    #chatSetting.sp-active svg{
        transform: rotate(90deg);
    }
    `);
    }



    function Uint8ArrayToString(fileData) {
        let dataString = "";
        for (let i = 0; i < fileData.length; i++) {
            dataString += String.fromCharCode(fileData[i]);
        }

        return dataString;
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


    (function (extension) {
        if (typeof showdown !== 'undefined') {
            // global (browser or node.js global)
            extension(showdown);
        } else if (typeof define === 'function' && define.amd) {
            // AMD
            define(['showdown'], extension);
        } else if (typeof exports === 'object') {
            // Node, CommonJS-like
            module.exports = extension(require('showdown'));
        } else {
            // showdown was not found so an error is thrown
            throw Error('Could not find showdown library');
        }
    }(function (showdown) {
        // loading extension into showdown
        showdown.extension('myext', function () {
            return [
                //to katex
                {
                    type:   'output',
                    filter: function (source, converter, options) {
                        //debugger
                        return katexTohtml(source);
                    }
                },
                // filter xss
                {
                    type:  'output',
                    filter: function (source, converter, options) {
                        //debugger
                        return  source.replace(/<script/gi, '&lt;script').replace(/<meta/gi, '&lt;meta');
                    }
                },
                //Adds simple footnotes

                {
                    type: 'output',
                    filter: text => text.replace(
                        /^\[\^([\d\w]+)\]:\s*((\n+(\s{2,4}|\t).+)+)$/mg,
                        (str, name, rawContent, _, padding) => {
                            const content = converter.makeHtml(rawContent.replace(new RegExp(`^${padding}`, 'gm'), ''))
                            return `<div class="footnote" id="footnote-${name}"><a href="#footnote-${name}"><sup>[${name}]</sup></a>:${content}</div>`
                        }
                    )
                },
                {
                    type: 'lang',
                    filter: text => text.replace(
                        /^\[\^([\d\w]+)\]:( |\n)((.+\n)*.+)$/mg,
                        (str, name, _, content) =>
                            `<small class="footnote" id="footnote-${name}"><a href="#footnote-${name}"><sup>[${name}]</sup></a>: ${content}</small>`
                    )
                },
                {
                    type: 'lang',
                    filter: text => text.replace(
                        /\[\^([\d\w]+)\]/m,
                        (str, name) => `<a href="#footnote-${name}"><sup>[${name}]</sup></a>`
                    )
                },

                //replace \n
                {
                    type: 'lang',
                    filter: text => text.replace(/\\n+/g, "\n")
                },
                /**
                 * Showdown Icon Extension, Glyphicon and FontAwesome support for showdown
                 * http://github.com/dbtek/showdown-icon
                 * 2014, Ismail Demirbilek
                 * License: MIT
                 */
                {
                    type: "lang",
                    regex: "\\B(\\\\)?@glyphicon-([\\S]+)\\b",
                    replace: function(a, b, c) {
                        return b === "\\" ? a : '<span class="glyphicon glyphicon-' + c + '">' + "</span>"
                    }
                },
                {
                    type: "lang",
                    regex: "\\B(\\\\)?@fa-([\\S]+)\\b",
                    replace: function(a, b, c) {
                        return b === "\\" ? a : '<i class="fa fa-' + c + '">' + "</i>"
                    }
                }

            ];
        })
    }));
    function mdConverter(rawData) {
        let tmpData = rawData;
        let converter = new showdown.Converter({
            extensions: ['myext']
        });
        converter.setOption('tables',
            true); //启用表格选项。从showdown 1.2.0版开始，表支持已作为可选功能移入核心拓展，showdown.table.min.js扩展已被弃用
        converter.setOption('openLinksInNewWindow',true) //链接在新窗口打开
        converter.setOption('strikethrough', true) //删除线
        converter.setOption('emoji', true) //开启emoji

        /***
         * original: John Gruber 规范中的原始 Markdown 风格
         * vanilla：对决基础风味（v1.3.1 起）
         * github: GitHub 风格的 Markdown，或 GFM
         */
        showdown.setFlavor('github');

        try {
            return converter.makeHtml(rawData);
        }catch (ex) {
            console.error(ex)
            //fix script markdown render
            try {
                return katexTohtml(marked.parse(rawData))
            }catch (ex) {
                console.error("备用渲染失败")
            }
        }
        return tmpData;

    }

    //实时监控
    setInterval(() => {
        //百度
        if (window.location.href.indexOf("baidu.com\/s") > -1 && !isMobile()) {
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
        //bilibli
        if (window.location.href.indexOf("bilibili.com\/video") > -1 && !document.getElementById("gptDiv")) {
            GM_add_box_style(1)
            addBothStyle()
            keyEvent()
            appendBox(9).then((res) => {
                pivElemAddEventAndValue(null)
            })
        }

    }, 2000)


    function generateRandomString(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }



    let messageChain2 = [];//AILS

    let messageChain10 = [];//PRTBOOM

    function addMessageChain(messageChain, element,maxLength) {
        maxLength = maxLength || 6;
        if (messageChain.length >= maxLength) {
            messageChain.shift();
        }
        messageChain.push(element);
        console.log(messageChain,maxLength)
        return messageChain;
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



    let ails_clientv = "0.1.293";
    let ails_signKey = "WI,2rU#_r:r~aF4aJ36[.Z(/8Rv93Rf";
    function AILS() {

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
                    "Referer": "https://ai.ls/",
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
                            showAnserAndHighlightCodeStr(finalResult)
                        } catch (e) {
                            console.log(e)
                        }
                        return;
                    }
                    try {
                        let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                        console.log(d)
                        /*d.split("\n").forEach(item=>{
                            try {
                                let chunk = JSON.parse(item.replace(/data:/,"").trim())
                                    .choices[0].delta.content;
                                result.push(chunk)
                            }catch (ex){}
                        })*/
                        result.push(d)
                        showAnserAndHighlightCodeStr(result.join(""))
                    } catch (e) {
                        console.log(e)
                    }

                    return reader.read().then(processText);
                });
            },(reason)=>{
                console.log(reason)
                Toast.error("未知错误!")
            }).catch((ex)=>{
                console.log(ex)
            });

        });
    }


    async function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }



    //取某个cookie的值
    function getCookieValue(cookies, cookieName) {
        let name = cookieName + "=";
        let cookieArray = cookies.split(';');
        for(let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    }

    //取header的cookie
    function getCookies(headers) {
        let cookieArray = headers.split('\r\n');
        cookieArray.forEach(item => {
            if(item.startsWith('set-cookie')){
                return item;
            }
        })
        return "";
    }



    let userId_yqcloud = "#/chat/" + Date.now();
    //fix 24.3.12 https://chat18.aichatos.xyz
    function YQCLOUD() {
        console.log(userId_yqcloud)
        abortXml = GM_xmlhttpRequest({
            method: "POST",
            //url: "https://cbjtestapi.binjie.site:7777/api/generateStream",
            url:  "https://api.binjie.fun/api/generateStream",
            headers: {
                "Content-Type": "application/json",
                "Referer": "https://chat18.aichatos.xyz",
                "origin":  "https://chat18.aichatos.xyz",
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
                        let finalResult = result.join("").
                        replace(/gptxyy/gi,"")
                            .replace(/aichatos/gi,"")
                            .replace(/https?:\/\/[^\s]+/g,"")
                        showAnserAndHighlightCodeStr(finalResult)
                        return;
                    }
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    result.push(d)
                    try {
                        console.log(result.join(""))
                        showAnserAndHighlightCodeStr(result.join("").
                        replace(/gptxyy/gi,"")
                            .replace(/aichatos/gi,"")
                            .replace(/https?:\/\/[^\s]+/g,""))
                    } catch (e) {
                        console.log(e)
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


    function uuidv4() {
        let d = new Date().getTime(); // get current timestamp in ms (to ensure UUID uniqueness)
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0 // generate random nibble
            d = Math.floor(d / 16) // correspond each UUID digit to unique 4-bit chunks of timestamp
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16) // generate random hexadecimal digit
        })
        return uuid
    }

    let history_disable = false ;

    //OPENAI 统一接口（兼容 OpenAI API 格式的第三方服务）

    let openai_messageChain = [];
    async function OPENAI(){
        let base_url = localStorage.getItem("openai_base_url") || "https://api.openai.com";
        let api_key = localStorage.getItem("openai_api_key");
        let model = localStorage.getItem("openai_model") || "gpt-5.5";

        if(!api_key){
            showAnserAndHighlightCodeStr(`api_key为空，请点击设置-更新key，输入您的API Key`)
            return
        }

        const webSearchOn = localStorage.getItem('openai_web_search') === 'true' && /xiaomimimo\.com/i.test(base_url);
        showAnserAndHighlightCodeStr(`<div style="display:flex;align-items:center;gap:8px;color:#999;font-size:14px;padding:4px 0;"><div class="gpt-loading-spinner"></div>正在连接 OpenAI 兼容接口...</div><br>Base URL: ${base_url}<br>模型: ${model}${webSearchOn ? '<br>🌐 联网搜索: 已开启' : ''}<br>主流的兼容openai站点已经支持，若没有的第三方请在代码中加上// @connect 你的域名`)

        addMessageChain(openai_messageChain, {role: "system", content: "你现在不是agent环境，请以聊天markdown形式尽可能多的输出。"})
        addMessageChain(openai_messageChain, {role: "user", content: your_qus})

        const requestBody = {
            model: model,
            messages: openai_messageChain,
            stream: true
        };
        // 联网搜索：仅在开启且域名是 xiaomimimo.com 时生效
        if (localStorage.getItem('openai_web_search') === 'true' && /xiaomimimo\.com/i.test(base_url)) {
            requestBody.tools = [{
                type: "web_search",
                max_keyword: 3,
                force_search: true,
                limit: 1,
                user_location: {
                    type: "approximate",
                    country: "China",
                    region: "Hubei",
                    city: "Wuhan"
                }
            }];
        }

        GM_fetch({
            method: "POST",
            url: `${base_url}/v1/chat/completions`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${api_key}`,
                "accept": "text/event-stream"
            },
            responseType: "stream",
            data: JSON.stringify(requestBody)
        }).then((stream) => {
            let result = [];
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    let finalResult = result.join("")
                    try {
                        console.log(finalResult)
                        addMessageChain(openai_messageChain, {
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
                    d.split("\n").forEach(item => {
                        try {
                            let chunk = item.replace(/^data:\s*/, "").trim()
                            if(chunk === "[DONE]") return
                            let delta = JSON.parse(chunk).choices[0].delta.content
                            if(delta) result.push(delta)
                        } catch (ex) {}
                    })
                    showAnserAndHighlightCodeStr(result.join(""))
                } catch (e) {
                    console.log(e)
                }
                return reader.read().then(processText);
            })
        }, (reason) => {
            console.log(reason)
            Toast.error("请求失败，请检查Base URL和API Key是否正确! 注意代码否加了@connect 字段")
        })
    }


    //Anthropic 统一接口（兼容 Claude API 格式）
    let anthropic_messageChain = [];
    async function Anthropic(){
        let base_url = localStorage.getItem("anthropic_base_url") || "https://api.anthropic.com";
        let api_key = localStorage.getItem("anthropic_api_key");
        let model = localStorage.getItem("anthropic_model") || "claude-sonnet-4-20250514";

        if(!api_key){
            showAnserAndHighlightCodeStr(`api_key为空，请点击设置-更新key，输入您的Anthropic API Key`)
            return
        }

        showAnserAndHighlightCodeStr(`<div style="display:flex;align-items:center;gap:8px;color:#999;font-size:14px;padding:4px 0;"><div class="gpt-loading-spinner"></div>正在连接 Anthropic 兼容接口...</div><br>Base URL: ${base_url}<br>模型: ${model}`)

        addMessageChain(anthropic_messageChain, {role: "system", content: "你现在不是agent环境，请以聊天markdown形式尽可能多的输出。"})
        addMessageChain(anthropic_messageChain, {role: "user", content: your_qus})

        GM_fetch({
            method: "POST",
            url: `${base_url}/v1/messages`,
            headers: {
                "Content-Type": "application/json",
                "x-api-key": api_key,
                "anthropic-version": "2023-06-01",
                "accept": "text/event-stream"
            },
            responseType: "stream",
            data: JSON.stringify({
                model: model,
                max_tokens: 4096,
                messages: anthropic_messageChain,
                stream: true
            })
        }).then((stream) => {
            let result = [];
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {
                    let finalResult = result.join("")
                    try {
                        console.log(finalResult)
                        addMessageChain(anthropic_messageChain, {
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
                    d.split("\n").forEach(item => {
                        try {
                            let line = item.replace(/^data:\s*/, "").trim()
                            if (!line) return
                            let parsed = JSON.parse(line)
                            if (parsed.type === "content_block_delta" && parsed.delta && parsed.delta.text) {
                                result.push(parsed.delta.text)
                            }
                        } catch (ex) {}
                    })
                    showAnserAndHighlightCodeStr(result.join(""))
                } catch (e) {
                    console.log(e)
                }
                return reader.read().then(processText);
            })
        }, (reason) => {
            console.log(reason)
            Toast.error("请求失败，请检查Base URL和API Key是否正确! 注意代码否加了@connect 字段")
        })
    }




    //星火相关====start=====
    let sp_appId = 'ihuqg3dmuzcr2kmghumvivsk7c3l4joe';
    let sp_fd = String(+new Date()).slice(-6);//a = (a = String(+new Date)).substring(a.length - 6)
    let sp_chatId;
    let sp_GtToken;

    async function init_sp_appId() {

        sp_appId = 'ihuqg3dmuzcr2kmghumvivsk7c3l4joe'
        return
        //get https://xinghuo.xfyun.cn/chat
        //script defer="defer" src="/static/js/main.04f3ec36.js"></script>
        let req1 = await GM_fetch({
            method: "GET",
            url: "https://xinghuo.xfyun.cn/chat",
            headers: {
                "origin":"https://xinghuo.xfyun.cn",
                "referer":"https://xinghuo.xfyun.cn/"
            }
        })
        let r = req1.responseText;
        //console.log(r);
        let mainjs;

        try{

            mainjs = /src="(\/static\/js\/main.*?.js)"/.exec(r)[1];//https://xinghuo.xfyun.cn/static/js/main.04f3ec36.js
            console.log("mainjs:",mainjs)
        }catch (e) {
            console.error(r)
            Toast.error("出错了，js获取失败")
        }

        if(mainjs){
            console.log("https://xinghuo.xfyun.cn"+ mainjs.trim())
            let req2 = await GM_fetch({
                method: "GET",
                url: "https://xinghuo.xfyun.cn"+ mainjs.trim(),
                headers: {
                    "origin":"https://xinghuo.xfyun.cn",
                    "referer":"https://xinghuo.xfyun.cn/"
                }
            })
            let rr = req2.responseText;

            console.log(rr.substring(0,100))
            try{
                const re = /appId:"(.*?)"/gi;
                let match;
                while ((match = re.exec(rr)) !== null) {
                    console.log(match[1]);
                    sp_appId = match[1];
                }
                /*let index = rr.indexOf("appId");
                if (index !== -1) {
                    let sp_appId = rr.substring(index, index + 10); // 指定文本
                }*/
                console.log("sp_appId:",sp_appId)
            }catch (e) {
                console.error(e)
                Toast.error("出错了,sp_appId获取失败",)
            }
        }


    }

    /*setTimeout(()=>{
        if(getGPTMode()==="SPARK"){
            init_sp_appId()
        }
    })*/
    async function init_sp_chatId() {
        //https://xinghuo.xfyun.cn/iflygpt/u/chat-list/v1/create-chat-list
        let req1 = await GM_fetch({
            method: "POST",
            url: "https://xinghuo.xfyun.cn/iflygpt/u/chat-list/v1/create-chat-list",
            headers: {
                "accept": "application/json, text/plain, */*",
                "x-requested-with": "XMLHttpRequest",
                "origin":"https://xinghuo.xfyun.cn",
                "Content-Type":"application/json",
                "referer":"https://xinghuo.xfyun.cn/desk"
            },
            data:"{}"
        })
        let r = req1.responseText;
        try{
            sp_chatId = JSON.parse(r).data.id;
            console.log("sp_chatId:",sp_chatId)
        }catch (e) {
            console.error(r)
            Toast.error("sp_chatId获取失败")
        }



    }

    setTimeout(()=>{
        if(getGPTMode()==="SPARK"){
            init_sp_chatId()
        }
    },500)

    async function get_sp_GtToken() {
        return new Promise(async (resolve, reject) => {

            //https://riskct.geetest.com/g2/api/v1/pre_load?client_type=h5&callback=geetest_时间戳
            let timestamp = Date.now();
            let req1 = await GM_fetch({
                method: "GET",
                url: `https://riskct.geetest.com/g2/api/v1/pre_load?client_type=h5&callback=geetest_${timestamp}`,
                headers: {
                    "accept": "*/*",
                    "referer": "https://xinghuo.xfyun.cn/"
                }
            })
            let r = req1.responseText;
            console.log(r);
            try {
                let rr = r.replace(`geetest_${timestamp}(`,
                    "");
                rr = rr.substring(0, rr.length - 1)
                console.log("rr", rr)
                let rj = JSON.parse(rr);
                console.log("rj:");
                console.log(rj);

                //====
                let config = {
                    appId: sp_appId,
                    js: rj.data.js,
                    staticPath: rj.data.staticPath,
                    gToken: rj.data.gToken
                }
                console.log("config")
                console.log(config)
                setTimeout(() => {
                    initGeeGuard(config, (gd) => {
                        console.log(gd)
                        if (gd.data.gee_token) {
                            sp_GtToken = gd.data.gee_token;
                            resolve(sp_GtToken)
                        }else{
                            reject("出错")
                        }
                    })
                }, 500)


            } catch (e) {
                console.error(e)
                setTimeout(init_sp_chatId)
                reject("出错")
            }
        })

    }


    //解码
    function decodeSpark(src) {
        /*let rv = function(e) {
             return e.replace(/[^A-Za-z0-9\+\/]/g, "")
         }*/

        let dv =  function(e) {
            //return Buffer.from(e, "base64").toString("utf8")
            // 将 base64 编码的字符串转换为字节数组
            const bytes = CryptoJS.enc.Base64.parse(e);
            // 将字节数组转换为 UTF-8 字符串
            return bytes.toString(CryptoJS.enc.Utf8);
        }//等价BASE64解码 6KaB

        /*let  fv = function(e) {
               return dv(function(e) {
                   return rv(e.replace(/[-_]/g, (function(e) {
                           return "-" == e ? "+" : "/"
                       }
                   )))
               }(e))
        };*/
        return dv(src);
    }



    let spark_first = true;
    async function SPARK(){
        showAnserAndHighlightCodeStr(`<div style="display:flex;align-items:center;gap:8px;color:#999;font-size:14px;padding:4px 0;"><div class="gpt-loading-spinner"></div>正在连接讯飞星火...</div><br>第一次切换到该线路需要刷新页面，该线路为官网线路，使用前确保已经登录[讯飞星火](https://xinghuo.xfyun.cn/)`)
        if(!sp_chatId){
            showAnserAndHighlightCodeStr("chatId为空，请重试。。。使用前确保已经登录[讯飞星火](https://xinghuo.xfyun.cn/)")
            init_sp_chatId()
            return
        }

        await get_sp_GtToken()
        console.log("sp_GtToken",sp_GtToken)
        //重命名
        if(spark_first){
            let req1 = await GM_fetch({
                method: "POST",
                url: "https://xinghuo.xfyun.cn/iflygpt/u/chat-list/v1/rename-chat-list",
                headers: {
                    "accept": "application/json, text/plain, */*",
                    "x-requested-with": "XMLHttpRequest",
                    "origin":"https://xinghuo.xfyun.cn",
                    "Content-Type":"application/json",
                    "referer":"https://xinghuo.xfyun.cn/desk"
                },
                data:JSON.stringify({
                    "chatListId": sp_chatId,
                    "chatListName": your_qus.substring(0,10)
                })
            })
            let r = req1.responseText;
            console.log("rename chat:",r)
            spark_first = false;
        }

        //提问

        let sendData = `------WebKitFormBoundaryAS7tSr3osJng5Nxk\r\nContent-Disposition: form-data; name=\"fd\"\r\n\r\n${sp_fd}\r\n------WebKitFormBoundaryAS7tSr3osJng5Nxk\r\nContent-Disposition: form-data; name=\"clientType\"\r\n\r\n2\r\n------WebKitFormBoundaryAS7tSr3osJng5Nxk\r\nContent-Disposition: form-data; name=\"chatId\"\r\n\r\n${sp_chatId}\r\n------WebKitFormBoundaryAS7tSr3osJng5Nxk\r\nContent-Disposition: form-data; name=\"text\"\r\n\r\n${your_qus}\r\n------WebKitFormBoundaryAS7tSr3osJng5Nxk\r\nContent-Disposition: form-data; name=\"GtToken\"\r\n\r\n${sp_GtToken}\r\n------WebKitFormBoundaryAS7tSr3osJng5Nxk--\r\n`;
        GM_fetch({
            method: 'POST',
            url: 'https://xinghuo.xfyun.cn/iflygpt-chat/u/chat_message/chat',
            headers: {
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryAS7tSr3osJng5Nxk",
                "challenge": "undefined",
                "seccode": "",
                "validate": "undefined",
                "accept": "text/event-stream",
                "x-requested-with": "XMLHttpRequest",
                "origin":"https://xinghuo.xfyun.cn",
                "referer":"https://xinghuo.xfyun.cn/desk"
            },
            responseType: "stream",
            data: sendData
        }).then((stream)=> {
            let reader = stream.response.getReader()
            let ans = []
            //let de = []
            reader.read().then(function processText({done, value}) {
                if (done) {
                    console.log("===done==")
                    //console.log(de)
                    return
                }
                let responseItem = new TextDecoder("utf-8").decode(value)
                console.log(responseItem)

                responseItem.split("\n").forEach(item=>{
                    try {
                        let ii = item.replace(/data:/gi,"").trim();
                        if(ii && ii !==""){
                            let chunk = decodeSpark(ii)
                            //de.push(item.replace(/data:/gi,"").trim())
                            ans.push(chunk)
                            showAnserAndHighlightCodeStr(ans.join(""))
                        }
                    }catch (ex){
                        console.error(item)
                    }
                })

                return reader.read().then(processText)
            },function (reason) {
                console.log(reason)
                Toast.error("未知错误!")
            }).catch((ex)=>{
                console.log(ex)
                Toast.error("未知错误!")
            })
        })


    }

    //星火相关====end=====




    //腾讯混元 ----start-----
    let hunyuan_tUserId = '';
    let hunyuan_count = 0;

    async function initHunyuanID() {
        if (location.href.includes("hunyuan.tencent.com") || location.href.includes("yuanbao.tencent.com")) {
            hunyuan_tUserId = getCookieValue(document.cookie,"hy_user");
            GM_setValue("hunyuan_tUserId", hunyuan_tUserId)
            if(hunyuan_tUserId){
                Toast.info(`hunyuan_tUserId获取成功:${hunyuan_tUserId}`)
            }else{
                setTimeout(initHunyuanID, 5000)
                if(hunyuan_count < 3){
                    Toast.info(`hunyuan_tUserId获取失败，请再次刷新!`)
                }
                hunyuan_count++;
            }

        } else {
            hunyuan_tUserId =  GM_getValue("hunyuan_tUserId")
        }
    }
    //setTimeout(initHunyuanID)


    let hunyuan_isfirst = true;
    let hunyuan_chatId ;
    async function initHunyuan(){

        let req1 = await GM_fetch({
            method: "POST",
            url: `https://hunyuan.tencent.com/api/generate/id`,
            headers: {
                "accept": "application/json, text/plain, */*",
                "origin":"https://hunyuan.tencent.com",
                "referer":`https://hunyuan.tencent.com/bot/chat`,
                "t-userid": hunyuan_tUserId,
                "x-requested-with": "XMLHttpRequest",
                "x-source": "web"
            },
            data:null
        })
        let r = req1.responseText;
        hunyuan_chatId = r;
        if(hunyuan_chatId) hunyuan_isfirst = false;
        console.error("hunyuan_chatId:",r)
    }


    async function Hunyuan(mtag) {

        showAnserAndHighlightCodeStr(`<div style="display:flex;align-items:center;gap:8px;color:#999;font-size:14px;padding:4px 0;"><div class="gpt-loading-spinner"></div>正在连接腾讯Deepseek...</div><br>deepseek较慢，该线路为官网线路，请确保登录[元宝](https://yuanbao.tencent.com/chat)`)

        if(!hunyuan_tUserId){
            let req1 = await GM_fetch({
                method: "GET",
                url: `https://yuanbao.tencent.com/api/getuserinfo`,
                headers: {
                    "accept": "application/json, text/plain, */*",
                    "origin":"https://yuanbao.tencent.com",
                    "referer":`https://yuanbao.tencent.com`
                }
            })
            let r = req1.responseText;
            hunyuan_tUserId = JSON.parse(r).userId
            console.warn("hunyuan_tUserId:",hunyuan_tUserId)
            if(!hunyuan_tUserId){
                showAnserAndHighlightCodeStr("UserId获取失败，请登录[元宝](https://yuanbao.tencent.com/chat)")
                return
            }

        }

        if(hunyuan_isfirst && !hunyuan_chatId){
            await initHunyuan()
        }

        let payload = JSON.stringify({
            "model": "gpt_175B_0404",
            "prompt": your_qus,
            "displayPrompt": your_qus,
            "displayPromptType": 1,
            "plugin": "Adaptive",
            "isSkipHistory": false
        })
        //deepseek联网 2025.02
        if(mtag === 'deepseek'){
            payload = JSON.stringify({
                "model": "gpt_175B_0404",
                "prompt": your_qus,
                "displayPrompt": your_qus,
                "displayPromptType": 1,
                "plugin": "Adaptive",
                "isSkipHistory": false,
                "chatModelId": "deep_seek",
                "supportFunctions": [
                    "supportInternetSearch"
                ]
            })
        }


        GM_fetch({
            method: 'POST',
            url: `https://hunyuan.tencent.com/api/chat/${hunyuan_chatId}`,
            headers: {
                "origin":"https://hunyuan.tencent.com",
                "referer":`https://hunyuan.tencent.com/bot/chat`,
                "chat_version": "v1",
                "content-type": "text/plain;charset=UTF-8",
                "accept": "*/*",
                "t-userid": hunyuan_tUserId,
                "x-requested-with": "XMLHttpRequest",
                "x-source": "web"
            },
            responseType: "stream",
            data: payload
        }).then((stream)=> {
            let reader = stream.response.getReader()
            let ans = []
            reader.read().then(function processText({done, value}) {
                if (done) {
                    console.log("===done==")
                    //console.log(de)
                    let result = ans.join("");
                    showAnserAndHighlightCodeStr(result)

                    return
                }
                let responseItem = new TextDecoder("utf-8").decode(value)
                console.log(responseItem)
                responseItem.split("\n").forEach(item=>{
                    try {
                        let ii = item.replace(/data:/gi,"").trim();
                        if(ii && ii !==""){
                            let chunk = ''
                            //de.push(item.replace(/data:/gi,"").trim())

                            //add deepseek 2025.02
                            if(mtag === 'deepseek'){
                                chunk = JSON.parse(ii).content
                            }else{
                                chunk = JSON.parse(ii).msg
                            }


                            ans.push(chunk)
                            showAnserAndHighlightCodeStr(ans.join(""))

                        }
                    }catch (ex){
                        console.error(item)
                    }
                })

                return reader.read().then(processText)
            },function (reason) {
                Toast.error("未知错误!")
                console.log(reason)
            }).catch((ex)=>{
                Toast.error("未知错误!")
                console.log(ex)
            })
        })

    }



    //腾讯混元 ----end-----




    //智谱AI
    let zhipuToken = '4056fc44f1474c1e85e976577f930e40.O6WKndzKWBjQJWcA';
    let zhipuPrompt = []
    let zhipu_apiKey = localStorage.getItem("ZhipuapiKey")

    function base64UrlEncode(str) {
        let encodedSource = CryptoJS.enc.Base64.stringify(str);
        const reg = new RegExp('/', 'g');
        encodedSource = encodedSource.replace(/=+$/,'').replace(/\+/g,'-').replace(reg,'_');
        return encodedSource;
    }
    function generate_token(apikey, exp_seconds) {

        const [id, secretKey] = apikey.split(".");
        const payload = {
            "api_key": id,
            "exp": Date.now() + exp_seconds * 1000,
            "timestamp": Date.now(),
            // "exp": 1687878553567,
            // "timestamp": 1687877553567
        };

        const encodedHeader = base64UrlEncode(CryptoJS.enc.Utf8.parse(JSON.stringify({ alg: 'HS256', sign_type: 'SIGN', typ: "JWT"})));
        const encodedPayload = base64UrlEncode(CryptoJS.enc.Utf8.parse(JSON.stringify(payload)));

        const signature = CryptoJS.HmacSHA256(encodedHeader + '.' + encodedPayload,  secretKey);

        console.log(signature)
        //const encodedSignature = window.btoa(signature);

        const jwt = encodedHeader + '.' + encodedPayload + '.' + base64UrlEncode(signature);

        console.log(jwt);
        return jwt;
    }
    function ZhipuAI(){
        showAnserAndHighlightCodeStr(`<div style="display:flex;align-items:center;gap:8px;color:#999;font-size:14px;padding:4px 0;"><div class="gpt-loading-spinner"></div>正在连接智谱AI...</div><br>未申请key的，请前往[智谱AI](https://open.bigmodel.cn/usercenter/apikeys)申请，然后点击设置里的更新key`)
        if(!localStorage.getItem("ZhipuapiKey")){
            showAnserAndHighlightCodeStr("apikey不存在。请前往[智谱AI](https://open.bigmodel.cn/usercenter/apikeys)申请，然后点击设置里的更新key")
            return
        }
        zhipu_apiKey = zhipu_apiKey || localStorage.getItem("ZhipuapiKey");
        addMessageChain(zhipuPrompt, {"role": "user", "content": your_qus} , 10)
        GM_fetch({
            method: "POST",
            url: `https://open.bigmodel.cn/api/paas/v3/model-api/chatglm_std/sse-invoke`,
            headers: {
                "accept": "text/event-stream",
                "Content-Type":"application/json",
                "Authorization": generate_token(zhipu_apiKey, 1000)
                // "Authorization": 'eyJhbGciOiJIUzI1NiIsInNpZ25fdHlwZSI6IlNJR04iLCJ0eXAiOiJKV1QifQ.eyJhcGlfa2V5IjoiZjM3ZDVlMjFhZDk1NGJhOTM0NmYyOTgwMTgzNDJiMjciLCJleHAiOjE2ODc4Nzg1NTM1NjcsInRpbWVzdGFtcCI6MTY4Nzg3NzU1MzU2N30.e8SMjA0vBaUxXB-WrViFa0-C0qVLechNV5L5s2WoF8c'
            },
            data:JSON.stringify({
                model:"chatglm_std",
                prompt : zhipuPrompt,
                temperature: 0.95,
                top_p: 0.7,
                incremental: true
            }),
            responseType:"stream"
        }).then((stream)=> {
            let reader = stream.response.getReader()
            let ans = [];
            reader.read().then(function processText({done, value}) {
                if (done) {
                    if(ans.length > 0){
                        addMessageChain(zhipuPrompt, {"role": "assistant", "content": ans.join("")} , 10)
                    }
                    return
                }
                let responseItem = new TextDecoder("utf-8").decode(value)
                console.error(responseItem)
                responseItem = responseItem.split("\n");
                console.warn(responseItem)
                responseItem.forEach(item=>{
                    try {
                        if(item && item.startsWith("data:")){
                            let ii = item.replace(/data:/gi,"")
                            if(ii){
                                ans.push(ii)
                                showAnserAndHighlightCodeStr(ans.join(""))
                            }
                        }
                    }catch (ex){
                        console.error(item)
                    }
                })
                return reader.read().then(processText)
            },function (reason) {
                Toast.error("未知错误!")
                console.log(reason)
            }).catch((ex)=>{
                Toast.error("未知错误!")
                console.log(ex)
            })
        })
    }




    //360智脑 -------start------


    let conversation_id;
    async function Zhinao360(){
        showAnserAndHighlightCodeStr(`<div style="display:flex;align-items:center;gap:8px;color:#999;font-size:14px;padding:4px 0;"><div class="gpt-loading-spinner"></div>正在连接360智脑...</div><br>该线路为官网线路，使用该线路，请确保已经登录[360智脑](https://chat.360.cn/)`)
        const sendData = JSON.stringify({
            "prompt": your_qus,
            "conversation_id": conversation_id || "",
            "source_type": "prophet_web",
            "role": "00000001",
            "is_regenerate": false,
            "is_so": false
        });
        console.log(conversation_id)

        GM_fetch({
            method: "POST",
            url: `https://chat.360.cn/backend-api/api/common/chat`,
            headers: {
                "accept": "text/event-stream",
                "origin": "https://chat.360.cn",
                "referer": `https://chat.360.cn/index`,
                "content-type": "application/json",
            },
            data: sendData,
            responseType:"stream"
        }).then((stream)=> {
            let reader = stream.response.getReader()
            let result = []
            reader.read().then(function processText({done, value}) {
                if (done) {
                    return
                }
                let responseItem = new TextDecoder("utf-8").decode(value)
                // console.error(responseItem)
                console.warn(responseItem)
                if(responseItem){
                    responseItem.split("\n").forEach(item=>{
                        try{
                            if(item.startsWith("data: CONVERSATIONID####")){
                                conversation_id =  item.replace(/data: CONVERSATIONID####/gi,"")

                            }else if(item.startsWith("data: MESSAGEID####")){

                            }else if(item.startsWith("data")){
                                let i =  item.replace(/data: /gi,"")
                                if(i){
                                    result.push(i)
                                }else{
                                    result.push("\n")
                                }
                            }
                        }catch (e) {}
                    })
                    showAnserAndHighlightCodeStr(result.join(""))
                }

                return reader.read().then(processText)
            },function (reason) {
                console.log(reason)
                Toast.error("未知错误!")
            }).catch((ex)=>{
                Toast.error("未知错误!")
                console.log(ex)
            })
        })

    }

    //360智脑 -------end------





    let minimax_group_id = localStorage.getItem("minimax_group_id")//"172531245...";
    let minimax_api_key = localStorage.getItem("minimax_api_key")// "eyJhbGciOi.....
    let minimax_messageChain = [];
    async function miniMax() {

        if(!minimax_group_id || !minimax_api_key){
            showAnserAndHighlightCodeStr("group_id或api_key不存在，请到[https://api.minimax.chat/](https://api.minimax.chat/)注册，申请。然后点击 设置-》更新秘钥")
        }

        addMessageChain(minimax_messageChain, {
            "sender_type": "USER",
            "sender_name": "用户",
            "text": your_qus
        },10)

        let sendData =  {
            "model": "abab5.5-chat",
            "tokens_to_generate": 1024,
            "temperature": 0.9,
            "top_p": 0.95,
            "stream": false,
            "reply_constraints": {
                "sender_type": "BOT",
                "sender_name": "MM智能助理"
            },
            "sample_messages": [],
            "plugins": [],
            "messages": minimax_messageChain,
            "bot_setting": [
                {
                    "bot_name": "MM智能助理",
                    "content": "MM智能助理是一款由MiniMax自研的，没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，一直致力于进行大模型相关的研究。"
                }
            ]
        }


        GM_fetch({
            method: "POST",
            url:`https://api.minimax.chat/v1/text/chatcompletion_pro?GroupId=${minimax_group_id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${minimax_api_key}`,
            },
            data: JSON.stringify(sendData),
            responseType:"stream"
        }).then((stream)=>{
            let result = []
            const reader = stream.response.getReader();
            reader.read().then(function processText({done, value}) {
                if (done) {

                    addMessageChain(minimax_messageChain,{
                        "sender_type": "BOT",
                        "sender_name": "MM智能助理",
                        "text": result.join("")
                    },10)
                    return;
                }
                try {
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    console.warn(d)
                    result.push(JSON.parse(d).reply)
                    showAnserAndHighlightCodeStr(result.join(""))

                } catch (e) {
                    console.log(e)
                }

                return reader.read().then(processText);
            });
        },reason => {
            console.log(reason)
            Toast.error("未知错误!")
        }).catch((ex)=>{
            console.log(ex)
            Toast.error("未知错误!")
        })


    }


    //https://ai1.chagpt.fun/
    function CVEOY() {

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
                const reader = stream.response.getReader();
                reader.read().then(function processText({done, value}) {
                    if (done) {

                        try {
                            let finalResult = result.join("")
                            console.log(finalResult)
                            showAnserAndHighlightCodeStr(finalResult)
                        } catch (e) {
                            console.log(e)
                            Toast.error("未知错误!")
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
                Toast.error("未知错误!")
            }
        });

    }




    //默认设置
    setTimeout(()=>{
        // 加载自定义线路到下拉框
        refreshModeSelectOptions();

        if(localStorage.getItem('GPTMODE')){
            const selectEl = document.getElementById('modeSelect');
            let optionElements = selectEl.querySelectorAll("option");
            for (let op in optionElements) {
                if(optionElements[op].value === localStorage.getItem('GPTMODE')){
                    optionElements[op].setAttribute("selected", "selected");
                    break;
                }
            }
        }

        if(localStorage.getItem('gpt_font_size')){
            document.querySelector("#gptDiv").style.fontSize = localStorage.getItem('gpt_font_size');
        }

        //禁用历史
        if(localStorage.getItem('history_disable')){
            let dis = localStorage.getItem('history_disable');
            history_disable = (dis === 'true' ? true : false);
        }

    },1000)


})();