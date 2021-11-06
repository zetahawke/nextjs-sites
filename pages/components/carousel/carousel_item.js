const CarouselItems = ({ props }) => {
  return (
    <div>
      {props.items.map((item, _index) => {
        let prevItem, nextItem;
        if (item === props.items[0]) {
          prevItem = props.items[props.items.length - 1];
          nextItem = item + 1;
        } else {
          if (item === props.items[props.items.length - 1]) {
            prevItem = item - 1;
            nextItem = props.items[0];
          } else {
            prevItem = item - 1;
            nextItem = item + 1;
          }
        }
        return (
          <div key={`carouse-item-${item}`}>
            <input
              className="carousel-open invisible"
              type="radio"
              id={`carousel-${item}`}
              name="carousel"
              aria-hidden="true"
              hidden=""
              defaultChecked={item === 1}
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
              htmlFor={`carousel-${prevItem}`}
              className={`control-${item} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto`}
            >
              <i className="fas fa-angle-left mt-3"></i>
            </label>
            <label
              htmlFor={`carousel-${nextItem}`}
              className={`next control-${item} w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto`}
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
