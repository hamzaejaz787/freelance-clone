import { Service } from "../../components";

import womanImg from "../../assets/woman1.webp";
import "./buyers.css";

const servicesData = [
  {
    num: 1,
    title: "Find a service that you need",
    text: "Compare prices, portfolios, delivery time, and community recommendations in order to find a seller that best suits your needs. If you have a specific question, simply send them an enquiry.",
  },
  {
    num: 2,
    title: "Supply your brief",
    text: "Be as detailed as possible so the seller can provide you with the quality service that you are expecting. Your payment is held secure until you confirm that the service is performed to your satisfaction.",
  },
  {
    num: 3,
    title: "Manage transaction",
    text: "Exchange files and feedback with the seller via the built-in conversation and transaction management system. The seller will deliver service within a specified time frame.",
  },
  {
    num: 4,
    title: "Approve service delivered",
    text: "Once you are happy with the service performed, you can mark the transaction complete, and we’ll make sure that the seller gets paid. Help the community by leaving a feedback for the seller.",
  },
];

function Buyers() {
  return (
    <div className="buyers__container">
      <div className="buyers__container-image">
        <img src={womanImg} alt="" />
      </div>
      <div className="buyers__container_main">
        <h6 className="buyers__container_main-subtitle">
          How does it work for buyers?
        </h6>
        <h1 className="buyers__container_main-title">
          Are you looking for a job service?
        </h1>

        <div className="buyers__container_main-services-container">
          <div className="buyers__container_main-services">
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

        <div className="buyers_container_main-btn">
          <a href="/buyers" className="btn">
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default Buyers;
