(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l="2063f27449d8482596431057251601",u="https://api.weatherapi.com/v1/";async function f(t){const c=`${u}forecast.json?key=${l}&q=${t}&days=10`;try{const e=await fetch(c);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw console.log("Error fetching weather data:",e),e}}function m(t){y(t),p(t)}function y(t){const r=t.location.name,n=t.location.region,c=t.current.condition.text,e=t.current.temp_f,o=t.current.feelslike_f,i=t.forecast.forecastday[0].day.maxtemp_f,a=t.forecast.forecastday[0].day.mintemp_f,d=document.getElementById("condition-icon");d.src=`https:${t.current.condition.icon}`,document.getElementById("location-name").textContent=`${r}, ${n}`,document.getElementById("condition").textContent=c,document.getElementById("current-temp").textContent=`${e}°F`,document.getElementById("feels-like").textContent=`Feels Like ${o}°F`,document.getElementById("high-low-temp").textContent=`High ${i}°F - Low ${a}°F`}function p(t){const r=document.getElementById("hourly-forecast"),n=document.getElementById("hourly-forecast-data");n.innerHTML="",t.forecast.forecastday[0].hour.forEach(e=>{const o=document.createElement("div");o.classList.add("forecast__card"),o.innerHTML=`
      <p>${e.temp_f}°F</p>
      <img src="${e.condition.icon}" alt="${e.condition.text}">
      <p>${e.chance_of_rain}%</p>
      <p>${e.time.split(" ")[1]}</p>
    `,n.appendChild(o),r.classList.remove("visually-hidden")})}const s=document.querySelector(".location-form");s.addEventListener("submit",async t=>{t.preventDefault();const r=s.location.value.trim();s.reset();try{const n=await f(r);m(n)}catch(n){console.error("Error fetching weather data:",n)}});