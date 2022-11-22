import { Service } from "../../components";
import "./sellers.css";

const servicesData = [
  {
    num: 1,
    title: "Post your service",
    text: "Compare prices, portfolios, delivery time, and community recommendations in order to find a seller that best suits your needs. If you have a specific question, simply send them an enquiry.",
  },
  {
    num: 2,
    title: "Communicate promptly",
    text: "Be as detailed as possible so the seller can provide you with the quality service that you are expecting. Your payment is held secure until you confirm that the service is performed to your satisfaction.",
  },
  {
    num: 3,
    title: "Communicate promptly",
    text: "Be as detailed as possible so the seller can provide you with the quality service that you are expecting. Your payment is held secure until you confirm that the service is performed to your satisfaction.",
  },
];

const Sellers = () => {
  return (
    <div className="sellers__container">
      <div className="sellers__container_main">
        <h6 className="sellers__container_main-subtitle">
          How does it work for sellers?
        </h6>
        <h1 className="sellers__container_main-title">
          Do you want to turn your knowledge, talent or hobby into income?
        </h1>

        <div className="sellers__container_main-services-container">
          <div className="sellers__container_main-services">
            {servicesData.map((item, index) => (
              <Service
                title={item.title}
                text={item.text}
                num={item.num}
                key={item.title + index}
              />
            ))}
          </div>
        </div>

        <div className="sellers_container_main-btn">
          <a href="/sellers" className="btn">
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
