(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(272),t.b),l=i()(r()),p=d()(s);l.push([n.id,'* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: "Open Sans";\n    src: url('+p+') format("ttf");\n    font-style: normal;\n}\n\n:root {\n    --text-color-dark: #112D4E;\n    --text-color-light: #F9F7F7;\n    --button-color: #3F72AF;\n    --button-hover: #112D4E;\n    --bg-color-footer: #112D4E;\n    --bg-color-menu: rgba(219, 226, 239, 0.8);\n    --bg-color-card: rgba(219, 226, 239, 0.8);\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr min-content;\n    min-height: 100vh;\n    height: 100%;\n    font-family: "Open Sans", Ubuntu;\n}\n\nh1 {\n    font-size: 2.5rem;\n}\n\nh2 {\n    font-size: 1.5rem;\n    margin-top: 12px;\n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\np {\n    font-size: 1rem;\n}\n\ninput {\n    accent-color: var(--button-color);\n}\n\n.grid-container {\n    justify-self: center;\n    display: grid;\n    grid-template-rows: min-content min-content 1fr;\n    grid-template-columns: minmax(100%, 800px);\n}\n\n\n/*************\nButton\n/*************/\n\n\n/* Add Book / Add (Form) */\n\nbutton {\n    color: var(--text-color-light);\n    background-color: var(--button-color);\n    height: 36px;\n    width: 108px;\n    font-size: 1rem;\n    font-weight: 700;\n    border-radius: 8px;\n    border: 0;\n    margin: 0 8px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: var(--button-hover);\n    box-shadow: 5px 5px 2px var(--button-color);\n}\n\nform button {\n    align-self: center;\n}\n\n\n/* "X" Remove book / Close form */\n\n.btn-removeBook,\n.btn-close-modal {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    height: min-content;\n    width: min-content;\n    color: var(--text-color-dark);\n    font-size: 22px;\n    font-weight: bold;\n    margin: 0;\n    border: 0;\n    background: 0;\n    opacity: 0.5;\n}\n\n.btn-removeBook:hover,\n.btn-close-modal:hover {\n    color: red;\n    box-shadow: 0 0 0;\n    background-color: rgba(255, 255, 255, 0);\n}\n\n.btn-removeBook::before {\n    content: "\\2715";\n}\n\n.btn-close-modal {\n    top: 8px;\n    right: 16px;\n    font-size: 36px;\n}\n\n\n/*************\nHEADER\n/*************/\n\n.header {\n    display: flex;\n    align-items: center;\n    padding: 16px 0;\n}\n\n.header img {\n    width: 84px;\n}\n\n\n/*************\nMENU\n/*************/\n\n.menu {\n    display: flex;\n    align-items: center;\n    background-color: var(--bg-color-menu);\n    border-radius: 8px;\n    padding: 16px 16px;\n}\n\n.menu p {\n    margin-left: auto;\n    font-size: .8rem;\n}\n\n.menu select {\n    background: 0;\n    border: 1px solid black;\n    border-radius: 4px;\n    width: min-content;\n    height: 36px;\n    font-size: 1rem;\n    cursor: pointer;\n    margin: 0 8px;\n}\n\n\n/*************\nBOOK CONTAINER\n/*************/\n\n.book-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    grid-auto-rows: min-content;\n    gap: 16px;\n    padding: 16px 0;\n}\n\n.book-card {\n    position: relative;\n    height: 200px;\n    background-color: var(--bg-color-card);\n    border-radius: 8px;\n    display: grid;\n    grid-template-columns: minmax(130px, 1fr) 5fr;\n    grid-template-rows: 5fr 1fr;\n}\n\n.book-card-img {\n    padding: 0;\n    grid-row: 1 / 3;\n}\n\n.book-card-img img {\n    height: 200px;\n    width: 100%;\n    object-fit: fill;\n    border-radius: 8px 0 0 8px;\n}\n\n.book-card-text {\n    grid-row: 1;\n    grid-column: 2;\n    padding: 16px 0 0 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.book-card-checkbox {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    margin-top: auto;\n}\n\n.book-card-add-date {\n    align-self: center;\n    padding: 0 16px;\n    opacity: 0.6;\n}\n\n.book-card-add-date p {\n    font-size: .8rem;\n}\n\n\n/*************\nFOOTER\n/*************/\n\n.footer {\n    background-color: var(--bg-color-footer);\n    color: var(--text-color-light);\n    padding: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.footer a {\n    display: flex;\n    align-items: center;\n    color: var(--text-color-light);\n}\n\n\n/*************\nMODAL - Form\n/*************/\n\n.modal {\n    display: none;\n    justify-content: center;\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4);\n    /* Black w/ opacity */\n}\n\n.modal-content {\n    position: relative;\n    background-color: white;\n    padding: 20px;\n    box-shadow: 0px 0px 8px 8px var(--button-color);\n    border-radius: 8px;\n    height: min-content;\n    width: 100%;\n    max-width: 400px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-top: 20px;\n}\n\nform>span {\n    color: red;\n}\n\ninput:required:not(:placeholder-shown):valid {\n    border: 3px solid lightgreen;\n}\n\ninput:not(:placeholder-shown):valid+span {\n    display: none;\n}\n\n\n/*************\nJS CLASS\n/*************/\n\n.isRead {\n    background-color: lightgreen;\n    background: rgb(219, 226, 239);\n    background: linear-gradient(140deg, rgba(219, 226, 239, 1) 0%, rgba(219, 226, 239, 1) 10%, rgba(129, 255, 127, 1) 100%);\n}',""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=r(h,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},272:(n,e,t)=>{n.exports=t.p+"9c7806d7ef7d294f568e.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),h=t(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const g=t.p+"ec2c375f59c7a29595f2.svg";let b=[],f=0;const x=document.querySelector(".book-container"),v=document.querySelector(".btn-addBook"),k=document.getElementById("myModal"),y=document.querySelector(".btn-close-modal"),C=document.querySelector(".btn-form"),w=document.querySelector("#sortBy");console.log("test check");class E{constructor(n,e,t,o,r){this.title=n,this.author=e,this.publishDate=t,this.imgURL=o,this.read=r,this.addedDate="yyyy-mm-dd",this.domId=0}createCard(){const n=document.createElement("div");n.classList.add("book-card"),n.setAttribute("book-id",f),x.appendChild(n);const e=document.createElement("div");this.bookImg=document.createElement("img"),e.classList.add("book-card-img"),n.appendChild(e),e.appendChild(this.bookImg);const t=document.createElement("div");this.bookTitle=document.createElement("h2"),this.bookAuthor=document.createElement("h3"),this.bookPublished=document.createElement("p"),t.classList.add("book-card-text"),n.appendChild(t),t.appendChild(this.bookTitle),t.appendChild(this.bookAuthor),t.appendChild(this.bookPublished);const o=document.createElement("div");this.bookAddDate=document.createElement("p"),o.classList.add("book-card-add-date"),n.appendChild(o),o.appendChild(this.bookAddDate);const r=document.createElement("label");r.htmlFor="idTest",r.textContent="Read: ";const a=document.createElement("div");a.classList.add("book-card-checkbox"),this.readCheckbox=document.createElement("input"),this.readCheckbox.type="checkbox",this.readCheckbox.name="name",this.readCheckbox.value="value",this.readCheckbox.id="idTest",this.readCheckbox.classList.add("card-checkbox"),t.appendChild(a),a.appendChild(r),a.appendChild(this.readCheckbox),this.deleteBtn=document.createElement("button"),this.deleteBtn.classList.add("btn-removeBook"),this.deleteBtn.setAttribute("book-id",f),n.appendChild(this.deleteBtn)}populateCard(n){this.bookTitle.textContent=this.title,this.bookAuthor.textContent=`By: ${this.author}`,this.bookPublished.textContent=this.publishDate,this.bookImg.src=this.imgURL,this.bookImg.alt="Book cover image",this.bookAddDate.textContent=this.addedDate,this.read&&(this.readCheckbox.checked=!0,this.readCheckbox.offsetParent.classList.toggle("isRead"))}removeCard(n){x.removeChild(n)}}function L(n){const e=new Date,t=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`;n.addedDate=t,n.domId=f,n.createCard(),n.populateCard(),++f}function S(n){let e=0;const t=document.querySelector("#sortBy"),o=[...b];"title"===t.value&&o.sort(((n,e)=>null===n?1:null===e?-1:n.title.toLowerCase()>e.title.toLowerCase()?1:e.title.toLowerCase()>n.title.toLowerCase()?-1:void 0)),"author"===t.value&&o.sort(((n,e)=>null===n?1:null===e?-1:n.author.toLowerCase()>e.author.toLowerCase()?1:e.author.toLowerCase()>n.author.toLowerCase()?-1:void 0));for(const n of o)null!==n&&(document.querySelector(`[book-id="${n.domId}"]`).setAttribute("style",`order: ${e};`),++e)}x.addEventListener("click",(n=>{if("change"!==n.type&&"btn-removeBook"===n.target.className){const e=n.target.getAttribute("book-id");b[e].removeCard(n.target.parentElement),b[e]=null}})),x.addEventListener("change",(n=>{const e=n.target.offsetParent.getAttribute("book-id");n.target.checked&&(n.target.parentElement.offsetParent.classList.add("isRead"),b[e].read=!0),n.target.checked||(n.target.parentElement.offsetParent.classList.remove("isRead"),b[e].read=!1)})),w.addEventListener("change",S),v.addEventListener("click",(()=>{k.style.display="flex"})),y.addEventListener("click",(()=>{k.style.display="none"})),C.addEventListener("click",(n=>{const e=document.querySelector("form").elements;let t=e[0].value,o=e[1].value,r=e[2].value,a=e[3].value,i=e[4].checked;if(!t)return;a||(a=g);const c=new E(t,o,r,a,i);b.push(c),L(c),S(),k.style.display="none",e[0].value="",e[1].value="",e[2].value="",e[3].value="",e[4].checked=!1}));const A=new E("Hyperion","Dan Simmons","1989","https://images-na.ssl-images-amazon.com/images/I/91cI7fKu0vL.jpg",!0),B=new E("The Fall of Hyperion","Dan Simmons","1990","https://m.media-amazon.com/images/I/51tqDyv9QcL.jpg",!1);b.push(A),b.push(B),b.forEach((n=>{null!==n&&L(n)}))})()})();