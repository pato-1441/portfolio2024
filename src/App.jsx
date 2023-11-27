function App() {
  return (
    <div>
      <div className="h-screen bg-black flex flex-col text-white">
        <header className="w-full flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/83987715?v=4"
              alt="duck shield logo"
              className="w-8 rounded-full"
            />
            <h1 className="font-semibold">Patricio Albornoz</h1>
          </div>
          <a
            className="transition-all duration-150 hover:scale-105 text-sm py-1 px-3 rounded-full border border-gray-200"
            href="mailto:pwalbornoz@gmail.com"
            rel="noreferrer noopener"
          >
            <span>pwalbornoz@gmail.com</span>
          </a>
        </header>

        <main className="flex-1">
          <section className="text-center">
            <h2 className="text-3xl font-medium text-center">
              React.js Project Created using
            </h2>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
