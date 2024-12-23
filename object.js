'use strict'
//syntax of object (key vakue pairs)

let obj_prayash={
    name:'prayash',
    age:26,
    married:true,
    sum:function(a,b){
        return a+b;
    },
    std_id:{
        s_id:1,
        nm:"pk"
    }
}
let result=obj_prayash.name;
console.log(result);
console.log(obj_prayash["name"]);
//selecting array inside object
//obj1.arr1[0]
//selecting object inside object
//obj1.obj2.keyname
//creating function inside object and call the function
// let pompt1= document.getElementById("prompt1");

// ( function (){
//     let obj1={
//     funcAdd:function(a,b){
        
//         return a-b;

//     }
// }
// console.log(obj1.funcAdd(9,3));


// obj1.name=prompt("enter your name?");


// prompt1.textContent=obj1.name;
// })()

// script.js

let a = "Saujal";  // Default value
console.log("Before change:", a);

// Get the new value from the command line arguments
const newValue = process.argv[2];

// If a value is provided, change the value of 'a'
if (newValue) {
  a = newValue;
}

console.log("After change:", a);

