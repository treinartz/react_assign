import { books } from "../data/bookData.js";
import Book from "./Book.jsx";
function BookCard({ limit }) {
  return (
    <div className="book-grid">
      {books.slice(0, limit).map((book) => (
        <Book
          key={book.id}
          author={book.author}
          title={book.title}
          image={book.image}
          more={book.more}
          description={book.description}
          featured={book.featured}
        />
      ))}
    </div>
  );
}

export default BookCard;
