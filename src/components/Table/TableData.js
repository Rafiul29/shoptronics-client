const TableData = ({ data, col = 1 }) => {
  return (
    <td
      colSpan={col}
      className="  px-5  py-2  text-gray-700 font-sans even:bg-beven:bg-amber-100 "
    >
      {data}
    </td>
  );
};

export default TableData;
