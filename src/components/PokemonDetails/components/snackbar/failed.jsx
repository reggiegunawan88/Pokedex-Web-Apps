import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SnackbarFailed() {
  return (
    <div className="fixed flex w-full justify-center z-50">
      <div className="max-w-md bg-snackbarRed rounded-lg mx-4">
        <div className="flex flex-row gap-x-4 px-6 py-3 text-white items-center">
          <FontAwesomeIcon icon="times" />
          <p className="font-sans font-bold">Pokemon escaped! Try again.</p>
        </div>
      </div>
    </div>
  );
}

export default SnackbarFailed;
