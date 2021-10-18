import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SnackbarSuccess() {
  return (
    <div className="fixed w-full z-50 mx-auto">
      <div className="max-w-sm bg-snackbarGreen rounded-lg mx-4">
        <div className="flex flex-row px-6 py-3 text-white items-center">
          <FontAwesomeIcon className="mx-4" icon="check" />
          <p className="font-sans font-bold">Your pokemon has added to your inventory.</p>
        </div>
      </div>
    </div>
  );
}

export default SnackbarSuccess;
