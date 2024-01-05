import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Management from "./Management/Management";
import Education from "./Education/Education";
import Success from "./Success";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Eshaal Public School</title>
      </Helmet>
      <Banner></Banner>
      <Management></Management>
      <Education></Education>
      <Success></Success>
      <Contact></Contact>
    </div>
  );
};

export default Home;
