import React, { useContext } from "react";
import { ModalContext } from "pages/Inventory/components/MyPokemon";
import { deletePokemon } from "components/utils/helper/helper";

function Modal() {
  const data = useContext(ModalContext);

  const releasePokemon = () => {
    deletePokemon(data.releasedPokemon);
    data.closeModal();
    window.location.reload();
  };

  return (
    <>
      {data.modal && (
        <>
          <div className="fixed bg-gray-500 top-0 bottom-0 right-0 left-0 content-none z-50 opacity-75"></div>
          <div className="absolute max-w-sm w-full z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col bg-white mx-4 px-4 py-9 text-center rounded-lg">
              <p className="font-sans text-xl font-bold">
                Are you sure you want to release <span className="capitalize text-redBtn">{data.releasedPokemon.nick}</span> permanently?
              </p>
              <div className="flex flex-col mt-10 gap-y-4">
                <button className="btn-CTA-submit" onClick={releasePokemon}>
                  <p className="font-minecraft text-lg text-white font-semibold">RELEASE</p>
                </button>
                <button className="btn-CTA-cancel" onClick={() => data.closeModal()}>
                  <p className="font-minecraft text-lg text-redBtn">CANCEL</p>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
