//Initializing a constant
const Mountains=[
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];
//generating the table within a div
let div=document.getElementById("mountains");
let t=document.createElement("table");
let d=div.appendChild(t);
console.log(d);
//generating the header of the table
let t1=document.createElement("tr");
let d1=d.appendChild(t1);
let t1a=document.createElement("th");
let d1a=d1.appendChild(t1a);
let head=document.createTextNode("Name");
d1a.appendChild(head);
let t1b=document.createElement("th");
let d1b=d1.appendChild(t1b);
let head1=document.createTextNode("Height");
d1b.appendChild(head1);
let t1c=document.createElement("th");
let d1c=d1.appendChild(t1c);
let head2=document.createTextNode("Place");
d1c.appendChild(head2);
//Generating the content of the table
for(let i=0; i<Mountains.length; i++){
    let t2=document.createElement("tr");
    let d2=d.appendChild(t2);
    let t2a=document.createElement("td");
    let d2a=d2.appendChild(t2a);
    let head3=document.createTextNode(`${Mountains[i].name}`);
    d2a.appendChild(head3);
    var t2b=document.createElement("td");
    let d2b=d2.appendChild(t2b);
    t2b.setAttribute("class", "numbers")
    let head4=document.createTextNode(`${Mountains[i].height}`);
    d2b.appendChild(head4);
    let t2c=document.createElement("td");
    let d2c=d2.appendChild(t2c);
    let head5=document.createTextNode(`${Mountains[i].place}`);
    d2c.appendChild(head5);
}
//Aligning the height to the right.
let align=document.getElementsByClassName("numbers");
for(let el of align){
    el.style.textAlign="right";
}
