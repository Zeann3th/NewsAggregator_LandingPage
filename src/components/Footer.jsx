const Footer = () => {
  return (
    <div className='bg-primary flex justify-between items-center gap-4 md:px-20'>
      <div>
        <div>
          <form className="py-4">
            <label for="email" className="text-white font-bold">Subscribe to get our latest news</label><br />
            <input type="text" id="email" name="email" placeholder="example@gmail.com" className="min-w-64 px-4 rounded-lg"></input>
            <button className="ml-2 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg px-2.5 text-center">Send</button>
          </form>
        </div>
        <ul className="flex gap-4">
          <li>
            <a href="https://www.facebook.com/longlh0412"><i class="fa-brands fa-facebook" style={{ color: "#63E6BE" }} /></a>
          </li>
          <li>
            <a href="https://github.com/OOPProject20232"><i class="fa-brands fa-github" style={{ color: "#63E6BE" }} /></a>
          </li>
        </ul>
      </div>
      <div></div>
    </div >
  )
}

export default Footer
