
const Navbar = () => {

  return (
    <header className='h-20 border-b border-gray flex items-center bg-white/80 backdrop-blur-lg  '>
      <div className="wrapper flex justify-between items-center">
        <h2 className='text-2xl font-semibold'>Shop Tronics</h2>
        <ul className='flex gap-10'>
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar