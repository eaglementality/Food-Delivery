import { Hero_Section } from "../Components/LandingPage/Hero";
import { Nav_Bar } from "../Components/LandingPage/NavBar";
import { ChooseVendor } from "../Components/LandingPage/vendors";

const Home_Page = () => {
  return (
    <>
      <Nav_Bar />
      <section className="  justify-center item-center p-2 sm:p-5">
        <Hero_Section />
      </section>
      <section className="justify-center items-center p-5 mt-5">
        <ChooseVendor />
      </section>
    </>
  );
};
export default Home_Page;
