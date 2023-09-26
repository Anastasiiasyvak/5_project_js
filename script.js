
function concatenateString(text, maxLength) {
    if (text.length <= maxLength) {
        return text;  
    } 
    else {
        return text.slice(0, maxLength).toUpperCase() + '...';
    }
}
console.log(concatenateString('Longer than expected', 5));  

function createTableCells(){

    const rowAmountInput = document.getElementById("rowAmount");
    const cellsAmountInput = document.getElementById("cellsAmount");
    const rowAmount = parseInt(rowAmountInput.value); // parseint конвертує в цілі числа 
    const cellsAmount = parseInt(cellsAmountInput.value);
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
   
     for (let i = 0; i < rowAmount; i++) {
       const row= document.createElement("tr");
   
       for (let j = 0; j < cellsAmount; j++) {
         const cell = document.createElement("td");
         const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
         cell.appendChild(cellText);
         row.appendChild(cell);
       }
          tblBody.appendChild(row);
     }
   
     tbl.appendChild(tblBody);
     document.body.appendChild(tbl);
     tbl.setAttribute("border", "10");
}


function removeTable() {
    $("table").remove();
}


class Book {
    constructor(title, authors, numberOfPages, isRead, isFavorite) {
        this.title = title;
        this.authors = authors;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
        this.isFavorite = isFavorite;
    }

    markAsRead() {
        this.isRead = true;
    }

    toggleFavorite() {
        this.isFavorite = !this.isFavorite;
    }
}

class Bookshelf {
    constructor(books = []) {
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) { // и перевіряємо чи книга в масиві бо якщо ні то позиція книги -1 
            this.books.splice(index, 1); // splice идаляє
        }
    }

    getUnreadBooks() {
        return this.books.filter(book => !book.isRead);
    }

    getFavBooks() {
        return this.books.filter(book => book.isFavorite);
    }

    getTotalBooksCount() {
        return this.books.length;
    }
}


function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // коли оновимо сторіночку, список зникне 

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Authors: ${book.authors}</p>
            <p>Number of Pages: ${book.numberOfPages}</p>
            <p>Favorite: ${book.isFavorite ? 'Yes' : 'No'}</p>
            <p>Is Read: ${book.isRead ? 'Yes' : 'No'}</p>
        <button class="button3" onclick="toggleFavorite('${book.title}')">Toggle Favorite</button>
        <button class="button3" onclick="markAsRead('${book.title}')">Mark as Read</button>
        <button class="button4" onclick="removeBook('${book.title}')">Remove</button>
        `;

        bookList.appendChild(bookItem);
    });
}


function addNewBook() {
    const titleInput = document.getElementById("title");
    const authorsInput = document.getElementById("authors");
    const numberOfPagesInput = document.getElementById("numberOfPages");

    const title = titleInput.value;
    const authors = authorsInput.value;
    const numberOfPages = parseInt(numberOfPagesInput.value);
    const isRead = false;
    const isFavorite = false;

    const newBook = new Book(title, authors, numberOfPages, isRead, isFavorite);
    shelf.addBook(newBook);
    updateTotalBooksCount();
    displayBooks(shelf.books);

    titleInput.value = "";
    authorsInput.value = "";
    numberOfPagesInput.value = "";
}


function updateTotalBooksCount() {
    const totalBooksCount = document.getElementById("totalBooksCount");
    totalBooksCount.textContent = `Total amount of books: ${shelf.getTotalBooksCount()}`;
}


function alertFavoriteBooks() {
    const favoriteBooks = shelf.getFavBooks();
    alert(`Number of favorite books: ${favoriteBooks.length}`);
}


function alertUnreadBooks() {
    const unreadBooks = shelf.getUnreadBooks();
    alert(`Number of unread books: ${unreadBooks.length}`);
}


function removeBook(title) {
    const bookToRemove = shelf.books.find(book => book.title === title);
    if (bookToRemove) {
        shelf.removeBook(bookToRemove);
        updateTotalBooksCount();
        displayBooks(shelf.books); 
    }
}


function toggleFavorite(title) {
    const bookToToggle = shelf.books.find(book => book.title === title);
    if (bookToToggle) {
        bookToToggle.toggleFavorite();
        displayBooks(shelf.books); 
    }
}


function markAsRead(title) {
    const bookToMarkAsRead = shelf.books.find(book => book.title === title);
    if (bookToMarkAsRead) {
        bookToMarkAsRead.markAsRead();
        displayBooks(shelf.books); 
    }
}


const shelf = new Bookshelf([]);
updateTotalBooksCount();
