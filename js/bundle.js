function createGalery(){const e=document.querySelector(".galery__images");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`minimg/thumb/${t}.webp`,n.dataset.imageId=t,n.classList.add("image__edit"),n.onclick=showImage;const c=document.createElement("LI");c.appendChild(n),e.appendChild(c)}}function showImage(e){const t=parseInt(e.target.dataset.imageId),n=document.createElement("IMG");n.src=`minimg/grande/${t}.webp`;const c=document.createElement("DIV");c.appendChild(n),c.classList.add("overlay"),c.onclick=function(){c.remove(),a.classList.remove("class-body")};const o=document.createElement("P");o.textContent="X",o.classList.add("close-btn"),o.onclick=function(){c.remove(),a.classList.remove("class-body")},c.appendChild(o);const a=document.querySelector("body");a.appendChild(c),a.classList.add("class-body")}function quietNav(){const e=document.querySelector(".header");new IntersectionObserver(t=>{t[0].isIntersecting?e.classList.remove("fix"):e.classList.add("fix")}).observe(document.querySelector(".video"))}function scrollNav(){document.querySelectorAll(".main-navigation a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})})})}document.addEventListener("DOMContentLoaded",(function(){createGalery(),scrollNav(),quietNav()}));
//# sourceMappingURL=bundle.js.map
