import logo from "../../assets/logo-green.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container-links">
        <div className="footer__container-links_logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="footer__container-links_div">
          <h3>Categories</h3>

          <ul>
            <li className="footer-link">
              <a href="/">Business</a>
            </li>
            <li className="footer-link">
              <a href="/">Graphics & Design</a>
            </li>
            <li className="footer-link">
              <a href="/">Lifestyle</a>
            </li>
            <li className="footer-link">
              <a href="/">Marketing</a>
            </li>
            <li className="footer-link">
              <a href="/">Online classes & Teaching</a>
            </li>
            <li className="footer-link">
              <a href="/">Programming & IT</a>
            </li>
            <li className="footer-link">
              <a href="/">Video & Audio</a>
            </li>
            <li className="footer-link">
              <a href="/">Writing & Translation</a>
            </li>
          </ul>
        </div>

        <div className="footer__container-links_div">
          <h3>Authentication</h3>

          <ul>
            <li className="footer-link">
              <a href="/">Login</a>
            </li>
            <li className="footer-link">
              <a href="/">Register</a>
            </li>
            <li className="footer-link">
              <a href="/">Forgot Password</a>
            </li>
          </ul>
        </div>

        <div className="footer__container-links_div">
          <h3>Search</h3>

          <ul>
            <li className="footer-link">
              <a href="/">Search Jobs</a>
            </li>
            <li className="footer-link">
              <a href="/">Search Requests</a>
            </li>
            <li className="footer-link">
              <a href="/">Search Users</a>
            </li>
          </ul>
        </div>

        <div className="footer__container-links_div">
          <h3>Legal</h3>

          <ul>
            <li className="footer-link">
              <a href="/">Terms of Service</a>
            </li>
            <li className="footer-link">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="footer-link">
              <a href="/">How it works?</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
