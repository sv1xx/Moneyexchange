const Arrow = () => {
  return (
    <div className="flex group">
      <span className="text-lg">Hover over me</span>
      <div className="relative">
        <div className="h-0.5 bg-gray-700 transition-all duration-300 ease-in-out w-8 group-hover:w-16"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  );
};

const ArrowComponent = () => {
  return (
    <div className="group p-4">
      <Arrow />
    </div>
  );
};

export default ArrowComponent;
