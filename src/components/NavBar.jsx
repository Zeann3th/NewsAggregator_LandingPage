import NavLink from './nav/NavLink'

const links = new Map([
  ['Home', '#'],
  ['Download', 'https://github.com/OOPProject20232/NewsAggregatorClient'],
  ['APIs', 'https://newsaggregator-mern.onrender.com/api-docs'],
  ['Support', '#']
])

const NavBar = () => {
  return (
    <div className='flex items-center justify-between md:px-20 my-8'>
      <div className='flex items-center gap-4'>
        <img src='./logo.png' width={40} height={40} alt='BitDigest' />
        <a className='font-bold' href='#'>BitDigest</a>
      </div>
      <ul className='hidden md:flex md:pl-10 md:pr-10 lg:ml-40 lg:pl-80 lg:-pr-80 md:gap-4 lg:gap-16'>
        {Array.from(links).map(([k, v]) => <NavLink title={k} link={v} />)}
      </ul>
      <div className='hidden md:flex items-center gap-4'>
        <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg px-2.5 py-1 text-center'>Get started</button>
        <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg px-2.5 py-1 flex justify-between items-center gap-2'>
          <p>Web version</p>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
    </div>
  )
}

export default NavBar
