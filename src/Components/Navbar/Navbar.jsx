import './Navbar.css'
const NavBar = () => {
  return (
    <div className='nav'>
      <div
      className="nav-logo">E-volution</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar