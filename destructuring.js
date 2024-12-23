// destructuring arrays 
let arr1=[1,2,3,4,5,];
// let[a,b,c,d,e]=arr1;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
//skipping index in js
// let[, , ,d,e]=arr1;
// console.log(d,e)
//destructuring object
// let obj1={
//     name:"prayash",
//     age:26,
//     married:true
// }
// let{name, married}=obj1;
// console.log(name,married);
//renaming variables
// let obj2={
//     nm:"prayash",
//     ag:26,
//     md:true
// }
// let{nm:names,ag:age,md:married}=obj2;
// console.log(names,age)
//nested destructuring
let obj3={
    name:"prayash",
    classes:16,
    married:true,
    student:{
        sid:'pk1',
        srn:2,
        spassout:true
    }
}
let{name,classes,married,student,student:{sid}}=obj3;
console.log(sid,name);
//rest,spread operator
