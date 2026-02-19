import "./Header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar ">
        <div className="logo">ROBERT GARCIA</div>

        <input type="checkbox" id="nav-check"></input>
        <label htmlFor="nav-check" className="nav-btn">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className="nav-links">
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
