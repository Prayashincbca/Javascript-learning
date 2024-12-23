//Array method
'use strict'

let array=[1,2,3,4,]
console.log(array);
array.unshift(10);
console.log(array);
array.shift();
console.log(array);
array.push(11);
console.log(array);
array.pop();
console.log(array);
//creating new array
let arr=new Array(3);
console.log(arr);
let arr2=[];
arr2=["N","E","P","A","L"];
let result=arr2.join(" ");
console.log(result);
let strA=['a','b','c'];
let strB=[1,2,3,4];
let strC=strA.concat(strB);
console.log(strC);
//slice;

let arr4=[1,2,3,4,5,6,7,8,9];
let slice =arr4.slice(2,6);
// console.log(slice);
//splice
let arr5=[1,2,3,4,5,6,7,8,9];
let splice =arr5.splice(2,6);
console.log(splice);
// includes
let arr6=[1,2,3,4,5,6,7,8,9];
let include=arr6.includes(3);
console.log(include);
//index of 
// let arr7=[1,2,3,4,5,6,7,8,9];
// let index=arr7.indexOf(3);
// console.log(index);
//last index of 
let arr8=[1,2,3,3,5,6,7,8,9];
let lastindex=arr8.lastIndexOf(3);
console.log(lastindex);
//to string
let arr9=[1,2,3,3,5,6,7,8,9];
let tostring=arr9.toString();
console.log(tostring);
console.log(typeof tostring);

// changing element of array
let arr11=[1,2,3,4,5,];
arr11[3]="P";
console.log(arr11);