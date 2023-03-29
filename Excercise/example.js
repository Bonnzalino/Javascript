const book = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    pages: 224,
    summary() {
      console.log(`The book "${this.title}" was written by ${this.author}, and it has ${this.pages} pages.`);
    }
  };
  
  for (let prop in book) {
    console.log(`${prop}: ${book[prop]}`);
  }
  
  book.summary();
  