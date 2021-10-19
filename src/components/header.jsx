import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();

  return (
    <div className="fixed top-0 w-full py-4 bg-pokedexBlue text-center z-50">
      <div className="flex flex-row items-center mx-5 justify-between text-white">
        {/* back button */}
        <div className="flex flex-row items-center cursor-pointer" onClick={() => history.goBack()}>
          <FontAwesomeIcon icon="arrow-left" />
          <p className="font-bold font-minecraft mx-4 hidden laptop:block">Back</p>
        </div>
        {/* owned pokemon */}
        {/* <p className="font-sans font-bold text-base">Owned: 100</p> */}
        {/* My Pokemon nav */}
        <div className="flex flex-row items-center">
          <Link to="/my-pokemon">
            <img className="h-7 w-7" alt="pokeball-icon" src="/assets/pokeball.png" />
            <p className="font-bold font-minecraft mx-4 hidden laptop:block">My Pokemon</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
