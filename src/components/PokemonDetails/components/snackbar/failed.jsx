import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userInteractionContext } from "components/PokemonDetails";
import "./index.css";

function SnackbarFailed() {
  const status = useContext(userInteractionContext);
  return (
    <div>
      {status.snackbarFailed && (
        <div className="slide fixed flex w-full justify-center z-50">
          <div className="max-w-md bg-snackbarRed rounded-lg mx-4">
            <div className="flex flex-row gap-x-4 px-6 py-3 text-white items-center">
              <p className="font-sans font-bold">Pokemon escaped! Try again.</p>
              <FontAwesomeIcon icon="times" className="cursor-pointer font-bold" onClick={status.closeSnackbarFailed} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SnackbarFailed;
