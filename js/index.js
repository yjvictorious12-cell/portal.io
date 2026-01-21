
// Ads section
function showAndHide() {
    let div = document.getElementById("hide");

    setTimeout(() => {
        div.classList.remove("hide");


setTimeout(() => {
    div.classList.add("hide");  
   },  20000);
    
}, 30000)
}
showAndHide("hide");

//mobile header section
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
let isShowing = false;

menu.addEventListener("click", () => {
  if(!isShowing){
    nav.classList.add("show");
    nav.classList.remove("hide");
    isShowing =true;
    return
  }
  
  if(isShowing) {
    nav.classList.add("hide");
    nav.classList.remove("show");
    isShowing =false;
    return
  }
})

//AOS
document.addEventListener("DOMContentLoaded", () => {
  AOS.init()
});

