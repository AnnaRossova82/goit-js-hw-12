import{a as m,S as f,i as u}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();async function y(l,s,a){const t=`https://pixabay.com/api/?key=42441729-7dc314f47a8382b16bbe5b871&q=${l}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${a}`;try{return(await m.get(t)).data}catch(e){throw new Error("Error fetching images:",e)}}function h(l,s,a){l.forEach(o=>{const t=document.createElement("div");t.classList.add("card");const e=document.createElement("a");e.href=o.largeImageURL,e.setAttribute("data-lightbox","gallery");const r=document.createElement("img");r.src=o.webformatURL,r.alt=o.tags,e.appendChild(r);const i=document.createElement("div");i.classList.add("card-info");const n=document.createElement("h3");n.textContent=o.tags;const d=document.createElement("p");d.textContent=`Likes: ${o.likes} | Views: ${o.views} | Comments: ${o.comments} | Downloads: ${o.downloads}`,i.appendChild(n),i.appendChild(d),t.appendChild(e),t.appendChild(i),s.appendChild(t),a.refresh(),g.style.display="block"})}document.addEventListener("DOMContentLoaded",function(){const l=document.getElementById("searchForm"),s=document.getElementById("searchInput"),a=document.getElementById("gallery"),o=document.getElementById("loader"),t=new f(".gallery-container a");let e=1,r="";const i=15;let n;l.addEventListener("submit",async function(c){c.preventDefault(),r=s.value.trim(),a.innerHTML="",o.style.display="block",n&&(n.style.display="none"),e=1,await d()}),n=document.getElementById("loadMore"),n.insertAdjacentElement("afterend",o),n.addEventListener("click",async function(){o.style.display="block",await d()});async function d(){try{const c=await y(r,e,i);if(console.log("Total Hits:",c.totalHits),o.style.display="none",c.hits.length>0){h(c.hits,a,t),e===1&&n&&(n.style.display="block"),e++;const p=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:2*p,behavior:"smooth"})}else{n&&(n.style.display="none");const p=c.totalHits||0;e*i>=p&&u.info({title:"Info",message:"You have reached the end of search results.",position:"topCenter"})}}catch(c){o.style.display="none",console.error("Error fetching images:",c),u.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topCenter"})}}});const g=document.getElementById("loadMore");
//# sourceMappingURL=commonHelpers.js.map
