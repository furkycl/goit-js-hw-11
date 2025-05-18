import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as i,i as n}from"./assets/vendor-BrddEoy-.js";const c="50302681-206249c251fc1642a903456bf",l="https://pixabay.com/api/";function p(e){const o=`${l}?key=${c}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits)}const h=document.querySelector("#search-form"),t=document.querySelector(".gallery"),m=new i(".gallery a");h.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.searchQuery.value.trim();if(!o)return;const r=`
    <div class="photo-card loader-card">
      <div class="loader"></div>
    </div>
  `;t.innerHTML=r.repeat(10);try{const a=await p(o);if(a.length===0)n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#f00",messageColor:"#fff"}),t.innerHTML="";else{const s=a.map(d).join("");t.innerHTML=s,m.refresh()}}catch{n.error({message:"An error occurred while fetching images.",position:"topRight"}),t.innerHTML=""}});function d(e){return`
    <a href="${e.largeImageURL}" class="photo-card">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes</b> ${e.likes}</p>
        <p><b>Views</b> ${e.views}</p>
        <p><b>Comments</b> ${e.comments}</p>
        <p><b>Downloads</b> ${e.downloads}</p>
      </div>
    </a>
  `}
//# sourceMappingURL=page-2.js.map
