import BlogList from "./components/BlogList";
import Jumbotron from "./components/JumboTron";

const HomePage = () => {
  return (
    <main className="container mx-auto px-20">
      <Jumbotron />
      <BlogList />
    </main>
  );
};

export default HomePage;
