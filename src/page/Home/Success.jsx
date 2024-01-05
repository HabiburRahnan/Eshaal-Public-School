import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Success = () => {
  const [success, setSuccess] = useState([]);

  useEffect(() => {
    fetch("/success.json")
      .then((res) => res.json())
      .then((data) => setSuccess(data));
  }, []);
  return (
    <div className="my-10 ">
       <SectionTitle subHeading='-----' heading="Our Success"></SectionTitle>
      <Marquee pauseOnHover={true} speed={20}>
        {success?.map((item) => (
          <div key={item.id}>
            <img
              className="h-96 max-w-full rounded-lg w-96 border border-green-600 gap-10 shadow-xl"
              src={item?.image}
              alt="education image"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Success;
