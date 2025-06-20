// 📚 Вмъкване на книги
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
    tags: ["dystopia", "politics"]
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishedYear: 1960,
    author: { name: "Harper Lee", nationality: "American" },
    tags: ["classic", "justice"]
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishedYear: 1925,
    author: { name: "F. Scott Fitzgerald", nationality: "American" },
    tags: ["classic", "wealth"]
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    publishedYear: 1932,
    author: { name: "Aldous Huxley", nationality: "British" },
    tags: ["science fiction", "future"]
  },
  {
    title: "Moby Dick",
    genre: "Adventure",
    publishedYear: 1851,
    author: { name: "Herman Melville", nationality: "American" },
    tags: ["whale", "sea"]
  },
  {
    title: "Jane Eyre",
    genre: "Romance",
    publishedYear: 1847,
    author: { name: "Charlotte Brontë", nationality: "British" },
    tags: ["gothic", "romance"]
  },
  {
    title: "Animal Farm",
    genre: "Political satire",
    publishedYear: 1945,
    author: { name: "George Orwell", nationality: "British" },
    tags: ["allegory", "politics"]
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishedYear: 1813,
    author: { name: "Jane Austen", nationality: "British" },
    tags: ["society", "love"]
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publishedYear: 1951,
    author: { name: "J.D. Salinger", nationality: "American" },
    tags: ["teen", "identity"]
  }
]);

// ✍️ Вмъкване на автори
db.authors.insertMany([
  {
    name: "J.R.R. Tolkien",
    birthYear: 1892,
    books: ["The Hobbit"],
    nationality: "British"
  },
  {
    name: "George Orwell",
    birthYear: 1903,
    books: ["1984", "Animal Farm"],
    nationality: "British"
  },
  {
    name: "Harper Lee",
    birthYear: 1926,
    books: ["To Kill a Mockingbird"],
    nationality: "American"
  },
  {
    name: "F. Scott Fitzgerald",
    birthYear: 1896,
    books: ["The Great Gatsby"],
    nationality: "American"
  },
  {
    name: "Aldous Huxley",
    birthYear: 1894,
    books: ["Brave New World"],
    nationality: "British"
  },
  {
    name: "Herman Melville",
    birthYear: 1819,
    books: ["Moby Dick"],
    nationality: "American"
  },
  {
    name: "Charlotte Brontë",
    birthYear: 1816,
    books: ["Jane Eyre"],
    nationality: "British"
  },
  {
    name: "Jane Austen",
    birthYear: 1775,
    books: ["Pride and Prejudice"],
    nationality: "British"
  },
  {
    name: "J.D. Salinger",
    birthYear: 1919,
    books: ["The Catcher in the Rye"],
    nationality: "American"
  },
  {
    name: "Ernest Hemingway",
    birthYear: 1899,
    books: ["The Old Man and the Sea"],
    nationality: "American"
  }
]);

// 👤 Вмъкване на читатели
db.readers.insertMany([
  {
    name: "Alice Smith",
    age: 25,
    membership: { startDate: ISODate("2023-01-10"), active: true },
    borrowedBooks: ["1984", "The Great Gatsby"]
  },
  {
    name: "Bob Johnson",
    age: 34,
    membership: { startDate: ISODate("2022-06-15"), active: false },
    borrowedBooks: []
  },
  {
    name: "Catherine Lewis",
    age: 41,
    membership: { startDate: ISODate("2023-03-05"), active: true },
    borrowedBooks: ["The Hobbit"]
  },
  {
    name: "David Martin",
    age: 19,
    membership: { startDate: ISODate("2024-02-12"), active: true },
    borrowedBooks: ["Moby Dick"]
  },
  {
    name: "Eva Thompson",
    age: 28,
    membership: { startDate: ISODate("2021-07-20"), active: false },
    borrowedBooks: []
  },
  {
    name: "Frank Wright",
    age: 33,
    membership: { startDate: ISODate("2024-01-01"), active: true },
    borrowedBooks: ["Pride and Prejudice"]
  },
  {
    name: "Grace Hall",
    age: 22,
    membership: { startDate: ISODate("2023-08-15"), active: true },
    borrowedBooks: ["Jane Eyre"]
  },
  {
    name: "Henry Baker",
    age: 45,
    membership: { startDate: ISODate("2020-04-03"), active: false },
    borrowedBooks: []
  },
  {
    name: "Isla Moore",
    age: 30,
    membership: { startDate: ISODate("2023-09-10"), active: true },
    borrowedBooks: ["Animal Farm"]
  },
  {
    name: "Jack Wilson",
    age: 38,
    membership: { startDate: ISODate("2022-12-11"), active: true },
    borrowedBooks: ["Brave New World"]
  }
]);

