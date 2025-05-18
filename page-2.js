import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as i,i as t}from"./assets/vendor-BrddEoy-.js";const c="50302681-206249c251fc1642a903456bf",l="https://pixabay.com/api/";function h(e){const o=`${l}?key=${c}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits)}const m=document.querySelector("#search-form"),a=document.querySelector(".gallery"),n=document.querySelector("#loader"),p=new i(".gallery a");m.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.searchQuery.value.trim();if(o){a.innerHTML="",n.classList.remove("hidden");try{const r=await h(o);if(r.length===0)t.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#f00",messageColor:"#fff"});else{const s=r.map(f).join("");a.innerHTML=s,p.refresh()}}catch{t.error({message:"An error occurred while fetching images.",position:"topRight"})}finally{n.classList.add("hidden")}}});function f(e){return`
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
