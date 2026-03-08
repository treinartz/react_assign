import BookList from "../components/BookList.jsx";

function Books() {
  return (
    <div>
      <h1>Books Page</h1>
      <BookList limit={5} />
    </div>
  );
}

export default Books;
