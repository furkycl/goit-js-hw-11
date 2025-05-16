import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as i,i as o}from"./assets/vendor-BrddEoy-.js";const c="50302681-206249c251fc1642a903456bf",l="https://pixabay.com/api/";function h(e){const r=`${l}?key=${c}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>t.hits)}const m=document.querySelector("#search-form"),a=document.querySelector(".gallery"),n=document.querySelector("#loader"),p=new i(".gallery a");m.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.searchQuery.value.trim();if(r){a.innerHTML="",n.classList.remove("hidden");try{const t=await h(r);if(t.length===0)o.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const s=t.map(d).join("");a.innerHTML=s,p.refresh()}}catch{o.error({message:"An error occurred while fetching images.",position:"topRight"})}finally{n.classList.add("hidden")}}});function d(e){return`
    <a href="${e.largeImageURL}" class="photo-card">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </a>
  `}
//# sourceMappingURL=page-2.js.map
