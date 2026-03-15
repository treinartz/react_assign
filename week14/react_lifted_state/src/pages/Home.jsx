import Projects from "../components/Projects";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Projects limit={3} />
    </div>
  );
}

export default Home;
