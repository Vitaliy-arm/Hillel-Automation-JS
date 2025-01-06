export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        if (!value) {
            this._title = "The title field is not specified";
            return;
        }
        this._title = value;
    }

    set author(value) {
        if (!value) {
            this._author = "The author field is not specified";
            return;
        }
        this._author = value;
    }

    set year(value) {
        if (!value || isNaN(value) || value < 0) {
            this._year = "Year must be a valid number!";
            return;
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Book: Title - ${this.title}, Author - ${this.author}, Year - ${this.year}`);
    }

    static getOldestBook(books) {
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}




// book1.printInfo();
// book2.printInfo();
// book3.printInfo();