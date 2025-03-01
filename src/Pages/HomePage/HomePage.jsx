import Hero from "./components/Hero/Hero";
import SidePanel from "./components/SidePanel/SidePanel";
import Reviews from "./components/Reviews/Reviews";
import JoinTheCourseModal from "../../components/JoinTheCourseModal/JoinTheCourseModal";

const HomePage = ({
  openMenu,
  menuIsOpen,
  closeMenu,
  openModal,
  modalIsOpen,
  closeModal,
}) => {
  return (
    <>
      <Hero openMenu={openMenu} openModal={openModal} />
      <Reviews openModal={openModal} />
      <SidePanel
        menuIsOpen={menuIsOpen}
        closeMenu={closeMenu}
        openModal={openModal}
      />
      <JoinTheCourseModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </>
  );
};

export default HomePage;
