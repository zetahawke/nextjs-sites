const Carousel = ({ children }) => {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold"></h1>
      <div className="relative">
        <div className="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">
          Hello
        </div>
        <div className="absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
          There
        </div>
        <div className="absolute inset-0 w-screen h-screen bg-teal-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
          Booya!
        </div>
        <div className="prev-slide fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black">
          &#x276F;
        </div>
        <div className="next-slide fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black">
          &#x276E;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
