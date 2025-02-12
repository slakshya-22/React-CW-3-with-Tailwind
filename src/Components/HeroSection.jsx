function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center flex items-center justify-center">
      <div className=" float-left text-center w-[35%] ml-[40px] mr-auto">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Let us find your
        </h1>
        <strong className="block font-extrabold text-rose-700 text-5xl mb-3">
          Forever Food.
        </strong>
        <p className="text-[1.2em]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-[#e01d47] px-[30px] py-[7px] rounded-[5px] text-white text-center hover:bg-[hsl(347,77%,40%)] hover:cursor-pointer mt-[20px] font-semibold">
            Search Now
          </button>
          <button className="bg-white px-[30px] py-[7px] rounded-[5px] text-[#e01d47] text-center hover:bg-[hsl(0,0%,75%)] hover:cursor-pointer mt-[20px] font-semibold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
