import HomePage from "./Pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Header openMenu={openMenu} />
      <HomePage
        menuIsOpen={menuIsOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
