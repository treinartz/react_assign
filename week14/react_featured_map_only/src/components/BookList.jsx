import BookCard from "./BookCard.jsx";

function BookList({ books = [], limit }) {
  const displayBooks = limit ? books.slice(0, limit) : books;

  return (
    <div className="book-grid">
      {displayBooks.map((book) => (
        <BookCard
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
export default BookList;
