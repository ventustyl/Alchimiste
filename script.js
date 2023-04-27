const menuToggle = document.querySelector(".burger");
const menu = document.querySelector(".nav");
const main = document.querySelector(".main");
const body = document.querySelector("body");
const liens = document.querySelectorAll('a')

menuToggle.addEventListener("click", () => {

  menuToggle.classList.toggle("active");
  menu.classList.toggle("active1");
  main.classList.toggle("active1");
  body.classList.toggle("active2");
 });

 for (i=0; i<liens.length; i++) {
  liens[i].addEventListener("click",()=> {
    menuToggle.classList.remove("active");
    menu.classList.remove("active1");
    main.classList.remove("active1");
    body.classList.remove("active2");
    menu.style.backdropFilter = "blur(8px)";
    menu.style.transition = "1s";
    menu.style.backgroundColor = "rgba(0,0,0,0.1)";
  })
   }

main.addEventListener(("mousewheel" || "mousemove"), () => {
  if (window.scrollY > 20) {
    menu.style.backdropFilter = "blur(8px)";
    menu.style.transition = "1s";
    menu.style.backgroundColor = "rgba(0,0,0,0.1)";
  } else  {
    menu.style.backdropFilter = "blur(0px)";
    menu.style.transition = "1s";
    menu.style.backgroundColor = "transparent";
  }
});
