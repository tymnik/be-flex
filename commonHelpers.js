(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const l=document.querySelector(".header-burger-opener"),c=document.querySelector(".header-burger-closer");l.addEventListener("click",d);c.addEventListener("click",d);function d(){const o=document.querySelector(".mobile-menu-container"),t=window.getComputedStyle(o).display;o.style.display=t==="none"?"block":"none"}document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".intro-text"),t=document.querySelector(".show-more-btn"),r=document.querySelector(".show-less-btn"),i=document.querySelector(".ellipsis");t.addEventListener("click",function(){o.classList.add("collapsed"),t.style.display="none",r.style.display="inline",i&&o.removeChild(i)}),r.addEventListener("click",function(){o.classList.remove("collapsed"),t.style.display="inline",r.style.display="none"})});document.addEventListener("DOMContentLoaded",function(){let o=document.querySelectorAll(".you-will-find-card, .find-second-card, .you-will-find-card.hoverable"),t=document.querySelectorAll(".first-card-tab-wrapper, .second-card-text-wrapper, .third-card-tab-wrapper");t.forEach(function(r){r.classList.add("visually-hidden")}),o.forEach(function(r,i){r.addEventListener("mouseover",function(){o.forEach(function(e,n){e.classList.remove("hovered"),t[n].classList.add("visually-hidden","text-appeared")}),r.classList.add("hovered"),t[i].classList.remove("visually-hidden")}),r.addEventListener("mouseout",function(){r.classList.remove("hovered"),t[i].classList.add("visually-hidden","text-appeared")})})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".sign-up-btn").addEventListener("click",function(){window.location.href="#submit-form"})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".to-join-btn").addEventListener("click",function(){window.location.href="#submit-form"})});
//# sourceMappingURL=commonHelpers.js.map