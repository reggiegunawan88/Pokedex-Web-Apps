import Footer from "../Footer";

function Home() {
  return (
    <div className="min-h-screen bg-pokedexBlue">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <img className="w-24 h-24" alt="pokeball" src="/assets/pokeball.png" />
        <div className="flex flex-row gap-x-4 font-sans text-white text-center text-xl mt-13">
          <div className="flex flex-col">
            <button className="bg-white w-40 h-40 rounded-xl"></button>
            <p className="mt-5 font-chronicle">POKEDEX</p>
          </div>
          <div className="flex flex-col">
            <button className="bg-white w-40 h-40 rounded-xl"></button>
            <p className="mt-5 font-chronicle">MY POKEMON</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
