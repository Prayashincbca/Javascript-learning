const div= document.getElementById("prayash");
const a= document.getElementById("1");
 const b=document.getElementById("2");
 const btn=document.getElementById("button");
// btn.addEventListener("click",function(){
//     a.textContent="this is div 1";
//     b.style.color="red";
// });
// btn.addEventListener("dblclick",function(){
// a.textContent="hello";
// b.style.color="blue";
// });
// btn.addEventListener("mouseenter",function(){
// a.textContent="hi";
// b.style.color="green";
// });
btn.addEventListener("click",clickbtn);
function clickbtn(){
    a.textContent="content will change";
    b.style.color="gold";
};

console.log(div.children)

const parentElement = document.getElementById('parentId');
const children = parentElement.children;
console.log(children); // Logs only <h1>, <p>, and <div> (direct children of #parentId)
