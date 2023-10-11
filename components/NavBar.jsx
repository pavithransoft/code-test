"use client";

const NavBar = () => {
  return (
    <div className="sm:grid grid-cols-2 items-center hidden">
      <h1 className="px-20 lg:px-48 font-semibold text-2xl text-white">
        Startup 3
      </h1>
      <ul className="flex gap-2 lg:gap-8 xl:gap-10 text-base lg:text-lg text-white items-center font-medium">
        <li className="hover:text-violet-600 text-violet-600 cursor-pointer">
          Overview
        </li>
        <li className="hover:text-violet-600 cursor-pointer">Prices</li>
        <li className="hover:text-violet-600 cursor-pointer">Blog</li>
        <li className="hover:text-violet-600 cursor-pointer">Feedback</li>
        <li className="px-4 py-1 rounded-full bg-[#E93A7D] hover:bg-pink-500 cursor-pointer">
          Purchase
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
