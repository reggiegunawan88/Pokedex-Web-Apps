import { Link } from "react-router-dom";

function HomeButton() {
  return (
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
  );
}

export default HomeButton;
