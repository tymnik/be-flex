(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const d=document.querySelector(".header-burger-opener"),c=document.querySelector(".header-burger-closer");d.addEventListener("click",l);c.addEventListener("click",l);function l(){const r=document.querySelector(".mobile-menu-container"),t=window.getComputedStyle(r).display;r.style.display=t==="none"?"block":"none"}document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector(".intro-text"),t=document.querySelector(".show-more-btn"),o=document.querySelector(".show-less-btn"),s=document.querySelector(".ellipsis");t.addEventListener("click",function(){r.classList.add("collapsed"),t.style.display="none",o.style.display="inline",s&&r.removeChild(s)}),o.addEventListener("click",function(){r.classList.remove("collapsed"),t.style.display="inline",o.style.display="none"})});document.addEventListener("DOMContentLoaded",function(){let r=document.querySelectorAll(".you-will-find-card, .find-second-card, .you-will-find-card.hoverable"),t=document.querySelectorAll(".first-card-tab-wrapper, .second-card-text-wrapper, .third-card-tab-wrapper");t.forEach(function(o){o.classList.add("visually-hidden")}),r.forEach(function(o,s){o.addEventListener("mouseover",function(){r.forEach(function(e,n){e.classList.remove("hovered"),t[n].classList.add("visually-hidden","text-appeared")}),o.classList.add("hovered"),t[s].classList.remove("visually-hidden")}),o.addEventListener("mouseout",function(){o.classList.remove("hovered"),t[s].classList.add("visually-hidden","text-appeared")})})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".sign-up-btn").addEventListener("click",function(){window.location.href="#submit-form"})});
//# sourceMappingURL=commonHelpers.js.map
