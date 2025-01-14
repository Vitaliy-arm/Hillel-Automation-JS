import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book("Piter Pen", "", 1845);
const book2 = new Book("The Headless Horseman", "Mayne Reid", 1865);
const book3 = new Book("The Count of Monte Cristo", "Alexandre Dumas", 1844);
const eBook1 = new EBook("The Picture of Dorian Gray", "Oscar Wilde", 1890, "");
const eBook2 = new EBook(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "epub",
);

console.log("\nPrint all books:");
book1.printInfo();
book2.printInfo();
book3.printInfo();
eBook1.printInfo();
eBook2.printInfo();

const oldestBook = Book.getOldestBook([book1, book2, book3, eBook1, eBook2]);
console.log("\nPrint oldest book:");
oldestBook.printInfo();

const newEBook = EBook.createEBookFromBook(book2, "mobi");
console.log("\nCreated EBook:");
newEBook.printInfo();
