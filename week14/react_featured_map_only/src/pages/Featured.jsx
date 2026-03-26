import BookList from "../components/BookList.jsx";
import { books } from "../data/bookData.js";

function Featured() {
  const featuredBooks = books.filter((book) => book.isFeatured);

  return (
    <div>
      <h1>Featured Books</h1>
      <p>{featuredBooks.length} featured books in the collection</p>
      <BookList books={featuredBooks} />
    </div>
  );
}

export default Featured;
