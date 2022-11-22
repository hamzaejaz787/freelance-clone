import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo-green.png";

const Menu = () => (
  <>
    <ul className="nav-lists">
      <li>
        <a href="/hire">Hire Talent</a>
      </li>
      <li>
        <a href="/find">Find Work</a>
      </li>
      <li>
        <a href="/gig">Explore</a>
      </li>
      <li>
        <a href="/support">Help Center</a>
      </li>
    </ul>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__links">
            <a href="/">
              <img src={logo} alt="" className="logo" />
            </a>

            <Menu />
          </div>

          <div className="navbar__buttons">
            <ul>
              <li>
                <a href="/login">Log In</a>
              </li>
              <li>
                <a href="/signup" className="btn">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar__menu">
          {toggleMenu ? (
            <RiCloseLine
              cursor="pointer"
              color="#1dbf73"
              size={30}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              cursor="pointer"
              color="#1dbf73"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar__menu_container scale-up-center">
              <div className="navbar__menu_container-links">
                <Menu />

                <div className="nav__menu_container-links-sign">
                  <div className="navbar__buttons">
                    <ul>
                      <li>
                        <a href="/login" className="nav__menu-btn">
                          Log In
                        </a>
                      </li>
                      <li>
                        <a href="/signup" className="nav__menu-btn btn">
                          Sign Up
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
