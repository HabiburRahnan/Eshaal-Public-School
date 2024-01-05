
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
        <img
            src="https://i.ibb.co/02X6fVY/admition.jpg"
            className="w-[50%] h-[400px]"
          />
          <img
            src="https://i.ibb.co/YBdcbLx/ima2.jpg"
            className="w-[50%] h-[400px]"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
        <img
            src="https://i.ibb.co/6whZCbL/slider6.jpg"
            className="w-[50%] h-[400px]"
          />
          <img
            src="https://i.ibb.co/hchw0K5/slider7.jpg"
            className="w-[50%] h-[400px]"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
        <img
            src="https://i.ibb.co/8NYT8F5/slider4.jpg"
            className="w-[50%] h-[400px]"
          />
          <img
            src="https://i.ibb.co/Y3V0BL0/slider5.jpg"
            className="w-[50%] h-[400px]"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
        <img
            src="https://i.ibb.co/k8kgFp5/sopot.jpg"
            className="w-full h-[400px]"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
