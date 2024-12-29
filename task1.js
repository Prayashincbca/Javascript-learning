/*Write a function that takes an object representing a book (with properties title, author, year, and genre) and returns a string formatted as:
"The book <title> by <author> was published in <year>. It falls under <genre>."*/
function BookDetails(book) {
    let { title, author, year, genre } = book;
    return `The book ${title} by ${author} was published in ${year}. It falls under ${genre}.`;
}
let book1 = {
    title: "Harry Potter",
    author: "JK Rowling",
    year: 1997,
    genre: "Fantasy",
    // book2:{
    //     title: "Ramayam",
    //     author: "Balmiki",
    //     year: 1997,
    //     genre: "Historical Mythology"}
};
console.log(BookDetails(book1));
// console.log(BookDetails(book1.book2));