import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="fixed top-0 w-full py-4">
      <div className="flex flex-row items-center mx-5 justify-between">
        <FontAwesomeIcon icon="arrow-left" />
        <img className="h-7 w-7" alt="pokeball-icon" src="/assets/pokeball.png" />
      </div>
    </div>
  );
}

export default Header;
