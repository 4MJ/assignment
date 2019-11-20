let nav=document.querySelector(".primary-nav");
window.addEventListener("scroll", ()=>{
    let max=document.body.scrollHeight-innerHeight;
    if(max>1.2){ 
        nav.style.backgroundColor="blue";
    }
})