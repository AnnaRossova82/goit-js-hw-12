import{a as m,S as y,i as u}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();async function f(l,s,a){const t=`https://pixabay.com/api/?key=42441729-7dc314f47a8382b16bbe5b871&q=${l}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${a}`;try{return(await m.get(t)).data}catch(e){throw new Error("Error fetching images:",e)}}function h(l,s,a){l.forEach(o=>{const t=document.createElement("div");t.classList.add("card");const e=document.createElement("a");e.href=o.largeImageURL,e.setAttribute("data-lightbox","gallery");const n=document.createElement("img");n.src=o.webformatURL,n.alt=o.tags,e.appendChild(n);const c=document.createElement("div");c.classList.add("card-info");const r=document.createElement("h3");r.textContent=o.tags;const d=document.createElement("p");d.textContent=`Likes: ${o.likes} | Views: ${o.views} | Comments: ${o.comments} | Downloads: ${o.downloads}`,c.appendChild(r),c.appendChild(d),t.appendChild(e),t.appendChild(c),s.appendChild(t),a.refresh(),g.style.display="block"})}document.addEventListener("DOMContentLoaded",function(){const l=document.getElementById("searchForm"),s=document.getElementById("searchInput"),a=document.getElementById("gallery"),o=document.getElementById("loader"),t=new y(".gallery-container a");let e=1,n="";const c=15;let r;l.addEventListener("submit",async function(i){i.preventDefault(),n=s.value.trim(),a.innerHTML="",o.style.display="block",r&&(r.style.display="none"),e=1,await d()}),r=document.getElementById("loadMore"),r.addEventListener("click",async function(){o.style.display="block",r.style.display="none",await d()});async function d(){try{const i=await f(n,e,c);if(o.style.display="none",i.hits.length>0){h(i.hits,a,t),e===1&&(r.style.display="block"),e++;const p=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:2*p,behavior:"smooth"})}else{e===1&&(r.style.display="none");const p=i.totalHits||0;e*c>=p?u.info({title:"Info",message:"You have reached the end of search results.",position:"topCenter"}):r.style.display="block"}}catch(i){o.style.display="none",console.error("Error fetching images:",i),u.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topCenter"})}}});const g=document.getElementById("loadMore");
//# sourceMappingURL=commonHelpers.js.map
