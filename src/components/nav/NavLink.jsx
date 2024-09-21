const NavLink = ({ title, link }) => {
  return (
    <li>
      <a href={link} className="hover:text-gray-200">{title}</a>
    </li>
  )
}

export default NavLink
