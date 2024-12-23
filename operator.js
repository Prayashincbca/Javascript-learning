//rest operator
//rest operator in array is used to pack 
let arr1=[1,2,3,4,5,6]
let[a,b,c,...rest]=arr1
console.log(rest);
//rest in object
obj1={
    name:"pk",
    age:26,
    married:true
}
let{name,...rests}=obj1
console.log(rests);


