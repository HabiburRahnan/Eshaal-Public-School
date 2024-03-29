import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const Success = () => {
  const [success, setSuccess] = useState([]);

  useEffect(() => {
    fetch("/success.json")
      .then((res) => res.json())
      .then((data) => setSuccess(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Success | Eshaal Public School</title>
      </Helmet>
      <SectionTitle subHeading='-----' heading='Our successfully Student'></SectionTitle>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5 mx-5" >
        {success?.map((item) => (
          <div key={item.id}>
            <img
              className="h-96 max-w-full rounded-lg w-96 border border-green-600"
              src={item?.image}
              alt="education image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
