import { Link } from "react-router-dom";

function EmptyState() {
  return (
    <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col text-center">
        <p className="font-sans font-bold">You have no owned Pokemon yet.</p>
        <Link to="/pokedex" className="btn-CTA mt-5">
          <p className="font-minecraft text-lg text-white font-semibold">FIND POKEMON</p>
        </Link>
      </div>
    </div>
  );
}

export default EmptyState;
