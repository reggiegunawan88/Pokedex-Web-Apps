import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();

  return (
    <div className="fixed top-0 w-full py-4 bg-pokedexBlue text-center z-50">
      <div className="flex flex-row items-center mx-6 justify-between text-white">
        {/* back button */}
        <div className="flex flex-row items-center cursor-pointer" onClick={() => history.goBack()}>
          <FontAwesomeIcon icon="arrow-left" />
          <p className="font-bold font-minecraft mx-4 hidden laptop:block">Back</p>
        </div>
        <div className="flex">
          <Link to="/pokedex">
            <img alt="pokeball-logo" src="/assets/pokedex-pixel.png" className="h-9 tablet:h-12" />
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <Link to="/my-pokemon">
            {/* <img className="h-6  tablet:h-10 tablet:w-10" alt="pokeball-icon" src="/assets/pokeball-pixel.png" /> */}
            <p className="font-bold font-minecraft">My Pokemon</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
