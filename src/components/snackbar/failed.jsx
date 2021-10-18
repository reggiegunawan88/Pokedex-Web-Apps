import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SnackbarFailed() {
  return (
    <div className="fixed w-full z-50 mx-auto">
      <div className="max-w-sm bg-snackbarRed rounded-lg mx-4">
        <div className="flex flex-row px-6 py-3 text-white items-center">
          <FontAwesomeIcon className="mx-4" icon="times" />
          <p className="font-sans font-bold">Pokemon escaped! Try again.</p>
        </div>
      </div>
    </div>
  );
}

export default SnackbarFailed;
