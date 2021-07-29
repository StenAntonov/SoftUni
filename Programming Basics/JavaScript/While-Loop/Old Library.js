function solve(input) {
    let theBook = input.shift();
    let totalBooks = Number(input.shift());
    let bookcount = 0;
    let bookName = input.shift();
    while(bookName !== theBook) {
        bookcount++
        if(bookcount == totalBooks) {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${bookcount} books.`);
            break;
        }
        bookName = input.shift();
    }
    if(theBook === bookName) {
    console.log(`You checked ${bookcount} books and found it.`);
    }
}
solve(["Bourne",
    32,
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
"Bourne"
    
    ])