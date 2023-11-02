const db = require("./db");
const books = db.books; // ya extraido de db

//1. Para que node index.js: Devuelva todos los libros COMO EN LA DB.
exports.getAll = () => books;
//const todos = getAll()
//console.log(todos);

//La petición es un nro.
//2. Para que node index.js --get 2: Devuelva el OBJETO libro con ID 2.
const getById = (id) => books.find((book) => book.id === id); //return implicito
const porID = getById()
console.log(porID);

//3. Para que node index.js --author fff: Devuelva un ARRAY con todos los libros cuyo nombre de autor incluya la subcadena "FFF".
exports.getByAuthor = (author) => {
  const matchingAuthor = books.filter((book) =>
    book.author.toLowerCase().includes(author.toLowerCase())
  );
  return matchingAuthor;
};
// const autor = getByAuthor()
// console.log(autor);

//4. Para que node index.js --tag drama: Devuelva un ARRAY con todos los libros que tengan el tag drama.
exports.getByTag = (tag) => {
  const searchTerm = tag.toLowerCase();
  return books.filter((book) => {
    const bookTags = book.tags.map((booktag) => booktag.toLowerCase());
    return bookTags.some((bookTag) => bookTag.includes(searchTerm));
  }); 
};


//5. Para que node index.js --name viaje: Devuelve un ARRAY con todos los libros cuyo nombre incluya la subcadena "viaje".
exports.getByName = (name) => {
  const matchingName = books.filter((book) =>
    book.name.toLowerCase().includes(name.toLowerCase())
  );
  return matchingName;
};
// const bookName = getByName()
// console.log(bookName);
