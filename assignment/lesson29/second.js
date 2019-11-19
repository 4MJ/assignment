 function byTagName(node,tagName){
     tagName=tagName.toUpperCase();
    let get=[];
    check(node.firstChild);
    return get;
    function check(node){
        while(node){
         if(node.nodeType==1&&node.tagName){
                if(node.tagName===tagName){
                    get.push(node);
                }
                check(node.firstChild);
            }
             node=node.nextSibling;
        }
    }
}
console.log(document.querySelector('body').childNodes);
console.log(byTagName(document.body, "h1").length);
console.log(byTagName(document.body, "span").length);
let para=document.querySelector("p");
console.log(byTagName(para, "span").length);

//Shorter approach
function check(node,tag){
    node = node.nodeName.toLowerCase();

    let output = document.querySelector(node).querySelectorAll(tag);
    return output;
}

console.log(check(document.body,'span').length);