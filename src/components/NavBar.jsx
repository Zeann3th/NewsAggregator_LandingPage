import NavLink from './nav/NavLink'

const links = new Map([
  ['Home', '#'],
  ['Download', 'https://github.com/OOPProject20232/NewsAggregatorClient'],
  ['APIs', 'https://newsaggregator-mern.onrender.com/api-docs'],
  ['Support', '#']
])

const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-20 my-8'>
      <div className='flex items-center gap-4'>
        <img src='./logo.png' width={40} height={40} alt='BitDigest' />
        <a className='font-bold' href='#'>BitDigest</a>
      </div>
      <ul className='ml-80 -mr-80 flex gap-16'>
        {Array.from(links).map(([k, v]) => <NavLink title={k} link={v} />)}
      </ul>
      <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full px-2.5 py-1 text-center'>Get started</button>
    </div>
  )
}

export default NavBar
