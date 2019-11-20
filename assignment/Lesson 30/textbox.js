let text=document.querySelector("#myText");
let rest=document.querySelector("#rest");
let max=document.createAttribute("maxlength");
max.value="100";
text.attributes.setNamedItem(max)
text.addEventListener("keyup", function(){
    let len=text.value.length;
    let get=max.value-len;
    if(get==0){
        rest.innerHTML=(`You have reached you word limit`);
    }else{
        rest.innerHTML=(get);
    }
})