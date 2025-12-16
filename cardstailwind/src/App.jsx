import Home from "../components/Home.jsx";
import Banner from "../components/Banner.jsx";
import Cards from "../components/Cards.jsx";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 space-y-6">
      <header>
        <Home />
      </header>

      <main>
        <Banner />
      </main>

      <section>
        <Cards />
      </section>
    </div>
  );
};

export default App;
