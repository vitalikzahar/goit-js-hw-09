const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.body;let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.setAttribute("disabled","")})),e.addEventListener("click",(()=>{clearInterval(a),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.7af6cf33.js.map