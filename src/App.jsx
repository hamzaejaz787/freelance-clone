import { Navbar } from "./components";
import "./App.css";
import {
  Header,
  Buyers,
  Sellers,
  Services,
  Categories,
  Cities,
  Banner,
  Footer,
} from "./containers";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <Buyers />
        <Sellers />
        <Services />
        <Categories />
        <Banner />
        <Cities />
        <Footer />
      </div>
    </>
  );
}

export default App;
