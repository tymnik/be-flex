import{i as a}from"./assets/vendor-a2152ea4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const l=document.querySelector(".header-burger-opener"),f=document.querySelector(".header-burger-closer"),s=document.querySelector(".mobile-backdrop");document.querySelector(".header-burger-icon");const y=document.querySelectorAll(".mobile-nav-link"),u=document.querySelector("body");y.forEach(e=>e.addEventListener("click",d));l.addEventListener("click",m);f.addEventListener("click",d);s.addEventListener("click",e=>{e.target===s&&d()});function m(e){s.style.display="block",l.style.visibility="hidden",u.style.overflow="hidden"}function d(e){s.style.display="none",l.style.visibility="visible",u.style.overflow="visible"}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".intro-text"),t=document.querySelector(".show-more-btn"),n=document.querySelector(".show-less-btn"),r=document.querySelector(".ellipsis");t.addEventListener("click",function(){e.classList.add("collapsed"),t.style.display="none",n.style.display="inline",r.style.display="none"}),n.addEventListener("click",function(){e.classList.remove("collapsed"),t.style.display="inline",n.style.display="none",r.style.display="inline"})});document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".you-will-find-card, .find-second-card, .you-will-find-card.hoverable"),t=document.querySelectorAll(".first-card-tab-wrapper, .second-card-text-wrapper, .third-card-tab-wrapper");t.forEach(function(n){n.classList.add("visually-hidden")}),e.forEach(function(n,r){n.addEventListener("mouseover",function(){e.forEach(function(o,i){o.classList.remove("hovered"),t[i].classList.add("visually-hidden","text-appeared")}),n.classList.add("hovered"),t[r].classList.remove("visually-hidden")}),n.addEventListener("mouseout",function(){n.classList.remove("hovered"),t[r].classList.add("visually-hidden","text-appeared")})})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".sign-up-btn").addEventListener("click",function(){window.location.href="#submit-form"})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".to-join-btn").addEventListener("click",function(){window.location.href="#submit-form"})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#user-tel"),t=a(e,{utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",preferredCountries:["ae","us","gb","ca","au","ua"],separateDialCode:!0});e.addEventListener("click",function(){typeof t.openDropdown=="function"&&t.openDropdown()}),e.addEventListener("countrychange",function(n){var r=t.getSelectedCountryData();console.log("Selected country code: "+r.dialCode)})});document.getElementById("user-tel").addEventListener("input",function(e){this.value=this.value.replace(/[^0-9]/g,"")});const p=document.getElementById("user-tel");p.addEventListener("countrychange",function(){setTimeout(function(){var e=document.querySelector(".iti__arrow");e.style.display="none"},100)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".questions_main_item");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(n=>{n!==t&&(n.classList.remove("active"),n.querySelector(".questions_svg").classList.remove("rotate"))}),t.classList.toggle("active"),t.querySelector(".questions_svg").classList.toggle("rotate")})})});
//# sourceMappingURL=commonHelpers.js.map
