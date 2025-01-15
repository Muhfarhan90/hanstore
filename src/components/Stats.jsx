/* eslint-disable react/prop-types */
const Stats = ({ icon, title, desc }) => {
  return (
    <div>
      {/* Card 1 */}
      <button className="flex flex-col gap-6 items-center w-[270px] border-2 py-[30px] px-[20px] rounded-md border-black/50 hover:bg-red-500 hover:text-white">
        <div className="p-4 bg-gray-300 rounded-full">
          <div className="p-4 bg-black rounded-full">
            <img src={icon} alt="icon" />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center text-center ">
          <h1 className="text-[32px] font-bold">{title}</h1>
          <p className="text-base font-normal">{desc}</p>
        </div>
      </button>
    </div>
  );
};

export default Stats;
