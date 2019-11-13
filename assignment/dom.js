let doc=window.document;
let h1s=document.getElementsByTagName("h1");
console.log(h1s);
let catpText=h1s[0].innerText.toUpperCase();
console.log(catpText);
let div=document.getElementById("paragraph")
console.log(div.innerHTML);
for(let el of h1s){
    console.log(el.innerText)
}
let ps=document.getElementsByClassName("greeting");
console.log(ps);
//.style allows you to access the styling on the dom by css syntax or styling.
let title=document.getElementById("title2");
title.style.color="red";
title.style.textTransform="uppercase";
title.style.fontsize="52px";
//creating an element and adding to the existing style
let lastEl=document.body.lastChild;
let p=document.createElement("p");
let text=document.createTextNode("The marker could be square, round, numeric, alphabetical, or perhaps nonexistent. Also, we can decide if a list should be displayed vertically or horizontally");
//adding an id or class to the paragraph
p.appendChild(text);
p.setAttribute("id", "someId");
p.setAttribute("class", "someClass");
//Inserting the paragraph to the html using js.
document.body.insertBefore(p, lastEl);