// 🧑‍💼 Вмъкване на служители
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
  },
  {
    name: "Laura King",
    position: "Manager",
    salary: 3200,
    workShift: { start: "08:00", end: "16:00" }
  },
  {
    name: "Oliver Scott",
    position: "Archivist",
    salary: 2100,
    workShift: { start: "11:00", end: "19:00" }
  },
  {
    name: "Sophia Adams",
    position: "Technician",
    salary: 2000,
    workShift: { start: "13:00", end: "21:00" }
  },
  {
    name: "Liam Walker",
    position: "Librarian",
    salary: 2500,
    workShift: { start: "09:00", end: "17:00" }
  },
  {
    name: "Mia Phillips",
    position: "Assistant",
    salary: 1900,
    workShift: { start: "10:30", end: "18:30" }
  },
  {
    name: "Noah Bennett",
    position: "Cleaner",
    salary: 1600,
    workShift: { start: "07:00", end: "15:00" }
  },
  {
    name: "Chloe Reed",
    position: "Technician",
    salary: 2100,
    workShift: { start: "12:00", end: "20:00" }
  },
  {
    name: "Ethan Turner",
    position: "Security",
    salary: 1800,
    workShift: { start: "20:00", end: "04:00" }
  }
]);

// 📦 Вмъкване на заеми
db.loans.insertMany([
  {
    bookTitle: "1984",
    readerName: "Alice Smith",
    loanDate: ISODate("2024-05-01"),
    returnDate: ISODate("2024-05-15"),
    status: "returned"
  },
  {
    bookTitle: "The Hobbit",
    readerName: "Catherine Lewis",
    loanDate: ISODate("2024-06-01"),
    returnDate: null,
    status: "loaned"
  },
  {
    bookTitle: "Moby Dick",
    readerName: "David Martin",
    loanDate: ISODate("2024-04-20"),
    returnDate: ISODate("2024-05-04"),
    status: "returned"
  },
  {
    bookTitle: "Pride and Prejudice",
    readerName: "Frank Wright",
    loanDate: ISODate("2024-06-10"),
    returnDate: null,
    status: "loaned"
  },
  {
    bookTitle: "Jane Eyre",
    readerName: "Grace Hall",
    loanDate: ISODate("2024-06-11"),
    returnDate: null,
    status: "loaned"
  },
  {
    bookTitle: "Animal Farm",
    readerName: "Isla Moore",
    loanDate: ISODate("2024-03-20"),
    returnDate: ISODate("2024-04-03"),
    status: "returned"
  },
  {
    bookTitle: "Brave New World",
    readerName: "Jack Wilson",
    loanDate: ISODate("2024-06-05"),
    returnDate: null,
    status: "loaned"
  },
  {
    bookTitle: "To Kill a Mockingbird",
    readerName: "Alice Smith",
    loanDate: ISODate("2023-12-15"),
    returnDate: ISODate("2023-12-29"),
    status: "returned"
  },
  {
    bookTitle: "The Great Gatsby",
    readerName: "Alice Smith",
    loanDate: ISODate("2024-01-10"),
    returnDate: ISODate("2024-01-24"),
    status: "returned"
  },
  {
    bookTitle: "The Catcher in the Rye",
    readerName: "Bob Johnson",
    loanDate: ISODate("2024-02-20"),
    returnDate: ISODate("2024-03-06"),
    status: "returned"
  }
]);
