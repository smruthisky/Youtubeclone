import React, { useRef } from 'react';
import Btnlist from './Btnlist';

const Filterbtns = () => {
  const btnListRef = useRef(null);

  const scrollLeft = () => {
    btnListRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    btnListRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="flex pl-4 items-center ">
      <button
        type="button"
        className="bg-gray-50  text-gray-400 rounded-3xl w-11 h-8 border-gray-100 hover:bg-gray-300 hover:text-white"
        onClick={scrollLeft}
      >
        <svg
          className="w-5 ml-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="overflow-x-auto flex w-[1000px] scrollbar-hide mt-4"  ref={btnListRef}>
        <Btnlist name="All" />
        <Btnlist name="Kapil show" />
        <Btnlist name="Sitcom" />
        <Btnlist name="cooking" />
        <Btnlist name="Sitcom" />
        <Btnlist name="travel" />
        <Btnlist name="Sitcom" />
        <Btnlist name="cooking" />
        <Btnlist name="Kapil show" />
        <Btnlist name="vouge " />
        <Btnlist name="Sitcom" />
        <Btnlist name="movies" />
        <Btnlist name="Songs" />
        <Btnlist name="vlog" />
        <Btnlist name="cooking" />
      </div>
      <button
        type="button"
        className="bg-gray-50 text-gray-400 rounded-3xl w-11 h-8 border-gray-100 hover:bg-gray-300 hover:text-white"
        onClick={scrollRight}
      >
        <svg
          className="w-5 ml-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Filterbtns;
