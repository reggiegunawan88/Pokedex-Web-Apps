function PokemonDetails() {
  return (
    <div className="h-full max-w-xl mx-auto">
      <div className="flex flex-col bg-white mx-4 rounded-lg shadow-md p-5">
        {/* Pokemon profile */}
        <div className="grid grid-cols-1 gap-y-4 tablet:grid-cols-2">
          <div className="flex flex-row tablet:flex-col">
            {/* pokemon name, types */}
            <div className="flex flex-col tablet:gap-y-4 tablet:place-items-center">
              <p className="font-bold text-xl tablet:text-3xl">Bulbasaur dengan 2 nama</p>
              <div className="flex flex-row gap-x-3 mt-2">
                <p className="bg-green-200 text-xs px-2 py-1 rounded font-bold">Grass</p>
                <p className="bg-green-200 text-xs px-2 py-1 rounded font-bold">Grass</p>
              </div>
            </div>
            {/* pokemon img */}
            <img className="w-24 h-24 tablet:w-40 tablet:h-40 tablet:mt-12 mx-4 place-self-center" alt="bulbasaur" src="/assets/bulbasaur.png" />
          </div>

          {/* Pokemon status */}
          <div className="flex flex-col gap-y-4">
            {/* Pokemon about */}
            <div className="flex flex-col">
              <div className="w-full bg-blue-100 px-2 rounded">
                <p className="font-sans text-blue-500 text-sm font-bold">About</p>
              </div>
              <div className="grid grid-cols-2  px-2 mt-2">
                <div className="flex flex-col gap-y-1">
                  <p>Spesies</p>
                  <p>Height</p>
                  <p>Weight</p>
                  <p>Abilities</p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p>Spesies</p>
                  <p>Height</p>
                  <p>Weight</p>
                  <p>Abilities</p>
                </div>
              </div>
            </div>
            {/* Pokemon about 2.0 */}
            <div className="flex flex-col">
              <div className="w-full bg-blue-100 px-2 rounded">
                <p className="font-sans text-blue-500 text-sm font-bold">About</p>
              </div>
              <div className="grid grid-cols-2  px-2 mt-2">
                <div className="flex flex-col gap-y-1">
                  <p>Spesies</p>
                  <p>Height</p>
                  <p>Weight</p>
                  <p>Abilities</p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p>Spesies</p>
                  <p>Height</p>
                  <p>Weight</p>
                  <p>Abilities</p>
                </div>
              </div>
            </div>
            {/* Pokemon about 3.0 */}
            <div className="flex flex-col">
              <div className="w-full bg-blue-100 px-2 rounded">
                <p className="font-sans text-blue-500 text-sm font-bold">About</p>
              </div>
              <div className="grid grid-cols-2  px-2 mt-2">
                <div className="flex flex-col gap-y-1">
                  <p>Spesies</p>
                  <p>Height</p>
                  <p>Weight</p>
                  <p>Abilities</p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p>Spesies</p>
                  <p>Height</p>
                  <p>Weight</p>
                  <p>Abilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Catch button */}
      <div className="w-full text-center mt-6">
        <button>
          <img alt="pokeball-catch" src="/assets/pokeball-catch.png" />
          <p className=" font-sans font-bold text-redBtn">CATCH</p>
        </button>
      </div>
    </div>
  );
}

export default PokemonDetails;
