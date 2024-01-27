import { useState } from "react";
import Hero from "./components/hero/Hero";
import Modal from "./components/modal/Modal";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Working from "./components/working/Working";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalCV = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-screen overflow-x-hidden px-4 pb-16 pt-0 sm:px-8 sm:pt-2 text-black bg-white dark:bg-black dark:text-white">
      <Nav />
      <main className="mx-auto mt-32 max-w-[1400px] min-h-screen">
        <Hero showModalCV={showModalCV} />
        <Working />
        <Projects />
      </main>
      {showModal && <Modal showModalCV={showModalCV} />}
    </div>
  );
};

export default App;
