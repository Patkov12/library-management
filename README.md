# Library Management Database

## Описание

Тази MongoDB база данни симулира проста система за управление на библиотека. Базата съдържа информация за книги, автори, читатели, служители и заети книги.

## Колекции и структура

1. **books**
   - `title` (string)
   - `genre` (string)
   - `publishedYear` (number)
   - `author` (object): `{ name, nationality }`
   - `tags` (array of strings)

2. **authors**
   - `name` (string)
   - `birthYear` (number)
   - `books` (array of strings)
   - `nationality` (string)

3. **readers**
   - `name` (string)
   - `age` (number)
   - `membership` (object): `{ startDate, active }`
   - `borrowedBooks` (array of book titles)

4. **employees**
   - `name` (string)
   - `position` (string)
   - `salary` (number)
   - `workShift` (object): `{ start, end }`

5. **loans**
   - `bookTitle` (string)
   - `readerName` (string)
   - `loanDate` (date)
   - `returnDate` (date)
   - `status` (string)

## Инсталация

1. Уверете се, че MongoDB е инсталиран и стартиран.
2. Клонирайте хранилището:
