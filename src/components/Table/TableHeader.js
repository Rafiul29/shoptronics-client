const TableHeader = ({title,col=1}) => {
  return (
    <th colSpan={col} scope="col" className="px-6 py-3">
     {title}
    </th>
  );
};

export default TableHeader;