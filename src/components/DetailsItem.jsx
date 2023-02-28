const DetailsItem = ({ title, info, icon }) => {
  return (
    <div className="flex text-white bg-white bg-opacity-10 backdrop-blur-lg shadow-md p-2 rounded">
      <div className="w-3/5 border-r text-center">
        <h2 className="text-gray-700 text-xl font-semibold">{title}</h2>
        <div className="text-2xl xl:text-3xl font-light drop-shadow-md">
          {info}
        </div>
      </div>
      <div className="w-2/5 flex justify-center items-center text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
        {icon}
      </div>
    </div>
  );
};

export default DetailsItem;
