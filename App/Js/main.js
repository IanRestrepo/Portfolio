let readBtns = document.querySelectorAll("ReadMoreBtn");
let infoP = document.querySelector(".info__description");
let claS = infoP.classList;

readBtns.addEventListener("click", ()=>{
     claS.remove("background")
})