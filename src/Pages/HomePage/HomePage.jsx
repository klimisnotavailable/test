import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
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
      <Advantages />
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
