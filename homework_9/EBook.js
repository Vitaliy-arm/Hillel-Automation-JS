import { Book } from './Book.js';

export class EBook extends Book {
  constructor(title, author, year, fileType) {
    super(title, author, year);
    this.fileType = fileType;
  }

  get fileType() {
    return this._fileType;
  }

  set fileType(value) {
    if (!value) {
      console.log("File type cannot be empty!");
      this._fileType = "The file type is not specified";
      return;
    }
    this._fileType = value;
  }

  printInfo() {
    console.log(
      `eBook: Title - ${this.title}, Author - ${this.author}, Year - ${this.year}, Type of file - ${this.fileType}`,
    );
  }

  static createEBookFromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

// eBook1.printInfo();
