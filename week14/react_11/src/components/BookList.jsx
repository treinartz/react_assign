import Book from "./Book.jsx";
import { books as allBooks } from "../data/bookData.js";
import { useState } from "react";

// `books` prop is optional — defaults to the full allBooks array.
// This lets Featured.jsx pass a pre-filtered array without changing
// how Home or Books use BookList.
function BookList({ limit, books = allBooks }) {
  // Build initial likes state from localStorage, keyed by book id
  const initialLikes = {};
  books.forEach((book) => {
    const saved = localStorage.getItem(`likes-${book.id}`);
    initialLikes[book.id] = saved ? Number(saved) : 0;
  });

  const [likes, setLikes] = useState(initialLikes);

  // Increment like count for one book and persist it
  const handleLike = (bookId) => {
    setLikes((prevLikes) => {
      const updated = { ...prevLikes, [bookId]: prevLikes[bookId] + 1 };
      localStorage.setItem(`likes-${bookId}`, updated[bookId]);
      return updated;
    });
  };

  // Reset every like to 0 and clear localStorage
  const clearLikes = () => {
    const cleared = {};
    books.forEach((book) => {
      cleared[book.id] = 0;
      localStorage.removeItem(`likes-${book.id}`);
    });
    setLikes(cleared);
  };

  return (
    <>
      <button onClick={clearLikes}>Reset All Likes</button>

      <div className="book-grid">
        {books.slice(0, limit).map((book) => (
          <Book
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
            image={book.image}
            more={book.more}
            description={book.description}
            featured={book.featured}
            likes={likes[book.id]}
            onLike={() => handleLike(book.id)}
          />
        ))}
      </div>
    </>
  );
}

export default BookList;
