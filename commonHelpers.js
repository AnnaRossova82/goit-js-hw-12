import{a as u,S as m,i as p}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function f(c,s,a){const e=`https://pixabay.com/api/?key=42441729-7dc314f47a8382b16bbe5b871&q=${c}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${a}`;try{return(await u.get(e)).data}catch(t){throw new Error("Error fetching images:",t)}}function y(c,s,a){c.forEach(n=>{const e=document.createElement("div");e.classList.add("card");const t=document.createElement("a");t.href=n.largeImageURL,t.setAttribute("data-lightbox","gallery");const r=document.createElement("img");r.src=n.webformatURL,r.alt=n.tags,t.appendChild(r);const i=document.createElement("div");i.classList.add("card-info");const o=document.createElement("h3");o.textContent=n.tags;const d=document.createElement("p");d.textContent=`Likes: ${n.likes} | Views: ${n.views} | Comments: ${n.comments} | Downloads: ${n.downloads}`,i.appendChild(o),i.appendChild(d),e.appendChild(t),e.appendChild(i),s.appendChild(e),a.refresh(),loadMoreBtn.style.display="block"})}document.addEventListener("DOMContentLoaded",function(){const c=document.getElementById("searchForm"),s=document.getElementById("searchInput"),a=document.getElementById("gallery"),n=document.getElementById("loader"),e=new m(".gallery-container a");let t=1,r="";const i=15;let o;c.addEventListener("submit",async function(l){l.preventDefault(),r=s.value.trim(),a.innerHTML="",n.style.display="block",o&&(o.style.display="none"),t=1,await d()}),o=document.getElementById("loadMore"),o.addEventListener("click",async function(){n.style.display="block",await d()});async function d(){try{const l=await f(r,t,i);n.style.display="none",l.hits.length>0?(y(l.hits,a,e),t===1&&o&&(o.style.display="block"),t++):(o&&(o.style.display="none"),p.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}))}catch(l){n.style.display="none",console.error("Error fetching images:",l),p.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topCenter"})}}});
//# sourceMappingURL=commonHelpers.js.map
