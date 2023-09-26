
function concatenateString(text, maxLength) {
    if (typeof text !== 'string' || typeof maxLength !== 'number') {
        return "Invalid input"; 
    }
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

    const rowAmount = parseInt(rowAmountInput.value);
    const cellsAmount = parseInt(cellsAmountInput.value);


    if (typeof rowAmount !== "number" || typeof cellsAmount !== "number"){
        return "Invalid input"
    }

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

let bookInstance = new Book('LalaLend', 'Brown, Tim del Ray', 200, false, false);

console.log('Title:', bookInstance.title);
console.log('Authors:', bookInstance.authors);
console.log('Number of Pages:', bookInstance.numberOfPages);
console.log('Is Read:', bookInstance.isRead);
console.log('Is Favorite:', bookInstance.isFavorite);

bookInstance.markAsRead();
console.log('Is Read:', bookInstance.isRead); 

bookInstance.toggleFavorite();
console.log('Is Favorite:', bookInstance.isFavorite); 
