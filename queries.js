// Всички книги
db.books.find();

// Книги от жанр "Fantasy"
db.books.find({ genre: "Fantasy" });

// Книги от "Fantasy", публикувани преди 2000
db.books.find({ genre: "Fantasy", publishedYear: { $lt: 2000 } });

// Актуализация: променяме заплатата на служител
db.employees.updateOne(
  { name: "Emma Green" },
  { $set: { salary: 2600 } }
);

// Изтриване: премахваме заем със статус "returned"
db.loans.deleteOne({ status: "returned" });

// Агрегация: общ брой книги по жанр
db.books.aggregate([
  { $group: { _id: "$genre", total: { $sum: 1 } } }
]);

// Агрегация: средна възраст на читателите
db.readers.aggregate([
  { $group: { _id: null, avgAge: { $avg: "$age" } } }
]);

// Агрегация: активни членове, сортирани по дата
db.readers.aggregate([
  { $match: { "membership.active": true } },
  { $sort: { "membership.startDate": -1 } }
]);
