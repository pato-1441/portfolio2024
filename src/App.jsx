import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 sm:px-24 h-screen flex flex-col text-white">
        <Nav />
        <Hero />
      </div>
    </div>
  );
}

export default App;
