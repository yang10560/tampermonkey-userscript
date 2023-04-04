console.log("AI通杀js")
function kill(question){
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
//enc-end

    let your_qus = question;//你的问题
    let now = Date.now();
    const pk = `Na3dx_(?qx32l}ep?#:8:mo44;7W\\2W.:nxm:${your_qus.length}`;//查看js的generateSignature函数中的key
    let Baseurl = "https://ai.ls/"

    generateSignatureWithPkey({
        t: now,
        m: your_qus || "",
        pkey: pk
    }).then(sign => {
        console.log(sign)
        fetch(Baseurl + "api/generate", {
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "cache-control": "no-cache",
                "content-type": "text/plain;charset=UTF-8",
                "pragma": "no-cache",
                "sec-ch-ua": "\"Chromium\";v=\"21\", \" Not;A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": Baseurl,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `{\"messages\":[{\"role\":\"user\",\"content\":\"${your_qus}\"}],\"time\":${now},\"pass\":null,\"sign\":\"${sign}\",\"key\":\"\"}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        }).then(response => {
            const reader = response.body.getReader();
            let chunks = [];

            function pump() {
                reader.read().then(({done, value}) => {
                    if (done) {
                        // 数据已经被完全消耗
                        const data = chunks.join("")
                        console.log(data);
                        return;
                    }
                    let d = new TextDecoder("utf8").decode(new Uint8Array(value));
                    //console.log(d);
                    chunks.push(d);
                    pump();
                });
            }

            pump();
        });
    });
}

kill("你好啊")