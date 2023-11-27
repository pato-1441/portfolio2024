import Nav from "./components/nav/Nav";

function App() {
  return (
    <div>
      <div className="h-screen bg-black flex flex-col text-white">
        <Nav />
        <main className="flex-1 bg-gray-900">
          <section className="text-center">
            <h2 className="text-3xl font-medium text-center">
              React.js Project Created using
            </h2>
            <img
              src="https://avatars.githubusercontent.com/u/83987715?v=4"
              alt="patricio albornoz picture"
              className="w-8 rounded-full"
            />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
