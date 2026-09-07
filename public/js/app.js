const header=document.querySelector(".nav");

window.addEventListener("scroll",()=>{
  header.style.boxShadow=
    window.scrollY>20
      ?"0 4px 20px rgba(0,0,0,.06)"
      :"none";
});
