!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=38)}([function(e,t,o){e.exports=o.p+"/pages/index.html"},function(e,t,o){e.exports=o.p+"/pages/blog.html"},function(e,t,o){e.exports=o.p+"/pages/contact.html"},function(e,t,o){e.exports=o.p+"/pages/about-me.html"},function(e,t,o){e.exports=o.p+"/pages/projects.html"},function(e,t,o){},function(e,t,o){"use strict";var n,i;n=document.querySelector(".header__mobile-button"),i=document.querySelector(".header__mobile .header__mobile-content"),n&&i?n.addEventListener("click",(function(){var e;e=i,n.classList.toggle("button_is-active"),e.classList.toggle("menu_is-active")})):console.error(" Menubutton or mobileMenu was not found ")},function(e,t,o){"use strict";var n;(n=document.querySelector(".latest-commit"))?fetch("https://api.github.com/repos/kletskovg/kletskovg.tech/commits").then((function(e){return e.json()})).then((function(e){var t=new Date(e[0].commit.author.date),o=t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear();n.innerHTML=o})).catch((function(e){return console.log(e)})):console.log("Latest commit date was not founed")},function(e,t,o){"use strict";var n;(n=document.querySelector(".email-send"))?n.addEventListener("click",(function(e){e.preventDefault(),function(){var e=document.querySelector(".topic").value,t=document.querySelector(".name").value,o=document.querySelector(".your-text").value;if(!1!==function(e,t,o){var n=t.indexOf("@")>-1,i=e.length>3,r=o.length>15;return n&&i&&r?(console.log("Accepted"),!0):(console.log("Shit"),!1)}(e,t,o)){for(var n=document.querySelectorAll(".error"),i=n.length,r=0;r<i;r++)n[r].style.opacity="0";var s=JSON.stringify({subject:e,from:t,text:o});console.log(s),fetch("http://localhost:4200/email",{method:"post",headers:{"Content-type":"application/json"},body:s}).then((function(e){200===e.status?alert("Email was sent to me!"):alert(e.json().message)})).catch((function(e){return console.log(e)}))}else for(var c=document.querySelectorAll(".error"),a=c.length,u=0;u<a;u++)c[u].style.opacity="1"}()})):console.log("Button for sending email was not found")},function(e,t,o){"use strict";function n(e,t){return Math.floor(Math.random()*(t-e+1)+e)}!function(){var e=document.querySelectorAll(".icon-travel"),t=document.querySelector(".svgcontainer");if(e&&t){for(var o,i,r=t.getBoundingClientRect(),s=r.width,c=r.height,a=[],u=0;u<e.length;u++)a.push({icon:e[u],top:50,left:0,destinationTop:0,destinationLeft:0});setTimeout((function(){for(var t=0;t<e.length;t++)e[t].style.opacity="1"}),1e3),o=s,i=c,a.forEach((function(e){var t=n(0,i),r=n(0,o);e.icon.style.top=t+"px",e.icon.style.left=r+"px"})),setInterval((function(){!function(e){e.forEach((function(e){}))}(a)}),20)}}()},function(e,t,o){e.exports=o.p+"/images/avatar.jpg"},function(e,t,o){e.exports=o.p+"/images/imagesavatar.jpg"},function(e,t,o){e.exports=o.p+"/images/imagesimage1.jpg"},function(e,t,o){e.exports=o.p+"/images/imagesimage2.jpg"},function(e,t,o){e.exports=o.p+"/images/imagesimagesimage4.jpg"},function(e,t,o){e.exports=o.p+"/images/imagesimagesimage5.jpg"},function(e,t,o){e.exports=o.p+"/images/imagesimagesimage6.jpg"},function(e,t,o){e.exports=o.p+"/images/imagesimagesimage7.jpg"},function(e,t,o){e.exports=o.p+"/images/imagesimagesimage8.jpg"},function(e,t,o){e.exports=o.p+"/images/imagesimagesimage9.jpg"},function(e,t,o){e.exports=o.p+"/images/imagesimagestest.jpg"},function(e,t,o){e.exports=o.p+"/images/TelegramContest.png"},function(e,t,o){e.exports=o.p+"/images/FaceRecog.jpg"},function(e,t,o){e.exports=o.p+"/images/codeWallpaper.jpeg"},function(e,t,o){e.exports=o.p+"/images/avatar2.png"},function(e,t,o){e.exports=o.p+"/images/avatar3.png"},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){e.exports=o.p+"/svg/node-js.svg"},function(e,t,o){e.exports=o.p+"/svg/js-square.svg"},function(e,t,o){e.exports=o.p+"/svg/angular.svg"},function(e,t,o){e.exports=o.p+"/svg/docker.svg"},function(e,t,o){e.exports=o.p+"/svg/stack-overflow.svg"},function(e,t,o){e.exports=o.p+"/svg/logo.svg"},function(e,t,o){e.exports=o.p+"/svg/logo1.svg"},function(e,t,o){"use strict";o.r(t);o(0),o(1),o(2),o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13),o(14),o(15),o(16),o(17),o(18),o(19),o(20),o(21),o(22),o(23),o(24),o(25),o(26),o(27),o(28),o(29),o(30),o(31),o(32),o(33),o(34),o(35),o(36),o(37)}]);