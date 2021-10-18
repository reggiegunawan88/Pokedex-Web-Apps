import React, { useContext } from "react";
import { userInteractionContext } from "components/PokemonDetails";
import "./index.css";

function Modal() {
  const status = useContext(userInteractionContext);
  return (
    <div>
      {status.modal && (
        <div className="fade-in">
          <div className="fixed bg-gray-500 top-0 bottom-0 right-0 left-0 content-none z-50 opacity-75"></div>
          <div className="fade-in absolute max-w-sm w-full z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col bg-white mx-4 px-4 py-9 text-center rounded-lg">
              <p className="font-sans text-xl font-bold">
                Nice Catch! <br /> Give your Pokemon a nickname.
              </p>
              <div className="mt-6">
                <input className="w-full h-10 border-default border-grey-30 p-3 outline-none" placeholder="Pokemon nickname" />
              </div>
              <button className="bg-redBtn w-full py-3 mt-10 rounded-full">
                <p className="font-minecraft text-lg text-white font-semibold">SAVE</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
