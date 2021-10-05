import PokemonCard from "../PokemonCard";

function PokemonList() {
  return (
    <div className="flex flex-col gap-y-7 laptop:flex-row-reverse laptop:justify-center laptop:mt-20 laptop:gap-x-15">
      {/* pokemon thumbnail */}
      <div className="flex flex-col font-sans items-center">
        <p className="font-bold text-3xl">Bulbasaur</p>
        <p className="text-xs mt-2">#001</p>
        <div className="flex flex-row gap-x-3 mt-3">
          <p className="bg-green-200 text-xs px-2 py-1 rounded font-bold">Grass</p>
          <p className="bg-orange-10 text-orange-40 text-xs px-2 py-1 rounded font-bold">Poison</p>
        </div>
        {/* img */}
        <div className="self-center mt-12">
          <img alt="bulbasaur" src="/assets/bulbasaur.png" />
        </div>
        {/* btn details */}
        <div className="self-center mt-6 laptop:mt-20">
          <button className="bg-detailBtn font-sans font-bold text-white px-7 py-2 rounded-full">DETAILS</button>
        </div>
      </div>

      {/* pokemon list grid */}
      <div className="laptopM:bg-white laptop:rounded-lg laptop:shadow-lg laptop:p-7 laptop:mx-5 laptop:h-110">
        <div className="flex flex-row w-full gap-x-2 justify-center px-4 items-center">
          <hr className="border-default border-pokedexBlue w-full" />
          <p className="font-sans font-bold text-pokedexBlue mx-2 whitespace-nowrap">Pokemon List</p>
          <hr className="border-default border-pokedexBlue w-full" />
        </div>
        {/* pokemon list */}
        <div className="flex overflow-x-auto whitespace-nowrap gap-x-3 mx-4 laptop:grid laptop:grid-cols-4 laptop:h-97">
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
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
