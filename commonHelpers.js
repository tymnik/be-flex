import{i as L,a as E,S as m,N as p,P as f}from"./assets/vendor-a1c4b7a3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const a=document.querySelector(".header-burger-opener"),w=document.querySelector(".header-burger-closer"),d=document.querySelector(".mobile-backdrop");document.querySelector(".header-burger-icon");const S=document.querySelectorAll(".mobile-nav-link"),q=document.querySelector(".header-phone-number"),y=document.querySelector("body");S.forEach(t=>t.addEventListener("click",u));a.addEventListener("click",k);w.addEventListener("click",u);d.addEventListener("click",t=>{t.target===d&&u()});function k(){d.style.display="block",a.style.visibility="hidden",y.style.overflow="hidden"}function u(){d.style.display="none",a.style.visibility="visible",y.style.overflow="visible"}q.addEventListener("click",function(){C("+971524116236")});function C(t){const e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(t).then(()=>{alert("Phone number copied to clipboard: "+t)}).catch(o=>{console.error("Unable to copy to clipboard",o)}).finally(()=>{document.body.removeChild(e)})}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".header-wrap").offsetHeight;document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(i){i.preventDefault();const n=this.getAttribute("href").substring(1),r=document.getElementById(n);if(r){const l=r.offsetTop-t;window.scrollTo({top:l,behavior:"smooth"})}})})});const B=document.getElementById("hero-section-button"),I=document.getElementById("submit-form");function D(){const t=document.querySelector(".header-wrap").offsetHeight,e=I.offsetTop-t;window.scrollTo({top:e,behavior:"smooth"})}B.addEventListener("click",D);document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".intro-text"),e=document.querySelector(".show-more-btn"),o=document.querySelector(".show-less-btn"),i=document.querySelector(".ellipsis");e.addEventListener("click",function(){t.classList.add("collapsed"),e.style.display="none",o.style.display="inline",i.style.display="none"}),o.addEventListener("click",function(){t.classList.remove("collapsed"),e.style.display="inline",o.style.display="none",i.style.display="inline"})});document.addEventListener("DOMContentLoaded",function(){let t=document.querySelectorAll(".you-will-find-card, .find-second-card, .you-will-find-card.hoverable"),e=document.querySelectorAll(".first-card-tab-wrapper, .second-card-text-wrapper, .third-card-tab-wrapper");e.forEach(function(o){o.classList.add("visually-hidden")}),t.forEach(function(o,i){o.addEventListener("mouseover",function(){t.forEach(function(n,r){n.classList.remove("hovered"),e[r].classList.add("visually-hidden","text-appeared")}),o.classList.add("hovered"),e[i].classList.remove("visually-hidden")}),o.addEventListener("mouseout",function(){o.classList.remove("hovered"),e[i].classList.add("visually-hidden","text-appeared")})})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".sign-up-btn").addEventListener("click",function(){window.location.href="#submit-form"})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".to-join-btn").addEventListener("click",function(){window.location.href="#submit-form"})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector("#user-tel"),e=L(t,{utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",preferredCountries:["ae","us","gb","ca","au","ua"],separateDialCode:!0});t.addEventListener("click",function(){typeof e.openDropdown=="function"&&e.openDropdown()}),t.addEventListener("countrychange",function(i){var n=e.getSelectedCountryData();console.log("Selected country code: "+n.dialCode)}),document.getElementById("user-tel").addEventListener("input",function(i){this.value=this.value.replace(/[^0-9]/g,"")}),document.getElementById("user-tel").addEventListener("countrychange",function(){setTimeout(function(){var i=document.querySelector(".iti__arrow");i.style.display="none"},100)}),document.getElementById("btn").addEventListener("click",function(i){i.preventDefault();var n=document.querySelectorAll(".sign_up_form_input, .modal-check");if(n.forEach(function(s){s.value.trim()===""?s.classList.add("red-border"):s.classList.remove("red-border")}),Array.from(n).every(function(s){return s.value.trim()===""})||document.getElementById("user-tel").value.trim()===""){document.getElementById("user-tel").classList.add("red-border"),console.log("Не можна відправити порожню форму");return}const l=new FormData(document.querySelector(".sign_up_form")),v="6943310494:AAF9IRuXS0o6ejGqdXoa_ZHePm6PcEwLLLA",g="-1002131222060",h=`https://api.telegram.org/bot${v}`;let c=`Нова заявка:

`;c+=`<b>Відправник: </b> ${document.getElementById("user-name").value}
`,c+=`<b>Телефон: </b> +${e.getSelectedCountryData().dialCode} ${document.getElementById("user-tel").value}
`,c+=`<b>Повідомлення: </b> ${document.getElementById("user-comment").value}
`,l.forEach(function(s,b){c+=b+": "+s+`
`}),E.post(`${h}/sendMessage`,{chat_id:g,parse_mode:"html",text:c}).then(function(s){console.log("Повідомлення відправлено до Telegram:",s.data)}).catch(function(s){console.error("Помилка відправлення повідомлення до Telegram:",s)})})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".questions_main_item");t.forEach(e=>{e.addEventListener("click",function(){t.forEach(o=>{o!==e&&(o.classList.remove("active"),o.querySelector(".questions_svg").classList.remove("rotate"))}),e.classList.toggle("active"),e.querySelector(".questions_svg").classList.toggle("rotate")})})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".message_me-btn").addEventListener("click",function(){window.location.href="#submit-form"})});new m(".gallery-swiper-js",{modules:[p,f],speed:300,grabCursor:!0,spaceBetween:26,slidesPerView:1,keyboard:{enabled:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},loop:!0,breakpoints:{744:{slidesPerView:1.8},1280:{slidesPerView:3,grabCursor:!0}},navigation:{nextEl:".gallery-slider-btn-next-js",prevEl:".gallery-slider-btn-prev-js"},pagination:{el:".gallery-swiper-pagination",type:"bullets"}});new m(".reviews-swiper-js",{modules:[p,f],speed:300,grabCursor:!0,spaceBetween:26,slidesPerView:1,keyboard:{enabled:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},loop:!0,breakpoints:{744:{slidesPerView:1.8},1280:{slidesPerView:3,grabCursor:!0}},navigation:{nextEl:".reviews-slider-btn-next-js",prevEl:".reviews-slider-btn-prev-js"},pagination:{el:".reviews-swiper-pagination",type:"bullets"}});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".contact-me-btn").addEventListener("click",function(){window.location.href="#submit-form"})});
//# sourceMappingURL=commonHelpers.js.map
