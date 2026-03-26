import BookCard from "./BookCard.jsx";

function BookList({ books = [] }) {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
}

export default BookList;
