function PokemonCard(props) {
  return (
    <div className="flex-shrink-0 bg-blue-200 p-3 rounded mt-3 h-[fit-content] cursor-pointer">
      <img className="w-20 h-20 mx-auto" alt="bulbasaur" src={props.data.image} />
    </div>
  );
}

export default PokemonCard;
