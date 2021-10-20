import Footer from "../Footer.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-pokedex-bg">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <img alt="pokeball-logo" src="/assets/pokedex-pixel.png" className="h-20 tablet:h-40" />

        <div className="flex flex-row gap-x-4 font-sans text-white text-center text-xl mt-13">
          <div className="flex flex-col">
            <Link to="/pokedex">
              <button className="relative bg-white w-40 h-40 tablet:w-50 tablet:h-50 rounded-xl">
                <img alt="pokedex-logo" src="/assets/pokeball-pixel.png" className="absolute pokedex-menu-img" />
              </button>
            </Link>
            <p className="font-minecraft text-xl my-5">POKEDEX</p>
          </div>
          <div className="flex flex-col">
            <Link to="/my-pokemon">
              <button className="relative bg-white w-40 h-40 tablet:w-50 tablet:h-50 rounded-xl">
                <img alt="pokeball-icon" src="/assets/bag-pixel.png" className="absolute pokeball-menu-img" />
              </button>
            </Link>
            <p className="font-minecraft text-xl my-5">MY POKEMON</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
