import{a as E,S as b,b as w,i as h}from"./assets/vendor-1e00ea94.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function I(l,r,s){const e=`https://pixabay.com/api/?key=42441729-7dc314f47a8382b16bbe5b871&q=${l}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${s}`;try{return(await E.get(e)).data}catch(t){throw new Error("Error fetching images:",t)}}function L(l,r,s){l.forEach(n=>{const e=document.createElement("div");e.classList.add("card");const t=document.createElement("a");t.href=n.largeImageURL,t.setAttribute("data-lightbox","gallery");const o=document.createElement("img");o.src=n.webformatURL,o.alt=n.tags,t.appendChild(o);const a=document.createElement("div");a.classList.add("card-info");const i=document.createElement("h3");i.textContent=n.tags;const d=document.createElement("p");d.textContent=`Likes: ${n.likes} | Views: ${n.views} | Comments: ${n.comments} | Downloads: ${n.downloads}`,a.appendChild(i),a.appendChild(d),e.appendChild(t),e.appendChild(a),r.appendChild(e),s.refresh(),C.style.display="block"})}document.addEventListener("DOMContentLoaded",function(){const l=document.getElementById("searchForm"),r=document.getElementById("searchInput"),s=document.getElementById("gallery"),n=document.getElementById("loadMore"),e=new b(".gallery-container a"),t={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#16ca34",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},o=document.getElementById("loader"),a=new w(t);let i=1,d="";const u=15;l.addEventListener("submit",async function(c){c.preventDefault(),a.spin(o),d=r.value.trim(),s.innerHTML="",n.style.display="none",i=1,await m()}),n.addEventListener("click",async function(){y(),n.style.display="none",await m()});async function m(){try{const c=await I(d,i,u);if(f(),c.hits.length>0){L(c.hits,s,e),i===1&&(n.style.display="block"),i++;const p=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:2*p,behavior:"smooth"})}else{const p=c.totalHits||0,g=Math.ceil(p/u);i===g?(n.style.display="none",h.info({title:"Info",message:"You have reached the end of search results.",position:"topCenter"})):n.style.display="block"}}catch(c){f(),console.error("Error fetching images:",c),h.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topCenter"})}}function y(){a.spin(loader)}function f(){a.stop()}});const C=document.getElementById("loadMore");
//# sourceMappingURL=commonHelpers.js.map
