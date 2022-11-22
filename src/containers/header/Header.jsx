import "./header.css";
import headerImg from "../../assets/image122.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header__text">
        <h1 className="header__text-title">
          Join the C Team <span>Community</span>
        </h1>

        <p className="header__text-description">
          Join a network of over 500,000+ professionals that are finding work
          they love and making a great living.
        </p>

        <div className="header__text_search">
          <input
            className="header__text_search-input"
            type="text"
            id="search"
            placeholder="Search for your service"
          />
          <button className="header__text_search-btn">Search</button>
        </div>

        <div className="header__text-portfolio"></div>
      </div>

      <div className="header__img">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
}
export default Header;
