import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Management from "./Management/Management";
import Education from "./Education/Education";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Eshaal Public School</title>
      </Helmet>
      <Banner></Banner>
      <Management></Management>
      <Education></Education>
    </div>
  );
};

export default Home;
