const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.99,
        image: "https://via.placeholder.com/100",
    },
    {
        title: "1984",
        author: "George Orwell",
        price: 8.99,
        image: "https://via.placeholder.com/100",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 12.99,
        image: "https://via.placeholder.com/100",
    },
];

function displayBooks() {
    const bookList = document.getElementById("book-list");
    books.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Price: $${book.price.toFixed(2)}</p>
            <button onclick="addToCart('${book.title}')">Add to Cart</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function addToCart(title) {
    alert(`${title} has been added to your cart!`);
}

window.onload = displayBooks;