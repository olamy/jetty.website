!function(){"use strict";var c,o,e=[].slice.call(document.querySelectorAll(".doc [data-feed]"));e.length&&(c=(c=document.getElementById("card-entry"))&&c.content.querySelector(".card-block"))&&(o=window.XMLHttpRequest,e.forEach(function(r){try{var t=r.dataset.feed,e=Number(r.dataset.max)||1/0,n=new o;n.open("GET",t),n.addEventListener("load",function(){[].slice.call(this.responseXML.querySelectorAll("item"),0,e).forEach(function(e){var t=c.cloneNode(!0);t.querySelector(".card-link").setAttribute("href",e.querySelector("link").textContent),t.querySelector(".card-title").innerHTML=e.querySelector("title").innerHTML,t.querySelector(".card-content p").innerHTML=e.querySelector("description").textContent,r.appendChild(t)})})}catch(e){console.error("Failed to retrieve feed: "+t+".",e)}n.send(null)}))}();