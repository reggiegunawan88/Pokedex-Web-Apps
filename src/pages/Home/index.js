import ButtonMenu from "./components/ButtonMenu";
import HomeLogo from "./components/HomeLogo";
import Footer from "components/Footer";

/* Landing page */
function Homepage() {
  return (
    <div className="min-h-screen bg-pokedex-bg">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <HomeLogo />
        <ButtonMenu />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
