import PokemonCard from "./pokemon-card";

function PokemonList() {
  return (
    <div className="w-full flex flex-col">
      {/* text section */}
      <div className="flex flex-col font-sans items-center">
        <p className="font-bold text-3xl">Bulbasaur</p>
        <p className="text-xs mt-2">#001</p>
        <div className="flex flex-row gap-x-3 mt-3">
          <p className="bg-green-200 text-xs px-2 py-1 rounded font-bold">Grass</p>
          <p className="bg-orange-10 text-orange-40 text-xs px-2 py-1 rounded font-bold">Poison</p>
        </div>
      </div>
      {/* img section */}
      <div className="self-center mt-12">
        <img alt="bulbasaur" src="/assets/bulbasaur.png" />
      </div>
      {/* btn details */}
      <div className="self-center mt-6">
        <button className="bg-detailBtn font-sans font-bold text-white px-7 py-2 rounded-full">DETAILS</button>
      </div>

      {/* pokemon list grid */}
      <div className="mt-7">
        <div className="flex flex-row w-full gap-x-2 justify-center px-4 items-center">
          <hr className="border-default border-pokedexBlue w-full" />
          <p className="font-sans font-bold text-pokedexBlue mx-2 whitespace-nowrap">Pokemon List</p>
          <hr className="border-default border-pokedexBlue w-full" />
        </div>
        {/* pokemon list */}
        <div className="flex overflow-x-auto whitespace-nowrap gap-x-3 mx-4">
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
