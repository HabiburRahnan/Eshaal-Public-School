import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Management = () => {
  const [manages, setManages] = useState([]);

  useEffect(() => {
    fetch("/management.json")
      .then((res) => res.json())
      .then((data) => setManages(data));
  }, []);
  //   console.log(manages);
  return (
    <div>
      <SectionTitle
        subHeading="--management--"
        heading="Institute management"
      ></SectionTitle>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-10 mb-10"
        
      >
        {manages?.map((manage) => (
          <div key={manage.id} className="card  glass">
            <figure>
              <img
                src={manage?.image}
                alt="Management!"
                className="h-[300px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-2xl font-bold">{manage?.title}</span>{" "}
                {manage?.name}
              </h2>
              <p>{manage?.statuse}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
