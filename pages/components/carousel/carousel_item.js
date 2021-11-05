const CarouselItems = ({ props }) => {
  return (
    <div>
      {props.items.map((item, _index) => {
        return (
          <div key={`carouse-item-${item}`}>
            <input
              className="carousel-open invisible"
              type="radio"
              id={`carousel-${item}`}
              name="carousel"
              aria-hidden="true"
              hidden=""
            />
            <div
              className="carousel-item absolute opacity-0"
              style={{
                height: "500px",
                backgroundImage: `url(
                "https://mdbootstrap.com/img/new/slides/054.jpg"
              )`,
              }}
            ></div>
            <label
              htmlFor={`carousel-${item - 1}`}
              className={`control-${item} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto`}
            >
              <i className="fas fa-angle-left mt-3"></i>
            </label>
            <label
              htmlFor={`carousel-${item - 2}`}
              className={`next control-${
                item - 1
              } w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto`}
            >
              <i className="fas fa-angle-right mt-3"></i>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselItems;
