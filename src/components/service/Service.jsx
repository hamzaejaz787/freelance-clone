import "./service.css";

const Service = ({ title, text, num }) => {
  return (
    <div className="service__container">
      <div className="service__container-title">
        <span>{num} </span>
        <h1>{title}</h1>
      </div>

      <div className="service__container-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Service;
