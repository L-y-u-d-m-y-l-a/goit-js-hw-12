import{a as L,S as v,i as l}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const w=async(a,r)=>{const t=new URLSearchParams({key:"44069971-389e858559c4e5db378aa29c5",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15});return await L.get(`https://pixabay.com/api/?${t}`)},O=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),M=(a,r)=>{const t=a.map(({largeImageURL:o,webformatURL:e,tags:s,likes:n,views:f,comments:h,downloads:b})=>`<li name="galleryItem" class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img src="${e}" alt="${s}" />
        </a>
        <div class="description">
          <p>Likes <span class="desc-span">${n}</span></p>
          <p>Views <span class="desc-span">${f}</span></p>
          <p>Comments <span class="desc-span">${h}</span></p>
          <p>Downloads <span class="desc-span">${b}</span></p>
        </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",t),O.refresh()},c=document.querySelector("section").children,m=c.getForm,y=c.loader,p=c.gallery,i=c.loadMore;let d=1,u;l.settings({progressBar:!1,timeout:4e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const g=async(a,r=1)=>{y.style.display="block";try{const t=await w(a,r);if(t.data.hits.length===0)return l.warning({message:"Sorry, there are no images matching your search query. Please try again!"});i.style.display="block";const o=Math.ceil(t.data.totalHits/15);r===o&&(i.style.display="none",l.info({message:"We're sorry, but you've reached the end of search results."})),M(t.data.hits,p)}catch(t){console.log(t)}finally{m.reset(),y.style.display="none";const t=p.children.galleryItem.getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}},P=async a=>{a.preventDefault(),p.innerHTML="",i.style.display="none",u=a.target.searchTerm.value.trim().toLowerCase(),d=1,g(u)},$=async()=>{d+=1,g(u,d)};m.addEventListener("submit",P);i.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map