// ==UserScript==
// @name         酷狗音乐mp3解析
// @namespace    yeyu
// @version      1.0
// @description  解析酷狗、酷狗音乐，获得播放mp3下载链接
// @author       夜雨
// @match        *://www.kugou.com/*/*
// @match        *://m.kugou.com/*/*
// @match        *://kuwo.cn/play_detail/*
// @match        *://*.kuwo.cn/*play_detail/*
// @require      https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js
// @grant        GM_xmlhttpRequest
// @license      MIT
// ==/UserScript==
//https://www.kugou.com/mixsong/7myesm23.html#hash=2DE3E063E1A66185F514FBEE707E7748&album_id=64295658&album_audio_id=461820262
(function() {
    //'use strict';
    let kg = function() {

        function Guid() {
            function e() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
        console.log(Guid())
        //console.log(md5(Guid()));
        if(!Hash) var Hash = ''
        console.log("myhash:" + Hash)
        if(!album_id) var album_id = ''
        console.log("album_id:" + album_id)
        var mid = md5(Guid());
        GM_xmlhttpRequest({
            method: "get",
//			https://wwwapi.kugou.com/yy/index.php?r=play/getdata&mid=f4021358be9ef5dcd551eee96cc72505&encode_album_audio_id=7pzmfved
            url: 'https://wwwapi.kugou.com/yy/index.php?r=play/getdata&hash=' + Hash + '&mid=' + mid +
                '&album_id=' + album_id,
            headers: {
                "Content-Type": "application/json",
                "Cookie": "kg_mid=" + mid
            },
            onload: function(res) {
                if (res.status === 200) {
                    console.log('成功')
                    //适配移动端
                    //phpParam.song_info.data.url
                    try{
                        var ma = document.createElement("a")
                        ma.href = phpParam.song_info.data.url;
                        ma.innerText = "已解析完成，点击下载"
                        ma.setAttribute("class","cmhead1_a1")
                        document.querySelector("#mod_down_2").after(ma)
                        return
                    }catch(e){
                        //TODO handle the exception

                    }


                    let ret = JSON.parse(res.response)
                    console.log(ret.data.play_url)
                    let aa = document.createElement("a")
                    aa.href = ret.data.play_url;
                    aa.innerText = "[1]已解析完成，点击下载[   1     ]"
                    aa.setAttribute("class","cmhead1_a1")
                    if(ret.data.play_url){
                        $(".btnDownloadClient").after(aa)
                        if ($("#openKugou")) $("#openKugou").after(aa)
                    }
                    //解析方式2
                    var a2 = document.createElement("a")
                    a2.href = document.querySelector("#myAudio").getAttribute("src")
                    a2.innerText = "[2]已解析完成，点击下载[   2     ]"
                    a2.setAttribute("class","cmhead1_a1")
                    if(document.querySelector("#myAudio").getAttribute("src")){
                        $(".btnDownloadClient").after(a2)
                        if ($("#openKugou")) $("#openKugou").after(a2)
                    }
                } else {
                    console.log('失败')
                    console.log(res)
                }
            },
            onerror: function(err) {
                console.log('error')
                console.log(err)
            }
        });
    }

    let kuwo = function() {

        function getReqId() {
            var r, o, l = function() {
                    n = 202
                    r = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    }
                    return r;
                },
                c = function() {
                    n = 203
                    r = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    }
                    return r;
                },
                h = 0,
                d = 0,
                e = {};
            t = {
                i: 100,
                l: false
            }
            var i = 0,
                b = [],
                f = [77, 206, 82, 111, 249, 146],
                v = 908;
            if (null == f || null == v) {
                var m = l();
                null == f && (f = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == v && (v = o = 16383 & (
                    m[6] << 8 | m[
                        7]))
            }
            var y = (new Date).getTime(),
                w = d + 1,
                dt = y - h + (w - d) / 1e4;
            w = 0
            h = y, d = w, o = v;
            var x = (1e4 * (268435455 & (y += 122192928e5)) + w) % 4294967296;
            b = []
            b[i++] = x >>> 24 & 255, b[i++] = x >>> 16 & 255, b[i++] = x >>> 8 & 255, b[i++] = 255 & x;
            var _ = y / 4294967296 * 1e4 & 268435455;
            b[i++] = _ >>> 8 & 255, b[i++] = 255 & _, b[i++] = _ >>> 24 & 15 | 16, b[i++] = _ >>> 16 & 255, b[
                i++] = v >>> 8 |
                128, b[i++] = 255 & v;
            for (var A = 0; A < 6; ++A)
                b[i + A] = f[A];
            var s = function(t) {
                for (var n = [], i = 0; i < 256; ++i)
                    n[i] = (i + 256).toString(16).substr(1);
                var i = 0,
                    r = n;
                return [r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[
                    i++]], r[t[i++]],
                    "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], r[t[
                        i++]], r[t[i++]]
                ].join("")
            }
            return s(b);
        }


        //http://kuwo.cn/play_detail/252351766



        var reqid = getReqId()
        var musicId = location.href.split("play_detail\/")[1];

        console.log(musicId);
        if (!musicId) return
        GM_xmlhttpRequest({
            method: "get",
            url: 'https://www.kuwo.cn/api/v1/www/music/playUrl?mid=' + musicId +
                '&type=music&httpsStatus=1&reqId=' + reqid,
            headers: {
                "Content-Type": "application/json"
            },
            onload: function(res) {
                if (res.status === 200) {
                    console.log('成功')
                    var ret = JSON.parse(res.response)
                    console.log(ret.data.url)
                    var aa = document.createElement("a")
                    aa.href = ret.data.url;
                    aa.innerText = "已解析完成，点击下载"
                    if(document.querySelector(".btns")){
                        document.querySelector(".btns").after(aa)
                    }
                    if(document.querySelector(".downloadMusic")){
                        document.querySelector(".downloadMusic").after(aa)
                    }


                } else {
                    console.log('失败')
                    console.log(res)
                }
            },
            onerror: function(err) {
                console.log('error')
                console.log(err)
            }
        });
    }

    if (location.href.includes("kuwo")) {
        setTimeout(kuwo, 2500)
    } else {
        setTimeout(kg, 2500)
    }


})();
