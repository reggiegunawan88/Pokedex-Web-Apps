function PokemonDetail() {
  return (
    <div className="bg-green-400 rounded-md p-3">
      <div className="flex flex-col text-white">
        {/* pokemon name */}
        <p className="font-sans text-lg font-bold">Bulbasaur</p>
        {/* pokemon type and img */}
        <div className="grid grid-cols-2 text-center justify-center mt-2 gap-x-2">
          <div className="flex flex-col">
            <p>Grass</p>
            <p>Poison</p>
          </div>
          <img alt="bulba" src="/assets/bulbasaur.png" className="justify-self-center" />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
