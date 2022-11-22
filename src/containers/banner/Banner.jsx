import person from "../../assets/cta-person.webp";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner__container_wrapper">
        <div className="banner__container_wrapper-text">
          <h1>
            For pre-vetted talent, compliance services and <span>more!</span>
          </h1>
          <a href="/" className="btn">
            Get Started
          </a>
        </div>

        <img src={person} alt="" className="banner__container_wrapper-person" />
      </div>
    </div>
  );
};

export default Banner;
