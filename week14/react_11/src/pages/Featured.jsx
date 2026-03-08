import BookList from "../components/BookList.jsx";
import { books } from "../data/bookData.js";

function Featured() {
  // Filter the full array down to only books where featured is true
  const featuredBooks = books.filter((book) => book.featured);

  return (
    <div>
      <h1>Featured Books</h1>
      <p>{featuredBooks.length} featured books in the collection</p>
      <BookList books={featuredBooks} />
    </div>
  );
}

export default Featured;
