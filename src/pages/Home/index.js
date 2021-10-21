import HomeButton from "components/Home/HomeButton";
import HomeLogo from "components/Home/HomeLogo";
import Footer from "components/Footer";

/* Landing page */
function Homepage() {
  return (
    <div className="min-h-screen bg-pokedex-bg">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <HomeLogo />
        <HomeButton />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
