const nav = document.querySelector(".nav-container");
const abrirMenu = document.getElementById("openMenu");
i = 0;
abrirMenu.addEventListener("click", ()=>{
    i++;
    if(i === 1){
        nav.setAttribute("style", "display: flex;")
    }else{
        nav.setAttribute("style", "display: none;")
        i = 0;
    }
})