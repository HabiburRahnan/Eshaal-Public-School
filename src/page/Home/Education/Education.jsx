import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetch("/education.json")
      .then((res) => res.json())
      .then((data) => setEducations(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="education"
        heading="our education"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 mx-5" >
        {educations?.map((item) => (
          <div key={item.id}>
            <img
              className="h-96 max-w-full rounded-lg w-96"
              src={item?.image}
              alt="education image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
