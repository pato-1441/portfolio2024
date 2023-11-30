import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="overflow-x-hidden bg-white px-4 pb-16 pt-0 text-black dark:bg-black dark:text-white sm:px-8 sm:pt-2">
      <Nav />
      <div className="mx-auto mt-32 max-w-[1400px] min-h-screen">
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

export default App;
