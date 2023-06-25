// ==UserScript==
// @name         手机浏览器console控制台加载
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  能让手机浏览器的像电脑脑F12一样调试代码，查看console控制台信息，查看网页源码，js调试等。
// @author       夜雨
// @match        http://*/*
// @match        https://*/*
// @grant      GM_registerMenuCommand
// @license        MIT
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';
    function loadScript(url, callback) {
        if(document.querySelector("#eruda")){
            callback();
            return
        }
        const script = document.createElement('script');
        script.setAttribute("id","eruda")
        script.type = 'text/javascript';

        script.onload = function() {
            callback();
        };

        script.src = url;
        document.head.appendChild(script);
    }

    let show = false;

    try {
        GM_registerMenuCommand("打开/关闭", function (event) {
            if(show){
                loadScript('https://cdn.staticfile.org/eruda/3.0.0/eruda.min.js', () =>{
                    eruda.init({
                        useShadowDom:true,
                        autoScale:true,
                        defaults:{
                            displaySize: 40,
                            transparency: 0.9
                        }
                    });
                });
            }else {
                eruda.destroy();
            }
            show = !show;
        }, "openEruda");
    }catch (ex){
        loadScript('https://cdn.staticfile.org/eruda/3.0.0/eruda.min.js', () =>{
            eruda.init({
                useShadowDom:true,
                autoScale:true,
                defaults:{
                    displaySize: 40,
                    transparency: 0.9
                }
            });
        });
    }

})();