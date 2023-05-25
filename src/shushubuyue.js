// ==UserScript==
// @name         叔叔不约只配女
// @namespace    yeyu
// @version      0.3
// @description  叔叔不约只配女
// @author       夜雨
// @match        *://*.shushubuyue.net/*
// @match        *://*.shushubuyue.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shushubuyue.net
// @license      MIT
// ==/UserScript==





//输入框
// document.querySelector("#msgInput").value


// //离开按钮(左边)
// document.querySelector("a.button-link.chat-control").click()
// document.querySelector("span.actions-modal-button.actions-modal-button-bold.color-danger").click()

// //离开-重开按钮(中间)
// document.querySelector("span.chat-control").click()
// document.querySelector("span.chat-control").innerText == '离开' / '重新开始'

(function() {

	'use strict';

	function leave() {
		var leftButton = document.querySelector("a.button-link.chat-control");
		if (leftButton) leftButton.click()
		var leftSecondButton = document.querySelector(
			"span.actions-modal-button.actions-modal-button-bold.color-danger")
		if (leftSecondButton) leftSecondButton.click()

		var restartButton = document.querySelector("span.chat-control")
		if (restartButton && restartButton.innerText) {
			if (typeof restartButton.innerText == "string" && restartButton.innerText == "离开") {
				restartButton.click()
				setTimeout(function() {
					restartButton.click()
				}, 500)
			} else if (typeof restartButton.innerText == "string" && restartButton.innerText == "重新开始") {
				restartButton.click()
			} else {
				console.log("error restartButton")
			}
		}

	}

	function init() {
		setInterval(() => {
			var tab = document.querySelector("#partnerInfoText")
			if (tab) var tabText = tab.innerText
			if (tabText && typeof tabText == 'string' && tabText.indexOf("女生") != -1) {
				//女生
				/*
				var restartButton = document.querySelector("span.chat-control")
				if (restartButton && restartButton.innerText) {
					if (typeof restartButton.innerText == "string" && restartButton.innerText == "离开") {
						restartButton.click()
						setTimeout(function() {
							restartButton.click()
						}, 500)
					} else if (typeof restartButton.innerText == "string" && restartButton.innerText ==
						"重新开始") {
						restartButton.click()
					} else {
						//console.log("error restartButton")
					}
				}
				*/

			}

			if (tabText && typeof tabText == 'string' && tabText.indexOf("男生") != -1) {
				//男生
				leave()

			}

		}, 1000)
	}

	setTimeout(init, 5000)



})();
