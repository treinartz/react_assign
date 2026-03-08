import BookList from "../components/BookList.jsx";

function Home() {
  return (
    <div>
      <BookList limit={3} />
    </div>
  );
}
export default Home;
