/* eslint-disable react/prop-types */
const SectionTitle = ({ subHeading, heading }) => {
    return (
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-lime-600 mb-2">---{subHeading}---</p>
        <p className="text-4xl uppercase py-4">{heading}</p>
      </div>
    );
  };
  
  export default SectionTitle;