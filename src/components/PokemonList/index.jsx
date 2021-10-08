import PokemonCard from "../PokemonCard";

function PokemonList() {
  return (
    <div className="flex flex-col gap-y-7 laptopM:grid laptopM:grid-flow-col-dense laptopM:mt-10">
      {/* pokemon thumbnail */}
      <div className="flex flex-col font-sans items-center laptopM:order-2">
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
        <div className="self-center mt-6 tablet:mt-20">
          <button className="bg-detailBtn font-sans font-bold text-white px-7 py-2 rounded-full">DETAIL</button>
        </div>
      </div>

      {/* pokemon list grid */}
      <div className="laptopM:bg-white laptopM:rounded-lg laptopM:shadow-lg laptopM:p-7 laptopM:mx-5 laptopM:h-auto">
        <div className="flex flex-row w-full gap-x-2 justify-center px-4 items-center">
          <hr className="border-default border-pokedexBlue w-full" />
          <p className="font-sans font-bold text-pokedexBlue mx-2 whitespace-nowrap">Pokemon List</p>
          <hr className="border-default border-pokedexBlue w-full" />
        </div>
        {/* pokemon list */}
        <div className="flex overflow-x-auto whitespace-nowrap gap-x-3 mx-4 laptopM:grid laptopM:grid-cols-4 laptopM:h-97">
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
          <div className="col-span-4 mt-6 mx-auto">
            <button className="bg-detailBtn font-sans font-bold text-white px-7 py-2 rounded-full">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
