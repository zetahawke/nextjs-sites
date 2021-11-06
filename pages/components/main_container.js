import Banner from "./banner";
import Carousel from "./carousel/carousel_holder";
import Filter from "./filter/filter_holder";

const MainContainer = () => {
  return (
    <main className="lg:container lg:mx-auto lg:px-120 text-left">
      <h1 className="text-3xl font-bold"></h1>
      <Banner props={{}}></Banner>
      <h1 className="text-3xl font-bold">
        Busca por la necesidad de su piel:{" "}
      </h1>
      <Filter props={{ items: [1, 2, 3, 4] }}></Filter>
      <Carousel props={{ items: [1, 2, 3] }}></Carousel>
    </main>
  );
};

export default MainContainer;
