let text=document.querySelector("#myText");
let rest=document.querySelector("#rest");
let max=document.createAttribute("maxlength");
max.value="1000";
text.attributes.setNamedItem(max)
text.addEventListener("keyup", function(){
    let len=text.value.length;
    rest.innerHTML=(max.value-len);
})