const CarouselIndicators = ({ props }) => {
  return (
    <ol className="carousel-indicators">
      {props.items.map((item, _index) => {
        return (
          <li className="inline-block mr-3" key={`indicator-${item}`}>
            <label
              htmlFor={`carousel-${item}`}
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700 "
            >
              •
            </label>
          </li>
        );
      })}
    </ol>
  );
};

export default CarouselIndicators;
