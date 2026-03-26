import BookList from "../components/BookList.jsx";
import { books } from "../data/bookData.js";

function BooksPage() {
  return (
    <div>
      <h1>All Books</h1>
      <BookList books={books} />
    </div>
  );
}

export default BooksPage;
