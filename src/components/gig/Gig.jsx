import { useState } from "react";
import { BsFillStarFill, BsHeart, BsHeartFill } from "react-icons/bs";
import "./gig.css";

const Gig = ({
  mainImage,
  userImage,
  userName,
  userStatus,
  userDescription,
  userPrice,
}) => {
  const [toggleIcon, setToggleIcon] = useState(true);

  return (
    <div className="gig__card">
      <div className="gig__card-image">
        <img src={mainImage} alt="" />
      </div>
      <div className="gig__card_user">
        <img src={userImage} alt="" />

        <div className="gig__card_user-info">
          <div className="gig__card_user-info-header">
            <div className="gig__card_user-names">
              <h3>{userName}</h3>
              <h6>{userStatus}</h6>
            </div>

            <div className="gig__card_user-rating">
              <span>
                <BsFillStarFill /> 5.0{" "}
              </span>
              <small>(3)</small>
            </div>
          </div>

          <p>{userDescription}</p>

          <div className="gig__card_user-pricing">
            <div className="gig__card_user-price">
              <small>Starting at</small>
              <h2>{userPrice} $</h2>
            </div>

            <div className="gig__card_user-icon">
              {toggleIcon ? (
                <BsHeart
                  className="icon"
                  onClick={() => setToggleIcon(false)}
                />
              ) : (
                <BsHeartFill
                  className="icon"
                  color="red"
                  onClick={() => setToggleIcon(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
