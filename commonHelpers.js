import{i as a}from"./assets/vendor-a2152ea4.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const l=document.querySelector(".header-burger-opener"),f=document.querySelector(".header-burger-closer"),d=document.querySelector(".mobile-backdrop");document.querySelector(".header-burger-icon");const y=document.querySelectorAll(".mobile-nav-link"),u=document.querySelector("body");y.forEach(e=>e.addEventListener("click",c));l.addEventListener("click",p);f.addEventListener("click",c);d.addEventListener("click",e=>{e.target===d&&c()});function p(e){d.style.display="block",l.style.visibility="hidden",u.style.overflow="hidden"}function c(e){d.style.display="none",l.style.visibility="visible",u.style.overflow="visible"}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".intro-text"),n=document.querySelector(".show-more-btn"),o=document.querySelector(".show-less-btn"),r=document.querySelector(".ellipsis");n.addEventListener("click",function(){e.classList.add("collapsed"),n.style.display="none",o.style.display="inline",r&&r.parentNode===e&&e.removeChild(r)}),o.addEventListener("click",function(){e.classList.remove("collapsed"),n.style.display="inline",o.style.display="none"})});document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".you-will-find-card, .find-second-card, .you-will-find-card.hoverable"),n=document.querySelectorAll(".first-card-tab-wrapper, .second-card-text-wrapper, .third-card-tab-wrapper");n.forEach(function(o){o.classList.add("visually-hidden")}),e.forEach(function(o,r){o.addEventListener("mouseover",function(){e.forEach(function(t,i){t.classList.remove("hovered"),n[i].classList.add("visually-hidden","text-appeared")}),o.classList.add("hovered"),n[r].classList.remove("visually-hidden")}),o.addEventListener("mouseout",function(){o.classList.remove("hovered"),n[r].classList.add("visually-hidden","text-appeared")})})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".sign-up-btn").addEventListener("click",function(){window.location.href="#submit-form"})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".to-join-btn").addEventListener("click",function(){window.location.href="#submit-form"})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#user-tel"),n=a(e,{utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",preferredCountries:["ae","us","gb","ca","au","ua"],separateDialCode:!0});e.addEventListener("click",function(){n.openDropdown()}),e.addEventListener("countrychange",function(o){var r=n.getSelectedCountryData();console.log("Selected country code: "+r.dialCode)})});
//# sourceMappingURL=commonHelpers.js.map
