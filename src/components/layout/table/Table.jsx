import { capitalize } from "../../../utils/helpers/capitalize";

export const Table = ({ list }) => (
  <table>
    <thead>
      <tr>
        {Object.keys(list[0]).map((key, index) => (
          <th key={index}>{capitalize(key)}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {list.map((item, rowIndex) => (
        <tr key={rowIndex}>
          {Object.values(item).map((value, colIndex) => (
            <td key={`${rowIndex}-${colIndex}`}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
