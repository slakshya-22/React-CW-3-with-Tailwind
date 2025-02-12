import houseImg from "../assets/house-img.avif";

function HouseSection() {
  return (
    <section className="flex justify-between items-center my-20 mx-10 bg-[#f2f3f5] p-10 rounded-xl">
      {/* Left Image Section */}
      <div className="w-[50%]">
        <img src={houseImg} alt="House" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Right Text Section */}
      <div className="w-[50%] pl-10">
        <h2 className="text-3xl font-bold mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! 
          Quidem est esse numquam odio deleniti, beatae, magni dolores provident 
          quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
        </p>
        <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
}

export default HouseSection;
