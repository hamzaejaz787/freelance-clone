import "./cities.css";

const Cities = () => {
  return (
    <div className="cities__container">
      <h1 className="cities__container-title">
        Search for Top Skills in Your <small>City</small>
      </h1>

      <div className="cities__container_wrapper">
        <h4>Cities</h4>

        <ul className="cities__container_wrapper-links">
          <div className="cities__container_wrapper-links-container left">
            <li className="city-links">
              <a href="/gigs">Islamabad, PAK</a>
            </li>
            <li className="city-links">
              <a href="/gigs">New York, USA</a>
            </li>
            <li className="city-links">
              <a href="/gigs">Dubai, UAE</a>
            </li>
            <li className="city-links">
              <a href="/gigs">London, UK</a>
            </li>
          </div>

          <div className="cities__container_wrapper-links-container right">
            <li className="city-links">
              <a href="/gigs">Singapore, SIN</a>
            </li>
            <li className="city-links">
              <a href="/gigs">Tokyo, JPN</a>
            </li>
            <li className="city-links">
              <a href="/gigs">Bengaluru, IND</a>
            </li>
            <li className="city-links">
              <a href="/gigs">Milan, ITL</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Cities;
