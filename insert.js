// Вмъкване на книги
db.books.insertMany([
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publishedYear: 1937,
    author: { name: "J.R.R. Tolkien", nationality: "British" },
    tags: ["adventure", "fantasy"]
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishedYear: 1949,
    author: { name: "George Orwell", nationality: "British" },
    tags: ["politics", "dystopia"]
  }

]);

// Вмъкване на автори
db.authors.insertMany([
  {
    name: "J.R.R. Tolkien",
    birthYear: 1892,
    books: ["The Hobbit", "The Lord of the Rings"],
    nationality: "British"
  },
  {
    name: "George Orwell",
    birthYear: 1903,
    books: ["1984", "Animal Farm"],
    nationality: "British"
  }

]);

// Вмъкване на читатели
db.readers.insertMany([
  {
    name: "Alice Smith",
    age: 25,
    membership: { startDate: ISODate("2023-01-01"), active: true },
    borrowedBooks: ["1984"]
  },
  {
    name: "Bob Johnson",
    age: 34,
    membership: { startDate: ISODate("2022-06-15"), active: false },
    borrowedBooks: []
  }

]);

// Вмъкване на служители
db.employees.insertMany([
  {
    name: "Emma Green",
    position: "Librarian",
    salary: 2400,
    workShift: { start: "09:00", end: "17:00" }
  },
  {
    name: "Daniel White",
    position: "Assistant",
    salary: 1800,
    workShift: { start: "10:00", end: "18:00" }
  }

]);

// Вмъкване на заеми
db.loans.insertMany([
  {
    bookTitle: "1984",
    readerName: "Alice Smith",
    loanDate: ISODate("2024-10-01"),
    returnDate: ISODate("2024-10-15"),
    status: "returned"
  },
  {
    bookTitle: "The Hobbit",
    readerName: "Bob Johnson",
    loanDate: ISODate("2024-11-01"),
    returnDate: null,
    status: "loaned"
  }]);
