import "./services.css";
import {
  userOne,
  userTwo,
  userThree,
  userFour,
  userFive,
  userSix,
  userSeven,
  userEight,
  audioSetup,
  codeGlasses,
  dogCar,
  girlAutumn,
  nftArt,
  translateDocument,
  webDesign,
  womanPhotographer,
} from "./imports";
import { Gig } from "../../components";

const gigsData = [
  {
    mainImage: audioSetup,
    userImage: userOne,
    userName: "Nico",
    userStatus: "New Arrival",
    userDescription: "I will create a professional logo or drawing",
    userPrice: 249.99,
  },
  {
    mainImage: codeGlasses,
    userImage: userTwo,
    userName: "Susan",
    userStatus: "Master Seller",
    userDescription: "I will create an NFT art collection",
    userPrice: 149.99,
  },
  {
    mainImage: dogCar,
    userImage: userThree,
    userName: "Ruth",
    userStatus: "New Arrival",
    userDescription: "I will create a professional logo or drawing",
    userPrice: 199.99,
  },
  {
    mainImage: girlAutumn,
    userImage: userFour,
    userName: "Sarah",
    userStatus: "Master Seller",
    userDescription: "This is a sample job including most of the features",
    userPrice: 449.99,
  },
  {
    mainImage: nftArt,
    userImage: userFive,
    userName: "Nico",
    userStatus: "Master Seller",
    userDescription: "I will create an NFT art collection",
    userPrice: 249.99,
  },
  {
    mainImage: translateDocument,
    userImage: userEight,
    userName: "Josh",
    userStatus: "Master Seller",
    userDescription: "I can Do it",
    userPrice: 199.99,
  },
  {
    mainImage: womanPhotographer,
    userImage: userSix,
    userName: "adminNada",
    userStatus: "Master Seller",
    userDescription: "I can Do it",
    userPrice: 99.99,
  },
  {
    mainImage: webDesign,
    userImage: userSeven,
    userName: "riadhasan",
    userStatus: "Master Seller",
    userDescription: "I will build your freelance website",
    userPrice: 300.0,
  },
];

function Services() {
  return (
    <div className="services__container">
      <h2 className="services__container-title">Popular Services</h2>

      <div className="services__container_gigs">
        {gigsData.map((item, index) => (
          <Gig
            mainImage={item.mainImage}
            userImage={item.userImage}
            userName={item.userName}
            userStatus={item.userStatus}
            userDescription={item.userDescription}
            userPrice={item.userPrice}
            key={item.title + index}
          />
        ))}
      </div>

      <button className="btn">Load More</button>
    </div>
  );
}

export default Services;
