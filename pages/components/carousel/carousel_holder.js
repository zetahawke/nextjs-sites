import CarouselIndicators from "./carousel_indicator";
import CarouselItems from "./carousel_item";

const Carousel = ({ props }) => {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold"></h1>
      <div className="carousel relative rounded relative overflow-hidden shadow-xl">
        <div className="carousel-inner relative overflow-hidden w-full">
          <CarouselItems props={{ items: props.items }}></CarouselItems>

          <CarouselIndicators
            props={{ items: props.items }}
          ></CarouselIndicators>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
