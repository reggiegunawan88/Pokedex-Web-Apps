import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SnackbarSuccess() {
  return (
    <div className="fixed flex w-full justify-center z-50">
      <div className="max-w-sm bg-snackbarGreen rounded-lg mx-4">
        <div className="flex flex-row gap-x-4 px-6 py-3 text-white items-center">
          <FontAwesomeIcon icon="check" />
          <p className="font-sans font-bold">Your pokemon has added to your inventory.</p>
        </div>
      </div>
    </div>
  );
}

export default SnackbarSuccess;
