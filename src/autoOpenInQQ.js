// ==UserScript==
// @name         QQ链接自动打开
// @namespace    http://yeyu1024.xyz
// @version      2.9
// @description  PC上使用QQ、QQ邮箱，微云文档点开链接，浏览器提示非QQ官方链接页面时自动打开对应的链接。另外支持CSDN，简书，贴吧，微博，酷安，知乎，nodeseek，百科
// @author       夜雨
// @match        *://c.pc.qq.com/*
// @match        *://weixin110.qq.com/cgi-bin/*
// @match        *://link.zhihu.com/*
// @match        *://mail.qq.com/cgi-bin/*
// @match        *://wx.mail.qq.com/xmspamcheck/*
// @match        *://*.bdimg.com/safecheck/*
// @match        *://t.cn/*
// @match        *://*.coolapk.com/link*
// @match        *://*.jianshu.com/go-wild*
// @match        *://link.csdn.net/*
// @match        *://link.juejin.cn/*
// @match        *://baike.baidu.com/reference/*
// @match        *://google.urlshare.cn/umirror_url_check*
// @match        *://www.nodeseek.com/jump?to=*
// @match        *://bsb.baidu.com/lanjie/*
// @icon         https://mat1.gtimg.com/www/icon/favicon2.ico
// @grant        none
// @run-at       document-end
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    const url = location.href;
    const params = new URLSearchParams(location.search);

    // 从 URL 参数获取链接
    function getParam(name) {
        const val = params.get(name);
        return val ? decodeURIComponent(val) : '';
    }

    // 安全获取元素文本
    function getText(selector) {
        const el = document.querySelector(selector);
        return el ? el.innerText.trim() : '';
    }

    // 安全点击元素
    function clickEl(selector) {
        const el = document.querySelector(selector);
        if (el) el.click();
    }

    // 跳转
    function openUrl(link) {
        if (!link) return;
        console.log('[自动打开]', link);
        location.href = link.startsWith('http') ? link : `http://${link}`;
    }

    // 等待元素出现，返回 Promise<Element>
    function waitForElement(selector, timeout = 5000) {
        return new Promise((resolve) => {
            const existing = document.querySelector(selector);
            if (existing) return resolve(existing);
            const observer = new MutationObserver(() => {
                const el = document.querySelector(selector);
                if (el) {
                    observer.disconnect();
                    resolve(el);
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
            setTimeout(() => {
                observer.disconnect();
                resolve(null);
            }, timeout);
        });
    }



    // ========== 各平台处理 ==========

    // QQ PC 安全链接
    if (url.includes('c.pc.qq.com')) {
        const link = getParam('pfurl') || getParam('url');
        if (link) { openUrl(link); return; }
        waitForElement('div.safety-url').then(el => {
            openUrl(el ? el.innerText.trim() : '');
        });
        return;
    }

    // 掘金
    if (url.includes('link.juejin.cn')) {
        const link = getParam('target');
        if (link) { openUrl(link); return; }
        waitForElement('.link-container + *').then(el => { if (el) el.click(); });
        return;
    }

    // 百度安全检查
    if (url.includes('bdimg.com')) {
        waitForElement('a.btn.btn-next').then(el => { if (el) el.click(); });
        return;
    }

    // 微博短链
    if (url.includes('t.cn')) {
        waitForElement('.open-url a').then(el => { if (el) el.click(); });
        return;
    }

    // 酷安
    if (url.includes('coolapk.com/link')) {
        openUrl(getParam('url'));
        return;
    }

    // 知乎
    if (url.includes('zhihu.com')) {
        openUrl(getParam('target'));
        return;
    }

    // 简书
    if (url.includes('jianshu.com')) {
        openUrl(getParam('url'));
        return;
    }

    // CSDN
    if (url.includes('link.csdn.net')) {
        openUrl(getParam('target'));
        return;
    }

    // 微云文档
    if (url.includes('google.urlshare.cn')) {
        openUrl(getParam('url'));
        return;
    }

    // NodeSeek
    if (url.includes('nodeseek.com/jump')) {
        openUrl(getParam('to'));
        return;
    }

    // 微信安全链接
    if (url.includes('weixin110')) {
        waitForElement('.weui-msg__desc').then(el => {
            openUrl(el ? el.innerText.trim() : '');
        });
        return;
    }

    // 百度百科
    if (url.includes('baike')) {
        waitForElement('a strong', 2000).then(el => {
            if (el) openUrl(el.innerText.trim());
        });
        return;
    }

    // 百度拦截
    if (url.includes('bsb.baidu.com')) {
        waitForElement('a#pc_jxfw', 2000).then(el => {
            if (el) openUrl(el.href);
        });
        return;
    }

    // QQ 邮箱
    if (url.includes('mail.qq.com')) {
        // 优先尝试页面内置跳转函数
        try { goUrl(1); return; } catch {}
        // 等待页面渲染完成后操作
        waitForElement('#accessBtn, div.safety-url, .content__url', 5000).then(el => {
            if (el) {
                if (el.id === 'accessBtn') { el.click(); return; }
                openUrl(el.innerText.trim());
                return;
            }
            // 兜底：从 URL 参数获取
            const link = getParam('url');
            if (link) openUrl(link);
        });
    }

})();
