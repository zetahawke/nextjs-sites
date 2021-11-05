import Carousel from "./carousel/carousel_holder";

const MainContainer = () => {
  return (
    <main className="lg:container lg:mx-auto lg:px-120 text-left">
      <h1 className="text-3xl font-bold">
        <a className="text-blue-600" href="https://nextjs.org">
          Next js{" "}
        </a>
        front based site
      </h1>
      <Carousel props={{ items: [1, 2, 3] }}></Carousel>
    </main>
  );
};

export default MainContainer;
