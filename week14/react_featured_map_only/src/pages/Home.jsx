import BookList from "../components/BookList.jsx";
import { books } from "../data/bookData.js";

function Home() {
  const limitedBooks = books.slice(0, 2);

  return (
    <div>
      <h1>Home</h1>
      <BookList books={limitedBooks} />
    </div>
  );
}

export default Home;
