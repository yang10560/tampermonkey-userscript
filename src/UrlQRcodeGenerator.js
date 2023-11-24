// ==UserScript==
// @name         网页URL二维码生成
// @namespace    http://yeyu1024.xyz
// @version      1.5
// @description  生成当前网页的地址(url)的二维码，方便手机扫描.支持二维码图片解析
// @description:en Generate the QR code of the address of the current webpage (URL), which is convenient for mobile phone scanning
// @author       夜雨
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=https://www.the-qrcode-generator.com
// @require      https://cdn.bootcdn.net/ajax/libs/qrcodejs/1.0.0/qrcode.min.js
// @require      https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js
// @grant        GM_registerMenuCommand
// @homepageURL  https://greasyfork.org/zh-CN/scripts/480612
// @supportURL   https://greasyfork.org/zh-CN/scripts/480612
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    function addjs() {
        // require      https://cdn.jsdelivr.net/npm/jsqr/dist/jsQR.js
        //spark-js
        if(!document.getElementById("jsQRjs")){
            $("head").append($(
                '<script id="jsQRjs" src="https://cdn.jsdelivr.net/npm/jsqr/dist/jsQR.js"></script>'
            ));
        }

    }
    setTimeout(addjs)
    setInterval(addjs,3000)


    function urlQRCode(){
        $("body").append(`<div id="QRContainer" class="qrcodeDiv" style="z-index: 9999 !important;left: 50px;top: 50px;/*height: 350px;*/position: fixed;background-color: white;border-radius: 10px" >
      <div style="margin: 20px" id="qrcodeDiv"></div>
      <div style="margin-left: 20px">
          <button style="font-size: 14px;width: 70px; height: 30px;margin-top: 10px;margin-bottom:10px;border-radius: 6px;margin-left: 3px;" id="closeQRCodebtn">关闭</button>
          <button style="font-size: 14px;width: 120px; height: 30px;margin-top: 10px;margin-bottom:10px;border-radius: 6px;margin-left: 3px;" id="reQRCodebtn">重新生成</button>
      </div>
    </div>`);

        let qrcodeDiv = document.getElementById("qrcodeDiv")
        let QRContainer = document.getElementById("QRContainer")
        let qrcode = new QRCode(qrcodeDiv, {
            text: location.href,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        const closeQRCodebtn = document.getElementById("closeQRCodebtn");
        closeQRCodebtn.addEventListener("click",()=>{
            QRContainer.remove();
        })

        const reQRCodebtn = document.getElementById("reQRCodebtn");
        reQRCodebtn.addEventListener("click",()=>{
            qrcode.clear(); // clear the code.
            qrcode.makeCode(location.href);
        })
    }

    function decodeImgQRcode(img){
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
            console.log("解析结果",'二维码内容：' + code.data)
            $("body").append(`<div id="QRContainer" class="qrcodeDiv" style="z-index: 9999 !important;left: 50px;top: 50px;/*height: 350px;*/position: fixed;background-color: white;border-radius: 10px" >
                <textarea rows="5" style="margin: 20px" id="decodeResult"></textarea>
                <button style="font-size: 14px;width: 70px; height: 30px;margin-top: 10px;margin-bottom:10px;border-radius: 6px;margin-left: 3px;" id="closeQRresultbtn">关闭</button>
            </div>
        </div>`);

            let decodeResult = document.getElementById("decodeResult")
            let QRContainer = document.getElementById("QRContainer")
            decodeResult.innerHTML = code.data
            const closeQRresultbtn = document.getElementById("closeQRresultbtn");
            closeQRresultbtn.addEventListener("click",()=>{
                QRContainer.remove();
            })

        } else {
            alert('未找到二维码')
        }
    }

    GM_registerMenuCommand("生成二维码", function (event) {
        let QRContainer = document.getElementById("QRContainer")
        if(QRContainer){
            QRContainer.remove()
        }
        urlQRCode()
    }, "qrcodeGenerate");

    GM_registerMenuCommand("解析二维码", function (event) {
        alert("请点击要解析含有二维码的图片.")
        let contextMenuHandler = function(ev) {
            ev.preventDefault();
            if (ev.button === 0) {
                console.log('解析二维码...');

                // 获取所有的 img 元素
                const images = document.querySelectorAll('img');

                // 为每个 img 元素删除事件监听器
                images.forEach(function(img) {
                    img.removeEventListener('click', contextMenuHandler);
                });

                console.log('二维码解析---结束');
                console.warn(ev.target)
                decodeImgQRcode(ev.target)
            }

        };
        console.log('二维码解析---启动');
        // document.addEventListener('click', contextMenuHandler);

        // 获取所有的 img 元素
        const images = document.querySelectorAll('img');

        // 为每个 img 元素添加点击事件监听器
        images.forEach(function(img) {
            img.setAttribute("crossorigin","anonymous") //crossorigin="anonymous"
            img.addEventListener('click', contextMenuHandler);
        });


    }, "decodeQRImg");


})();