/*Write a function to filter out all the numbers greater than 10 from an array using an arrow function.*/

let  filterNumbers = (arr) =>
     arr.filter(num => num <= 10);
let numbers = [4, 15, 8, 22, 7, 10, 12];
let filteredNumbers = filterNumbers(numbers);

console.log(filteredNumbers);
