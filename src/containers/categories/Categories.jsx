import {
  business,
  graphicsDesign,
  lifestyle,
  marketing,
  onlineClasses,
  programming,
  video,
  translation,
} from "./import";
import "./categories.css";

function Categories() {
  return (
    <div className="categories__container">
      <h1 className="categories__container-title">Explore Categories</h1>

      <div className="categories__container_icons">
        <div className="categories__container_icons-wrapper">
          <img src={business} alt="" />

          <a href="/business">Business</a>
        </div>
        <div className="categories__container_icons-wrapper">
          <img src={graphicsDesign} alt="" />

          <a href="/graphics-desgin">Graphics & Design</a>
        </div>
        <div className="categories__container_icons-wrapper">
          <img src={lifestyle} alt="" />

          <a href="/lifestyle">Lifestyle</a>
        </div>
        <div className="categories__container_icons-wrapper">
          <img src={marketing} alt="" />

          <a href="/marketing">Marketing</a>
        </div>
        <div className="categories__container_icons-wrapper">
          <img src={onlineClasses} alt="" />

          <a href="/online-class">Online Classes & Teaching</a>
        </div>
        <div className="categories__container_icons-wrapper">
          <img src={programming} alt="" />

          <a href="/programming">Programming & IT</a>
        </div>
        <div className="categories__container_icons-wrapper">
          <img src={video} alt="" />

          <a href="/video-audio">Video & Audio</a>
        </div>
        <div className="categories__container_icons-wrapper">
          <img src={translation} alt="" />

          <a href="/writing-translations">Writing & Translation</a>
        </div>
      </div>
    </div>
  );
}

export default Categories;
