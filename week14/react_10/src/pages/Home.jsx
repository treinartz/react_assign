import BookCard from "../components/BookCard.jsx";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page of our React application.</p>
      <BookCard limit={2} />
    </div>
  );
}
export default Home;
