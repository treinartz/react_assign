import Book from "./Book";
import { books } from "../data/bookData.js";

function BookCard({ limit }) {
  const num_books = limit ? books.slice(0, limit) : books;
  return (
    <div className="book-grid">
      {num_books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
          url={book.url}
          isFeatured={book.isFeatured}
        />
      ))}
    </div>
  );
}
export default BookCard;
