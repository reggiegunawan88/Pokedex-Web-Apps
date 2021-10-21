import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userInteractionContext } from "components/PokemonDetails";
import "./index.css";

function SnackbarSuccess() {
  const status = useContext(userInteractionContext);
  return (
    <>
      {status.snackbarSuccess && (
        <div className="slide fixed flex w-full justify-center z-50">
          <div className="max-w-md bg-snackbarGreen rounded-lg mx-4">
            <div className="flex flex-row gap-x-4 px-6 py-3 text-white items-center">
              <p className="font-sans font-bold">Your pokemon has added to your inventory.</p>
              <FontAwesomeIcon icon="times" className="cursor-pointer font-bold" onClick={status.closeSnackbarSuccess} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SnackbarSuccess;
