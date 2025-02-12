function Header() {
    return (
      <header className="bg-[#111826] w-full h-[68px] flex items-center justify-between px-20 fixed">
        <div>
          <a href="#" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" />
            <span className="text-[2rem] text-white font-bold hover:cursor-pointer ml-[10px]">
              GeekFoods
            </span>
          </a>
        </div>
        <nav>
          <ul className="flex text-white hover:cursor-pointer gap-x-10">
            <li className="font-bold hover:text-blue-700">Home</li>
            <li className="font-bold hover:text-blue-700">Quote</li>
            <li className="font-bold hover:text-blue-700">Restaurants</li>
            <li className="font-bold hover:text-blue-700">Foods</li>
            <li className="font-bold hover:text-blue-700">Contact</li>
          </ul>
        </nav>
        <button className="border-none bg-[#2664eb] text-white font-semibold cursor-pointer px-2.5 py-1.5 rounded-[10px] text-center hover:bg-[#153e97]">
            Get Started
          </button>
      </header>
    );
  }
  
  export default Header;
  