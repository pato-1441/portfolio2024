import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Nav />
      <div className="container mx-auto px-4 sm:px-24 py-4 sm:pt-24 min-h-screen">
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

export default App;
