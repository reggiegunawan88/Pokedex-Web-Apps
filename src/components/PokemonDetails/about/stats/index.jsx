import Meterbar from "../meterbar";

function PokemonStats() {
  return (
    <table className="table-auto mx-2 my-2 font-bold">
      <tbody>
        <tr>
          <td className="w-1/2">HP</td>
          <td>
            <Meterbar value={20} />
          </td>
        </tr>
        <tr>
          <td className="w-1/2">
            <p>Attack</p>
          </td>
          <td>
            <Meterbar value={20} />
          </td>
        </tr>
        <tr>
          <td className="w-1/2">
            <p>Defence</p>
          </td>
          <td>
            <Meterbar value={20} />
          </td>
        </tr>
        <tr>
          <td className="w-1/2">
            <p>Special-ATK</p>
          </td>
          <td>
            <Meterbar value={20} />
          </td>
        </tr>
        <tr>
          <td className="w-1/2">
            <p>Special-Def</p>
          </td>
          <td>
            <Meterbar value={20} />
          </td>
        </tr>
        <tr>
          <td className="w-1/2">
            <p>Speed</p>
          </td>
          <td>
            <Meterbar value={20} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PokemonStats;
