!function(){var t=null,o={buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};o.buttonStop.disabled=!0,o.buttonStart.addEventListener("click",(function(){o.buttonStart.disabled=!0,o.buttonStop.disabled=!1,t=setInterval((function(){o.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),o.buttonStop.addEventListener("click",(function(){o.buttonStart.disabled=!1,o.buttonStop.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.eaead590.js.map