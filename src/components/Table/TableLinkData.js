import { Link } from 'react-router-dom'

export const TableLinkData = ({data,link}) => {
  return (
    <td className="px-5 text-3xl py-2  text-gray-700 font-sans ">
      <Link className='cursor-pointer text-lg text-blue-600 active:text-blue-800 hover:text-blue-500 duration-500' to={link}>{data}</Link>
    </td>
  )
}