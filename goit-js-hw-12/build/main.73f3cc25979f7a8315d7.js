(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO"),n("UOjr"),n("JBxO"),n("FdtR");function o(t,e){return fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b715457808493e49927c694168fcb19d/"+t+","+e)}var r,c,u,i,a=function(t){console.log(t);var e=document.querySelector('[data-field="location"]'),n=document.querySelector('[data-field="temp"]'),o=document.querySelector('[data-field="humidity"]'),r=document.querySelector('[data-field="wind"]'),c=document.querySelector('[data-field="conditions"]');o.textContent=t.currently.humidity,n.textContent=Math.round(5*(t.currently.temperature-32)/9),r.textContent=Math.round(1.609344*t.currently.windSpeed),c.textContent=t.currently.summary,e.textContent=t.timezone},d=n("dIfx");(r={maximumAge:6e4},new Promise((function(t,e){return navigator.geolocation.getCurrentPosition(t,e,r)}))).then((function(t){o(t.coords.latitude,t.coords.longitude).then((function(t){return t.json()})).then((function(t){return a(t)}))})).catch((function(){d.a.error("No location permissions, use search by city name")})),c=document.getElementById("search-form"),u=c.querySelector("button"),i=c.querySelector("input"),u.addEventListener("click",(function(t){t.preventDefault();var e=i.value,n=document.querySelector(".loading");n.style.display="flex",fetch("https://eu1.locationiq.com/v1/search.php?key=9c8bd24f982849&q="+e+"&format=json").then((function(t){return t.json()})).then((function(t){return t[0]})).then((function(t){return o(t.lat,t.lon)})).then((function(t){return t.json()})).then((function(t){a(t),n.style.display="none"})).catch((function(t){n.style.display="none",d.a.error("Can`t find inputed city! Please, try again")}))}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.73f3cc25979f7a8315d7.js.map