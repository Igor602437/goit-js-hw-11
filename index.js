import{a as p,S as h,i as c}from"./assets/vendor-B7yatFIi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m(i){const t="https://pixabay.com/api/",s="42598065-1779ad5a953180c3fe77c2809",o=new URLSearchParams({key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"21"});return p.get(`${t}?${o}`).then(e=>e.data)}const n={inputForm:document.querySelector(".js-form"),galleryList:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")},f=new h(".gallery a",{captionsData:"alt",captionDelay:250});function g(i){return i.map(({largeImageURL:t,webformatURL:s,tags:o,likes:e,views:r,comments:a,downloads:d})=>`
  <li class="gallery-card">
    <a href="${t}">
      <img class="gallery-img" src="${s}" alt="${o}" />
    </a>
    <ul class='card-item'>
      <li class="description">
        <h2>Likes</h2>
        <p>${e}</p>
      </li>
      <li class="description">
        <h2>Views</h2>
        <p>${r}</p>
      </li>
      <li class="description">
        <h2>Comments</h2>
        <p>${a}</p>
      </li>
      <li class="description">
        <h2>Downloads</h2>
        <p>${d}</p>
      </li>
    </ul>
  </li>
  `).join("")}const u=n.loader.classList,y=()=>u.remove("is-hidden"),l=()=>u.add("is-hidden"),L=()=>{n.galleryList.innerHTML=""};function S(i){i.preventDefault();const t=i.target.elements.search_text,s=t.value.trim();if(s===""){c.error({message:"Sorry, the search field must be filled. Please enter correct data!",position:"topRight"}),t.value="";return}L(),y(),m(s).then(o=>{if(o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l(),t.value="";return}const e=g(o.hits);n.galleryList.innerHTML=e,f.refresh(),l(),t.value=""}).catch(o=>{l(),console.log(o)})}n.inputForm.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
